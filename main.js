


var CharData =
{
	"Career":"",
	"Homeworld":"",
	"Background":"",
	"Role":"",
	"Birthright":"",
	"BRDetail":"",
	"Lure":"",
	"LureDetail":"",
	"Trial":"",
	"TrialDetail":"",
	"Motivation":"",
	"MotivationDetail":"",
	"Aptitudes":[],
	"Stats":[],
	"Talents":[],
	"Skills":[],
	"Gear":[],
	"Fate":0,
	"HP":0,
	"Implants": [],
	"Mutations": [],
	"Insanity": 0,
	"Corruption": 0,
	"Malignancies" :[]
}
const implants = {
	"bio_arm":
	{
		"Name":"Bionic Arm",
		"Type": "bionic",
		"NameDe": "Bionischer Arm"
	},
	"bio_leg":{
		"Name":"Bionic Leg",
		"Type": "bionic",
		"NameDe": "Bionisches Bein"
	},
	"bio_resp":{
		"Name":"Bionic Respiratory",
		"Type": "bionic",
		"NameDe": "Bionisches Atemsystem"
	},
	"bio_ear":{
		"Name":"Bionic Ears",
		"Type": "bionic",
		"NameDe": "Bionische Ohren"
	},
	"bio_eyes":{
		"Name":"Bionic Eyes",
		"Type": "bionic",
		"NameDe": "Bionische Augen"
	},
	"mech_ut":{
		"Name":"Utility Mechadendrite",
		"Type": "mech",
		"NameDe": "Nutz-Mechadendrit"
	},
	"mech_medi":{
		"Name":"Medicae Mechadendrite",
		"Type": "mech",
		"NameDe": "Medicae-Mechadendrit"
	},
	"mech_manip":{
		"Name":"Manipulator Mechadendrite",
		"Type": "mech",
		"NameDe": "Manipulator-Mechadendrit"
	},
	"mech_optic":{
		"Name":"Optical Mechadendrite",
		"Type": "mech",
		"NameDe": "Optischer Mechadendrit"
	},
	"mech_nozzle":{
		"Name":"Utility Nozzle Mechadendrite",
		"Type": "mech",
		"NameDe": "Nutzdüsen-Mechadendrit"
	},	
	"mech_dat":{
		"Name":"Data-Spike Mechadendrite",
		"Type": "mech",
		"NameDe": "Datenspieß-Mechadendrit"
	},	
	"mech_scanner":{
		"Name":"Scanner Mechadendrite",
		"Type": "mech",
		"NameDe": "Scanner-Mechadendrit"
	}
}

function compressObject(jsonObject) {
    try {
        // Step 1: Convert JSON object to a string
        const jsonString = JSON.stringify(jsonObject);

        // Step 2: Compress using Base64 encoding
        const compressedString = btoa(jsonString);

        return compressedString;
    } catch (error) {
        console.error("Error compressing the object:", error);
        return null;
    }
}

function restoreObject(compressedString) {
    try {
        // Step 1: Decode Base64 string
        const jsonString = atob(compressedString);

        // Step 2: Parse the string back into a JSON object
        const jsonObject = JSON.parse(jsonString);

        return jsonObject;
    } catch (error) {
        console.error("Error restoring the object:", error);
        return null;
    }
}

var charLists = ["WS","BS","S","T","Ag","Int","Per","WP","Fel"]

var characteristicsTexts = 
{
	"InfoText":`<p>You have two options for determining your character's characteristics:</p>
		<ol>
			<li><b>Random Roll:</b> Roll 2d10 for each characteristic.</li>
			<li><b>Point Buy System:</b> Allocate 100 points across all characteristics with a maximum of 15 for each.</li>
		</ol>
		<b>Green Highlight</b>: Your homeworld grants a bonus to this characteristic.
		<ul>
		<li>If rolling, use 3d10 and discard the lowest die.</li>
		<li>If using point buy, characteristics maximum is changed from 15 to 20.</li>
		</ul>
		<p>Red Highlight (Disadvantage): Your homeworld imposes a penalty to this characteristic.</p>
		<ul>
			<li>If rolling, use 3d10 and discard the highest die.</li>
			<li>If using point buy, characteristics maximum is changed from 15 to 10.</li>
		</ul>
		<p><b>Note:</b> If you choose to roll for your characteristics, you may re-roll one characteristic of your choice.</p>`,
	"InfoTextDe":`<p>Du hast zwei Möglichkeiten, die Charakteristika deines Charakters zu bestimmen:</p>
		<ol>
			<li><b>Würfeln:</b> Es wird für jede Charateristik 2W10 gewürfelt und addiert.</li>
			<li><b>Punktesystem:</b> Verteile 100 Punkte auf alle Charakteristika (jeweils max. 15).</li>
		</ol>
		<b>Grüne Markierung</b>: Deine Herkunftswelt gewährt dir einen Bonus auf diese Charakteristik.
		<ul>
		<li>Beim Würfeln werden 3W10 gewürfelt und die besten 2 addiert.</li>
		<li>Beim Punktesystem wird das Charakteristika maximum von 15 auf 20 geändert</li>
		</ul>
		<p><b>Rote Markierung:</b> Deine Herkunftswelt bringt einen Malus auf diese Charakteristik.</p>
		<ul>
			<li>Beim Würfeln werden 3W10 gewürfelt und die schlechtesten 2 addiert.</li>
			<li>Beim Punktesystem wird das Charakteristika maximum von 15 auf 10 geändert.</li>
		</ul>
		<p><b>Note:</b> If you choose to roll for your characteristics, you may re-roll one characteristic of your choice.</p>`,
	"rollBtText":"Roll Characteristics",
	"rollBtTextDe":"Charakteristika Rollen",
	"ptBuyBtText":"Use Point Buy System",
	"ptBuyBtTextDe":"Punkte System verwenden",
}

var aptitudesTexts = 
{
	"InfoText":`<p>Your aptitudes will determine experience costs for skills, characteristics and talents.</br>Aptitudes are given based on your career, homeworld, background, and role.</br>For some aptitudes you will be given a choice of two, please select one.</p>`,
	"InfoTextDe":`<p>Deine Begabungen bestimmen die Erfahrungskosten für Fertigkeiten, Charateristika und Talente.</br>Begabungen werden basierend auf deiner Klasse, der Heimatwelt, dem Hintergrund und der Rolle vergeben.</br>Für einige Begabungen hast du die Wahl zwischen zwei Optionen, bitte wähle eine aus.</p>
`
}

var talentsTexts = 
{
	"InfoText":`<p>Talents are unique abilities that enhance your character’s skills or grant powerful effects.
				They can be purchased later using experience points, with their cost depending on your selected aptitudes.
				Choose wisely to shape your character's strengths and define their path.</p>`,
	"InfoTextDe":`<p>Talente sind einzigartige Fähigkeiten, die die Fertigkeiten deines Charakters verbessern oder mächtige Effekte gewähren.
				Sie können später mit Erfahrungspunkten erworben werden, wobei die Kosten von den gewählten Begabungen abhängen.
				Wähle mit Bedacht, um die Stärken deines Charakters zu formen und seinen Weg zu bestimmen.</p>
`
}

var choices ={
	"Aptitudes":[],
	"Talents":[],
	"Skills":[],
	"Gear":[],
	"Implants": [],
	"Mutations": []
}

var brLure = {
	"stubjack":["crusader","renegade","destiny"],
	"f_survivor":["crusader","renegade","hunter"],
	"service":["hunter","dutybound","destiny"],
	"vaunted":["dutybound","destiny","zealot"],
	"coc":["destiny","zealot","criminal"],
	"unnatural":["zealot","criminal","tainted"],
	"scavenger":["criminal","tainted","newhorizons","cursader","destiny"],
	"savant":["destiny","tainted","newhorizons"],
	"scapegrace":["renegade","hunter","dutybound"]
}

var lureTrials = {
	"crusader":["handofwar","pressganged","vendetta"],
	"renegade":["handofwar","pressganged","calamity"],
	"hunter":["pressganged","calamity","shiplorn"],
	"dutybound":["calamity","shiplorn","vendetta"],
	"destiny":["handofwar","shiplorn","vendetta","darkvoyage","darkness"],
	"zealot":["vendetta","darkvoyage","upbringing"],
	"criminal":["darkvoyage","upbringing","lostworlds"],
	"tainted":["upbringing","lostworlds","darkness"],
	"newhorizons":["vendetta","lostworlds","darkness"]
}

var trialsMotivation = {
	"handofwar":["wrath","vengeance","pride"],
	"pressganged":["wrath","vengeance","renown"],
	"calamity":["vengeance","renown","endurance"],
	"shiplorn":["renown","endurance","pride"],
	"vendetta":["endurance","pride","devotion","knowledge","wrath"],
	"darkvoyage":["pride","devotion","secrets"],
	"upbringing":["devotion","secrets","fortune"],
	"lostworlds":["secrets","fortune","knowledge"],
	"darkness":["pride","fortune","knowledge"],
}

var GearGroups ={
	"utility":{
		"Name": "(Utility)",
        "NameDe": "(Funktionstool)"
	},
	"hailer":{
		"Name": "(Lautsprecher)",
        "NameDe": "()"
	},
	"best":{
		"Name": "(Best Quality)",
        "NameDe": "(Beste Qualität)"
	},
	"compact":{
		"Name": "(Compact Uprade)",
        "NameDe": "(Kompakt Upgrade)"
	}
}

var Mutations = 
{
	"01_hide":
	{
		"MinRoll":1,
		"MaxRoll":6,
		"Name": "Bestial Hide",
		"Effect": "The character's skin becomes toughened with layers of thick scales or chitin, and he gains the Natural Armour (2) trait.",
		"NameDe": "Tierische Haut",
		"EffectDe": "Die Haut des Charakters wird durch dicke Schichten aus Schuppen oder Chitin gehärtet, und er erhält die Eigenschaft Natürliche Rüstung (2)."
	},
	"02_arms":
	{
		"MinRoll":7,
		"MaxRoll":11,
		"Name": "Unnatural Arms",
		"Effect": "Twisted appendages (shrivelled arms, hooked talons, or fleshy tendrils) emerge from this character's spine or torso. He gains the Multiple Arms (CB) trait.",
		"NameDe": "Unnatürliche Arme",
		"EffectDe": "Verdrehte Anhängsel (geschrumpfte Arme, hakenartige Klauen oder fleischige Tentakel) wachsen aus der Wirbelsäule oder dem Torso dieses Charakters. Er erhält die Eigenschaft Mehrere Arme (CB)."
	},
	"03_orbs":
	{
		"MinRoll":12,
		"MaxRoll":17,
		"Name": "Sightless Orbs",
		"Effect": "This character's eyes become sightless, cracked windows into a soul afflicted with a growing corruption. He gains Blind and Unnatural Senses (CBx10) traits.",
		"NameDe": "Sichtlose Kugeln",
		"EffectDe": "Die Augen dieses Charakters werden zu blinden, rissigen Fenstern in eine Seele, die von wachsender Verderbnis gezeichnet ist. Er erhält die Eigenschaften Blind und Unnatürliche Sinne (CB x 10)."
	},
	"04_brute":
	{
		"MinRoll":18,
		"MaxRoll":25,
		"Name": "Swollen Brute",
		"Effect": "This character becomes bloated, his muscles expanding and his form becoming excessively corpulent or disturbingly muscular (or perhaps both). This character's Toughness and Strength characteristics are permanently increased by 10, but his Agility bonus is reduced by 1 for purposes of movement.",
		"NameDe": "Geschwollener Koloss",
		"EffectDe": "Der Charakter wird aufgebläht, seine Muskeln wachsen an und seine Gestalt wird übermäßig massig oder beängstigend muskulös (oder beides). Die Werte für Zähigkeit und Stärke dieses Charakters werden dauerhaft um 10 erhöht, aber sein Beweglichkeitsbonus wird für Bewegungszwecke um 1 reduziert."
	},
	"05_deathsight":
	{
		"MinRoll":16,
		"MaxRoll":30,
		"Name": "Deathsight",
		"Effect": "This character's mind becomes twisted, his eyes showing him countless possible annihilations of anything or anyone he gazes upon for more than a few moments. Once per game session, this character may increase the damage of one attack he has made by his Corruption bonus. If he does so, he gains 1 Corruption point.",
		"NameDe": "Todessicht",
		"EffectDe": "Der Geist dieses Charakters wird verdreht, seine Augen zeigen ihm zahllose mögliche Zerstörungen von allem und jedem, auf den er länger als einen Moment blickt. Einmal pro Spielsitzung kann dieser Charakter den Schaden eines von ihm ausgeführten Angriffs um seinen Verderbnisbonus erhöhen. Tut er dies, erhält er 1 Verderbnispunkt."
	},
	"06_fleshmetal":
	{
		"MinRoll":31,
		"MaxRoll":36,
		"Name": "Cursed Fleshmetal",
		"Effect": "This character's armour and cybernetic implants become fused with his flesh, and even regenerate. Removing any of these items requires a Challenging (+0) Medicae test; if the test fails, he suffers 1d5 Rending damage to a randomly selected limb that ignores Armour. He can make an Ordinary (+10) Toughness test to repair items merged with him, in the same manner as a Tech-Use test to repair the same equipment, but suffers 1 Corruption point.",
		"NameDe": "Verfluchtes Fleischmetall",
		"EffectDe": "Die Rüstung und cybernetischen Implantate dieses Charakters verschmelzen mit seinem Fleisch und regenerieren sich sogar. Das Entfernen dieser Gegenstände erfordert einen Herausfordernden (+0) Medicae-Test; bei einem Fehlschlag erleidet der Charakter 1W5 Schaden an einem zufällig gewählten Gliedmaß, der Rüstung ignoriert. Er kann einen Gewöhnlichen (+10) Zähigkeitstest durchführen, um Gegenstände, die mit ihm verschmolzen sind, in der gleichen Weise zu reparieren wie ein Tech-Test, jedoch erleidet er dabei 1 Verderbnispunkt."
	},
	"07_fangs":
	{
		"MinRoll":37,
		"MaxRoll":43,
		"Name": "Razor Fangs",
		"Effect": "This character's teeth grow long, turning into tearing fangs. This character gains an unarmed attack that inflicts 1d5+CB Rending damage, pen 2. He permanently reduces his Fellowship characteristic by 1d5.",
		"NameDe": "Reißzähne",
		"EffectDe": "Die Zähne des Charakters wachsen und verwandeln sich in reißende Fänge. Der Charakter erhält einen unbewaffneten Angriff, der 1W5+CB Riss-Schaden mit Durchschlag 2 verursacht. Seine Charisma-Eigenschaft wird dauerhaft um 1W5 reduziert."
	},
	"08_legs":
	{
		"MinRoll":44,
		"MaxRoll":49,
		"Name": "Excessive Legs",
		"Effect": "This character develops extra legs that support his form, suspending his upper torso above a centauroid lower body. This character gains the Quadruped trait with a number of extra legs equal half to his Corruption bonus (rounded up).",
		"NameDe": "Überzählige Beine",
		"EffectDe": "Dieser Charakter entwickelt zusätzliche Beine, die seine Gestalt stützen und seinen Oberkörper über einem centaurartigen Unterkörper tragen. Er erhält die Eigenschaft Vierbeinig mit einer Anzahl zusätzlicher Beine, die der Hälfte seines Verderbnisbonus (aufgerundet) entspricht."
	},
	"09_wings":
	{
		"MinRoll":50,
		"MaxRoll":54,
		"Name": "Wings",
		"Effect": "Massive feathered or leathery wings erupt from this character's spine, and he gains the Flyer (CBx2) trait.",
		"NameDe": "Flügel",
		"EffectDe": "Massive gefiederte oder ledrige Flügel brechen aus der Wirbelsäule des Charakters hervor. Er erhält die Eigenschaft Flieger (CB x 2)."
	},
	"10_tail":
	{
		"MinRoll":55,
		"MaxRoll":60,
		"Name": "Serpentine Tail",
		"Effect": "This character's legs wither while his spine elongates into a serpentine tail that supports his body. He gains the Crawler trait and gains an unarmed attack that can strike for 1d10 Impact damage, Pen 0.",
		"NameDe": "Schlangenartiger Schwanz",
		"EffectDe": "Die Beine dieses Charakters verkümmern, während sich seine Wirbelsäule zu einem schlangenartigen Schwanz verlängert, der seinen Körper stützt. Er erhält die Eigenschaft Kriecher und einen unbewaffneten Angriff, der 1W10 Wucht-Schaden mit Durchschlag 0 verursacht."
	},
	"11_blood":
	{
		"MinRoll":61,
		"MaxRoll":69,
		"Name": "Searing Blood",
		"Effect": "This character's veins are filled with searing acids in place of blood, though somehow the corrosive effects do not burn his own flesh. Whenever he suffers Blood Loss, the foul liquid erupts and inflicts 1d5+CB Energy damage, Pen 0, to each other character within 1d5 metres.",
		"NameDe": "Ätzendes Blut",
		"EffectDe": "Die Adern dieses Charakters sind mit ätzenden Säuren gefüllt, die sein eigenes Fleisch jedoch nicht verbrennen. Wann immer er Blutverlust erleidet, spritzt die giftige Flüssigkeit heraus und verursacht 1W5+CB Energieschaden mit Durchschlag 0 an jedem anderen Charakter innerhalb von 1W5 Metern."
	},
	"12_curse":
	{
		"MinRoll":70,
		"MaxRoll":77,
		"Name": "Witch-Curse",
		"Effect": "A small stigma in the shape of a maddening rune appears on this character's body, marking him as touched by Chaos. He gains the Psyker trait (or adds 1 to an existing psy rating) and freely learns any 1 psychic power that costs 100 xp or less. Whenever he attempts to use this power, he gains 1d5 Corruption points.",
		"NameDe": "Hexenfluch",
		"EffectDe": "Ein kleines Mal in Form einer wahnsinnigen Rune erscheint auf dem Körper dieses Charakters, was ihn als vom Chaos berührt kennzeichnet. Er erhält die Eigenschaft Psioniker (oder erhöht einen bestehenden Psi-Wert um 1) und erlernt frei eine beliebige psychische Kraft, die 100 XP oder weniger kostet. Jedes Mal, wenn er versucht, diese Kraft zu nutzen, erhält er 1W5 Verderbnispunkte."
	},
	"13_bblade":
	{
		"MinRoll":78,
		"MaxRoll":84,
		"Name": "Bone-Blades",
		"Effect": "This character's bones grow long, twisted spurs that sprout painfully from his flesh on his command. This character gains an unarmed attack that inflicts 1d10+CB Rending damage, Pen 0. Whenever he makes an attack with this weapon, this character suffers Blood Loss unless he passes a Challenging (+0) Toughness test.",
		"NameDe": "Knochenklingen",
		"EffectDe": "Die Knochen dieses Charakters wachsen zu langen, verdrehten Sporen, die schmerzhaft aus seinem Fleisch sprießen, wenn er es befiehlt. Der Charakter erhält einen unbewaffneten Angriff, der 1W10+CB Riss-Schaden mit Durchschlag 0 verursacht. Wann immer er mit dieser Waffe angreift, erleidet er Blutverlust, es sei denn, er besteht einen Herausfordernden (+0) Zähigkeitstest."
	},
	"14_cannibal":
	{
		"MinRoll":85,
		"MaxRoll":89,
		"Name": "Cannibalistic Urge",
		"Effect": "Blood and marrow become as wine and bread to this character, and normal food no longer sates the hunger of his soul. Once per game session, he can remove 1d5 damage by consuming human flesh. Each time he does so, he gains 1 Corruption point.",
		"NameDe": "Kannibalistischer Drang",
		"EffectDe": "Blut und Knochenmark werden diesem Charakter zu Wein und Brot, und normales Essen stillt den Hunger seiner Seele nicht mehr. Einmal pro Spielsitzung kann er durch den Verzehr von menschlichem Fleisch 1W5 Schaden entfernen. Jedes Mal, wenn er dies tut, erhält er 1 Verderbnispunkt."
	},
	"15_corrupted":
	{
		"MinRoll":90,
		"MaxRoll":92,
		"Name": "Corrupted Flesh",
		"Effect": "Instead of blood, when this character's flesh is torn asunder, horrific insects, worms, or flitting creatures spill forth. Whenever he suffers damage, this character gains the Fear (1) trait for 1d5 rounds.",
		"NameDe": "Verdorbenes Fleisch",
		"EffectDe": "Statt Blut fließen bei Verletzungen dieses Charakters abscheuliche Insekten, Würmer oder flatternde Kreaturen aus seinem Körper. Wann immer er Schaden erleidet, erhält er für 1W5 Runden die Eigenschaft Furcht (1)."
	},
	"16_notdie":
	{
		"MinRoll":93,
		"MaxRoll":94,
		"Name": "It Will Not Die!",
		"Effect": "This character is touched by the power of the Warp, and fortune twists to keep him alive regardless of the terrible wounds he suffers, as if it is the will of some dark being that resides beyond the veil of reality. He can no longer burn a Fate point to survive lethal injuries. Whenever this character would die, he instead survives by the narrowest margin as if he had burned a Fate point and gains 1d10+5 Corruption points.",
		"NameDe": "Es wird nicht sterben!",
		"EffectDe": "Dieser Charakter ist vom Warp berührt, und das Schicksal wendet sich so, dass er selbst die schlimmsten Wunden überlebt, als ob ein dunkles Wesen jenseits des Schleiers der Realität seinen Fortbestand will. Er kann keine Schicksalspunkte mehr verbrennen, um tödlichen Verletzungen zu entkommen. Wann immer er sterben würde, überlebt er stattdessen knapp, als hätte er einen Schicksalspunkt verbrannt, und erhält 1W10+5 Verderbnispunkte."
	},
	"17_gaze":
	{
		"MinRoll":95,
		"MaxRoll":97,
		"Name": "Warp Gaze",
		"Effect": "Whatever this character looks upon burns with the fire of the Warp, and all who see his eyes despair. This character gainsa 20m ranged attack that strikes with 1d10+CB Energy damage and the Spray quality. Each time he uses this attack, he gains 1d5 Corruption points. Characters struck with this attack must make a Challenging (+0) Fear(1) test.",
		"NameDe": "Warpblick",
		"EffectDe": "Alles, worauf dieser Charakter blickt, verbrennt im Feuer des Warp, und alle, die seine Augen sehen, verzweifeln. Der Charakter erhält einen Fernkampfangriff mit 20m Reichweite, der 1W10+CB Energieschaden verursacht und die Eigenschaft Spray besitzt. Jedes Mal, wenn er diesen Angriff einsetzt, erhält er 1W5 Verderbnispunkte. Charaktere, die von diesem Angriff getroffen werden, müssen einen Herausfordernden (+0) Furcht(1)-Test bestehen."
	},
	"18_regen":
	{
		"MinRoll":98,
		"MaxRoll":99,
		"Name": "Warp Regeneration",
		"Effect": "Corruption seethes through this character's flesh, sewing his body back together time and time again whether he wills it or not. Whenever this character suffers damage, he makes a Challenging (+0) Toughness test. If he succeeds, he gains the Regeneration (CB) trait for 1 round and gains 1d5 Corruption points.",
		"NameDe": "Warp-Regeneration",
		"EffectDe": "Verderbnis durchdringt das Fleisch dieses Charakters und fügt seinen Körper immer wieder zusammen, ob er es will oder nicht. Wann immer dieser Charakter Schaden erleidet, führt er einen Herausfordernden (+0) Zähigkeitstest durch. Wenn er besteht, erhält er für 1 Runde die Eigenschaft Regeneration (CB) und 1W5 Verderbnispunkte."
	},
	"19_warp":
	{
		"MinRoll":100,
		"MaxRoll":100,
		"Name": "The Warp Made Manifest",
		"Effect": "This character becomes a Daemon-like creature, capable of reshaping reality itself at his whim. He gains the Daemonic (CB), Fear (2), From Beyond, and Warp Instability traits. He can also use his Willpower characteristic in place of any other characteristic for any test he is called upon to take.",
		"NameDe": "Der Warp wird manifest",
		"EffectDe": "Dieser Charakter wird zu einer dämonenähnlichen Kreatur, die in der Lage ist, die Realität nach Belieben zu formen. Er erhält die Eigenschaften Dämonisch (CB), Furcht (2), Von Jenseits und Warp-Instabilität. Außerdem kann er seine Willenskraft-Eigenschaft anstelle jeder anderen Eigenschaft für beliebige Tests einsetzen."
	}
}

var naviMutations = 
{
	"01_limbs":
	{
		"MinRoll":1,
		"MaxRoll":15,
		"Name": "Strangely Jointed Limbs",
		"Effect": "Your limbs have extra joints that articulate differently to a normal human. You gain the Acrobatics Skill as a trained. If you already possess the		Acrobatics Skill, you gain an additional rank in it instead.",
		"NameDe": "",
		"EffectDe": "",
		"Skills":[["acrobatics",""]]
		
	},
	"02_elongated":
	{
		"MinRoll":16,
		"MaxRoll":30,
		"Name": "Elongated Form",
		"Effect": "You are extremely tall and painfully thin, and lose -1d5 Toughness permanently. Re-roll this mutation if you already have the Bloated Form mutation.",
		"NameDe": "",
		"EffectDe": "",
		"Stats" : [["T","-1d5"]],
		"RerollIfOther": ["06_bloat"]
		
	},
	"03_pale":
	{
		"MinRoll":31,
		"MaxRoll":45,
		"Name": "Pale and Hairless Flesh",
		"Effect": "Your skin is pale, marbled with veins and completely without hair.",
		"NameDe": "",
		"EffectDe": ""
		
	},
	"04_eyes":
	{
		"MinRoll":46,
		"MaxRoll":55,
		"Name": "Eyes as Dark as the Void",
		"Effect": "Your eyes are completely black and without iris; you gain the Dark Sight Trait.",
		"NameDe": "",
		"EffectDe": "",
		"Traits" : ["darksight"]
		
	},
	"05_withered":
	{
		"MinRoll":56,
		"MaxRoll":60,
		"Name": "Withered Form",
		"Effect": "Your body is withered, your flesh hanging loosely from your bones. You reduce your Strength Characteristic by 10 permanently and halve your movement rates (to a minimum of 1). Re-roll this mutation if you already have the Bloated Form mutation.",
		"NameDe": "",
		"EffectDe": "",
		"Stats" : [["T","-10"]],
		"MovementIsHalfed" : 1,
		"RerollIfOther": ["06_bloat"]
		
	},
	"06_bloat":
	{
		"MinRoll":61,
		"MaxRoll":65,
		"Name": "Bloated Form",
		"Effect": "Your body is grossly bloated and your limbs thick with flesh. You gain 5 wounds and the Sturdy trait but may no longer run. Re-roll this mutation if you already have the Elongated Form or Withered Form mutations.",
		"NameDe": "",
		"EffectDe": "",
		"Wounds": "+5",
		"RerollIfOther": ["05_withered","02_elongated"]
		
	},
	"07_memb":
	{
		"MinRoll":66,
		"MaxRoll":70,
		"Name": "Membranous Growth",
		"Effect": "You have membranes of skin between your limbs and digits and your skin sags in folds from your flesh; you suffer -5 Fellowship permanently",
		"NameDe": "",
		"EffectDe": "",
		"Stats" : [["Fel","-5"]]
		
	},
	"09_inhuman":
	{
		"MinRoll":71,
		"MaxRoll":75,
		"Name": "Inhuman Visage",
		"Effect": "Your face is devoid of human features, your nose is nothing but a pair of slits, your ears are small holes, your eyes are unblinking. You gain the Fear (1) Trait.",
		"NameDe": "",
		"EffectDe": "",
		"Traits": ["fear"]
		
	},
	"10_talons":
	{
		"MinRoll":76,
		"MaxRoll":80,
		"Name": "Fingers like Talons",
		"Effect": "The bones of your fingers have grown and hardened into talons. You gain the Natural Weapons Trait.",
		"NameDe": "",
		"EffectDe": "",
		"Traits": ["nat_weapon"]
		
	},
	"11_teeth":
	{
		"MinRoll":81,
		"MaxRoll":85,
		"Name": "Teeth as Sharp as Needles",
		"Effect": "Your mouth is filled with hundreds of fine, pointed teeth. You gain the Natural Weapons Trait and suffer -1d5 Fellowship.",
		"NameDe": "",
		"EffectDe": "",
		"Traits": ["nat_weapon"],
		"Stats" : [["Fel","-1d5"]]
		
	},
	"12_disturbing":
	{
		"MinRoll":86,
		"MaxRoll":90,
		"Name": "Disturbing Grace",
		"Effect": "You move with a fluid, sinuous grace that is somewhat unpleasant and unnatural in its quality. You gain the Unnatural Agility (2) Trait.",
		"NameDe": "",
		"EffectDe": "",
		"Traits": ["agility"]
		
	},
	"13_vitality":
	{
		"MinRoll":91,
		"MaxRoll":95,
		"Name": "Strange Vitality",
		"Effect": "You possess a vitality and resilience that is at odds with your physical form; wounds bleed translucent fluid and close quickly, bones knit together after being horrifically broken. You gain the Regeneration (1) Trait.",
		"NameDe": "",
		"EffectDe": "",
		"Traits": ["regeneration"]
	},
	"14_unnat":
	{
		"MinRoll":96,
		"MaxRoll":100,
		"Name": "Unnatural Presence",
		"Effect": "In your presence living things feel strange unpleasant sensations, a cloying touch to their skin, a keening whine in their ears and a metallic tang in their mouth. All your tests that involve positive social interaction are at –10, whilst all those that involve intimidation or inducing fear are at +10.",
		"NameDe": "",
		"EffectDe": "",
		"EffectIsAbilty": 1
		
	}
}


var Gear ={
    "a_b_bglove": {
        "Name": "Armoured Bodyglove",
        "NameDe": "Gepanzerter Ganzkörperanzug"
    },
    "a_b_h_leather": {
        "Name": "Heavy Leathers",
        "NameDe": "Schweres Leder"
    },
    "a_b_imperial": {
        "Name": "Imperial Robes",
        "NameDe": "Imperiale Roben"
    },
    "a_car_chest": {
        "Name": "Carapace Chestplate",
        "NameDe": "Karabiner-Brustplatte"
    },
    "a_car_hrlm_chest": {
        "Name": "Heirloom Carapace Chestplate",
        "NameDe": "Erbstück-Karabiner-Brustplatte"
    },
    "a_car_li_enf": {
        "Name": "Enforcer Light Carapace",
        "NameDe": "Leichte Karabinerrüstung der Vollstrecker"
    },
    "a_car_tempest": {
        "Name": "Militarum Tempestus Carapace",
        "NameDe": "Karabinerrüstung des Militarum Tempestus"
    },
    "a_flak_cloak": {
        "Name": "Flak Cloak",
        "NameDe": "Splittermantel"
    },
    "a_flak_coat": {
        "Name": "Flak Coat",
        "NameDe": "Splittermantel"
    },
    "a_flak_guard": {
        "Name": "Imperial Guard Flak Armour",
        "NameDe": "Splitterrüstung der Imperialen Armee"
    },
    "a_flak_vest": {
        "Name": "Flak Vest",
        "NameDe": "Splitterweste"
    },
    "a_mesh_cloak": {
        "Name": "Mesh Cloak",
        "NameDe": "Gewebeumhang"
    },
    "cons_ama": {
        "Name": "Amasec",
        "NameDe": "Amasec"
    },
    "cons_lho": {
        "Name": "Lho-Sticks",
        "NameDe": "Lho-Stäbchen"
    },
    "cons_obscura": {
        "Name": "Obscura",
        "NameDe": "Obscura"
    },
    "cons_sacred": {
        "Name": "Sacred Unguents",
        "NameDe": "Heilige Salben"
    },
    "cons_slaught": {
        "Name": "Slaught",
        "NameDe": "Slaught"
    },
    "cons_stimm": {
        "Name": "Stimm",
        "NameDe": "Stimm"
    },
    "cons_tranq": {
        "Name": "Tranq",
        "NameDe": "Beruhigungsmittel"
    },
    "f_hand": {
        "Name": "Hand Flamer",
        "NameDe": "Handflammenwerfer"
    },
    "gr_aqpend": {
        "Name": "Aquila Pendant",
        "NameDe": "Aquila-Anhänger"
    },
    "gr_fil_plug": {
        "Name": "Filtration Plugs",
        "NameDe": "Filterstopfen"
    },
    "gr_rebbreath": {
        "Name": "Rebreather",
        "NameDe": "Atemwiederaufbereiter"
    },
    "gr_voidsuit": {
        "Name": "Synskin",
        "NameDe": "Synhaut"
    },
    "gr_web": {
        "Name": "Web Grenade",
        "NameDe": "Netzgranate"
    },
    "las_hrlm_pistol": {
        "Name": "Heirloom Laspistol",
        "NameDe": "Erbstück-Laserpistole"
    },
    "las_hs_gun": {
        "Name": "Hot-shot Lasgun",
        "NameDe": "Hochenergie-Lasergewehr"
    },
    "las_hs_pistol": {
        "Name": "Hot-shot Laspistol",
        "NameDe": "Hochenergie-Laserpistole"
    },
    "las_lock": {
        "Name": "Laslock",
        "NameDe": "Laslock "
    },
    "las_normal": {
        "Name": "Lasgun",
        "NameDe": "Lasergewehr"
    },
    "las_pistol": {
        "Name": "Laspistol",
        "NameDe": "Laserpistole"
    },
    "m_ch_blade": {
        "Name": "Chainblade",
        "NameDe": "Klingenkettenwaffe"
    },
    "m_ch_hrlm_swrd": {
        "Name": "Heirloom Chainsword",
        "NameDe": "Erbstück-Kettenschwert"
    },
    "m_ch_swrd": {
        "Name": "Chainsword",
        "NameDe": "Kettenschwert"
    },
    "m_pr_cstaff": {
        "Name": "Ceremonial Staff",
        "NameDe": "Zeremonieller Stab"
    },
    "m_pr_csword": {
        "Name": "Ceremonial Sword",
        "NameDe": "Zeremonielles Schwert"
    },
    "m_pr_improv": {
        "Name": "Improvised",
        "NameDe": "Improvisierte Waffe"
    },
    "m_pr_knife": {
        "Name": "Knife",
        "NameDe": ""
    },
    "m_pr_staff": {
        "Name": "Staff",
        "NameDe": "Messer"
    },
    "m_pr_sword": {
        "Name": "Sword",
        "NameDe": "Schwert"
    },
    "m_pr_warhammer": {
        "Name": "Warhammer",
        "NameDe": "Kriegshammer"
    },
    "m_pr_whip": {
        "Name": "Whip",
        "NameDe": "Peitsche"
    },
    "m_sh_maul": {
        "Name": "Shock Maul",
        "NameDe": "Elektroschlagstock"
    },
    "m_sh_whip": {
        "Name": "Shock Whip",
        "NameDe": "Elektropeitsche"
    },
    "sp_auto_gun": {
        "Name": "Autogun",
        "NameDe": "Autogewehr"
    },
    "sp_auto_pstl": {
        "Name": "Autopistol",
        "NameDe": "Autopistole"
    },
    "sp_c_shotgun": {
        "Name": "Shotgun (Combat)",
        "NameDe": "Kampfschrotflinte"
    },
    "sp_h_can": {
        "Name": "Hand Cannon",
        "NameDe": "Handkanone"
    },
    "sp_shotgun": {
        "Name": "Shotgun",
        "NameDe": "Schrotflinte"
    },
    "sp_stub_auto": {
        "Name": "Stub Automatic",
        "NameDe": "Maschinenkarabiner (Automatik)"
    },
    "sp_stub_revo": {
        "Name": "Stub Revolver",
        "NameDe": "Maschinenkarabiner-Revolver"
    },
    "tl_advmedkit": {
        "Name": "Advanced Medi-kit",
        "NameDe": "Fortgeschrittenes Medikit"
    },
    "tl_auspex": {
        "Name": "Auspex",
        "NameDe": "Auspex"
    },
    "tl_bead": {
        "Name": "Micro-bead",
        "NameDe": "Micro-bead"
    },
    "tl_cuff": {
        "Name": "Manacles",
        "NameDe": "Handschellen"
    },
    "tl_combi": {
        "Name": "Combi-tool",
        "NameDe": "Kombinationswerkzeug"
    },
    "tl_disguise": {
        "Name": "Disguise Kit",
        "NameDe": "Verkleidungsset"
    },
    "tl_excruc": {
        "Name": "Excruciator Kit",
        "NameDe": "Folterwerkzeug-Set"
    },
    "tl_focus": {
        "Name": "Psy Focus",
        "NameDe": "Psi-Fokus"
    },
    "tl_grap": {
        "Name": "Grapnel and Line",
        "NameDe": "Enterhaken mit Seil"
    },
    "tl_harness": {
        "Name": "Clip/Drop Harness",
        "NameDe": "Sicherungsgurt/Abseilgeschirr"
    },
    "tl_inject": {
        "Name": "Injector",
        "NameDe": "Inhalator/Injektor"
    },
    "tl_medkit": {
        "Name": "Medi-kit",
        "NameDe": "Medikit"
    },
    "tl_quill": {
        "Name": "Auto Quill",
        "NameDe": "Automatischer Schreibfederhalter"
    },
    "tl_servoskull": {
        "Name": "Servoskull",
        "NameDe": "Servoschädel"
    }
}


var Apts =
{
	"WS": {
		"Label":"Weapon Skill",
		"LabelDe":"Nahkampf Fähigkeit"
	},
	"BS": {
		"Label":"Ballistic Skill",
		"LabelDe":"Ballistische Fähigkeit"
	},
	"S": {
		"Label":"Strength",
		"LabelDe":"Stärke"
	},
	"T": {
		"Label":"Toughness",
		"LabelDe":"Aushaltevermögen"
	},
	"Ag": {
		"Label":"Agility",
		"LabelDe":"Agilität"
	},
	"Int": {
		"Label":"Intelligence",
		"LabelDe":"Intelligenz"
	},
	"Per": {
		"Label":"Perception",
		"LabelDe":"Wahrnehmung"
	},
	"WP": {
		"Label":"Willpower",
		"LabelDe":"Willenskraft"
	},
	"Fel": {
		"Label":"Fellowship",
		"LabelDe":"Charisma"
	},
	"Offence": {
		"Label":"Offence",
		"LabelDe":"Offensive"
	},
	"Finesse": {
		"Label":"Finesse",
		"LabelDe":"Finesse"
	},
	"Defense": {
		"Label":"Defense",
		"LabelDe":"Verteidigung"
	},
	"Knowledge": {
		"Label":"Knowledge",
		"LabelDe":"Wissen"
	},
	"Fieldcraft": {
		"Label":"Fieldcraft",
		"LabelDe":"Feldkunde"
	},
	"Psyker": {
		"Label":"Psyker",
		"LabelDe":"Psyker"
	},
	"Social": {
		"Label":"Social",
		"LabelDe":"Sozial"
	},
	"Leadership": {
		"Label":"Leadership",
		"LabelDe":"Führung"
	},
	"Tech": {
		"Label":"Tech",
		"LabelDe":"Technologie"
	},
	"PsykerNAV": {
		"Label":"Navigator",
		"LabelDe":"Navigator"
	},
	"Faith": {
		"Label":"Faith",
		"LabelDe":"Glaube"
	}
	
	
}

var homeworlds = {
    "agri": {
        "Apt": "S",
        "Bonus": "",
        "Desc": "Feral worlds are planets where the dominant culture is trapped in a primitive state, often much lower technologically than that of other Imperial worlds. This makes feral worlders hardy, strong, tough, and able to survive in the worst of conditions.",
        "Desc_De": "Agrarwelten sind Planeten, die der großflächigen Nahrungsmittelproduktion dienen und unzählige imperiale Welten mit lebenswichtigen Vorräten versorgen. Die Bevölkerung besteht meist aus fleißigen Bauern, die durch Tradition gebunden sind und ein einfaches Leben führen, das sich auf das Pflanzen und Ernten konzentriert, um die Anforderungen des Imperiums zu erfüllen.",
        "Fate": [
            "2",
            "7"
        ],
        "ID": "1",
        "image": "agri.png",
        "Name": "Agri-World",
        "Name_De": "Agrarwelt",
        "NegChars": "Ag",
        "PosChars": [
            "Fel",
            "S"
        ],
        "Wounds": "8+1d5"
    },
    "cardinal": {
        "Apt": "WP",
        "Bonus": "",
        "Desc": "Cardinal worlds are sacred planets ruled by the Ecclesiarchy, serving as religious centers of faith and administration for the Imperial Cult. They are home to grand cathedrals, vast monasteries, and countless clergy. Pilgrims from across the galaxy flock to these worlds seeking spiritual guidance and divine blessings.",
        "Desc_De": "Kardinalswelten sind heilige Planeten, die von der Ekklesiarchie regiert werden und als religiöse Zentren des Glaubens und der Verwaltung für den imperialen Kult dienen. Sie beherbergen prächtige Kathedralen, riesige Klöster und unzählige Geistliche. Pilger aus der gesamten Galaxis strömen zu diesen Welten, um spirituelle Führung und göttlichen Segen zu suchen.",
        "Fate": [
            "3",
            "6"
        ],
        "ID": "24",
        "image": "cardinal.png",
        "Name": "Cardinal World",
        "Name_De": "Kardinalswelt",
        "NegChars": "Per",
        "PosChars": [
            "Fel",
            "WP"
        ],
        "Wounds": "7+1d5"
    },
    "cemetery": {
        "Apt": "WP",
        "Bonus": "",
        "Desc": "Cemetery worlds are planets dedicated entirely to the burial of the dead, often those who have served the Imperium with honor. Vast necropolises, mausoleums, and endless graveyards cover the surface. These worlds are sacred sites, guarded and maintained by the Ecclesiarchy and protected from desecration by Imperial forces.",
        "Desc_De": "Friedhofswelten sind Planeten, die vollständig der Bestattung der Toten gewidmet sind, oft jener, die dem Imperium ehrenvoll gedient haben. Die Oberfläche ist von riesigen Nekropolen, Mausoleen und endlosen Friedhöfen bedeckt. Diese Welten sind heilige Stätten, die von der Ekklesiarchie verwaltet und von imperialen Streitkräften vor Entweihung geschützt werden.",
        "Fate": [
            "3",
            "6"
        ],
        "ID": "25",
        "image": "cemetery.png",
        "Name": "Cemetery World",
        "Name_De": "Friedhofswelt",
        "NegChars": "Per",
        "PosChars": [
            "Fel",
            "WP"
        ],
        "Wounds": "7+1d5"
    },
    "daemon": {
        "Apt": "WP",
        "Bonus": "",
        "Desc": "Daemon worlds are planets consumed by the warp, twisted into nightmarish realms ruled by powerful Chaos entities. The laws of reality are warped, and time, space, and nature follow the will of the dark gods. Life here is a constant struggle for survival amid hellish landscapes and infernal horrors.",
        "Desc_De": "Dämonenwelten sind von den Mächten des Warp verschlungene Planeten, die zu albtraumhaften Reichen werden, die von mächtigen Chaoswesen beherrscht werden. Die Gesetze der Realität sind verzerrt, und Zeit, Raum und Natur folgen dem Willen der dunklen Götter. Das Leben hier ist ein ständiger Kampf ums Überleben in höllischen Landschaften und vor infernalischen Schrecken.",
        "Fate": [
            "3",
            "4"
        ],
        "ID": "2",
        "image": "daemon.png",
        "Name": "Daemon World",
        "Name_De": "Dämonenwelt",
        "NegChars": "Fel",
        "PosChars": [
            "WP",
            "Per"
        ],
        "Wounds": "7+1d5"
    },
    "death": {
        "Apt": "Fieldcraft",
        "Bonus": "",
        "Desc": "Death worlds are planets where the environment is so hostile that survival is nearly impossible. These worlds are plagued by deadly predators, toxic atmospheres, or violent natural phenomena. Only the toughest and most resilient individuals can endure life on such unforgiving worlds.",
        "Desc_De": "Todeswelten sind Planeten, deren Umwelt so feindselig ist, dass das Überleben nahezu unmöglich wird. Diese Welten sind von tödlichen Raubtieren, giftigen Atmosphären oder gewaltigen Naturphänomenen geplagt. Nur die härtesten und widerstandsfähigsten Individuen können auf solchen erbarmungslosen Welten bestehen.",
        "Fate": [
            "2",
            "5"
        ],
        "ID": "3",
        "image": "death.png",
        "Name": "Death World",
        "Name_De": "Todeswelt",
        "NegChars": "Fel",
        "PosChars": [
            "Ag",
            "Per"
        ],
        "Wounds": "9+1d5"
    },
    "explorator_fleet": {
        "Apt": "Int",
        "Bonus": "",
        "Desc": "Explorator fleets are vast armadas of starships commanded by the Adeptus Mechanicus, tasked with seeking out lost technology, forgotten worlds, and ancient relics of the Imperium. They venture into unknown and hostile regions of the galaxy, guided by a mix of scientific curiosity, religious zeal, and the relentless pursuit of technological knowledge.",
        "Desc_De": "Exploratorflotten sind gewaltige Raumflotten unter dem Kommando des Adeptus Mechanicus. Ihre Aufgabe ist es, verlorene Technologien, vergessene Welten und antike Relikte des Imperiums aufzuspüren. Sie erkunden unbekannte und feindliche Regionen der Galaxis, angetrieben von einer Mischung aus wissenschaftlicher Neugier, religiösem Eifer und dem unermüdlichen Streben nach technologischem Wissen.",
        "Fate": [
            "3",
            "3"
        ],
        "ID": "19",
        "image": "explorator_fleet.png",
        "Name": "Explorator Fleet",
        "Name_De": "Exploratorflotte",
        "NegChars": "Fel",
        "PosChars": [
            "Int",
            "Per"
        ],
        "Wounds": "8+1d5"
    },
    "feral": {
        "Apt": "T",
        "Bonus": "",
        "Desc": "Feral worlds are planets where the population lives in primitive, often tribal societies with little to no advanced technology. Harsh environments and constant conflict forge resilient, fierce, and resourceful people who excel in survival and combat.",
        "Desc_De": "Wilde Welten sind Planeten, auf denen die Bevölkerung in primitiven, oft stammesähnlichen Gesellschaften ohne Zugang zu fortschrittlicher Technologie lebt. Raue Umgebungen und ständige Konflikte formen widerstandsfähige, kampferprobte und einfallsreiche Menschen, die im Überleben und im Kampf brillieren.",
        "Fate": [
            "2",
            "3"
        ],
        "ID": "4",
        "image": "feral.png",
        "Name": "Feral World",
        "Name_De": "Wilde Welt",
        "NegChars": "Int",
        "PosChars": [
            "S",
            "T"
        ],
        "Wounds": "9+1d5"
    },
    "feudal": {
        "Apt": "WS",
        "Bonus": "",
        "Desc": "Feudal worlds are planets governed by a rigid hierarchical system reminiscent of medieval feudal societies. Lords, knights, and serfs dominate the social structure, with power concentrated in noble families. Life is shaped by loyalty, duty, and often brutal conflict, while technology remains limited or ritualized.",
        "Desc_De": "Feudalwelten sind Planeten, die von einem starren hierarchischen System regiert werden, das mittelalterlichen Feudalgesellschaften ähnelt. Herren, Ritter und Leibeigene bestimmen die soziale Struktur, wobei die Macht in den Händen adliger Familien konzentriert ist. Das Leben ist geprägt von Loyalität, Pflichterfüllung und oft brutalen Konflikten, während Technologie begrenzt oder ritualisiert eingesetzt wird.",
        "Fate": [
            "3",
            "6"
        ],
        "ID": "5",
        "image": "feudal.png",
        "Name": "Feudal World",
        "Name_De": "Feudalwelt",
        "NegChars": "Int",
        "PosChars": [
            "Per",
            "WS"
        ],
        "Wounds": "9+1d5"
    },
    "forge": {
        "Apt": "Int",
        "Bonus": "",
        "Desc": "Forge worlds are the main armouries and assembly lines of the Imperium. The denizens are likely to have been born to do a specific task, like their parents before them and their children that will come after, focusing their entire lives on a single job.",
        "Desc_De": "Eine Schmiedewelt ist ein Planet, der vom Adeptus Mechanicus beherrscht wird und vollständig der Produktion fortschrittlicher Technologie, Waffen und Maschinen für das Imperium gewidmet ist. Riesige Fabrikanlagen und Fertigungslinien dominieren die Landschaft, wo unzählige Arbeiter und Servitoren nach den strengen Doktrinen des Omnissiah schuften. Diese Welten sind das Herzstück der industriellen Macht des Imperiums und die Geburtsstätte vieler seiner mächtigsten Artefakte.",
        "Fate": [
            "3",
            "8"
        ],
        "ID": "6",
        "image": "forge.png",
        "Name": "Forge World",
        "Name_De": "Schmiedewelt",
        "NegChars": "Fel",
        "PosChars": [
            "Int",
            "T"
        ],
        "Wounds": "8+1d5"
    },
    "fortress": {
        "Apt": "BS",
        "Bonus": "",
        "Desc": "Fortress worlds are heavily militarized planets fortified to defend vital Imperial territories. They are home to massive defensive structures, countless regiments of the Imperial Guard, and planetary defense forces. Life revolves around constant military readiness, harsh discipline, and endless preparations for war against any enemy threatening the Imperium.",
        "Desc_De": "Festungswelten sind stark militarisierte Planeten, die zur Verteidigung wichtiger imperialer Gebiete befestigt wurden. Sie beherbergen gewaltige Verteidigungsanlagen, unzählige Regimenter der Imperialen Armee und planetare Verteidigungskräfte. Das Leben dreht sich um ständige militärische Bereitschaft, harte Disziplin und endlose Kriegsvorbereitungen gegen jede Bedrohung, die das Imperium gefährden könnte.",
        "Fate": [
            "3",
            "9"
        ],
        "ID": "18",
        "image": "fortress.png",
        "Name": "Fortress World",
        "Name_De": "Festungswelt",
        "NegChars": "Fel",
        "PosChars": [
            "BS",
            "WP"
        ],
        "Wounds": "9+1d5"
    },
    "frontier": {
        "Apt": "BS",
        "Bonus": "",
        "Desc": "Frontier worlds are newly colonized or remote planets on the edge of Imperial control. Life here is harsh and uncertain, requiring settlers to be self-reliant, adaptable, and resilient. These worlds are often targets for alien raids, pirate attacks, and other dangers from the unexplored galaxy.",
        "Desc_De": "Grenzwelten sind neu besiedelte oder abgelegene Planeten am Rand der imperialen Kontrolle. Das Leben ist hart und ungewiss, weshalb die Siedler selbstständig, anpassungsfähig und widerstandsfähig sein müssen. Diese Welten sind oft das Ziel von Überfällen durch Aliens, Piratenangriffen und anderen Gefahren aus der unerforschten Galaxis.",
        "Fate": [
            "3",
            "7"
        ],
        "ID": "7",
        "image": "frontier.png",
        "Name": "Frontier World",
        "Name_De": "Grenzwelt",
        "NegChars": "Fel",
        "PosChars": [
            "BS",
            "Per"
        ],
        "Wounds": "7+1d5"
    },
    "garden": {
        "Apt": "Social",
        "Bonus": "",
        "Desc": "Garden worlds are planets blessed with ideal climates, abundant natural resources, and breathtaking landscapes. They are often reserved for the Imperial elite or used as sanctuaries, centers of learning, or even monuments to the Imperium’s glory. Life here is peaceful and prosperous, though often isolated from the harsh realities of the wider galaxy.",
        "Desc_De": "Gartenwelten sind Planeten mit idealem Klima, reichen natürlichen Ressourcen und atemberaubenden Landschaften. Sie sind oft der imperialen Elite vorbehalten oder dienen als Rückzugsorte, Bildungszentren oder gar als Denkmäler für den Ruhm des Imperiums. Das Leben hier ist friedlich und wohlhabend, jedoch oft von den harten Realitäten der restlichen Galaxis abgeschottet.",
        "Fate": [
            "2",
            "4"
        ],
        "ID": "8",
        "image": "garden.png",
        "Name": "Garden World",
        "Name_De": "Gartenwelt",
        "NegChars": "T",
        "PosChars": [
            "Fel",
            "Ag"
        ],
        "Wounds": "7+1d5"
    },
    "highborn": {
        "Apt": "Fel",
        "Bonus": "",
        "Desc": "Highborn are individuals born into the ruling noble families of the Imperium. They enjoy privilege, wealth, and influence, often holding political, military, or economic power. Raised in luxury and trained in leadership, diplomacy, and intrigue, they wield authority with an air of superiority and entitlement.",
        "Desc_De": "Hochgeborene sind Individuen, die in die herrschenden Adelsfamilien des Imperiums hineingeboren wurden. Sie genießen Privilegien, Reichtum und Einfluss und bekleiden oft politische, militärische oder wirtschaftliche Machtpositionen. In Luxus aufgewachsen und in Führung, Diplomatie und Intrigen geschult, üben sie ihre Autorität mit einer Aura von Überlegenheit und Anspruchsdenken aus.",
        "Fate": [
            "4",
            "10"
        ],
        "ID": "9",
        "image": "highborn.png",
        "Name": "Highborn",
        "Name_De": "Hochgeborener",
        "NegChars": "T",
        "PosChars": [
            "Fel",
            "Int"
        ],
        "Wounds": "9+1d5"
    },
    "hive": {
        "Apt": "Per",
        "Bonus": "",
        "Desc": "Hive worlds are densely populated planets covered in massive, sprawling cities called hive cities. These towering urban megastructures house billions of people in a grim, industrial environment. Life is harsh and brutal, with the majority of the population living in poverty, while the elite rule from fortified spires high above.",
        "Desc_De": "Makropolwelten sind dicht besiedelte Planeten, die von riesigen, weitläufigen Städten bedeckt sind, den sogenannten Makropolen. Diese gigantischen urbanen Megastrukturen beherbergen Milliarden von Menschen in einer düsteren, industriellen Umgebung. Das Leben ist hart und brutal: Die Mehrheit der Bevölkerung lebt in Armut, während die Elite aus befestigten Türmen hoch oben regiert.",
        "Fate": [
            "2",
            "6"
        ],
        "ID": "10",
        "image": "hive.png",
        "Name": "Hive World",
        "Name_De": "Makropolwelt",
        "NegChars": "WP",
        "PosChars": [
            "Ag",
            "Per"
        ],
        "Wounds": "8+1d5"
    },
    "imperial": {
        "Apt": "WP",
        "Bonus": "",
        "Desc": "Imperial worlds are the backbone of the Imperium, serving as hubs of population, industry, and governance. They vary greatly in culture and development but remain unified by loyalty to the Emperor and the rule of the Adeptus Terra. Their people are often hardworking and devout, ready to serve in the Imperial Guard or other branches of the Imperium’s vast bureaucracy.",
        "Desc_De": "Imperiale Welten sind das Rückgrat des Imperiums und dienen als Zentren für Bevölkerung, Industrie und Verwaltung. Ihre Kultur und Entwicklung variieren stark, aber sie sind durch ihre Loyalität zum Imperator und die Herrschaft des Adeptus Terra vereint. Die Menschen dort sind oft fleißig und fromm, bereit, in der Imperialen Armee oder anderen Zweigen der riesigen imperialen Bürokratie zu dienen.",
        "Fate": [
            "3",
            "10"
        ],
        "ID": "16",
        "image": "imperial.png",
        "Name": "Imperial World",
        "Name_De": "Imperiale Welt",
        "NegChars": "Int",
        "PosChars": [
            "WP",
            "Per"
        ],
        "Wounds": "8+1d5"
    },
    "industrial": {
        "Apt": "T",
        "Bonus": "",
        "Desc": "Industrial worlds are planets dominated by massive factories, foundries, and manufacturing complexes. They produce vast quantities of war materials, machinery, and goods essential for the Imperium’s survival. The environment is often polluted and hazardous, with the population living in harsh, regimented conditions as expendable labor for the planet’s relentless production demands.",
        "Desc_De": "Industriewelten sind Planeten, die von riesigen Fabriken, Gießereien und Produktionskomplexen beherrscht werden. Sie stellen enorme Mengen an Kriegsmaterial, Maschinen und Gütern her, die für das Überleben des Imperiums unerlässlich sind. Die Umwelt ist oft verschmutzt und gefährlich, und die Bevölkerung lebt unter harten, streng geregelten Bedingungen als austauschbare Arbeitskraft für die unermüdlichen Produktionsanforderungen des Planeten.",
        "Fate": [
            "2",
            "8"
        ],
        "ID": "22",
        "image": "industrial.png",
        "Name": "Industrial World",
        "Name_De": "Industriewelt",
        "NegChars": "Int",
        "PosChars": [
            "S",
            "T"
        ],
        "Wounds": "10+1d5"
    },
    "knight": {
        "Apt": "WS",
        "Bonus": "",
        "Desc": "Knight worlds are feudal planets ruled by noble houses sworn to the Imperium. They are home to colossal war machines known as Imperial Knights, piloted by the planet’s ruling elite. The population consists of peasants and vassals who support the Knights' households through farming, crafting, and maintaining the mighty war engines.",
        "Desc_De": "Ritterwelten sind feudale Planeten, die von Adelsgeschlechtern regiert werden, die dem Imperium die Treue geschworen haben. Sie sind die Heimat gewaltiger Kriegsmaschinen, der sogenannten Imperialen Ritter, die von der herrschenden Elite gesteuert werden. Die Bevölkerung besteht aus Bauern und Vasallen, die die Haushalte der Ritter durch Landwirtschaft, Handwerk und die Wartung der mächtigen Kriegsmaschinen unterstützen.",
        "Fate": [
            "3",
            "9"
        ],
        "ID": "21",
        "image": "knight.png",
        "Name": "Knight World",
        "Name_De": "Ritterwelt",
        "NegChars": "WP",
        "PosChars": [
            "S",
            "WS"
        ],
        "Wounds": "8+1d5"
    },
    "mining": {
        "Apt": "Per",
        "Bonus": "",
        "Desc": "Mining worlds are resource-rich planets dedicated entirely to extracting valuable minerals, metals, and other essential materials for the Imperium’s endless wars and industry. The population consists mostly of laborers living harsh, dangerous lives under brutal working conditions. Accidents, toxic environments, and corporate exploitation are common.",
        "Desc_De": "Bergbauwelten sind ressourcenreiche Planeten, die ausschließlich dem Abbau wertvoller Mineralien, Metalle und anderer wichtiger Rohstoffe für die Kriegsführung und Industrie des Imperiums dienen. Die Bevölkerung besteht hauptsächlich aus Arbeitern, die unter harten und gefährlichen Bedingungen leben und arbeiten. Unfälle, giftige Umgebungen und Ausbeutung durch Konzerne sind an der Tagesordnung.",
        "Fate": [
            "2",
            "3"
        ],
        "ID": "20",
        "image": "mining.png",
        "Name": "Mining World",
        "Name_De": "Bergbauwelt",
        "NegChars": "Int",
        "PosChars": [
            "Per",
            "T"
        ],
        "Wounds": "8+1d5"
    },
    "penal": {
        "Apt": "T",
        "Bonus": "",
        "Desc": "Penal colonies are harsh, isolated worlds where criminals, political prisoners, and other undesirables are sent as punishment. Life is brutal, with forced labor, constant surveillance, and minimal chances of escape. Survival depends on strength, cunning, and submission to the colony's oppressive authority.",
        "Desc_De": "Strafkolonien sind raue, isolierte Welten, auf die Kriminelle, politische Gefangene und andere Unerwünschte als Strafe verbannt werden. Das Leben ist brutal, geprägt von Zwangsarbeit, ständiger Überwachung und kaum vorhandenen Fluchtmöglichkeiten. Das Überleben hängt von Stärke, Gerissenheit und der Unterwerfung unter die unterdrückende Autorität der Kolonie ab.",
        "Fate": [
            "3",
            "8"
        ],
        "ID": "11",
        "image": "penal.png",
        "Name": "Penal Colony",
        "Name_De": "Strafkolonie",
        "NegChars": "Int",
        "PosChars": [
            "T",
            "Per"
        ],
        "Wounds": "10+1d5"
    },
    "pleasure": {
        "Apt": "Fel",
        "Bonus": "",
        "Desc": "Pleasure worlds are idyllic planets reserved for the wealthy, powerful, and influential members of the Imperium. These worlds offer luxurious environments, from pristine beaches and serene forests to opulent palaces. Life is centered around relaxation, entertainment, and indulgence, providing a temporary escape from the grim realities of the galaxy.",
        "Desc_De": "Vergnügungswelten sind idyllische Planeten, die den Reichen, Mächtigen und einflussreichen Persönlichkeiten des Imperiums vorbehalten sind. Diese Welten bieten luxuriöse Umgebungen, von unberührten Stränden und friedlichen Wäldern bis hin zu prunkvollen Palästen. Das Leben dreht sich um Entspannung, Unterhaltung und Genuss und bietet einen vorübergehenden Rückzugsort vor den düsteren Realitäten der Galaxis.",
        "Fate": [
            "2",
            "6"
        ],
        "ID": "23",
        "image": "pleasure.png",
        "Name": "Pleasure World",
        "Name_De": "Vergnügungswelt",
        "NegChars": "Per",
        "PosChars": [
            "Fel",
            "WP"
        ],
        "Wounds": "8+1d5"
    },
    "quarantine": {
        "Apt": "Fieldcraft",
        "Bonus": "",
        "Desc": "Quarantine worlds are planets placed under strict Imperial isolation due to dangerous contagions, Warp corruption, or unknown alien threats. Entire populations may be sealed off or eradicated to prevent the spread of the danger. Life on such worlds is bleak, with constant monitoring, harsh living conditions, and little hope of escape.",
        "Desc_De": "Quarantänewelten sind Planeten, die aufgrund gefährlicher Seuchen, Warp-Korruption oder unbekannter außerirdischer Bedrohungen unter strikte imperiale Isolation gestellt wurden. Ganze Bevölkerungen können abgeschottet oder ausgelöscht werden, um eine Ausbreitung der Gefahr zu verhindern. Das Leben auf solchen Welten ist trostlos, geprägt von ständiger Überwachung, harten Lebensbedingungen und kaum vorhandener Hoffnung auf Flucht.",
        "Fate": [
            "3",
            "9"
        ],
        "ID": "15",
        "image": "quarantine.png",
        "Name": "Quarantine World",
        "Name_De": "Quarantänewelt",
        "NegChars": "S",
        "PosChars": [
            "BS",
            "Int"
        ],
        "Wounds": "8+1d5"
    },
    "research": {
        "Apt": "Knowledge",
        "Bonus": "",
        "Desc": "Research stations are isolated installations dedicated to scientific exploration, technological development, and secret Imperial projects. They are often located in remote or dangerous areas to ensure security and limit outside interference. Life on these stations is focused on relentless study, innovation, and often dangerous experimentation.",
        "Desc_De": "Forschungsstationen sind abgelegene Einrichtungen, die wissenschaftlicher Erforschung, technologischer Entwicklung und geheimen Projekten des Imperiums dienen. Sie befinden sich häufig in entlegenen oder gefährlichen Gegenden, um Sicherheit zu gewährleisten und äußere Störungen zu vermeiden. Das Leben auf diesen Stationen ist geprägt von unermüdlicher Forschung, Innovation und oft riskanten Experimenten.",
        "Fate": [
            "3",
            "8"
        ],
        "ID": "12",
        "image": "research.png",
        "Name": "Research Station",
        "Name_De": "Forschungsstation",
        "NegChars": "Fel",
        "PosChars": [
            "Int",
            "Per"
        ],
        "Wounds": "8+1d5"
    },
    "shrine": {
        "Apt": "WP",
        "Bonus": "",
        "Desc": "Shrine worlds are planets dedicated to the worship of the Emperor and serve as spiritual centers of the Imperium. They are home to grand cathedrals, holy relics, and countless pilgrims seeking redemption or inspiration. The Ecclesiarchy maintains strict control, ensuring unwavering faith and devotion among the populace.",
        "Desc_De": "Pilgerwelten, auch Heiligenwelten genannt, sind Planeten, die der Verehrung des Imperators gewidmet sind und als spirituelle Zentren des Imperiums dienen. Sie beherbergen prächtige Kathedralen, heilige Reliquien und unzählige Pilger, die nach Erlösung oder göttlicher Inspiration suchen. Die Ekklesiarchie übt strenge Kontrolle aus, um den unerschütterlichen Glauben und die Hingabe der Bevölkerung sicherzustellen.",
        "Fate": [
            "3",
            "6"
        ],
        "ID": "13",
        "image": "shrine.png",
        "Name": "Shrine World",
        "Name_De": "Pilgerwelt",
        "NegChars": "Per",
        "PosChars": [
            "Fel",
            "WP"
        ],
        "Wounds": "7+1d5"
    },
    "void": {
        "Apt": "Int",
        "Bonus": "",
        "Desc": "Voidborn are individuals born and raised aboard colossal starships or space stations. Their lives are shaped by the cold, dark expanse of space, leading to a pallid appearance and a mysterious, often unsettling demeanor. They are accustomed to harsh environments, isolation, and the strange ways of the Warp.",
        "Desc_De": " Weltraumgeborene sind Individuen, die an Bord riesiger Raumschiffe oder Raumstationen geboren und aufgewachsen sind. Ihr Leben wird durch die kalte, dunkle Weite des Weltraums geprägt, was ihnen ein bleiches Aussehen und eine geheimnisvolle, oft unheimliche Ausstrahlung verleiht. Sie sind an raue Umgebungen, Isolation und die seltsamen Eigenheiten des Warp gewöhnt.",
        "Fate": [
            "3",
            "5"
        ],
        "ID": "14",
        "image": "void.png",
        "Name": "Voidborn",
        "Name_De": "Weltraumgeborener",
        "NegChars": "S",
        "PosChars": [
            "Int",
            "WP"
        ],
        "Wounds": "7+1d5"
    },
    "voidstation": {
        "Apt": "Ag",
        "Bonus": "",
        "Desc": "Void stations are massive, self-sustaining installations located in the cold void of space. They serve as trade hubs, military outposts, research facilities, or even isolated colonies. Life on a void station is harsh and isolated, with limited resources and constant maintenance needed to keep the station operational in the unforgiving expanse of the galaxy.",
        "Desc_De": "Raumstationen sind riesige, autarke Einrichtungen im kalten, leeren Raum. Sie dienen als Handelszentren, militärische Außenposten, Forschungseinrichtungen oder sogar als isolierte Kolonien. Das Leben auf einer Raumstation ist hart und isoliert, geprägt von begrenzten Ressourcen und der ständigen Notwendigkeit, die Station in der unerbittlichen Weite der Galaxis betriebsfähig zu halten.",
        "Fate": [
            "3",
            "8"
        ],
        "ID": "17",
        "image": "voidstation.png",
        "Name": "Void Station",
        "Name_De": "Raumstation",
        "NegChars": "BS",
        "PosChars": [
            "Ag",
            "Fel"
        ],
        "Wounds": "7+1d5"
    },
    "war": {
        "Apt": "Per",
        "Bonus": null,
        "Desc": "War worlds are planets consumed entirely by constant warfare. They serve as battlefronts where Imperial forces clash with enemies of the Imperium or fight brutal civil wars. The entire planet’s infrastructure is centered around the war effort, and its inhabitants are either soldiers, war laborers, or casualties of endless conflict.",
        "Desc_De": "Kriegswelten sind Planeten, die vollständig von unaufhörlichen Kriegen beherrscht werden. Sie dienen als Schlachtfelder, auf denen imperiale Streitkräfte gegen die Feinde des Imperiums oder in erbitterten Bürgerkriegen kämpfen. Die gesamte Infrastruktur des Planeten ist auf die Kriegsführung ausgerichtet, und die Bewohner sind entweder Soldaten, Kriegsarbeiter oder Opfer des endlosen Konflikts.",
        "Fate": [
            "3",
            "10"
        ],
        "ID": "26",
        "image": "war.png",
        "Name": "War World",
        "Name_De": "Kriegswelt",
        "NegChars": "T",
        "PosChars": [
            "Ag",
            "Per"
        ],
        "Wounds": "8+1d5"
    }
}

var traits = {
    "brut_charge": {
        "Name": "Brutal Charge",
        "NameDe": "Brutaler Ansturm"
    }
}

var talents = {
    "ambassador": {
        "IsLeveled": 0,
        "Name": "Ambassador Imperialis",
        "NameDe": "Ambassador Imperialis",
        "TalentGroups": {}
    },
    "ambidextrous": {
        "IsLeveled": 0,
        "Name": "Ambidextrous",
        "NameDe": "Beidhändigkeit",
        "TalentGroups": {}
    },
    "aoa": {
        "IsLeveled": 0,
        "Name": "Air of Authority",
        "NameDe": "Aura der Autorität",
        "TalentGroups": {}
    },
    "archivator": {
        "IsLeveled": 0,
        "Name": "Archivator",
        "NameDe": "Archivar",
        "TalentGroups": {}
    },
    "battlerage": {
        "IsLeveled": 0,
        "Name": "Battle Rage",
        "NameDe": "Kampfrausch",
        "TalentGroups": {}
    },
    "bloodtracker": {
        "IsLeveled": 0,
        "Name": "Blood Tracker",
        "NameDe": "Blutspurjäger",
        "TalentGroups": {}
    },
    "blademaster": {
        "IsLeveled": 0,
        "Name": "Blademaster",
        "NameDe": "Klingenmeister",
        "TalentGroups": {}
    },
    "bodyguard": {
        "IsLeveled": 0,
        "Name": "Bodyguard",
        "NameDe": "Leibwächter",
        "TalentGroups": {}
    },
    "bulwark_o_faith": {
        "IsLeveled": 0,
        "Name": "Bulwark of Faith",
        "NameDe": "Bollwerk des Glaubens",
        "TalentGroups": {}
    },
    "catfall": {
        "IsLeveled": 0,
        "Name": "Catfall",
        "NameDe": "Katzenfall",
        "TalentGroups": {}
    },
    "clues_crowd": {
        "IsLeveled": 0,
        "Name": "Clues from the Crowds",
        "NameDe": "Hinweise aus der Menge",
        "TalentGroups": {}
    },
    "contact_network": {
        "IsLeveled": 0,
        "Name": "Contact Network",
        "NameDe": "Kontaktnetzwerk",
        "TalentGroups": {}
    },
    "constant_vigilance": {
        "IsLeveled": 0,
        "Name": "Constant Vigilance",
        "NameDe": "Ständige Wachsamkeit",
        "TalentGroups": {
				"any": ["Int","Per"]
			}
    },
    "coverup": {
        "IsLeveled": 0,
        "Name": "Cover-Up",
        "NameDe": "Vertuschung",
        "TalentGroups": {}
    },
    "d_team": {
        "IsLeveled": 0,
        "Name": "Double Team",
        "NameDe": "Doppelteam",
        "TalentGroups": {}
    },
    "daemonhunter": {
        "IsLeveled": 0,
        "Name": "Daemonhunter",
        "NameDe": "Dämonenjäger",
        "TalentGroups": {}
	},
    "darksoul": {
        "IsLeveled": 0,
        "Name": "Dark Soul",
        "NameDe": "Dunkle Seele",
        "TalentGroups": {}
    },
    "decadence": {
        "IsLeveled": 0,
        "Name": "Delicate Dealings",
        "NameDe": "Feinsinnige Verhandlungen",
        "TalentGroups": {}
    },
    "delicatedealings": {
        "IsLeveled": 0,
        "Name": "Decadence",
        "NameDe": "Dekadenz",
        "TalentGroups": {}
    },
    "deny_witch": {
        "IsLeveled": 0,
        "Name": "Deny the Witch",
        "NameDe": "Die Hexe verwehren",
        "TalentGroups": {}
    },
    "diehard": {
        "IsLeveled": 0,
        "Name": "Die Hard",
        "NameDe": "Zähigkeit",
        "TalentGroups": {}
    },
    "disarm": {
        "IsLeveled": 0,
        "Name": "Disarm",
        "NameDe": "Entwaffnen",
        "TalentGroups": {}
    },
    "enemy": {
        "IsLeveled": 0,
        "Name": "Enemy",
        "NameDe": "Feind",
        "TalentGroups": {}
    },
    "face_in_crowd": {
        "IsLeveled": 0,
        "Name": "Face in a Crowd",
        "NameDe": "Ein Gesicht in der Menge",
        "TalentGroups": {}
    },
    "flagellant": {
        "IsLeveled": 0,
        "Name": "Flagellant",
        "NameDe": "Flagellant",
        "TalentGroups": {}
    },
    "foresight": {
        "IsLeveled": 0,
        "Name": "Foresight",
        "NameDe": "Vorausblick",
        "TalentGroups": {}
    },
    "frenzy": {
        "IsLeveled": 0,
        "Name": "Frenzy",
        "NameDe": "Raserei",
        "TalentGroups": {}
    },
    "grey_soul": {
        "IsLeveled": 0,
        "Name": "Grey Soul",
        "NameDe": "Graue Seele",
        "TalentGroups": {}
    },	
    "hard_bargain": {
        "IsLeveled": 0,
        "Name": "Hard Bargain",
        "NameDe": "Harte Verhandlung",
        "TalentGroups": {}
    },
    "hard_target": {
        "IsLeveled": 0,
        "Name": "Hard Target",
        "NameDe": "Schweres Ziel",
        "TalentGroups": {}
    },
    "hardenedsoul": {
        "IsLeveled": 0,
        "Name": "Harden Soul",
        "NameDe": "Gehärtete Seele",
        "TalentGroups": {}
    },
    "hardy": {
        "IsLeveled": 0,
        "Name": "Hardy",
        "NameDe": "Zäh",
        "TalentGroups": {}
    },
    "hatred": {
        "IsLeveled": 0,
        "Name": "Hatred",
        "NameDe": "Hass",
        "TalentGroups": {
			"any": ["mutant","eldar","dark_eldar","ork","tau", "kroot","admin","astro","ecc","admin","astro","ecc","ad_sor","navy","guard","pdf","mechanicus","pdf",
				"inquisition","nobility","rt","smuggler","pirates","ministorum","navi","daemon"],
			"xenos": ["eldar","dark_eldar","ork","tau", "kroot","vspid","necron","tyranid"],
			"any_opp": ["mutant","eldar","dark_eldar","ork","tau", "kroot","vspid","necron","tyranid","daemon","pirates","rt"],
			"any_dyn": ["admin","astro","ecc","ad_sor","navy","guard","pdf","mechanicus","pdf",
				"inquisition","nobility","rt","smuggler","pirates","ministorum","navi"],
		}
    },
    "heroic_insp": {
        "IsLeveled": 0,
        "Name": "Heroic Inspiration",
        "NameDe": "Heldenhafte Inspiration",
        "TalentGroups": {}
    },
    "hotshot_pilot": {
        "IsLeveled": 0,
        "Name": "Hotshot Pilot",
        "NameDe": "Spitzenpilot",
        "TalentGroups": {}
    },
    "iron_jaw": {
        "IsLeveled": 0,
        "Name": "Iron Jaw",
        "NameDe": "Eisernes Kinn",
        "TalentGroups": {}
    },
    "iron_resolve": {
        "IsLeveled": 0,
        "Name": "Iron Resolve",
        "NameDe": "Eisernes Durchhaltevermögen",
        "TalentGroups": {}
    },
    "iron_faith": {
        "IsLeveled": 0,
        "Name": "Iron Faith",
        "NameDe": "Eiserner Glaube",
        "TalentGroups": {}
    },
    "intep_target": {
        "IsLeveled": 0,
        "Name": "Independent Targeting",
        "NameDe": "Unabhängige Zielerfassung",
        "TalentGroups": {}
    },
    "infusedknowledge": {
        "IsLeveled": 0,
        "Name": "Infused Knowledge",
        "NameDe": "Eingeflößtes Wissen",
        "TalentGroups": {}
    },
    "jaded": {
        "IsLeveled": 0,
        "Name": "Jaded",
        "NameDe": "Abgestumpft",
        "TalentGroups": {}
    },
    "keen_intuition": {
        "IsLeveled": 0,
        "Name": "Keen Intuition",
        "NameDe": "Scharfe Intuition",
        "TalentGroups": {}
    },
    "l_sleeper": {
        "IsLeveled": 0,
        "Name": "Light Sleeper",
        "NameDe": "Leichter Schlaf",
        "TalentGroups": {}
    },
    "leapup": {
        "IsLeveled": 0,
        "Name": "Leap Up",
        "NameDe": "Aufspringer",
        "TalentGroups": {}
    },
    "leapingdodge": {
        "IsLeveled": 0,
        "Name": "Leaping Dodge",
        "NameDe": "Sprungausweichmanöver",
        "TalentGroups": {}
    },
    "lexographer": {
        "IsLeveled": 0,
        "Name": "Lexographer",
        "NameDe": "Lexograf",
        "TalentGroups": {}
    },
    "mechadendrite": {
        "IsLeveled": 0,
        "Name": "Mechadendrite Use",
        "NameDe": "Mechadendriten-Nutzung",
        "TalentGroups": {}
    },
    "neverdie": {
        "IsLeveled": 0,
        "Name": "Never Die",
        "NameDe": "Niemals sterben",
        "TalentGroups": {}
    },
    "oneonone": {
        "IsLeveled": 0,
        "Name": "One-on-One",
        "NameDe": "Eins-zu-Eins",
        "TalentGroups": {}
    },
    "no_hiding": {
        "IsLeveled": 0,
        "Name": "Nowhere to Hide",
        "NameDe": "Kein Versteck",
        "TalentGroups": {}
    },
    "peer": {
        "IsLeveled": 0,
        "Name": "Peer",
        "NameDe": "Einfluss",
        "TalentGroups": {
			"any_vs_owner": ["mechanicus","admin","navy","ecc","ministorum","rt","noble"],
			"xenos": ["eldar","dark_eldar","ork","tau", "kroot"],
			"any_imp": ["admin","astro","ecc","ad_sor","navy","guard","pdf","mechanicus","pdf","inquisition","nobility","rt","smuggler","pirates","ministorum"],
			"any": ["mutant","eldar","dark_eldar","ork","tau", "kroot","admin","astro","ecc","ad_sor","navy","guard","pdf","mechanicus","pdf",
				"inquisition","nobility","rt","smuggler","pirates","ministorum"]
		}
    },
    "pure_hatred": {
        "IsLeveled": 0,
        "Name": "Purity of Hatred",
        "NameDe": "Reinheit des Hasses",
        "TalentGroups": {
			"any": ["mutant","eldar","dark_eldar","ork","tau", "kroot","admin","astro","ecc","admin","astro","ecc","ad_sor","navy","guard","pdf","mechanicus","pdf",
				"inquisition","nobility","rt","smuggler","pirates","ministorum","navi","daemon"],
			"xenos": ["eldar","dark_eldar","ork","tau", "kroot","vspid","necron","tyranid"],
			"any_opp": ["eldar","dark_eldar","ork","tau", "kroot","vspid","necron","tyranid","daemon","pirates","rt"],
			"any_dyn": ["admin","astro","ecc","ad_sor","navy","guard","pdf","mechanicus","pdf",
				"inquisition","nobility","rt","smuggler","pirates","ministorum","navi"],
		}
    },
    "q_draw": {
        "IsLeveled": 0,
        "Name": "Quick Draw",
        "NameDe": "Schnelles Ziehen",
        "TalentGroups": {}
    },
    "rap_reload": {
        "IsLeveled": 0,
        "Name": "Rapid Reload",
        "NameDe": "Schnelles Nachladen",
        "TalentGroups": {}
    },
    "res": {
        "IsLeveled": 0,
        "Name": "Resistance",
        "NameDe": "Widerstandsfähigkeit",
        "TalentGroups": {
			"any":[
				"cold",
				"heat",
				"fear",
				"poisons",
				"radiation"
			]
		}
    },
    "sound_const": {
        "IsLeveled": 0,
        "Name": "Sound Constitution",
        "NameDe": "Robuste Konstitution",
        "TalentGroups": {}
    },
    "sprint": {
        "IsLeveled": 0,
        "Name": "Sprint",
        "NameDe": "Sprint",
        "TalentGroups": {}
    },
    "streetfight": {
        "IsLeveled": 0,
        "Name": "Street Fighting",
        "NameDe": "Straßenkampf",
        "TalentGroups": {}
    },
    "strong_minded": {
        "IsLeveled": 0,
        "Name": "Strong Minded",
        "NameDe": "Starker Geist",
        "TalentGroups": {}
    },
    "takedown": {
        "IsLeveled": 0,
        "Name": "Takedown",
        "NameDe": "Niederschlag",
        "TalentGroups": {}
    },
    "tech_knock": {
        "IsLeveled": 0,
        "Name": "Technical Knock",
        "NameDe": "Technischer Schlag",
        "TalentGroups": {}
    },
    "total_recall": {
        "IsLeveled": 0,
        "Name": "Total Recall",
        "NameDe": "Fotografisches Gedächtnis",
        "TalentGroups": {}
    },
    "truegrit": {
        "IsLeveled": 0,
        "Name": "True Grit",
        "NameDe": "Wahres Durchhaltevermögen",
        "TalentGroups": {}
    },
    "two_weapon": {
        "IsLeveled": 0,
        "Name": "Two-Weapon Wielder",
        "NameDe": "Zwei-Waffen-Kämpfer",
        "TalentGroups": {}
    },
    "unarmed_spec": {
        "IsLeveled": 0,
        "Name": "Unarmed Specialist",
        "NameDe": "Nahkampfspezialist",
        "TalentGroups": {}
    },
    "w_training": {
        "IsLeveled": 0,
        "Name": "Weapon Training",
        "NameDe": "Waffentraining",
        "TalentGroups":{ 
			"w_any":
					[
				"bolt",
				"chain",
				"flame",
				"heavy",
				"las",
				"launcher",
				"melta",
				"plasma",
				"power",
				"primitive",
				"shock",
				"sp"
			]
		}
    },
    "warp_sense": {
        "IsLeveled": 0,
        "Name": "Warp Sense",
        "NameDe": "Warp-Sinn",
        "TalentGroups": {}
    },
    "weapon_tech": {
        "IsLeveled": 0,
        "Name": "Weapon-Tech",
        "NameDe": "Waffen-Tech",
        "TalentGroups": {}
    },
    "witchfinder": {
        "IsLeveled": 0,
        "Name": "Witch Finder",
        "NameDe": "Hexenjäger",
        "TalentGroups": {}
    },
    "xenosavant": {
        "IsLeveled": 0,
        "Name": "Xenosavant",
        "NameDe": "Xenokundiger",
        "TalentGroups": {}
    },
}

var skills = {
    "acrobatics": {
        "Name": "Acrobatics",
        "NameDe": "Akrobatik",
        "SkillGroups": {}
    },
    "athletics": {
        "Name": "Athletics",
        "NameDe": "Athletik",
        "SkillGroups": {}
    },
    "awareness": {
        "Name": "Awareness",
        "NameDe": "Wahrnehmung",
        "SkillGroups": {}
    },
    "c_lore": {
        "Name": "Common Lore",
        "NameDe": "Allgemeinwissen",
        "SkillGroups": {}
    },
    "charm": {
        "Name": "Charm",
        "NameDe": "Charme",
        "SkillGroups": {}
    },
    "command": {
        "Name": "Command",
        "NameDe": "Führung",
        "SkillGroups": {}
    },
    "commerce": {
        "Name": "Commerce",
        "NameDe": "Handel",
        "SkillGroups": {}
    },
    "deceive": {
        "Name": "Deceive",
        "NameDe": "Täuschen",
        "SkillGroups": {}
    },
    "dodge": {
        "Name": "Dodge",
        "NameDe": "Ausweichen",
        "SkillGroups": {}
    },
    "f_lore": {
        "Name": "Forbidden Lore",
        "NameDe": "Verbotenes Wissen",
        "SkillGroups": {}
    },
    "inquiry": {
        "Name": "Inquiry",
        "NameDe": "Ermittlung",
        "SkillGroups":{}
    },
    "interrogation": {
        "Name": "Interrogation",
        "NameDe": "Verhör",
        "SkillGroups": {}
    },
    "intimidate": {
        "Name": "Intimidate",
        "NameDe": "Einschüchtern",
        "SkillGroups": {}
    },
    "linguistics": {
        "Name": "Linguistics",
        "NameDe": "Linguistik",
        "SkillGroups": {}
    },
    "logic": {
        "Name": "Logic",
        "NameDe": "Logik",
        "SkillGroups": {}
    },
    "medicae": {
        "Name": "Medicae",
        "NameDe": "Medizin",
        "SkillGroups": {}
    },
    "navigate": {
        "Name": "Navigate",
        "NameDe": "Navigieren ",
        "SkillGroups": {}
    },
    "operate": {
        "Name": "Operate",
        "NameDe": "Fahrzeugführen",
        "SkillGroups": {}
    },
    "parry": {
        "Name": "Parry",
        "NameDe": "Parieren",
        "SkillGroups": {}
    },
    "psyniscience": {
        "Name": "Psyniscience",
        "NameDe": "Psychische Wahrnehmung",
        "SkillGroups": {}
    },
    "s_lore": {
        "Name": "Scholastic Lore",
        "NameDe": "Scholastisches Wissen",
        "SkillGroups": {}
    },
    "scrutiny": {
        "Name": "Scrutiny",
        "NameDe": "Beobachtung",
        "SkillGroups": {}
    },
    "security": {
        "Name": "Security",
        "NameDe": "Sicherheit",
        "SkillGroups": {}
    },
    "sl_o_hand": {
        "Name": "Sleight of Hand",
        "NameDe": "Fingerfertigkeit",
        "SkillGroups": {}
    },
    "stealth": {
        "Name": "Stealth",
        "NameDe": "Schleichen",
        "SkillGroups": {}
    },
    "survival": {
        "Name": "Stealth",
        "NameDe": "Überleben",
        "SkillGroups": {}
    },
    "techuse": {
        "Name": "Tech-Use",
        "NameDe": "Technologie-Nutzung",
        "SkillGroups": {}
    },
    "trade": {
        "Name": "Trade",
        "NameDe": "Handwerk",
        "SkillGroups": {}
    }
}

var groups = {
	"Int": {
        "Name": "Intelligence",
        "NameDe": "Intelligenz"
    },
	"Per": {
        "Name": "Perception",
        "NameDe": "Wahrnehmung"
    },
    "ad_sor": {
        "Name": "Adepta Sororitas",
        "NameDe": "Adepta Sororitas"
    },"allxenos": {
        "Name": "All Xenos",
        "NameDe": "Alle Xenos"
    },
    "admin": {
        "Name": "Adeptus Administratum",
        "NameDe": "Astromantie"
    },
    "any": {
        "Name": "Choose 1",
        "NameDe": "Wähle 1"
    },
    "any_opp": {
        "Name": "Choose 1",
        "NameDe": "Wähle 1"
    },
    "any_vs_owner": {
        "Name": "Choose 1",
        "NameDe": "Wähle 1"
    },
    "any_dyn": {
        "Name": "Choose 1",
        "NameDe": "Wähle 1"
    },
    "aeronautica": {
        "Name": "Aernoautica",
        "NameDe": "Aernoautica"
    },
    "arbites": {
        "Name": "Adeptus Arbites",
        "NameDe": "Adeptus Arbites"
    },
    "astro": {
        "Name": "Adeptus Astra Telepathica",
        "NameDe": "Adeptus Astra Telepathica"
    },
    "armourer": {
        "Name": "Armourer",
        "NameDe": "Rüstungsherstellung"
    },
    "astrograph": {
        "Name": "Astrographer",
        "NameDe": "Astrographie"
    },
    "assassinorum": {
        "Name": "Officio Assassinorum",
        "NameDe": "Officio Assassinorum"
    },
    "archeotech": {
        "Name": "Archeotech",
        "NameDe": "Archeotech"
    },
    "astromancy": {
        "Name": "Astromancy",
        "NameDe": "Astromantie"
    },
    "ballistic": {
        "Name": "Ballistic",
        "NameDe": "Ballistische Waffen"
    },
    "binary": {
        "Name": "Explorator Binary",
        "NameDe": "Explorator-Binär"
    },
    "bolt": {
        "Name": "Bolt",
        "NameDe": "Bolter"
    },
    "bureaucracy": {
        "Name": "Bureaucracy",
        "NameDe": "Bürokratie"
    },
    "cartel": {
        "Name": "Criminal Cartels",
        "NameDe": "Kriminelle Kartelle"
    },
    "chain": {
        "Name": "Chain",
        "NameDe": "Kettenwaffen"
    },
    "chaos_marked": {
        "Name": "Chaos Marked",
        "NameDe": "Chaos-Gezeichnete"
    },
    "chymistry": {
        "Name": "Chymistry",
        "NameDe": "Chymie"
    },
    "chymist": {
        "Name": "Chymist",
        "NameDe": "Chymist"
    },
    "cold": {
        "Name": "Cold",
        "NameDe": "Kälte"
    },
    "cook": {
        "Name": "Cook",
        "NameDe": "Koch"
    },
	"dark_eldar":{
		"Name": "Dark Eldar",
		"NameDe": "Drukhari"
	},
	"daemons":{
		"Name": "Daemons",
		"NameDe": "Dämonen"
	},
    "daemonology": {
        "Name": "Daemonology",
        "NameDe": "Dämonologie"
    },
    "disease": {
        "Name": "Disease",
        "NameDe": "Krankheiten"
    },
    "ecc": {
        "Name": "Ecclesiarchy",
        "NameDe": "Ekklesiarchie"
    },
	"eldar":{
		"Name": "Eldar",
		"NameDe": "Eldar"
	},
    "faithful": {
        "Name": "Faithful",
        "NameDe": "Gläubige"
    },
    "fl_any": {
        "Name": "Choose 1",
        "NameDe": "Wähle 1"
    },
    "fear": {
        "Name": "Fear",
        "NameDe": "Furcht"
    },
    "flame": {
        "Name": "Flamer",
        "NameDe": "Flammenwerfer"
    },
    "force": {
        "Name": "Force",
        "NameDe": "Psiwaffe"
    },
    "guard": {
        "Name": "Imperial Guard",
        "NameDe": "Imperiale Armee"
    },
    "h_goth": {
        "Name": "High Gothic",
        "NameDe": "Hochgotisch"
    },
    "heavy": {
        "Name": "Heavy",
        "NameDe": "Schwere Waffen"
    },
    "horusheresy": {
        "Name": "Horus Heresy",
        "NameDe": "Horus-Häresie"
    },
    "heretics": {
        "Name": "Heretics",
        "NameDe": "Ketzer"
    },
    "heresy": {
        "Name": "Heresy",
        "NameDe": "Ketzerei"
    },
    "heraldry": {
        "Name": "Heraldry",
        "NameDe": "Heraldik"
    },
    "imp_codes": {
        "Name": "Imperial Codes",
        "NameDe": "Imperiale Codes"
    },
    "imp_creed": {
        "Name": "Imperial Creed",
        "NameDe": "Imperiales Credo"
    },
    "imperium": {
        "Name": "Imperium",
        "NameDe": "Imperium"
    },
    "inquisition": {
        "Name": "Inquisition",
        "NameDe": "Inquisition"
    },
    "judgement": {
        "Name": "Judgement",
        "NameDe": "Verturteilungen"
    },
	"kroot":{
		"Name":"Kroot",
		"NameDe":"Kroot"
	},
    "las": {
        "Name": "Las",
        "NameDe": "Las"
    },
    "launcher": {
        "Name": "Launcher",
        "NameDe": "Werfersysteme"
    },
    "legends": {
        "Name": "Legends",
        "NameDe": "Legenden"
    },
    "loremancer": {
        "Name": "Remembrancer",
        "NameDe": "Erinnerer"
    },
    "longwar": {
        "Name": "The Long War",
        "NameDe": "Der Lange Krieg"
    },
    "mechanicus": {
        "Name": "Adeptus Mechanicus",
        "NameDe": "Adeptus Mechanicus"
    },
    "melee": {
        "Name": "Melee",
        "NameDe": "Nahkampf"
    },
    "melta": {
        "Name": "Melta",
        "NameDe": "Melta"
    },
    "merchant_code": {
        "Name": "Merchant Code",
        "NameDe": "Händlercode"
    },
    "men_o_iron": {
        "Name": "Men of Iron",
        "NameDe": "Eiserne Menschen"
    },
    "ministorum": {
        "Name": "Adeptus Ministorum",
        "NameDe": "Adeptus Ministorum"
    },
    "mutant": {
        "Name": "Mutants",
        "NameDe": "Mutanten"
    },
    "navi": {
        "Name": "Navigators",
        "NameDe": "Navigatoren"
    },
    "navy": {
        "Name": "Imperial Navy",
        "NameDe": "Imperiale Flotte"
    },
    "necron": {
        "Name": "Necron",
        "NameDe": "Necron"
    },
    "Nobility": {
        "Name": "Nobility",
        "NameDe": "Adelige"
    },
	"numerology":{
		"Name":"Numerology",
		"NameDe":"Numerologie"
	},
    "occult": {
        "Name": "Occult",
        "NameDe": "Okkult"
    },
    "ork": {
        "Name": "Ork",
        "NameDe": "Ork"
    },
    "pdf": {
        "Name": "Planetary Defence Force",
        "NameDe": "Planetare Verteidigungsstreitkräfte"
    },
    "philo": {
        "Name": "Philosophy",
        "NameDe": "Philosophie"
    },
    "pirates": {
        "Name": "Pirates",
        "NameDe": "Piraten"
    },
    "plasma": {
        "Name": "Plasma",
        "NameDe": "Plasma"
    },
    "poison": {
        "Name": "Poison",
        "NameDe": "Gift"
    },
    "power": {
        "Name": "Power",
        "NameDe": "Energiewaffen"
    },
    "primitive": {
        "Name": "Primitive",
        "NameDe": "Primitiv"
    },
	"psychic":{
        "Name": "Psychic Powers",
        "NameDe": "Psionische Einflüsse"
	},
    "psyker": {
        "Name": "Psyker",
        "NameDe": "Psioniker"
    },
    "radiation": {
        "Name": "Radiation",
        "NameDe": "Strahlung"
    },
    "rt_cant": {
        "Name": "Rogue Trader Cant",
        "NameDe": "Freihändler-Kant"
    },
    "rt": {
        "Name": "Rogue Trader",
        "NameDe": "Freihändler"
    },
    "tr_any": {
        "Name": "Choose 1",
        "NameDe": "Wähle 1"
    },
    "tau": {
        "Name": "Tau",
        "NameDe": "Tau"
    },
    "tyranid": {
        "Name": "Tyranid",
        "NameDe": "Tyraniden"
    },
    "shock": {
        "Name": "Shock",
        "NameDe": "Schock"
    },
    "sl_any": {
        "Name": "Choose 1",
        "NameDe": "Wähle 1"
    },
    "smuggler": {
        "Name": "smuggler",
        "NameDe": "Schmuggler"
    },
    "sororitas": {
        "Name": "Adepta Sororitas",
        "NameDe": "Adepta Sororitas"
    },
    "soothsayer": {
        "Name": "Soothsayer",
        "NameDe": "Zukunftsvorhersager"
    },
    "sp": {
        "Name": "Solid Projectile",
        "NameDe": "Geschosse"
    },
    "stellar": {
        "Name": "Stellar",
        "NameDe": "Stellar"
    },
    "surface": {
        "Name": "Surface",
        "NameDe": "Oberfläche"
    },
    "syndicates": {
        "Name": "Criminal Syndicates",
        "NameDe": "Kriminelle Syndikate"
    },
    "tactica": {
        "Name": "Tactica Imperialis",
        "NameDe": "Tactica Imperialis"
    },
    "tech": {
        "Name": "Tech",
        "NameDe": "Tech"
    },
    "tech_lingo": {
        "Name": "Techna-lingua",
        "NameDe": "Techna-lingua"
    },
    "underworld": {
        "Name": "Underworld",
        "NameDe": "Underwelt"
    },
    "utility": {
        "Name": "Utility",
        "NameDe": "Werkzeuge"
    },
    "voidship": {
        "Name": "Voidship",
        "NameDe": "Raumschiff"
    },
    "voidfarer": {
        "Name": "Voidfarer",
        "NameDe": "Raumfahrer"
    },
    "vehiculum": {
        "Name": "Vehiculum",
        "NameDe": "Fahrzeugbaumeister"
    },
	"vspid": {
        "Name": "Vespid",
        "NameDe": "Vespiden"
    },
    "shipwright": {
        "Name": "Shipwright",
        "NameDe": "Schiffbaumeister"
    },
    "w_any": {
        "Name": "Any Weapon type of your choice",
        "NameDe": "Waffenart deiner Wahl"
    },
    "war": {
        "Name": "War",
        "NameDe": "Kriegsführung"
    },
    "warrants": {
        "Name": "Imperial Warrants",
        "NameDe": "Imperiale Freibriefe "
    },
    "warp": {
        "Name": "Warp",
        "NameDe": "Warp"
    },
    "weapon": {
        "Name": "Weapon",
        "NameDe": "Bewaffnet"
    },
    "xenos": {
        "Name": "Choose 1 Type of Xenos",
        "NameDe": "Xenos nach Wahl"
    },
    "xenology": {
        "Name": "Xenology",
        "NameDe": "Xenologie"
    }
}

var hwAbilities = {
	"agri": {
        "Name": "Strength from the Land",
        "NameDe": "Stärke vom Land",
        "Effect": "An agri-world character starts with the Brutal Charge (2) trait.",
        "EffectDe": "Ein Charakter von einer Agrarwelt beginnt mit der Eigenschaft Brutaler Ansturm (2).",
        "Skills": [],
        "Traits": [["brut_charge",""]]
    },
    "cardinal": {
        "Name": "Sacred Upbringings",
        "NameDe": "Geheiligte Erziehung",
        "Effect": "A Cardinal World character begins with one rank in the Common Lore (Ecclesiarchy) and Common Lore (Adepta Sororitas) skills, and in addition, starts with the Peer (Adeptus Sororitas) talent.",
        "EffectDe": "Ein Charakter von einer Kardinalswelt beginnt mit einem Rang in den Fertigkeiten Allgemeinwissen (Ekklesiarchie) und Allgemeinwissen (Adepta Sororitas) und zusätzlich mit dem Talent Umgang (Adepta Sororitas).",
        "Skills": [["c_lore","ecc"],["c_lore","ad_sor"]],
        "Talents": [["peer","ad_sor"]]
    },
    "cemetery": {
        "Name": "Absolute Faith in the Past",
        "NameDe": "Absoluter Glaube an die Vergangenheit",
        "Effect": "In addition to the normal uses of Fate points, once per encounter a Cemetery World character may spend a Fate point after he fails a Fear test to count as having passed it with 1 degree of success, but also gains 1 Insanity point.",
        "EffectDe": " Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Charakter von einer Friedhofswelt einmal pro Begegnung einen Schicksalspunkt ausgeben, nachdem er einen Angsttest nicht bestanden hat, um ihn als mit 1 Erfolgspunkt bestanden zu zählen. Dabei erhält er jedoch 1 Wahnsinnspunkt.",
        "Skills": [],
        "Talents": []
    },
    "daemon": {
        "Name": "Touched by the Warp",
        "Effect": "A Daemon world native begins with one Rank in the Psyniscience skill. Should he gain this skill again in a later step of character creation, he instead gains one additional Rank in the skill. Note that he cannot purchase more Ranks of this skill unless he acquires the Psyker aptitude. This character also begins with 1d10+5 Corruption points.",
        "NameDe": "Vom Warp Berührt",
        "EffectDe": "Ein Eingeborener einer Dämonenwelt beginnt mit einem Rang in der Fertigkeit Psyniscience. Sollte er diese Fertigkeit in einem späteren Schritt der Charaktererstellung erneut erhalten, erhält er stattdessen einen zusätzlichen Rang in dieser Fertigkeit. Beachte, dass er keine weiteren Ränge in dieser Fertigkeit erwerben kann, es sei denn, er erlangt die Psioniker-Eignung. Dieser Charakter beginnt außerdem mit 1W10+5 Verderbenspunkten.",
        "Skills": [["psyniscience",""]],
        "Talents": [],
		"Corruption":"1d10+5"
    },
    "death": {
        "Name": "Survivor’s Paranoia",
        "NameDe": "Überlebensparanoia",
        "Effect": "While a death world character is Surprised, non-Surprised attackers do not gain the normal +30 bonus to their Weapon Skill and Ballistic Skill tests when targeting this character.",
        "EffectDe": "Während ein Charakter von einer Todeswelt überrascht ist, erhalten nicht-überraschte Angreifer keinen normalen Bonus von +30 auf ihre Waffenfertigkeits- und Ballistikfertigkeitswürfe, wenn sie diesen Charakter angreifen.",
        "Skills": [],
        "Talents": []
    },
    "explorator_fleet": {
        "Name": "Fit for Purpose",
        "NameDe": "Für den Zweck geschaffen",
        "Effect": "A character from an Explorator Fleet treats his Carrying, Lifting, and Pushing thresholds as if his sum of SB and TB were two higher to determine his maximum weight values.",
        "EffectDe": "Ein Charakter aus einer Exploratorflotte behandelt seine Trag-, Hebe- und Schiebeschwellen so, als ob die Summe aus seiner SB und WB um zwei höher wäre, um seine maximalen Gewichtsgrenzen zu bestimmen.",
        "Skills": [],
        "Talents": [],
		"Carry" : "+2"
    },
    "feral": {
        "Name": "The Old Ways",
        "NameDe": "Die alten Wege",
        "Effect": "In the hands of a feral world character, any Low-Tech weapon loses the Primitive quality (if it had it) and gains the Proven (3) quality.",
        "EffectDe": "In den Händen eines Charakters von einer Wilden Welt verliert jede Niedrigtechnologie-Waffe die Eigenschaft Primitiv (falls sie diese hatte) und erhält stattdessen die Eigenschaft Erprobt (3).",
        "Skills": [],
        "Talents": []
    },
    "feudal": {
        "Name": "At Home in Armor",
        "NameDe": "In der Rüstung Zuhause",
        "Effect": " A feudal world character ignores the maximum Agility value imposed by any armor he is wearing.",
        "EffectDe": "Ein Charakter von einer Feudalwelt ignoriert den maximalen Beweglichkeitswert, der durch die von ihm getragene Rüstung auferlegt wird.",
        "Skills": [],
        "Talents": []
    },
    "forge": {
        "Name": "Omnissiah’s Chosen",
        "NameDe": "Omnissiahs Auserwählte",
        "Effect": "A forge world character starts with either the Technical Knock or Weapon-Tech talent.",
        "EffectDe": "Ein Charakter von einer Schmiedewelt beginnt mit entweder dem Talent Technischer Schlag oder Waffen-Techniker.",
        "Skills": [],
        "Talents": [["tech_knock|weapon_tech","@@"]]
    },
    "fortress": {
        "Name": "Neverending Enemies",
        "NameDe": "Niemals endende Feinde",
        "Effect": "Gain Hatred (Any) connected to whom the Fortress World was fighting against and this works also on Ballistic Skill, but only for you.",
        "EffectDe": "Erhalte die Eigenschaft Hass (Beliebig), die sich auf jene bezieht, gegen die die Festungswelt gekämpft hat. Diese Eigenschaft gilt auch für Ballistik-Fertigkeit, jedoch nur für dich.",
        "Skills": [],
        "Talents": [["hatred","any_opp"]]
    },
    "frontier": {
        "Name": "Rely on None but Yourself",
        "NameDe": "Verlasse dich auf niemanden außer auf dich selbs",
        "Effect": "A frontier world character gains a +20 bonus to Tech-Use tests when applying personal weapon modifications, and a +10 bonus when repairing damaged items.",
        "EffectDe": "Ein Charakter von einer Grenzwelt erhält einen Bonus von +20 auf Tech-Fertigkeitstests, wenn er persönliche Waffenmodifikationen vornimmt, und einen Bonus von +10, wenn er beschädigte Gegenstände repariert.",
        "Skills": [],
        "Talents": []
    },
    "garden": {
        "Name": "Serenity of the Green",
        "NameDe": "Gelassenheit des Grünen",
        "Effect": "A garden world character halves the duration (rounded up) of any result from Shock and Mental Traumas, and can remove Insanity Points for 50xp per point rather than the normal 100xp.",
        "EffectDe": "Ein Charakter von einer Gartenwelt halbiert (aufgerundet) die Dauer aller Ergebnisse von Schock und Mentale Traumata und kann Wahnsinnspunkte für 50 EP pro Punkt anstelle der üblichen 100 EP entfernen.",
        "Skills": [],
        "Talents": []
    },
    "highborn": {
        "Name": "Only the Highest Quality",
        "NameDe": "Nur die höchste Qualität",
        "Effect": "Once per session during Acquisition the Highborn can reduce the penalty for Good/Best quality by 10.",
        "EffectDe": "Einmal pro Sitzung kann ein Hochgeborener während einer Erwerbung den Malus für Gute/Beste Qualität um 10 reduzieren.",
        "Skills": [],
        "Talents": []
    },
    "hive": {
        "Name": "Teeming Masses in Metal Mountains",
        "NameDe": "Wimmelnde Massen in metallenen Bergen",
        "Effect": "A hive world character ignores crowds for purposes of movement, treating them as open terrain. When in enclosed spaces, he also gains a +20 bonus to Navigate (Surface) tests.",
        "EffectDe": "Ein Charakter von einer Makropolwelt ignoriert Menschenmengen in Bezug auf Bewegung und behandelt sie als offenes Gelände. In geschlossenen Räumen erhält er außerdem einen Bonus von +20 auf Fertigkeitswürfe für Navigieren (Oberfläche).",
        "Skills": [],
        "Talents": []
    },
    "imperial": {
        "Name": "Blessed Ignorance",
        "NameDe": "Gesegnete Unwissenheit",
        "Effect": "Any time an Imperial World character would gain Corruption from Moral Threats, he reduces it by 1 (to a minimum of 1)",
        "EffectDe": "Jedes Mal, wenn ein Charakter von einer Imperialen Welt Verderbnis durch moralische Bedrohungen erhalten würde, reduziert er diese um 1 (auf ein Minimum von 1).",
        "Skills": [],
        "Talents": []
    },
    "industrial": {
        "Name": "Accustomed to Labor",
        "NameDe": "An harte Arbeit gewöhnt",
        "Effect": "An Industrial World character ignores any effects from his first level of Fatigue, and counts his Toughness bonus as one higher for the purposes of determining his carrying, lifting and pushing weight limitations.",
        "EffectDe": "Ein Charakter von einer Industriewelt ignoriert die Effekte seiner ersten Stufe von Erschöpfung und zählt seinen Widerstandsbonus als um eins höher, um seine Trag-, Hebe- und Schiebegrenzen zu bestimmen.",
        "Skills": [],
        "Talents": [],
		"Carry" : "+1"
    },
    "knight": {
        "Name": "Close and Personal",
        "NameDe": "Nah und persönlich",
        "Effect": "A Knight World character gains the Vengeful (9) quality to his ranged attacks at Point-Blank Range, or to his melee attacks with a Called Shot action.",
        "EffectDe": "Ein Charakter von einer Ritterwelt erhält die Eigenschaft Rachsüchtig (9) für seine Fernkampfangriffe auf Punkt-Blank-Entfernung oder für seine Nahkampfangriffe mit einer gezielten Aktion.",
        "Skills": [],
        "Talents": []
    },
    "mining": {
        "Name": "Acclimated to Twisting Warrens",
        "NameDe": "An die verschlungenen Gänge gewöhnt",
        "Effect": "A Mining World characters start with either the Resistance (Cold), Resistance (Heat), or Resistance (Poisons) talent. Additionally, Mining Colony characters gain a +10 to Awareness and Navigation (Surface) tests when underground.",
        "EffectDe": "Ein Charakter von einer Bergbauwelt beginnt mit dem Talent Widerstand (Kälte), Widerstand (Hitze) oder Widerstand (Gifte). Zusätzlich erhalten Charaktere aus einer Bergbaukolonie einen Bonus von +10 auf Wahrnehmung und Navigieren (Oberfläche), wenn sie sich unter der Erde befinden.",
        "Skills": [],
        "Talents": [["res","cold|heat|poisons"]]
    },
    "penal": {
        "Name": "Finger on the Pulse",
        "NameDe": "Den Puls der Macht spüren",
        "Effect": "One survives a penal colony by instinctively knowing who is in charge and who is a threat. A penal colony character begins with one Rank in the Common Lore (Underworld) and Scrutiny skills, and starts with the Peer (Criminal Cartels) talent.",
        "EffectDe": "Man überlebt eine Strafkolonie, indem man instinktiv erkennt, wer das Sagen hat und wer eine Bedrohung darstellt. Ein Charakter aus einer Strafkolonie beginnt mit einem Rang in den Fertigkeiten Allgemeinwissen (Unterwelt) und Beobachtung sowie mit dem Talent Umgang (Kriminelle Kartelle)",
        "Skills": [["c_lore","underworld"],["scrutiny",""]],
        "Talents": [["peer","cartel"]]
    },
    "pleasure": {
        "Name": "Everything in Excess",
        "NameDe": "Alles im Übermaß",
        "Effect": "If a Pleasure World character uses more than one dose of a given drug in a 24 hour period they must make an Ordinary (+10) Toughness test as per the rules for excessive drug use, however this character never receives the normal cumulative -10 penalty for each additional dose. If the test is failed the drug still has no useful effect for the next 24 hours.",
        "EffectDe": "Wenn ein Charakter von einer Vergnügungswelt innerhalb von 24 Stunden mehr als eine Dosis eines bestimmten Medikaments verwendet, muss er gemäß den Regeln für übermäßigen Drogenkonsum einen gewöhnlichen (+10) Widerstandswurf ablegen. Allerdings erhält dieser Charakter nie den üblichen kumulativen Malus von -10 für jede zusätzliche Dosis. Falls der Test misslingt, hat die Droge dennoch keine nützliche Wirkung für die nächsten 24 Stunden.",
        "Skills": [],
        "Talents": []
    },
    "quarantine": {
        "Name": "Secretive by Nature",
        "NameDe": "Von Natur aus verschwiegen",
        "Effect": "Those who manage to leave a quarantine world learn how to keep secrets. Whenever the Dynasty’s Reputation would decrease, it decreases by 2 less (to a minimum reduction of 1).",
        "EffectDe": "Diejenigen, die es schaffen, eine Quarantänewelt zu verlassen, lernen, Geheimnisse zu bewahren. Wann immer der Ruf der Dynastie sinken würde, verringert er sich um 2 weniger (auf ein Minimum von 1).",
        "Skills": [],
        "Talents": []
    },
    "research": {
        "Name": "Pursuit of Data",
        "NameDe": "Streben nach Wissen",
        "Effect": "Whenever a research station character reaches Rank 2 (Trained) in a Scholastic Lore skill, he also gains Rank 1 (Known) in one related or identical Forbidden Lore skill specialization of his choice. The GM is the final arbiter of whether the two specializations are related.",
        "EffectDe": "Immer wenn ein Charakter von einer Forschungsstation Rang 2 (Geschult) in einer Fertigkeit aus der Kategorie Gelehrtenwissen erreicht, erhält er außerdem Rang 1 (Bekannt) in einer verwandten oder identischen Spezialisierung der Fertigkeit Verbotenes Wissen seiner Wahl. Der Spielleiter hat das letzte Wort darüber, ob die beiden Spezialisierungen als verwandt gelten.",
        "Skills": [],
        "Talents": []
    },
    "shrine": {
        "Name": "Faith in the Creed",
        "NameDe": "Glaube an das Credo",
        "Effect": "Whenever a shrine world character spends a Fate Point, he rolls 1d10. On a result of 1, the character’s total number of Fate points is not reduced.",
        "EffectDe": "Immer wenn ein Charakter von einer Pilgerwelt einen Schicksalspunkt ausgibt, würfelt er 1W10. Bei einem Ergebnis von 1 wird die Gesamtanzahl seiner Schicksalspunkte nicht reduziert.",
        "Skills": [],
        "Talents": []
    },
    "void": {
        "Name": "Child of the Dark",
        "NameDe": "Kind der Dunkelheit",
        "Effect": "A voidborn character starts with the Strong Minded talent, and gains a +30 bonus to tests for moving in a zero gravity environment.",
        "EffectDe": "Ein Charakter, der im Weltraum geboren wurde, beginnt mit dem Talent Willensstark und erhält einen Bonus von +30 auf Tests für Bewegungen in einer Schwerelosigkeitsumgebung.",
        "Skills": [],
        "Talents": [["strong_minded",""]]
    },
    "voidstation": {
        "Name": "Nobody Else to Talk To",
        "NameDe": "Niemand sonst zum Reden",
        "Effect": "Gain Peer (Any) connected to who owned the station and additional +10 to all Fellowship tests when dealing with that group.",
        "EffectDe": "Erhalte Umgang (Beliebig), bezogen auf die Besitzer der Station, sowie einen zusätzlichen Bonus von +10 auf alle Fertigkeitswürfe für Charisma, wenn du mit dieser Gruppe interagierst.",
        "Skills": [],
        "Talents": [["peer","any_vs_owner"]]
    },
    "war": {
        "Name": "Survival of the Deadliest",
        "NameDe": "Überleben der Tödlichsten",
        "Effect": "When making a standard attack, a War World character may modify his Hit Location result by increasing or decreasing the attack result up to his Agility Bonus.",
        "EffectDe": "Wenn ein Charakter von einer Kriegswelt einen Standardangriff durchführt, kann er sein Trefferzonen-Ergebnis anpassen, indem er das Angriffsergebnis um bis zu seinen Beweglichkeitsbonus erhöht oder verringert.",
        "Skills": [],
        "Talents": []
    }
}


var careers = {
    "rt": {
        "Apt": ["Leadership"],
        "Description": "Rogue Traders are powerful individuals granted a special charter by the Imperium, allowing them to explore, trade, and conquer beyond Imperial borders. They command vast starships and operate with near-autonomous authority, pursuing wealth, power, and discovery. While officially serving the Imperium, many walk a thin line between loyalty and self-interest.",
        "Descritpion_DE": "Freihändler sind mächtige Individuen, die durch ein besonderes Kaperbrief des Imperiums ermächtigt sind, jenseits der imperialen Grenzen zu erkunden, zu handeln und zu erobern. Sie führen gewaltige Raumschiffe und agieren mit nahezu vollständiger Autonomie, stets auf der Suche nach Reichtum, Macht und Entdeckungen. Obwohl sie offiziell dem Imperium dienen, bewegen sich viele Freihändler auf einem schmalen Grat zwischen Loyalität und Eigeninteresse.",
        "IMAGE": "roguetrader.png",
        "NAME": "Rogue Trader",
        "NAME_DE": "Freihändler"
    },
    "sister": {
        "Apt": ["WP"],
        "Description": "A Sister Pariah is a rare and feared individual born with the Pariah Gene, making them completely soulless and immune to psychic powers. They are often recruited by the Inquisition or the Sisters of Silence to serve as anti-psyker operatives. Their presence is deeply unsettling, causing unease or even terror among those around them, as they suppress psychic phenomena through their very existence.",
        "Descritpion_DE": "Eine Schwester Pariah ist eine seltene und gefürchtete Person, die mit dem Pariah-Gen geboren wurde, was sie seelenlos und vollständig immun gegen psionische Kräfte macht. Sie werden oft von der Inquisition oder den Schwestern der Stille rekrutiert, um als Anti-Psioniker-Agenten zu dienen. Ihre bloße Anwesenheit ist zutiefst beunruhigend und kann bei Menschen in ihrer Umgebung Unbehagen oder sogar Angst auslösen, da sie psionische Phänomene durch ihre Existenz unterdrücken.",
        "IMAGE": "sister_pariah.png",
        "NAME": "Sister Pariah",
        "NAME_DE": "Schwester Paria"
    },
    "s_psy": {
        "Apt": [
            "Psyker",
            "WP"
        ],
        "Description": "A Sanctioned Psyker is a psychic individual who has been trained, tested, and approved by the Imperium to wield their Warp-born powers in service of the Emperor. They have survived the brutal conditioning and trials of the Scholastica Psykana, gaining valuable psychic skills while enduring the constant threat of Warp corruption. Though feared and distrusted, they are essential to the Imperium’s survival as battle psykers, advisors, and interstellar communicators.",
        "Descritpion_DE": "Ein sanktionierter Psioniker ist ein psionisch begabter Mensch, der vom Imperium ausgebildet, geprüft und zugelassen wurde, um seine Kräfte aus dem Warp im Dienst des Imperators einzusetzen. Sie haben die harte Ausbildung und die grausamen Prüfungen der Scholastica Psykana überlebt, wobei sie wertvolle psionische Fähigkeiten erlangt und gleichzeitig der ständigen Bedrohung durch Warp-Korruption ausgesetzt sind. Obwohl sie gefürchtet und misstraut werden, sind sie als Kampfpsioniker, Berater und interstellare Kommunikatoren für das Überleben des Imperiums unverzichtbar.",
        "IMAGE": "psyker.png",
        "NAME": "Psyker (Sanctioned)",
        "NAME_DE": "Sanktionierter Psioniker"
    },
    "u_psy": {
        "Apt": [
            "Psyker",
            "T"
        ],
        "Description": "An Unsanctioned Psyker is an untrained and unregistered individual with psychic abilities, considered a dangerous threat by the Imperium. Lacking formal training or protection from the Scholastica Psykana, they are highly vulnerable to Warp possession and corruption. The Inquisition ruthlessly hunts Unsanctioned Psykers, seeing them as a grave risk to humanity, though some manage to survive in hiding or by joining outlaw groups and cults.",
        "Descritpion_DE": "Ein nicht saktionierter Psioniker ist eine ungeschulte und nicht registrierte Person mit psionischen Fähigkeiten, die vom Imperium als gefährliche Bedrohung angesehen wird. Ohne formale Ausbildung oder Schutz durch die Scholastica Psykana sind sie extrem anfällig für Besitzergreifung und Korruption durch den Warp. Die Inquisition jagt ungeweihte Psioniker erbarmungslos, da sie als ernsthafte Gefahr für die Menschheit gelten, obwohl es einigen gelingt, im Verborgenen zu überleben oder sich Gesetzlosen und Kulten anzuschließen.",
        "IMAGE": "unsanct_psy.png",
        "NAME": "Psyker (Unsanctioned)",
        "NAME_DE": "Nicht-sanktionierter Psioniker"
    },
    "arch": {
        "Apt": ["Offence"],
        "Description": "The Arch-Militant is a master of combat, serving as the military commander or personal bodyguard aboard a Rogue Trader's vessel. Hardened by countless battles, they excel in warfare, weapon mastery, and battlefield tactics. Loyal and deadly, they ensure the Rogue Trader’s will is enforced through strength and firepower.",
        "Descritpion_DE": "Der Erzmilitant ist ein Kampfspezialist, der als militärischer Befehlshaber oder persönlicher Leibwächter an Bord eines Freihändlerschiffs dient. Durch zahllose Schlachten gestählt, beherrscht er die Kriegskunst, den Waffeneinsatz und die Taktik des Schlachtfelds. Loyal und tödlich sorgt er dafür, dass der Wille des Freihändlers mit Stärke und Feuerkraft durchgesetzt wird.",
        "IMAGE": "arch_militant.png",
        "NAME": "Arch-Militant",
        "NAME_DE": "Erzmilitant"
    },
    "astro": {
        "Apt": [
            "Defense",
            "Psyker"
        ],
        "Description": "An Astropath Transcendent is a highly trained psyker, soul-bound to the Emperor through an intense psychic ritual. They serve as vital communicators across the vast distances of space, transmitting messages through the Warp. Though often physically frail and scarred by their binding, they possess immense psychic power and mystical insight.",
        "Descritpion_DE": "Ein Erhabener Astropath ist ein mächtiger Psioniker, der durch das Ritual der Seelenbindung an die Seele des Imperators geknüpft ist. Sie dienen als interstellare Kommunikatoren, die Nachrichten über die unvorstellbaren Weiten des Warps senden. Trotz der körperlichen und geistigen Narben, die der Bindungsprozess hinterlässt, verfügen sie über gewaltige psionische Kräfte, die für das Überleben des Imperiums unerlässlich sind.",
        "IMAGE": "astropath.png",
        "NAME": "Astropath Transcendent",
        "NAME_DE": "Erhabener Astropath"
    },
    "explo": {
        "Apt": ["Tech"],
        "Description": "An Explorator is a tech-priest of the Adeptus Mechanicus dedicated to exploring uncharted regions of the galaxy in search of lost technology, ancient relics, and forgotten knowledge. They are often members of Explorator Fleets, venturing into dangerous and unknown sectors. Driven by religious devotion to the Machine God, they combine scientific curiosity with a relentless pursuit of technological supremacy.",
        "Descritpion_DE": "Ein Explorator ist ein Tech-Priester des Adeptus Mechanicus, der sich der Erforschung unerforschter Regionen der Galaxis widmet, um verlorene Technologien, antike Relikte und vergessenes Wissen zu entdecken. Sie sind häufig Mitglieder von Exploratorflotten und dringen in gefährliche und unbekannte Sektoren vor. Angetrieben von religiöser Hingabe an den Maschinengott verbinden sie wissenschaftliche Neugier mit einem unermüdlichen Streben nach technologischer Überlegenheit.",
        "IMAGE": "explorator.png",
        "NAME": "Explorator",
        "NAME_DE": "Explorator"
    },
    "miss": {
        "Apt": [
            "WP",
            "Faith"
        ],
        "Description": "A Missionary is a devoted servant of the Imperial Creed, tasked with spreading the faith in the Emperor throughout the galaxy. They travel to remote and dangerous worlds, converting or purging populations as needed. Armed with spiritual zeal, fiery oratory, and often a holy arsenal, they are both preachers and warriors in service to the Ecclesiarchy and the Imperium.",
        "Descritpion_DE": "Ein Missionar ist ein ergebenes Mitglied des imperialen Glaubens, dessen Aufgabe es ist, den Glauben an den Imperator in der gesamten Galaxis zu verbreiten. Sie reisen zu abgelegenen und gefährlichen Welten, um die Bevölkerung zu bekehren oder im schlimmsten Fall zu reinigen. Bewaffnet mit spirituellem Eifer, mitreißender Rhetorik und oft einem heiligen Waffenarsenal sind sie sowohl Prediger als auch Krieger im Dienst der Ekklesiarchie und des Imperiums.",
        "IMAGE": "missionary.png",
        "NAME": "Missionary",
        "NAME_DE": "Missionar"
    },
    "navi": {
        "Apt": [
            "Social",
            "PsykerNAV"
        ],
        "Description": "A Navigator is a highly specialized human mutant born with the Warp Eye, a third eye that allows them to see into the Warp and guide starships through its turbulent tides. They belong to powerful Navigator Houses, wielding immense political influence due to their essential role in space travel. Navigators are both feared and respected for their supernatural abilities, which are vital for the Imperium’s interstellar expansion.",
        "Descritpion_DE": "Ein Navigator ist ein hoch spezialisierter menschlicher Mutant, der mit dem Warp-Auge, einem dritten Auge, geboren wird, das ihm erlaubt, in den Warp zu blicken und Raumschiffe durch dessen gefährliche Strömungen zu führen. Sie gehören mächtigen Navigatorenhäusern an und besitzen enormen politischen Einfluss, da sie für den interstellaren Raumflug unverzichtbar sind. Navigatoren werden gleichermaßen gefürchtet und respektiert für ihre übernatürlichen Fähigkeiten, die für die Expansion des Imperiums von entscheidender Bedeutung sind.",
        "IMAGE": "navigator.png",
        "NAME": "Navigator",
        "NAME_DE": "Navigator"
    },
    "sen": {
        "Apt": ["Fieldcraft"],
        "Description": "A Seneschal is a master administrator, spy, and advisor, responsible for managing a Rogue Trader's vast holdings, wealth, and intelligence network. They are skilled in diplomacy, trade, and subterfuge, ensuring the smooth operation of commercial ventures and political dealings. Seneschals are invaluable, combining sharp intellect with ruthless efficiency in service to their master’s ambitions.",
        "Descritpion_DE": "Ein Seneschall ist ein Meister der Verwaltung, Spionage und Beratung, der für die Verwaltung des ausgedehnten Besitzes, des Reichtums und des Informationsnetzwerks eines Freihändlers verantwortlich ist. Er beherrscht Diplomatie, Handel und Intrigen, um kommerzielle Unternehmen und politische Geschäfte reibungslos abzuwickeln. Seneschalle sind unverzichtbar und kombinieren scharfen Verstand mit gnadenloser Effizienz, um die ehrgeizigen Ziele ihres Meisters zu unterstützen.",
        "IMAGE": "seneschal.png",
        "NAME": "Seneschal",
        "NAME_DE": "Seneschall (Verwalter)"
    },
    "voidm": {
        "Apt": ["Finesse"],
        "Description": "A Void-Master is an expert in starship operations, responsible for overseeing vital shipboard functions such as navigation, piloting, weapon control, or engineering. They are seasoned veterans of space travel, possessing unmatched technical and tactical skills. Void-Masters ensure the efficient and effective running of a Rogue Trader's vessel, making them indispensable in the harsh, unforgiving expanse of the galaxy.",
        "Descritpion_DE": "Ein Void-Meister ist ein Experte für die Bedienung und Verwaltung von Raumschiffen. Er überwacht entscheidende Schiffsfunktionen wie Navigation, Steuerung, Waffenkontrolle oder Maschinenwartung. Als erfahrene Veteranen des Raumfluges verfügen sie über unvergleichliche technische und taktische Fähigkeiten. Void-Meister sorgen für den reibungslosen und effektiven Betrieb des Schiffs eines Freihändlers und sind in der harten, unerbittlichen Weite der Galaxis unverzichtbar.",
        "IMAGE": "void_master.png",
        "NAME": "Void-Master",
        "NAME_DE": "Void-Meister"
    },
    "executor": {
        "Apt": ["Finesse"],
        "Description": "An Executioner is a deadly enforcer, trained to deliver the Emperor’s justice with brutal efficiency. They serve as hunters, assassins, and executioners, skilled in combat, tracking, and killing their targets without mercy. Executioners are feared across the galaxy for their unwavering dedication to carrying out death sentences in the name of the Imperium.",
        "Descritpion_DE": "Ein Vollstrecker ist ein tödlicher Vollstrecker des imperialen Willens, der darin ausgebildet ist, die Gerechtigkeit des Imperators mit brutaler Effizienz zu vollziehen. Sie dienen als Jäger, Assassinen und Henker, spezialisiert auf Kampf, Verfolgung und das erbarmungslose Töten ihrer Ziele. Vollstrecker sind in der gesamten Galaxis gefürchtet für ihre kompromisslose Hingabe, Todesurteile im Namen des Imperiums auszuführen.",
        "IMAGE": "executioner.png",
        "NAME": "Executioner",
        "NAME_DE": "Vollstrecker"
    }
}


var careerOpts = {
    "rt": {
        "Skills": [["f_lore","xenos"], ["linguistics","xenos"]],
		"Talents": [["aoa",""],["w_training","power|chain"]],
		"AbilityName": "Exceptional Leader",
		"AbilityEffect": "As a free action once per round, the Rogue Trader may grant an ally that he can see and who can hear him +10% to any one test.",
		"ANameDe": "Außergewöhnlicher Anführer",
		"AEffectDe": "Einmal pro Runde kann der Freihändler als freie Aktion einem Verbündeten, den er sehen und der ihn hören kann, einen Bonus von +10 % auf einen beliebigen Test gewähren."
    },
    "sister": {
        "Skills": [["f_lore","heresy"], ["f_lore","sororitas"],
					["s_lore","imp_creed"], ["s_lore","occult"]],
		"Talents": [["w_training","bolt|power"]],
		"AbilityName": "Pure Faith",
		"AbilityEffect": "Immune to Baleful Presence. Gain one per session reroll for Fear test from Daemons. Gains access to Pure Faith Talents.",
		"ANameDe": "Reiner Glaube",
		"AEffectDe": "Immun gegen Unheilvolle Präsenz. Erhält einmal pro Sitzung einen Wiederholungswurf für einen Angsttest gegen Dämonen. Erhält Zugang zu Talenten des Reinen Glaubens."
    },
    "s_psy": {
        "Skills": [["psyniscience",""], ["f_lore","psyker"], ["s_lore","occult"],
					["linguistics","h_goth|imp_codes|rt_cant|underworld"]],
		"Talents": [["w_training","las|power"]],
		"AbilityName": "Sanctioned Psyker",
		"AbilityEffect": "You start with a Psy Rating of 2. You can never become an Untouchable. Choose 1 Psychic Discipline and gain 2 Abilities whose requirements you meet.",
		"ANameDe": "Sanktionierter Psioniker",
		"AEffectDe": "Du startest mit einem Psionik-Wert von 2. Du kannst niemals ein Unberührbarer werden. Wähle eine Psionische Disziplin und erhalte 2 Fähigkeiten, deren Voraussetzungen du erfüllst."
    },
    "u_psy": {
        "Skills": [["psyniscience",""], ["f_lore","psyker"], ["f_lore","warp"]],
		"Talents": [["w_training","las|primitive"],["enemy","inquisition"]],
		"AbilityName": "Unsanctioned Psyker",
		"AbilityEffect": "You start with a Psy Rating of 2. You can never become an Untouchable. Choose 1 Psychic Discipline and gain 2 Abilities whose requirements you meet. You can not use Psychic Abilites at fettered power. After Gaining Psy-Rating you gain 1d5+5 Corruption points",
		"ANameDe": "Nicht-Sanktionierter Psioniker",
		"AEffectDe": "Du startest mit einem Psionik-Wert von 2. Du kannst niemals ein Unberührbarer werden. Wähle eine Psionische Disziplin und erhalte 2 Fähigkeiten, deren Voraussetzungen du erfüllst. Du kannst psionische Fähigkeiten nicht mit gezügelter Macht einsetzen. Nach dem Erhalt eines Psionik-Werts erhältst du 1W5+5 Verderbenspunkte."
    },
    "arch": {
        "Skills": [],
		"Talents": [["w_training","w_any"], ["w_training","w_any"], ["w_training","w_any"]],
		"AbilityName": "Weapon Master",
		"AbilityEffect": "The Arch-militant gains a +10% bonus to hit, +2 to damage, and +2 initiative when using a weapon of his chosen class (Melee, Thrown, Pistol, Basic or Heavy). If a Exotic weapon has the same class as the Arch-Militant’s Weapon Master, he needs to have Exotic Weapon Training for his Weapon Master to work for that weapon. If the Exotic weapon doesn’t have a weapon class, the Arch-Militant can’t add his Weapon Master.",
		"ANameDe": "Waffen Meister",
		"AEffectDe": "Der Erzmilitant erhält einen Bonus von +10 % auf Trefferwürfe, +2 auf Schaden und +2 auf Initiative, wenn er eine Waffe seiner gewählten Klasse (Nahkampf, Wurfwaffen, Pistolen, Basiswaffen oder Schwerwaffen) verwendet. Wenn eine Exotische Waffe derselben Klasse wie die Waffe seines Waffenmeisters entspricht, benötigt der Erzmilitant die Fertigkeit Exotische Waffenbeherrschung, damit sein Waffenmeister für diese Waffe funktioniert. Hat die Exotische Waffe keine Waffenklasse, kann der Erzmilitant seinen Waffenmeister nicht anwenden."
		
    },
    "astro": {
        "Skills": [["psyniscience",""], ["f_lore","psyker"], ["s_lore","occult"],["c_lore","astro"],
					["linguistics","h_goth|imp_codes|rt_cant|underworld|merchant_code"]],
		"Talents": [["w_training","las|primitive"]],
		"AbilityName": "Astropath",
		"AbilityEffect": "You start with a Psy Rating of 2. You can never become an Untouchable. Start With all Astropathic Psychic Powers. You are considered blind but can perceive everything within 30m around you.",
		"ANameDe": "Astropath",
		"AEffectDe": "Du startest mit einem Psionik-Wert von 2. Du kannst niemals ein Unberührbarer werden. Du beginnst mit allen astropathischen psionischen Kräften. Du wirst als blind betrachtet, kannst jedoch alles innerhalb von 30 Metern um dich herum wahrnehmen."
    },
    "explo": {
        "Skills": [["c_lore","tech"],["f_lore","archeotech"],["f_lore","mechanicus"],
			["linguistics","binary"],["linguistics","tech_lingo"]],
		"Talents": [["w_training","melta|plasma"]],
		"AbilityName": "Explorator Cybernetics",
		"AbilityEffect": "Gain two (2) Common quality cybernetics at the start of the game (can increase quality of one of them by spending 200xp for Good or 400xp for Best).",
		"ANameDe": "Explorator-Cybernetik",
		"AEffectDe": "Erhalte zu Beginn des Spiels zwei (2) kybernetische Implantate von gewöhnlicher Qualität. Die Qualität eines dieser Implantate kann durch Ausgeben von 200 EP auf Gute Qualität oder 400 EP auf Beste Qualität erhöht werden.",
		"Cybernetics": [["mech",""],["mech",""]]
    },
    "miss": {
        "Skills": [["c_lore","imp_creed"],["c_lore","ecc"],["s_lore","imp_creed"],["f_lore","heresy"],["linguistics","h_goth"]],
		"Talents": [["w_training","flame|chain"]],
		"AbilityName": "Pure Faith",
		"AbilityEffect": "Immune to Baleful Presence. Gain one per session reroll for Fear test from Daemons. Gains access to Pure Faith Talents.",
		"ANameDe": "Reiner Glaube",
		"AEffectDe": "Immun gegen Unheilvolle Präsenz. Erhält einmal pro Sitzung einen Wiederholungswurf für einen Angsttest gegen Dämonen. Erhält Zugang zu Talenten des Reinen Glaubens."
	},
    "navi": {
        "Skills": [["f_lore","navi"],["s_lore","astromancy"],["trade","astrograph"],["linguistics","h_goth"]],
		"Talents": [["w_training","sp|primitive"]],
		"Traits": ["navigator"],
		"AbilityName": "Power Limit",
		"AbilityEffect": "Lidless Stare Navigator Power ignores the limit. The Navigator can have a specified number of powers in his arsenal. He can have up to half his Willpower bonus (rounded up) Master level Navigator Powers, Willpower Bonus of Adept level Navigator Powers and Willpower Bonus plus two Novice level Navigator Powers. He can delevel a Power to gain an empty spot. If he can’t delevel (due to no space in Adept or Novice powers), he can remove it entirely. He can regain the powers by again climbing the ladder by spending the experience again.  You count as having Psy Rating equal to quarter of number of Navigator Power Talents (rounded down) bought to a maximum of 8 and a minimum of 1",
		"ANameDe": "Power Limit",
		"AEffectDe": "Die Navigator-Kraft „Lidless Stare“ ignoriert das normale Limit. Ein Navigator kann bis zu der Hälfte seines Willenskraftbonus (aufgerundet) Kräfte auf Meisterstufe, Kräfte auf Adeptenstufe in Höhe seines Willenskraftbonus und Kräfte auf Novizenstufe in Höhe seines Willenskraftbonus plus zwei besitzen. Er kann eine Kraft herabstufen, um einen freien Platz zu schaffen, oder sie vollständig entfernen, wenn keine Herabstufung möglich ist. Entfernte Kräfte können durch erneutes Erwerben und Ausgeben der entsprechenden Erfahrungspunkte wieder erlangt werden. Der Navigator wird als im Besitz eines Psionik-Werts angesehen, der einem Viertel der Anzahl der gekauften Navigator-Kraft-Talente entspricht (abgerundet), mit einem Maximum von 8 und einem Minimum von 1."
    },
    "sen": {
        "Skills": [["inquiry",""],["linguistics","rt_cant"]],
		"Talents": [["w_training","bolt|las"]],
		"AbilityName": "True Steward",
		"AbilityEffect": "Seneschal adds one bonus Degree of Success to any successful Linguistics, Commerce and Inquiry Test. Reduces the time in Acquisition by one rank.",
		"ANameDe": "Wahrer Verwalter",
		"AEffectDe": "Der Seneschall erhält einen zusätzlichen Erfolgsgrad bei jedem erfolgreichen Test für Linguistik, Handel und Nachforschung. Die Dauer für Erwerbungen wird um eine Stufe reduziert."
    },
    "voidm": {
        "Skills": [["operate","voidship|aeronautica"],["navigate","surface|stellar"],["scrutiny",""]],
		"Talents": [["w_training","bolt|power"]],
		"AbilityName": "Master of the Void",
		"AbilityEffect": "Choose one type of vehicle (Voidship, Aeronautica or Surface). Your character gains 2 re-roll for any actions involving it each session",
		"ANameDe": "Meister des Weltraums",
		"AEffectDe": "Wähle einen Fahrzeugtyp (Raumschiff, Aeronautica oder Bodenfahrzeug). Dein Charakter erhält pro Sitzung 2 Wiederholungswürfe für alle Aktionen, die diesen Fahrzeugtyp betreffen."
    },
    "executor": {
        "Skills": [["acrobatics",""],["athletics",""],["stealth",""],["sl_o_hand",""]],
		"Talents": [["w_training","primitive|power"]],
		"AbilityName": "One with the Darkness",
		"AbilityEffect": "The Executioner can reroll unsuccessful Stealth and Sleight of Hand tests",
		"ANameDe": "Eins mit der Dunkelheit",
		"AEffectDe": "Der Vollstrecker kann fehlgeschlagene Tests für Schleichen und Fingerfertigkeit erneut würfeln."
    }
}


var backgrounds = {
    "admin": {
        "Apts": [
            "Knowledge|Social"
        ],
        "Description": "The Adeptus Administratum is the vast bureaucratic arm of the Imperium, responsible for managing the endless records, logistics, and tithes that keep the galaxy-spanning empire functioning. Its members are clerks, scribes, and officials who labor tirelessly to maintain order amidst the chaos of the Imperium’s endless demands.",
        "Descritpion_DE": "Das Adeptus Administratum ist der gewaltige bürokratische Arm des Imperiums, der für die Verwaltung der endlosen Aufzeichnungen, Logistik und Zehnten verantwortlich ist, die das galaxisweite Imperium am Laufen halten. Seine Mitglieder sind Schreiber, Beamte und Funktionäre, die unermüdlich daran arbeiten, Ordnung inmitten der unzähligen Anforderungen des Imperiums aufrechtzuerhalten.",
        "IMAGE": "admin.png",
        "NAME": "Adeptus Administratum",
        "NAME_DE": "Adeptus Administratum",
        "Skills": [["commerce|medicae","@@"],["c_lore","admin"],["linguistics","h_goth"],
			["logic",""],["s_lore","sl_any"]],
        "Talents": [["w_training","las|sp"]],
        "Gear": [["las_pistol|sp_stub_auto","@@",1], ["a_b_imperial","",1], ["tl_quill","",1],["tl_medkit","",1]],
        "AName": "Master of Paperwork",
        "ANameDe": "Meister der Bürokratie",
        "ADesc": "An Adeptus Administratum character gains +10 to his Acquisition tests.",
        "ADescDe": "Ein Charakter des Adeptus Administratum erhält einen Bonus von +10 auf seine Erwerbstests."
    },
    "arbite": {
        "Apts": [
            "Offence|Defense"
        ],
        "Description": "The Adeptus Arbites are the Imperium’s enforcers of law and order, tasked with upholding the Emperor’s justice across countless worlds. They are judge, jury, and executioner, wielding brutal efficiency to suppress rebellion, punish heresy, and enforce Imperial edicts. Known for their unwavering loyalty, they operate above planetary laws to ensure compliance with the will of Terra.",
        "Descritpion_DE": "Das Adeptus Arbites ist die Strafverfolgungsbehörde des Imperiums, die für die Aufrechterhaltung von Gesetz und Ordnung auf unzähligen Welten verantwortlich ist. Sie agieren als Richter, Geschworene und Henker und setzen mit brutaler Effizienz Rebellionen nieder, bestrafen Ketzerei und setzen die Erlasse des Imperators durch. Bekannt für ihre unerschütterliche Loyalität stehen sie über den planetaren Gesetzen, um die Befolgung des Willens von Terra zu gewährleisten.",
        "IMAGE": "arbite.png",
        "NAME": "Adeptus Arbites",
        "NAME_DE": "Adeptus Arbites",
        "Skills": [["awareness",""],["c_lore","arbites"],["c_lore","underworld"],
			["inquiry|interrogation","@@"],["intimidate",""],["scrutiny",""]],
        "Talents": [["w_training","shock|sp"]],
        "Gear": [["sp_shotgun|m_sh_maul","@@",1],["a_car_li_enf|a_car_chest","@@",1],["cons_stimm","",3],["tl_cuff","",1]],
        "AName": "The Face of the Law",
        "ANameDe": "Das Gesicht des Gesetzes",
        "ADesc": "An Arbitrator can re-roll any Intimidation and Interrogation test, and can substitute his Willpower bonus for his degrees of success on these tests.",
        "ADescDe": "Ein Arbitrator kann jeden Einschüchterungs- und Verhörtest wiederholen und seinen Willenskraftbonus anstelle seiner Erfolgsgrade bei diesen Tests verwenden."
    },
    "astronom": {
        "Apts": [
            "Knowledge|WP"
        ],
        "Description": "The Adeptus Astronomica is the Imperial organization responsible for maintaining the Astronomican, the psychic beacon that guides starships through the Warp. Based on Terra, it is staffed by thousands of psykers who sacrifice their lives daily to power this vital light. The Adeptus Astronomica is crucial to interstellar travel, ensuring the Imperium’s vast domains remain connected.",
        "Descritpion_DE": "Das Adeptus Astronomica ist die imperiale Organisation, die für die Aufrechterhaltung des Astronomicans verantwortlich ist, des psionischen Leuchtfeuers, das Raumschiffe durch den Warp führt. Auf Terra stationiert, wird es von Tausenden Psionikern betrieben, die täglich ihr Leben opfern, um dieses lebenswichtige Licht zu speisen. Das Adeptus Astronomica ist entscheidend für die interstellare Navigation und stellt sicher, dass die weiten Domänen des Imperiums verbunden bleiben.",
        "IMAGE": "astro.png",
        "NAME": "Adeptus Astronomica",
        "NAME_DE": "Adeptus Astronomica",
        "Skills": [["awareness",""],["c_lore","astro"],["linguistics","h_goth"],
			["linguistics","imp_creed"],["s_lore","occult"],["logic",""]],
        "Talents": [["res|bodyguard","psychic@@"]],
        "Gear": [["las_pistol","",1],["m_pr_cstaff|m_pr_csword","@@",1],["a_b_imperial","",1],
			["tl_focus|a_car_chest","@@",1]],
        "AName": "Service to the Hollow Mountain",
        "ANameDe": "Dienst am Hohlen Berg",
        "ADesc": "An Adeptus Astronomica character gains the Sanctified quality to his attacks with low-tech weapons or psychic powers.",
        "ADescDe": "Ein Charakter des Adeptus Astronomica erhält die Eigenschaft Geheiligt für seine Angriffe mit Niedrigtechnologie-Waffen oder psionischen Kräften."
    },
    "childofdyn": {
        "Apts": [
            "Leadership|Int"
        ],
        "Description": "A Child of Dynasty is a scion of a powerful Rogue Trader lineage, born into privilege, wealth, and influence. They inherit the responsibility of expanding their family’s legacy through exploration, conquest, and diplomacy. Skilled in leadership and accustomed to commanding others, they navigate the void with confidence, driven by ambition and the desire to uphold their dynasty’s name.",
        "Descritpion_DE": "Ein Kind der Dynastie ist ein Nachkomme einer mächtigen Freihändlerfamilie, geboren in ein Leben voller Privilegien, Reichtum und Einfluss. Sie erben die Verantwortung, das Vermächtnis ihrer Familie durch Erforschung, Eroberung und Diplomatie zu erweitern. Geübt in Führung und daran gewöhnt, andere zu kommandieren, durchqueren sie die Leere mit Selbstbewusstsein, getrieben von Ehrgeiz und dem Wunsch, den Namen ihrer Dynastie zu ehren.",
        "IMAGE": "cod.png",
        "NAME": "Child of Dynasty",
        "NAME_DE": "Kind der Dynastie",
        "Skills": [["awareness|scrutiny","@@"],["c_lore","rt"],["linguistics","h_goth"],
			["s_lore","astro"]],
        "Talents": [["aoa|decadence","@@"],["l_sleeper|res","@@cold"],["w_training","las"]
			,["w_training","primitive"]],
        "Gear": [["las_pistol|sp_h_can","@@",1],["las_hrlm_pistol|m_ch_hrlm_swrd|a_car_hrlm_chest","@@@@",1], ["tl_bead","",1],["gr_voidsuit","",1]],
        "AName": "Master of Etiquette",
        "ANameDe": "Meister der Etikette",
        "ADesc": "When dealing with high authority, the character gains additional +10 to Fellowship Tests to influence it.",
        "ADescDe": "Beim Umgang mit hohen Autoritäten erhält der Charakter einen zusätzlichen Bonus von +10 auf Fertigkeitsproben, die auf Einflussnahme mit seinem Einflusswert abzielen."
    },
    "crime": {
        "Apts": [
            "Offence|Social"
        ],
        "Description": "A crime syndicate is a large and well-organized network of criminals operating across multiple worlds or within the shadows of an Imperial hive city. These organizations engage in smuggling, trafficking, illegal trade, and assassination, often wielding significant political and economic influence. Ruthlessly efficient, they rely on secrecy, corruption, and fear to maintain control over their territories.",
        "Descritpion_DE": "Ein Verbrechersyndikat ist ein großes und gut organisiertes Netzwerk von Kriminellen, das über mehrere Welten oder im Schatten einer imperialen Makropole operiert. Diese Organisationen sind in Schmuggel, Menschenhandel, illegalen Handel und Attentate verwickelt und üben oft erheblichen politischen und wirtschaftlichen Einfluss aus. Sie agieren mit gnadenloser Effizienz und sichern ihre Kontrolle über ihre Territorien durch Geheimhaltung, Korruption und Angst.",
        "IMAGE": "crime.png",
        "NAME": "Crime Syndicate",
        "NAME_DE": "Verbrechersyndikat",
        "Skills": [["c_lore","underworld"],["f_lore","cartel"],["f_lore","smuggler"],
			["stealth|deceive","@@"],["intimidate",""],["operate","surface"],["sl_o_hand",""]],
        "Talents": [["peer","underworld"],["w_training","chain"],["w_training","las|sp"]],
        "Gear": [["las_normal","",1],["m_ch_swrd","",1],["a_b_bglove","",1],["cons_ama","",2]],
        "AName": "Criminal Inclination",
        "ANameDe": "Kriminelle Neigung",
        "ADesc": "In addition to the normal uses of Fate Points, the character may spend a Fate point to automatically succeed at a Sleight of Hand, Stealth or Intimidate skill test with a number of degrees of success equal to his Perception bonus",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann der Charakter einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Fingerfertigkeit, Schleichen oder Einschüchtern mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Wahrnehmungsbonus entspricht."
    },
    "deathcult": {
        "Apts": [
            "Ag|Finesse"
        ],
        "Description": "Death Cults are shadowy sects within the Imperium that worship death as a sacred aspect of the Emperor’s will. Their adherents are highly trained assassins and warriors who see killing as a holy act. Often employed by the Inquisition or Imperial elite, Death Cultists are fanatically loyal and lethal, combining religious zeal with unmatched skill in combat and stealth.",
        "Descritpion_DE": "Todeskulte sind geheimnisvolle Sekten im Imperium, die den Tod als heiligen Aspekt des Willens des Imperators verehren. Ihre Anhänger sind hoch ausgebildete Assassinen und Krieger, die das Töten als heiligen Akt betrachten. Sie werden oft von der Inquisition oder der imperialen Elite eingesetzt und sind fanatisch loyal und tödlich, wobei sie religiösen Eifer mit unvergleichlichen Fähigkeiten in Kampf und Heimlichkeit verbinden.",
        "IMAGE": "death.png",
        "NAME": "Death Cult",
        "NAME_DE": "Todeskult",
        "Skills": [["dodge|parry","@@"],["athletics",""],["acrobatics|stealth","@@"],
			["c_lore","ecc"], ["sl_o_hand",""], ["linguistics","h_goth|chaos_marked"]],
        "Talents": [["jaded",""], ["w_training","primitive"]],
        "Gear": [["m_pr_sword|m_pr_knife","@@",1,6],["tl_grap","",1], ["tl_harness","",1],["cons_stimm","",3],["a_b_bglove","",1]],
        "AName": "Preternatural Speed",
        "ADesc": "Once per combat, a Death Cult character may use a Swift Attack or Lightning Attack actions as part of a Charge.",
        "ANameDe": "Übernatürliche Geschwindigkeit",
        "ADescDe": "Ein Charakter eines Todeskults kann einmal pro Kampf eine Aktion wie Schnellangriff oder Blitzangriff als Teil eines Sturmangriffs einsetzen."
    },
    "exorcised": {
        "Apts": [
            "Defense|Knowledge"
        ],
        "Description": "Refers to individuals or objects that have undergone a ritual to cleanse them of Warp corruption, daemonic possession, or other heretical influences. Such rituals are conducted by sanctioned psykers, priests, or inquisitors and often leave lasting scars, both physical and spiritual, on the subject.",
        "Descritpion_DE": "Bezieht sich auf Personen oder Objekte, die einem Ritual unterzogen wurden, um sie von Warp-Korruption, dämonischer Besessenheit oder anderen ketzerischen Einflüssen zu reinigen. Solche Rituale werden von gesegneten Psionikern, Priestern oder Inquisitoren durchgeführt und hinterlassen oft bleibende Spuren, sowohl körperlicher als auch geistiger Natur.",
        "IMAGE": "exorcised.png",
        "NAME": "Exorciced",
        "NAME_DE": "Exorzierter",
        "Skills": [["awareness",""],["deceive|dodge","@@"], ["f_lore","daemonology"],
			["intimidate|scrutiny","@@"]],
        "Talents": [["hatred","daemons"],["w_training","sp"],["w_training","chain"]],
        "Gear": [["sp_auto_pstl|sp_stub_revo","@@",1],["sp_shotgun","",1],["m_ch_blade","",1],["a_b_imperial","",1],
			["cons_obscura|cons_tranq","@@",3],["tl_disguise|tl_excruc","@@",1],["gr_rebbreath","",1]],
        "AName": "Starting Malignancy",
        "ANameDe": "Anfängliches Verderbnis",
        "ADesc": "An Exorcised character starts with one Malignancy",
        "ADescDe": "Ein Exorzierter-Charakter beginnt mit einem Verderbnis.",
		"Malignancy": 1
    },
    "galaxia": {
        "Apts": [
            "Social|WP"
        ],
        "Description": "The Missionaria Galaxia is the missionary branch of the Adeptus Ministorum, tasked with spreading the Imperial Creed to the farthest reaches of the galaxy. Its members are devout preachers and zealous orators who travel to uncharted or rebellious worlds, seeking to convert the population to the worship of the Emperor. They often face extreme dangers but are armed with unshakable faith and the authority of the Ecclesiarchy.",
        "Descritpion_DE": "Die Missionaria Galaxia ist der Missionszweig des Adeptus Ministorum, der damit beauftragt ist, den imperialen Glauben bis in die entlegensten Winkel der Galaxis zu verbreiten. Ihre Mitglieder sind fromme Prediger und eifrige Redner, die zu unbekannten oder rebellischen Welten reisen, um die Bevölkerung zur Verehrung des Imperators zu bekehren. Sie stehen oft extremen Gefahren gegenüber, sind jedoch mit unerschütterlichem Glauben und der Autorität der Ekklesiarchie ausgestattet.",
        "IMAGE": "missionary.png",
        "NAME": "Missionaria Galaxia",
        "NAME_DE": "Missionaria Galaxia",
        "Skills": [["c_lore","imp_creed"],["c_lore","imperium"],["f_lore|medicae","heresy@@"],
			["s_lore","imp_creed"],["linguistics","h_goth"]],
        "Talents": [["w_training","primitive"],["w_training","chain"],["w_training","flame"]],
        "Gear": [["las_normal","",1],["a_flak_coat|a_b_imperial","@@",1],["gr_aqpend","",1],["tl_bead","",1]],
        "AName": "Unshakeable Faith",
        "ANameDe": "Unerschütterlicher Glaube",
        "ADesc": "Missionaria Galaxia characters may spend a Fate Point to avoid gaining Insanity or Corruption for an encounter, as determined by the GM.",
        "ADescDe": "Charaktere der Missionaria Galaxia können einen Schicksalspunkt ausgeben, um zu vermeiden, während eines Konflikts Wahnsinn oder Verderbnis zu erlangen, wie vom Spielleiter festgelegt."
    },
    "gang": {
        "Apts": [
            "Fieldcraft|Offence"
        ],
        "Description": "A gang is a loosely organized group of criminals, often operating in the underhive or lower levels of Imperial cities. They engage in smuggling, theft, and violent turf wars, often tied to larger criminal syndicates or rebellions. Gangs thrive in lawless areas, their members relying on brutality, cunning, and loyalty to their own.",
        "Descritpion_DE": "Eine Gang ist eine lose organisierte Gruppe von Kriminellen, die häufig im Unterstock oder in den unteren Ebenen imperialer Städte operiert. Sie sind in Schmuggel, Diebstahl und gewalttätige Revierkämpfe verwickelt und oft mit größeren Verbrechersyndikaten oder Aufständen verbunden. Gangs gedeihen in gesetzlosen Gebieten, wobei ihre Mitglieder auf Brutalität, Gerissenheit und Loyalität innerhalb ihrer Gruppe setzen.",
        "IMAGE": "gang.png",
        "NAME": "Gang",
        "NAME_DE": "Gang",
        "Skills": [["intimidate",""], ["c_lore","underworld"], ["f_lore","cartel"],
			["f_lore","syndicates"], ["deceive",""], ["athletics|acrobatics","@@"],
			["scrutiny",""]],
        "Talents": [["w_training","sp"], ["w_training","primitive"]],
        "Gear": [["sp_auto_pstl|m_ch_swrd","@@",1],["m_pr_knife|m_pr_improv","@@",1],["a_flak_vest","",1],["cons_stimm|cons_obscura","@@",2]],
        "AName": "Signature Weapon",
        "ANameDe": "Signaturwaffe",
        "ADesc": "A Gang character chooses one specific weapon. The character gains a +10 bonus to hit and a +2 to damage when using a weapon of his choice in combat.",
        "ADescDe": "Ein Charakter einer Gang wählt eine bestimmte Waffe. Der Charakter erhält einen Bonus von +10 auf Trefferwürfe und +2 auf den Schaden, wenn er die gewählte Waffe im Kampf einsetzt."
    },
    "guard": {
        "Apts": [
            "Fieldcraft|Leadership"
        ],
        "Description": "The Imperial Guard, officially known as the Astra Militarum, is the massive standing army of the Imperium, composed of countless regiments drawn from every corner of the galaxy. They serve as the primary ground forces, fighting wars of attrition against the Imperium’s myriad enemies. Despite their lack of advanced technology compared to the Adeptus Astartes, their sheer numbers and unyielding discipline make them a formidable force.",
        "Descritpion_DE": "Die Imperiale Armee, offiziell bekannt als Astra Militarum, ist die gewaltige stehende Armee des Imperiums, bestehend aus unzähligen Regimentern, die aus allen Ecken der Galaxis rekrutiert werden. Sie dienen als primäre Bodentruppen und führen Abnutzungskriege gegen die zahllosen Feinde des Imperiums. Trotz ihres technologischen Nachteils im Vergleich zu den Adeptus Astartes machen ihre schiere Anzahl und ihre eiserne Disziplin sie zu einer beeindruckenden Streitmacht.",
        "IMAGE": "guard.png",
        "NAME": "Imperial Guard",
        "NAME_DE": "Imperiale Armee",
        "Skills": [["athletics",""],["command",""],["c_lore","guard"],["medicae|operate","@@surface"],
			["navigate","surface"]],
        "Talents": [["w_training","las"],["w_training","primitive"]],
        "Gear": [["las_normal|las_pistol&m_pr_sword","@@",1],["a_flak_guard","",1],["tl_grap","",1],["cons_lho","",12]],
        "AName": "Hammer of the Emperor",
        "ANameDe": "Hammer des Imperators",
        "ADesc": "When attacking a target that an ally attacked since the end of the Guardsman’s last turn, the Guardsman can re-roll any results of 1 or 2 on damage rolls.",
        "ADescDe": "Wenn der Gardist ein Ziel angreift, das ein Verbündeter seit dem Ende des letzten Zuges des Gardisten angegriffen hat, darf der Gardist bei Schadenswürfen alle Ergebnisse von 1 oder 2 erneut werfen."
    },
    "heretek": {
        "Apts": [
            "Finesse|Tech"
        ],
        "Description": "A Heretek is a member of the Adeptus Mechanicus who has turned against the tenets of the Machine Cult, engaging in forbidden research, dealing with xenos technology, or worshiping the Dark Mechanicum. They are considered dangerous heretics and are hunted ruthlessly by loyalist Tech-Priests for their betrayal of the Omnissiah.",
        "Descritpion_DE": " Ein Häretiker ist ein Mitglied des Adeptus Mechanicus, das sich gegen die Lehren des Maschinenglaubens gewandt hat, indem es verbotene Forschungen betreibt, mit Xenos-Technologien arbeitet oder dem Dunklen Mechanicum dient. Sie gelten als gefährliche Ketzer und werden von loyalen Tech-Priestern erbarmungslos für ihren Verrat am Omnissiah gejagt.",
        "IMAGE": "heretek.png",
        "NAME": "Heretek",
        "NAME_DE": "Häretiker",
        "Skills": [["deceive|inquiry","@@"],["f_lore","fl_any"], ["medicae|security","@@"],
			["techuse",""], ["trade","tr_any"]],
        "Talents": [["w_training","sp"]],
		"Cybernetics": ["mech",""],
        "Gear": [["sp_stub_revo","",1], ["gr_web","",2],["tl_combi","",1],["a_flak_cloak","",1],["gr_fil_plug","",1]],
        "AName": "Master of Hidden Lores",
        "ANameDe": "Meister der Verborgenen Lehren",
        "ADesc": "When a Heretek makes a Tech-Use test to comprehend, use, repair, or modify an unfamiliar device, he gains a +20 bonus if he has one or more relevant Forbidden Lore skill specializations at Rank 1 (Known) or higher.",
        "ADescDe": "Wenn ein Häretiker eine Tech-Gebrauch-Probe ablegt, um ein unbekanntes Gerät zu verstehen, zu benutzen, zu reparieren oder zu modifizieren, erhält er einen Bonus von +20, sofern er eine oder mehrere relevante Spezialisierungen in Verbotenem Wissen auf Rang 1 (Bekannt) oder höher besitzt."
    },
    "mechanicus": {
        "Apts": [
            "Knowledge|Tech"
        ],
        "Description": "The Adeptus Mechanicus is the Imperium’s technological priesthood, dedicated to the worship of the Machine God and the preservation of ancient knowledge. They are the masters of science, engineering, and the arcane technologies of the Imperium. From Forge Worlds, they provide weapons, starships, and countless other tools of war, blending faith and function in their pursuit of the Omnissiah’s will.",
        "Descritpion_DE": "Das Adeptus Mechanicus ist die technologische Priesterschaft des Imperiums, die dem Maschinengott huldigt und altes Wissen bewahrt. Sie sind Meister der Wissenschaft, Ingenieurskunst und der arkanen Technologien des Imperiums. Von den Schmiedewelten aus liefern sie Waffen, Raumschiffe und unzählige andere Kriegswerkzeuge und verbinden Glauben und Funktion in ihrem Streben nach dem Willen des Omnissiah.",
        "IMAGE": "admech.png",
        "NAME": "Adeptus Mechanicus",
        "NAME_DE": "Adeptus Mechanicus",
        "Skills": [["awareness|operate","@@any"],["c_lore","mechanicus"], ["logic",""],["security",""],
			["techuse",""]],
        "Talents": [["mechadendrite","utility"],["w_training","sp"]],
		"Cybernetics": [["mech",""]],
        "Gear": [["sp_auto_gun|sp_h_can","@@",1],["tl_servoskull","utility",1], ["a_b_imperial","",1],["cons_sacred","",2]],
        "AName": "Replace the Weak Flesh",
        "ANameDe": "Das schwache Fleisch ersetzen",
        "ADesc": "An Adeptus Mechanicus character gains +20 to his Acquisition tests for all cybernetics.",
        "ADescDe": "Ein Charakter des Adeptus Mechanicus erhält einen Bonus von +20 auf seine Erwerbstests für alle Kybernetiken."
    },
    "medicae": {
        "Apts": [
            "Knowledge|Fieldcraft"
        ],
        "Description": "The Officio Medicae is the medical branch of the Imperium, responsible for the training and deployment of doctors, surgeons, and medics across countless battlefields and worlds. Its personnel are highly skilled in treating wounds, combating plagues, and performing cybernetic surgeries. Though often overworked and under-resourced, they are essential for maintaining the health and combat readiness of the Imperium’s forces and citizens.",
        "Descritpion_DE": "Das Officio Medicae ist die medizinische Abteilung des Imperiums, verantwortlich für die Ausbildung und den Einsatz von Ärzten, Chirurgen und Sanitätern auf unzähligen Schlachtfeldern und Welten. Sein Personal ist hochqualifiziert in der Behandlung von Wunden, der Bekämpfung von Seuchen und der Durchführung kybernetischer Operationen. Obwohl oft überarbeitet und unterversorgt, sind sie unverzichtbar für die Aufrechterhaltung der Gesundheit und Einsatzbereitschaft der Streitkräfte und Bürger des Imperiums.",
        "IMAGE": "medic.png",
        "NAME": "Officio Medicae",
        "NAME_DE": "Officio Medicae",
        "Skills": [["c_lore","admin"],["linguistics","h_goth"],["logic",""], ["medicae",""],
			["s_lore","bureaucracy|chymistry"]],
        "Talents": [["w_training","las|primitive"]],
        "Gear": [["las_pistol|m_pr_knife","@@",1,3], ["a_b_imperial","",1], ["tl_quill","",1], ["tl_advmedkit","",1]],
        "AName": "Medicae Imperialis",
        "ANameDe": "Medicae Imperialis",
        "ADesc": "An Officio Medicae character counts the state of damage a character is considered as one degree more or less severe (Critically Damaged count as Heavily Damaged, Heavily Damaged count as Lightly Damaged, etc.).",
        "ADescDe": "Ein Charakter des Officio Medicae zählt den Zustand des Schadens eines Charakters als eine Stufe schwerer oder leichter (Kritisch Verletzt zählt als Schwer Verletzt, Schwer Verletzt zählt als Leicht Verletzt, usw.)."
    },
    "merchant": {
        "Apts": [
            "Fel|Social"
        ],
        "Description": "A Merchant House is a powerful commercial enterprise within the Imperium, controlling vast trade networks, voidships, and wealth. These houses operate across countless worlds, brokering deals, amassing riches, and influencing politics. Members of a Merchant House are skilled negotiators, traders, and opportunists, driven by profit and the desire to dominate interstellar commerce.",
        "Descritpion_DE": "Ein Handelshaus ist ein mächtiges Handelsunternehmen im Imperium, das riesige Handelsnetzwerke, Raumschiffe und Reichtümer kontrolliert. Diese Häuser agieren auf unzähligen Welten, schließen Geschäfte ab, häufen Reichtum an und beeinflussen die Politik. Mitglieder eines Handelshauses sind geschickte Verhandler, Händler und Opportunisten, getrieben von Gewinnstreben und dem Wunsch, den interstellaren Handel zu beherrschen.",
        "IMAGE": "merchant.png",
        "NAME": "Merchant House",
        "NAME_DE": "Handelshaus",
        "Skills": [["commerce",""],["c_lore","imperium"],["charm",""]],
        "Talents": [["hard_bargain",""],["w_training","las"],["w_training","primitive"]],
        "Gear": [["las_pistol","",1],["m_pr_sword","",1], ["tl_quill","",1], ["a_b_imperial","",1]],
        "AName": "Money Talks",
        "ANameDe": "Geld regiert die Welt",
        "ADesc": "In addition to the normal uses of Fate Points, the character may spend a Fate point to automatically succeed at a Commerce, Inquiry or Interrogation skill test with a number of degrees of success equal to his Fellowship bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann der Charakter einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Handel, Nachforschung oder Verhör mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Einflussbonus entspricht"
    },
    "ministorum": {
        "Apts": [
            "Leadership|Social"
        ],
        "Description": "The Adeptus Ministorum, also known as the Ecclesiarchy, is the religious institution of the Imperium that enforces the Imperial Creed. Its priests, preachers, and missionaries spread the worship of the Emperor as the divine savior of humanity. The Ministorum commands immense influence, organizing holy crusades and maintaining shrines and cathedrals across the galaxy.",
        "Descritpion_DE": "Das Adeptus Ministorum, auch bekannt als die Ekklesiarchie, ist die religiöse Institution des Imperiums, die den imperialen Glauben durchsetzt. Ihre Priester, Prediger und Missionare verbreiten die Verehrung des Imperators als göttlichen Retter der Menschheit. Das Ministorum besitzt enormen Einfluss, organisiert heilige Kreuzzüge und unterhält Schreine und Kathedralen in der gesamten Galaxis.",
        "IMAGE": "ministorum.png",
        "NAME": "Adeptus Ministorum",
        "NAME_DE": "Adeptus Ministorum",
        "Skills": [["charm",""],["command",""],["c_lore","ministorum"],["inquiry|scrutiny","@@"],
			["linguistics","h_goth"]],
        "Talents": [["w_training|w_training","flame@@primitive&sp"]],
        "Gear": [["f_hand|m_pr_warhammer&sp_stub_revo","@@",1], ["a_b_imperial|a_flak_vest","@@",1],["tl_servoskull","hailer",1]],
        "AName": "Faith is All",
        "ANameDe": "Glaube ist alles",
        "ADesc": "When spending a Fate point to gain a +10 bonus to any one test, an Adeptus Ministorum character gains a +20 bonus instead.",
        "ADescDe": "Wenn ein Charakter des Adeptus Ministorum einen Schicksalspunkt ausgibt, um einen Bonus von +10 auf eine Fertigkeitsprobe zu erhalten, erhöht sich der Bonus stattdessen auf +20."
    },
    "munitorum": {
        "Apts": [
            "Social|Knowledge"
        ],
        "Description": "The Departmento Munitorum is the logistical branch of the Adeptus Administratum, responsible for supplying the Astra Militarum with weapons, equipment, vehicles, and provisions. It coordinates the vast network of resources needed to sustain the Imperium’s endless wars. Despite its efficiency, its immense bureaucracy can lead to delays or errors, sometimes with disastrous consequences.",
        "Descritpion_DE": "Das Departmento Munitorum ist der logistische Zweig des Adeptus Administratum und verantwortlich für die Versorgung des Astra Militarum mit Waffen, Ausrüstung, Fahrzeugen und Vorräten. Es koordiniert das gewaltige Netzwerk an Ressourcen, das benötigt wird, um die endlosen Kriege des Imperiums zu unterstützen. Trotz seiner Effizienz kann die immense Bürokratie zu Verzögerungen oder Fehlern führen, die manchmal katastrophale Folgen haben.",
        "IMAGE": "munitorum.png",
        "NAME": "Departmento Munitorum",
        "NAME_DE": "Departmento Munitorum",
        "Skills": [["command",""],["c_lore","war"],["c_lore","admin"],["deceive|charm","@@"],
			["s_lore","bureaucracy"],["operate","surface|aeronautica"]],
        "Talents": [["w_training","las|sp"]],
        "Gear": [["las_pistol|sp_stub_revo","@@",1], ["a_b_imperial","",1],["tl_servoskull","utility",1]],
        "AName": "Master of Logistics",
        "ANameDe": "Meister der Logistik",
        "ADesc": "A Departmento Munitorum character gains +20 to his Acquisition tests for all Weapons and Armor.",
        "ADescDe": "Ein Charakter des Departmento Munitorum erhält einen Bonus von +20 auf seine Erwerbstests für alle Waffen und Rüstungen."
    },
    "mutant": {
        "Apts": [
            "Fieldcraft|Offence"
        ],
        "Description": "A Mutant is an individual whose body has been warped by genetic corruption, exposure to the Warp, or toxic environments. Mutants are often ostracized and persecuted within the Imperium, as their deformities are seen as a sign of impurity or heretical influence. While some mutations are minor, others grant extraordinary, and often dangerous, abilities.",
        "Descritpion_DE": "Ein Mutant ist eine Person, deren Körper durch genetische Korruption, Warp-Einflüsse oder toxische Umgebungen verändert wurde. Mutanten werden im Imperium oft geächtet und verfolgt, da ihre Deformitäten als Zeichen von Unreinheit oder ketzerischem Einfluss gelten. Während einige Mutationen geringfügig sind, verleihen andere außergewöhnliche und oft gefährliche Fähigkeiten.",
        "IMAGE": "mutant.png",
        "NAME": "Mutant",
        "NAME_DE": "Mutant",
        "Skills": [["acrobatics|athletics","@@"],["awareness",""], ["deceive|intimidate","@@"],
			["survival",""],["f_lore","mutant"]],
        "Talents": [["w_training","chain"],["w_training","las|sp"]],
        "Gear": [["sp_auto_pstl|las_pistol","@@",1], ["m_ch_swrd","",1], ["a_b_bglove|a_flak_vest","@@",1], ["tl_inject","",1], 
			["cons_obscura|cons_slaught","@@",2]],
        "AName": "Twisted Flesh",
        "ANameDe": "Verdrehte Gestalt",
        "ADesc": "A Mutant character can always choose to fail any test associated with resisting malignancy or mutation. Whenever he would gain a malignancy, he may gain a random mutation instead. You start with a random Mutation",
        "ADescDe": "Ein Mutant kann sich jederzeit entscheiden, jeden Test, der mit dem Widerstand gegen Verderbnis oder Mutationen zusammenhängt, absichtlich zu scheitern. Wann immer er eine Verderbnis erleiden würde, kann er stattdessen eine zufällige Mutation erhalten. Er beginnt mit einer zufälligen Mutation.",
		"Traits": ["amphibious|darksight|natweapons|sonarsense|sturdy|toxic|unnat_ag|unnat_s|unnat_t"],
		"Mutations":["5d10"],
    },
    "navis": {
        "Apts": [
            "Knowledge|Social"
        ],
        "Description": "The Navis Nobilite is a powerful and ancient organization of Navigator families, genetically gifted mutants capable of steering ships through the Warp. These noble houses hold immense influence within the Imperium, as interstellar travel would be impossible without their talents. Despite their indispensable role, their mutant nature isolates them socially, making them both revered and feared.",
        "Descritpion_DE": "Die Navis Nobilite ist eine mächtige und alte Organisation von Navigatorenfamilien, genetisch begabten Mutanten, die in der Lage sind, Schiffe durch den Warp zu lenken. Diese adeligen Häuser besitzen enormen Einfluss im Imperium, da interstellarer Reisen ohne ihre Fähigkeiten unmöglich wäre. Trotz ihrer unverzichtbaren Rolle isoliert ihre mutierte Natur sie gesellschaftlich, was sie zugleich verehrt und gefürchtet macht.",
        "IMAGE": "navis.png",
        "NAME": "Navis Nobilite",
        "NAME_DE": "Navis Nobilite",
        "Skills": [],
        "Talents": [],
        "Gear": [],
        "AName": "",
        "ANameDe": "",
        "ADesc": "",
        "ADescDe": ""
    },
    "navy": {
        "Apts": [
            "Offence|Tech"
        ],
        "Description": "The Imperial Navy is the vast fleet responsible for the defense and expansion of the Imperium’s interstellar territories. It provides warships, troop transports, and orbital support for ground operations. The Navy also patrols Imperial space, combats alien fleets, and ensures the flow of trade and tithes. Its officers and crew are drawn from the countless worlds of the Imperium, trained to uphold the Emperor’s will in the void.",
        "Descritpion_DE": "Die Imperiale Flotte ist die gewaltige Raumstreitmacht, die für die Verteidigung und Expansion der interstellaren Gebiete des Imperiums verantwortlich ist. Sie stellt Kriegsschiffe, Truppentransporter und orbitale Unterstützung für Bodeneinsätze bereit. Die Flotte patrouilliert im imperialen Raum, bekämpft außerirdische Flotten und sichert den Fluss von Handel und Zehnten. Ihre Offiziere und Besatzungsmitglieder werden aus den unzähligen Welten des Imperiums rekrutiert und ausgebildet, um den Willen des Imperators im Weltraum durchzusetzen.",
        "IMAGE": "navy.png",
        "NAME": "Imperial Navy",
        "NAME_DE": "Imperiale Flotte",
        "Skills": [["athletics",""], ["command|intimidate","@@"], ["c_lore","navy"], ["navigate","stellar"],
			["operate","aeronautica|voidship"]],
        "Talents": [["w_training","chain|shock"],["w_training","sp"]],
        "Gear": [["sp_c_shotgun|sp_h_can","@@",1], ["m_ch_swrd|m_sh_whip","@@",1], ["a_flak_coat","",1], ["gr_rebbreath","",1], ["tl_bead","",1]],
        "AName": "Close Quarters Discipline",
        "ANameDe": "Disziplin für Nahkampf",
        "ADesc": "An Imperial Navy character scores one additional degree of success on successful Ballistic Skill tests he makes against targets at Point-Blank range, at Short range, and with whom he is engaged in melee.",
        "ADescDe": "Ein Charakter der Imperialen Flotte erzielt einen zusätzlichen Erfolgsgrad bei erfolgreichen Ballistik-Fertigkeitsproben gegen Ziele auf Punkt-Blank-Entfernung, auf kurze Entfernung und solche, mit denen er im Nahkampf verwickelt ist."
    },
    "noble": {
        "Apts": [
            "Fel|Leadership"
        ],
        "Description": "A Great Noble House is a powerful aristocratic family within the Imperium, wielding immense political, economic, and military influence across entire sectors or even systems. These houses often control vast estates, fleets, and armies, using their wealth and connections to maintain their status. Members of these houses are skilled in diplomacy, intrigue, and command, ever seeking to expand their power and preserve their legacy.",
        "Descritpion_DE": "Ein Großes Adelsgeschlecht ist eine mächtige aristokratische Familie im Imperium, die enormen politischen, wirtschaftlichen und militärischen Einfluss über ganze Sektoren oder sogar Systeme ausübt. Diese Häuser kontrollieren oft riesige Ländereien, Flotten und Armeen und nutzen ihren Reichtum und ihre Verbindungen, um ihren Status zu bewahren. Mitglieder dieser Häuser sind in Diplomatie, Intrigen und Führung geübt und streben stets danach, ihre Macht auszubauen und ihr Erbe zu sichern.",
        "IMAGE": "noble.png",
        "NAME": "Great Noble House",
        "NAME_DE": "Großes Adelsgeschlecht",
        "Skills": [["awareness",""],["c_lore","imperium"],["s_lore","bureaucracy"],
			["s_lore","heraldry"], ["parry|scrutiny","@@"]],
        "Talents": [["w_training","chain|primitive"]],
        "Gear": [["m_pr_sword|m_ch_swrd","@@",1], ["las_pistol","",1], ["a_b_imperial","",1], ["a_b_bglove","",1],["tl_servoskull","utility",1]],
        "AName": "Imperial Etiquette",
        "ANameDe": "Imperiale Etikette",
        "ADesc": "A Great House character gains a +10 bonus to Charm, Deceive and Scrutiny tests when dealing with high authority and in formal situations.",
        "ADescDe": "Ein Charakter eines Großen Hauses erhält einen Bonus von +10 auf Proben in Überreden, Täuschen und Beobachten, wenn er mit hohen Autoritäten oder in formellen Situationen zu tun hat."
    },
    "outcast": {
        "Apts": [
            "Fieldcraft|Social"
        ],
        "Description": "An Outcast is an individual who has been exiled or shunned by society, whether due to crime, heresy, or misfortune. They survive on the fringes of the Imperium, often as smugglers, mercenaries, or scavengers. Though distrusted, their resourcefulness and ability to navigate the underbelly of the galaxy make them valuable allies or dangerous enemies.",
        "Descritpion_DE": "Ein Ausgestoßener ist eine Person, die aufgrund von Verbrechen, Ketzerei oder Unglück aus der Gesellschaft verbannt oder gemieden wurde. Sie überleben am Rande des Imperiums, oft als Schmuggler, Söldner oder Plünderer. Obwohl sie misstraut werden, machen ihre Einfallsreichtum und ihre Fähigkeit, sich in den Schatten der Galaxis zurechtzufinden, sie zu wertvollen Verbündeten oder gefährlichen Feinden.",
        "IMAGE": "outcast.png",
        "NAME": "Outcast ",
        "NAME_DE": "Ausgestoßener",
        "Skills": [["acrobatics|sl_o_hand","@@"],["c_lore","underworld"],["deceive",""],["dodge",""],
			["stealth",""]],
        "Talents": [["w_training","chain"], ["w_training","las|sp"]],
        "Gear": [["sp_auto_pstl|las_pistol","@@",1], ["m_ch_swrd","",1] ["a_b_bglove|a_flak_vest","@@",1] ["tl_inject","",1], 
			["cons_obscura|cons_slaught","@@",2]],
        "AName": "Never Quit",
        "ANameDe": "Niemals aufgeben",
        "ADesc": "An Outcast character counts his Toughness bonus as two higher for purposes of determining Fatigue",
        "ADescDe": "Ein Charakter der Ausgestoßenen zählt seinen Zähigkeitsbonus um zwei höher, wenn es darum geht, Erschöpfung zu bestimmen."
    },
    "pdf": {
        "Apts": [
            "Defense|Fieldcraft"
        ],
        "Description": "The Planetary Defence Force is the local military force of an Imperial world, tasked with defending the planet from internal threats, alien invasions, and Chaos incursions. Composed of local recruits, the PDF varies widely in training, equipment, and effectiveness, often relying on Imperial Guard reinforcements when overwhelmed. They are the first line of defense for the Emperor’s domain.",
        "Descritpion_DE": "Die Planetaren Verteidigungsstreitkräfte sind die lokalen Militäreinheiten einer imperialen Welt, die mit der Verteidigung des Planeten gegen innere Bedrohungen, außerirdische Invasionen und Angriffe des Chaos beauftragt sind. Sie bestehen aus lokalen Rekruten und variieren stark in Ausbildung, Ausrüstung und Effektivität, wobei sie bei Überforderung oft auf Verstärkung durch die Imperiale Armee angewiesen sind. Sie bilden die erste Verteidigungslinie im Herrschaftsbereich des Imperators.",
        "IMAGE": "pdf.png",
        "NAME": "Planetary Defence Force",
        "NAME_DE": "Planetare Verteidigungsstreitkräfte",
        "Skills": [["athletics",""],["command",""],["c_lore","pdf"], ["medicae|operate","@@surface"],
			["navigate","surface"]],
        "Talents": [["w_training","sp"], ["w_training","primitive"]],
        "Gear": [["sp_auto_gun|sp_auto_pstl&m_pr_sword","@@",1], ["tl_cuff","",1] ["a_flak_guard","",1], ["tl_grap","",1] 
			["cons_obscura","",1]],
        "AName": "Granted Authority",
        "ANameDe": "Gewährte Autorität",
        "ADesc": "When using Profit Factor against military-oriented groups, the character gains additional Degrees of Success equal to half his Fellowship Bonus (rounded up)",
        "ADescDe": "Beim Einsatz des Profitfaktors gegenüber militärisch orientierten Gruppen erhält der Charakter zusätzliche Erfolgsgrade in Höhe der Hälfte seines Einflussbonus (aufgerundet)."
    },
    "pirate_fleet": {
        "Apts": [
            "Fel|WS"
        ],
        "Description": "A Pirate Fleet is a ragtag armada of renegades, outlaws, and cutthroats who prey on Imperial shipping lanes, raid isolated colonies, and plunder voidships. Commanded by ruthless leaders, these fleets thrive on chaos, seizing wealth and resources while avoiding Imperial retribution. Their crews are hardened criminals who value profit over loyalty, making them both unpredictable and deadly.",
        "Descritpion_DE": "Eine Piratenflotte ist eine zusammengewürfelte Armada aus Gesetzlosen, Verrätern und Halsabschneidern, die imperiale Handelsrouten überfallen, isolierte Kolonien plündern und Raumschiffe ausrauben. Unter dem Kommando skrupelloser Anführer gedeihen diese Flotten im Chaos und erbeuten Reichtümer und Ressourcen, während sie der Vergeltung des Imperiums entkommen. Ihre Besatzungen sind abgebrühte Kriminelle, die Profit über Loyalität stellen, was sie unberechenbar und tödlich macht.",
        "IMAGE": "pirate.png",
        "NAME": "Pirate Fleet",
        "NAME_DE": "Piratenflotte",
        "Skills": [["f_lore","pirates"],["parry",""],["medicae",""],["techuse",""]],
        "Talents": [["decadence",""],["hard_bargain|contact_network","@@"],
			["w_training","chain|power"], ["w_training","las"]],
        "Gear": [["las_lock|m_ch_swrd","best@@",1], ["a_b_h_leather","",1],["tl_servoskull","utility",1], ["cons_ama","",3]],
        "AName": "Aye laddie, ‘ats parry not parley!",
        "ANameDe": "Aye, Junge, das ist Parieren, nicht Verhandeln!",
        "ADesc": "In addition to the normal uses of Fate Points, a the character may spend a Fate point to gain rerolls for Parry (up to his Weapon Skill Bonus) until the end of the encounter.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann der Charakter einen Schicksalspunkt ausgeben, um bis zum Ende des Konflikts Wiederholungswürfe für Parieren (bis zu seinem Waffenfertigkeitsbonus) zu erhalten."
    },
    "rt_fleet": {
        "Apts": [
            "Finesse|Social"
        ],
        "Description": "A Rogue Trader Fleet is a private armada commanded by a Rogue Trader, an individual granted a Warrant of Trade by the Imperium. These fleets are composed of powerful voidships and loyal crews, venturing beyond the boundaries of Imperial space to explore, trade, and conquer in the Emperor’s name. They act with near-total autonomy, amassing wealth and influence while charting the unknown.",
        "Descritpion_DE": "Eine Freihändlerflotte ist eine private Armada, die von einem Freihändler kommandiert wird, einem Individuum, dem vom Imperium ein Kaperbrief ausgestellt wurde. Diese Flotten bestehen aus mächtigen Raumschiffen und treuen Besatzungen, die jenseits der Grenzen des imperialen Raums erkunden, handeln und erobern, um im Namen des Imperators zu agieren. Sie handeln mit nahezu völliger Autonomie, sammeln Reichtum und Einfluss und kartografieren das Unbekannte.",
        "IMAGE": "rogue.png",
        "NAME": "Rogue Trader Fleet",
        "NAME_DE": "Freihändlerflotte",
        "Skills": [["charm|scrutiny","@@"],["commerce",""],["c_lore","rt"],
			["linguistics","xenos"],["operate","surface|aeronautica"]],
        "Talents": [["w_training","las|sp"],["w_training","shock"]],
        "Gear": [["las_pistol|sp_auto_pstl","compact@@compact",1], ["m_sh_maul","",1], ["a_mesh_cloak|a_car_chest","@@",1], 
			["tl_auspex","",1]],
        "AName": "Inured to the Xenos",
        "ANameDe": "Abgehärtet gegen Xenos",
        "ADesc": "A character from a Rogue Trader Fleet gains a +10 bonus to Fear tests caused by aliens and a +20 bonus to Interaction skill tests with alien characters.",
        "ADescDe": "Ein Charakter aus einer Freihändlerflotte erhält einen Bonus von +10 auf Furchtproben, die durch Aliens verursacht werden, und einen Bonus von +20 auf Interaktionsfertigkeitsproben mit Alien-Charakteren."
    },
    "skitarii": {
        "Apts": [
            "Offence|Finesse"
        ],
        "Description": "The Skitarii are the cybernetic soldiers of the Adeptus Mechanicus, engineered for war and unwavering loyalty to the Machine God. Enhanced with powerful augmentations, they serve as the Mechanicus’ primary military force, wielding advanced weaponry and fighting in perfect synchronization. Whether defending Forge Worlds or leading Mechanicus expeditions, the Skitarii are relentless warriors driven by faith and logic.",
        "Descritpion_DE": "Die Skitarii sind die kybernetischen Soldaten des Adeptus Mechanicus, erschaffen für den Krieg und unerschütterlich loyal zum Maschinengott. Mit mächtigen Verbesserungen ausgestattet, dienen sie als die Hauptstreitmacht des Mechanicus, bewaffnet mit fortschrittlicher Technologie und kämpfend in perfekter Synchronisation. Ob bei der Verteidigung von Schmiedewelten oder der Führung von Mechanicus-Expeditionen – die Skitarii sind unerbittliche Krieger, getrieben von Glaube und Logik.",
        "IMAGE": "skitarii.png",
        "NAME": "Skitarii",
        "NAME_DE": "Skitarii",
        "Skills": [["athletics",""],["awareness",""],["c_lore","mechanicus"],["dodge",""],
			["linguistics","tech_lingo"]],
        "Talents": [["w_training","primitive"],["w_training","sp"]],
        "Gear": [["a_b_imperial","",1],["sp_auto_gun|m_pr_sword&sp_auto_pstl","@@",1]],
		"Cybernetics": [["bionic","good"]],
        "AName": "Eternal Vigilance",
        "ANameDe": "Ewige Wachsamkeit",
        "ADesc": "When attacking, the Skitarii Character can replace any results of 1 or 2 on damage rolls with his Intelligence Bonus instead.",
        "ADescDe": "Beim Angreifen kann ein Skitarii-Charakter alle Ergebnisse von 1 oder 2 bei Schadenswürfen durch seinen Intelligenzbonus ersetzen."
    },
    "sororitas": {
        "Apts": [
            "Offence|Social"
        ],
        "Description": "The Adepta Sororitas, also known as the Sisters of Battle, are an all-female militant order dedicated to the Imperial Creed and the service of the Ecclesiarchy. They are fanatically devout warriors who combine martial prowess with unshakable faith, wielding holy weapons to purge heretics, witches, and xenos in the name of the Emperor.",
        "Descritpion_DE": "Die Adepta Sororitas, auch bekannt als die Schwestern des Kampfes, sind ein rein weiblicher Kampforden, der dem imperialen Glauben und dem Dienst der Ekklesiarchie gewidmet ist. Sie sind fanatisch gläubige Kriegerinnen, die Kampfkraft mit unerschütterlichem Glauben verbinden und heilige Waffen führen, um Ketzer, Hexen und Xenos im Namen des Imperators zu reinigen.",
        "IMAGE": "sororitas.png",
        "NAME": "Adepta Sororitas",
        "NAME_DE": "Adepta Sororitas",
        "Skills": [["athletics",""],["charm|intimidate","@@"],["c_lore","sororitas"],["linguistics","h_goth"],
			["medicae|parry","@@"]],
        "Talents": [["w_training","flame|las"],["w_training","chain"]],
        "Gear": [["las_pistol|f_hand","@@",1], ["m_ch_blade","",1], ["a_b_bglove","",1], ["tl_bead","",1]],
        "AName": "Incorruptible Devotion",
        "ANameDe": "Unbestechliche Hingabe",
        "ADesc": "Whenever an Adepta Sororitas character would gain 1 or more Corruption Points, she gains that many Insanity Points minus 1 (to a minimum of 0) instead.",
        "ADescDe": "Wann immer ein Charakter der Adepta Sororitas 1 oder mehr Verderbenspunkte erhalten würde, erhält sie stattdessen ebenso viele Wahnsinnspunkte minus 1 (mindestens 0)."
    },
    "telepathica": {
        "Apts": [
            "Defense|Psyker"
        ],
        "Description": "The Adeptus Astra Telepathica is the Imperial institution responsible for training and regulating psykers. It oversees the Scholastica Psykana, where psykers are tested, sanctioned, and taught to safely wield their powers. Its members include Astropaths, soul-bound to the Emperor, who ensure communication across the vastness of the galaxy through the Warp.",
        "Descritpion_DE": "Das Adeptus Astra Telepathica ist die imperiale Institution, die für die Ausbildung und Regulierung von Psionikern verantwortlich ist. Es überwacht die Scholastica Psykana, in der Psioniker getestet, gesegnet und darin ausgebildet werden, ihre Kräfte sicher einzusetzen. Zu seinen Mitgliedern gehören Astropathen, die durch die Seelenbindung an den Imperator gebunden sind und die Kommunikation über die Weiten der Galaxis hinweg durch den Warp gewährleisten.",
        "IMAGE": "astra.png",
        "NAME": "Adeptus Astra Telepathica",
        "NAME_DE": "Adeptus Astra Telepathica",
        "Skills": [["awareness",""],["c_lore","astro"],["deceive|interrogation","@@"],
			["f_lore","warp"],["psyniscience|scrutiny","@@"]],
        "Talents": [["w_training","las"],["w_training","primitive"]],
        "Gear": [["las_pistol","",1], ["m_pr_staff|m_pr_whip","@@",1], ["a_flak_cloak","",1], ["tl_bead|tl_focus","@@",1]],
        "AName": "The Constant Threat",
        "ANameDe": "Die ständige Bedrohung",
        "ADesc": "When the character or an ally within 10 meters triggers a Psychic Phenomenon, the Adeptus Astra Telepathica character can increase or decrease the result by amount equal to his Willpower bonus.",
        "ADescDe": "Wenn der Charakter oder ein Verbündeter innerhalb von 10 Metern ein psychisches Phänomen auslöst, kann der Charakter des Adeptus Astra Telepathica das Ergebnis um einen Betrag in Höhe seines Willenskraftbonus erhöhen oder verringern."
    },
    "tempest": {
        "Apts": [
            "Finesse|Fieldcraft"
        ],
        "Description": "The Militarum Tempestus, also known as the Tempestus Scions or Storm Troopers, are the elite shock troops of the Astra Militarum. Trained in the prestigious Schola Progenium, they carry out high-risk missions requiring exceptional discipline, skill, and precision. Armed with advanced weaponry and carapace armor, they serve as the Imperium’s spearhead in combat, often deployed for assassination, sabotage, and infiltration operations.",
        "Descritpion_DE": "Das Militarum Tempestus, auch bekannt als Tempestus-Scions oder Sturmtruppen, ist die Elite-Schocktruppe des Astra Militarum. Sie werden an der angesehenen Schola Progenium ausgebildet und führen riskante Missionen aus, die außergewöhnliche Disziplin, Fähigkeiten und Präzision erfordern. Ausgerüstet mit fortschrittlicher Bewaffnung und Carapax-Rüstungen dienen sie als Speerspitze des Imperiums im Kampf und werden häufig für Attentate, Sabotage und Infiltrationsoperationen eingesetzt.",
        "IMAGE": "tempest.png",
        "NAME": "Militarum Tempestus",
        "NAME_DE": "Militarum Tempestus",
        "Skills": [["awareness",""],["dodge|parry","@@"],["intimidate",""],["security",""],
			["s_lore","tactica"],["stealth",""]],
        "Talents": [["w_training","las"],["w_training","primitive"]],
        "Gear": [["las_hs_gun|m_pr_sword&las_hs_pistol","@@",1], ["a_car_tempest","",1]],
        "AName": "Expert Operator",
        "ANameDe": "Erfahrener Operator",
        "ADesc": "A Militarum Tempestus character gains a +10 bonus to all skill tests made to operate military ground vehicles, walkers, skimmers or flyers.",
        "ADescDe": "Ein Charakter des Militarum Tempestus erhält einen Bonus von +10 auf alle Fertigkeitsproben, die zum Bedienen von militärischen Bodenfahrzeugen, Läufern, Schwebepanzern oder Fluggeräten gemacht werden."
    }
}


var roles = {
    "ace": {
        "ADesc": "In addition to the normal uses of Fate points, an Ace character may spend a Fate point to automatically succeed at an Operate or Survival skill test involving vehicles or living steeds with a number of degrees of success equal to his Agility bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Elitepilot einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Bedienen oder Überleben zu bestehen, wenn diese Fahrzeuge oder lebende Reittiere betrifft, mit einer Anzahl von Erfolgsgraden, die seinem Beweglichkeitsbonus entspricht.",
        "AName": "Right Stuff",
        "ANameDe": "Das Zeug dazu",
        "Aptitudes": ["Ag", "Finesse", "Per", "Tech", "WP"],
        "Description": "An ace pilot is a master of aerial or void-based vehicles, excelling in combat maneuvers, precision flying, and handling extreme conditions. Their skill sets them apart, making them invaluable in dogfights, fleet operations, or high-stakes missions.",
        "Descritpion_DE": "Ein Elitepilot ist ein Meister der Steuerung von Luft- oder Raumfahrzeugen und brilliert in Kampfmanövern, präzisem Fliegen und dem Umgang mit extremen Bedingungen. Seine Fähigkeiten heben ihn hervor und machen ihn in Luftkämpfen, Flottenoperationen oder risikoreichen Missionen unverzichtbar.",
        "IMAGE": "ace.png",
        "NAME": "Ace",
        "NAME_DE": "Elitepilot",
        "Talents": [["hard_target|hotshot_pilot","@@"]]
    },
    "agent": {
        "ADesc": "When making an Awareness, Inquiry, or Scrutiny skill test, an Agent character adds an extra number of Degrees of Success to a successful test, equal to half his Perception Bonus.",
        "ADescDe": "Bei einer Fertigkeitsprobe in Wahrnehmung, Nachforschung oder Beobachten fügt ein Agent einem erfolgreichen Test eine zusätzliche Anzahl von Erfolgsgraden hinzu, die der Hälfte seines Wahrnehmungsbonus entspricht.",
        "AName": "All the right questions",
        "ANameDe": "Die richtigen Fragen",
        "Aptitudes": ["Int", "Ag", "Fel", "Per", "Tech"],
        "Description": "An agent is a skilled operative working covertly or overtly to accomplish specific missions or enforce the will of their superiors. They are masters of adaptability, capable of acting as spies, negotiators, enforcers, or saboteurs, depending on the needs of their organization.",
        "Descritpion_DE": "Ein Agent ist ein geschickter Operateur, der verdeckt oder offen arbeitet, um bestimmte Missionen zu erfüllen oder den Willen seiner Vorgesetzten durchzusetzen. Sie sind Meister der Anpassungsfähigkeit und können je nach den Bedürfnissen ihrer Organisation als Spione, Unterhändler, Vollstrecker oder Saboteure agieren.",
        "IMAGE": "agent.png",
        "NAME": "Agent",
        "NAME_DE": "Agent",
        "Talents": [["keen_intuition|disarm","@@"]]
    },
    "artisan": {
        "ADesc": "In addition to the normal use of Fate Points, an Artisan character may spend a Fate point to automatically succeed at a Crafting test, adding a number of Degrees of Success equal to his Intelligence Bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Handwerksmeister einen Schicksalspunkt ausgeben, um eine Handwerksprobe automatisch zu bestehen und eine Anzahl von Erfolgsgraden hinzuzufügen, die seinem Intelligenzbonus entspricht.",
        "AName": "Master of Crafts",
        "ANameDe": "Meister der Handwerkskunst",
        "Aptitudes": ["Ag", "Per", "Fieldcraft", "Tech", "Int"],
        "Description": "An artisan is a master craftsman and creator, skilled in producing exceptional works of art, intricate designs, or advanced technology. Whether working with their hands, tools, or machinery, artisans combine creativity with precision, often leaving a lasting mark through their unique and valuable creations.",
        "Descritpion_DE": "Ein Handwerksmeister ist ein meisterhafter Künstler und Schöpfer, der außergewöhnliche Kunstwerke, komplexe Designs oder fortschrittliche Technologien herstellt. Ob mit den Händen, Werkzeugen oder Maschinen, Handwerksmeister verbinden Kreativität mit Präzision und hinterlassen oft durch ihre einzigartigen und wertvollen Kreationen einen bleibenden Eindruck.",
        "IMAGE": "artisan.png",
        "NAME": "Artisan",
        "NAME_DE": "Handwerksmeister",
        "Talents": [["res|tech_knock","any@@"]]
    },
    "assassin": {
        "ADesc": "In addition to the normal uses of Fate points, when an Assassin successfully hits with an attack, he may spend a Fate point to inflict additional damage equal to his degrees of success on the attack roll on the first hit the attack inflicts.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Assassine, wenn er mit einem Angriff erfolgreich trifft, einen Schicksalspunkt ausgeben, um zusätzlichen Schaden in Höhe seiner Erfolgsgrade beim Angriffswurf auf den ersten Treffer des Angriffs zu verursachen.",
        "AName": "Sure Kill",
        "ANameDe": "Sicherer Tod",
        "Aptitudes": ["Agility", "BS|WS", "Fieldcraft", "Finesse", "Per"],
        "Description": "An assassin is a master of stealth, precision, and lethality, trained to eliminate targets with deadly efficiency. Operating from the shadows, they rely on their agility, cunning, and expertise with weapons to complete their missions, often with surgical precision and without leaving a trace.",
        "Descritpion_DE": "Ein Assassine ist ein Meister der Heimlichkeit, Präzision und Tödlichkeit, ausgebildet, um Ziele mit tödlicher Effizienz auszuschalten. Sie agieren aus den Schatten, nutzen ihre Beweglichkeit, Gerissenheit und Waffenkunst, um ihre Missionen mit chirurgischer Präzision und ohne Spuren zu hinterlassen, auszuführen.",
        "IMAGE": "assassin.png",
        "NAME": "Assassin",
        "NAME_DE": "Assassine",
        "Talents": [["jaded|leapup","@@"]]
    },
    "brawler": {
        "ADesc": "In addition to the normal uses of Fate Points, a Brawler character may spend a Fate Point to gain one additional Reaction.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Schläger einen Schicksalspunkt ausgeben, um eine zusätzliche Reaktion zu erhalten.",
        "AName": "Lightning Reflexes",
        "ANameDe": "Blitzschnelle Reflexe",
        "Aptitudes":  ["Ag", "Finesse", "Offence", "S", "T|WS"],
        "Description": "A brawler is a rough and tenacious fighter who thrives in close combat, relying on brute strength, raw aggression, and sheer determination. Skilled in unarmed or improvised fighting, they excel in chaotic, hand-to-hand brawls, often using their environment and physical resilience to overcome their opponents.",
        "Descritpion_DE": "Ein Schläger ist ein harter und zäher Kämpfer, der im Nahkampf glänzt und sich auf rohe Kraft, unbändige Aggression und schiere Entschlossenheit verlässt. Versiert im unbewaffneten oder improvisierten Kampf, brilliert er in chaotischen Handgemengen und nutzt oft seine Umgebung und körperliche Widerstandskraft, um seine Gegner zu besiegen.",
        "IMAGE": "brawler.png",
        "NAME": "Brawler",
        "NAME_DE": "Schläger",
        "Talents": [["ambidextrous|streetfight","@@"]]
    },
    "chirurgeon": {
        "ADesc": "In addition to the normal uses of Fate points when a Chirurgeon character fails a test to provide First Aid, he can spend a Fate point to automatically succeed instead with the degrees of success equal to his Intelligence bonus. ",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Chirurg, wenn er eine Probe zur Ersten Hilfe nicht besteht, einen Schicksalspunkt ausgeben, um stattdessen automatisch zu bestehen, mit einer Anzahl von Erfolgsgraden, die seinem Intelligenzbonus entspricht.",
        "AName": "Dedicated Healer",
        "ANameDe": "Engagierter Heiler",
        "Aptitudes": ["Fieldcraft", "Int", "Knowledge", "S", "T"],
        "Description": "A chirurgeon is a highly skilled medical practitioner specializing in treating wounds, performing surgeries, and saving lives in dire situations. Often found on the battlefield or in grim conditions, they rely on their medical expertise and steady hands to mend the broken and bring the injured back from the brink of death.",
        "Descritpion_DE": "Ein Chirurg ist ein hochqualifizierter Mediziner, der sich auf die Behandlung von Wunden, die Durchführung von Operationen und das Retten von Leben in extremen Situationen spezialisiert hat. Oft auf dem Schlachtfeld oder unter düsteren Bedingungen zu finden, verlassen sie sich auf ihr medizinisches Wissen und ihre ruhigen Hände, um Verletzte zu versorgen und sie vor dem Tod zu bewahren.",
        "IMAGE": "chirurgeon.png",
        "NAME": "Chirurgeon",
        "NAME_DE": "Chirurg",
        "Talents": [["res|takedown","any@@"]]
    },
    "commander": {
        "ADesc": "When using a Fate Point to grant a bonus to a roll, a Commander character may instead grant the bonus to another character, who gains +20 to the roll instead of +10.",
        "ADescDe": "Wenn ein Kommandant einen Schicksalspunkt verwendet, um einen Bonus auf einen Wurf zu gewähren, kann er stattdessen den Bonus einem anderen Charakter gewähren, der +20 auf den Wurf anstelle von +10 erhält.",
        "AName": "Follow my Lead!",
        "ANameDe": "Folgt meinem Beispiel!",
        "Aptitudes": ["Fel", "Int", "Leadership", "Social", "WS"],
        "Description": "A commander is a skilled leader responsible for directing troops, managing strategies, and making critical decisions in the heat of battle. With a combination of tactical acumen, authority, and the ability to inspire their forces, commanders play a pivotal role in ensuring victory and maintaining discipline on the battlefield.",
        "Descritpion_DE": "Ein Kommandant ist ein erfahrener Anführer, der für die Führung von Truppen, die Ausarbeitung von Strategien und die Entscheidungsfindung in der Hitze des Gefechts verantwortlich ist. Mit einer Kombination aus taktischem Geschick, Autorität und der Fähigkeit, seine Kräfte zu inspirieren, spielt der Kommandant eine entscheidende Rolle bei der Sicherung des Sieges und der Aufrechterhaltung der Disziplin auf dem Schlachtfeld.",
        "IMAGE": "commander.png",
        "NAME": "Commander",
        "NAME_DE": "Kommandant",
        "Talents": [["constant_vigilance|heroic_insp","any@@"]]
    },
    "crusader": {
        "ADesc": "In addition to the normal uses of Fate points, a Crusader character can also spend a Fate Point to automatically pass a Fear test with a number of degrees of success equal to his Willpower bonus. In addition, whenever he inflicts a hit with a melee attack against a target with the Fear (X) trait, he inflicts X additional damage and counts his weapon’s penetration as being X higher.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Kreuzritter-Charakter einen Schicksalspunkt ausgeben, um automatisch eine Furchtprobe zu bestehen, mit einer Anzahl von Erfolgsgraden, die seinem Willenskraftbonus entspricht. Darüber hinaus fügt er, wenn er mit einem Nahkampfangriff einen Treffer gegen ein Ziel mit der Eigenschaft Furcht (X) erzielt, X zusätzlichen Schaden zu und zählt die Durchschlagskraft seiner Waffe als um X höher.",
        "AName": "Smite the Unholy",
        "ANameDe": "Zerschmettere das Unheilige",
        "Aptitudes": ["Knowledge", "Offence", "S", "T", "WP"],
        "Description": "A crusader is a zealous warrior dedicated to a righteous cause, often fighting in the name of the Emperor or a holy mission. Clad in heavy armor and wielding weapons of faith and steel, they are unyielding on the battlefield, serving as both defenders of the faithful and relentless avengers of the Imperium's enemies.",
        "Descritpion_DE": "Ein Kreuzritter ist ein eifriger Krieger, der sich einer gerechten Sache verschrieben hat, oft im Namen des Imperators oder einer heiligen Mission kämpfend. Gekleidet in schwere Rüstung und bewaffnet mit Waffen aus Glauben und Stahl, sind sie unnachgiebig auf dem Schlachtfeld und dienen sowohl als Verteidiger der Gläubigen als auch als unerbittliche Rächer der Feinde des Imperiums.",
        "IMAGE": "crusader.png",
        "NAME": "Crusader",
        "NAME_DE": "Kreuzritter",
        "Talents": [["bodyguard|deny_witch","@@"]]
    },
    "desperado": {
        "ADesc": "Once per round, after performing a Move action, a Desperado character may perform a single Standard Attack with a Pistol weapon he is currently wielding as a Free Action.",
        "ADescDe": "Einmal pro Runde kann ein Desperado-Charakter nach der Durchführung einer Bewegungsaktion einen einzelnen Standardangriff mit einer Pistolenwaffe, die er gerade führt, als freie Aktion ausführen.",
        "AName": "Move and Shoot",
        "ANameDe": "Bewegen und Schießen",
        "Aptitudes": ["Ag", "BS", "Defence", "Fel", "Finesse"],
        "Description": "A desperado is a daring and resourceful individual who lives by their own rules, often on the fringes of society. Quick with a gun and quicker with their wits, they thrive in lawless environments, relying on their charisma and combat skills to navigate a dangerous and unpredictable world.",
        "Descritpion_DE": "Ein Desperado ist eine wagemutige und einfallsreiche Person, die nach ihren eigenen Regeln lebt und sich oft am Rande der Gesellschaft bewegt. Schnell mit der Waffe und noch schneller im Denken, gedeihen sie in gesetzlosen Umgebungen und verlassen sich auf ihren Charme und ihre Kampffähigkeiten, um in einer gefährlichen und unberechenbaren Welt zu überleben.",
        "IMAGE": "desperado.png",
        "NAME": "Desperado",
        "NAME_DE": "Desperado",
        "Talents": [["catfall|q_draw","@@"]]
    },
    "emissary": {
        "ADesc": "In addition to the normal uses of Fate points, when a Emissary is dealing with Non-Imperial, he can spend a Fate point to automatically succeed a Opposed Interaction Test with the degrees of success equal to his Fellowship Bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Gesandter, wenn er mit Nicht-Imperialen zu tun hat, einen Schicksalspunkt ausgeben, um automatisch eine entgegengesetzte Interaktionsprobe mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Einflussbonus entspricht.",
        "AName": "Master Ambassador",
        "ANameDe": "Meisterbotschafter",
        "Aptitudes": ["Fel", "Fieldcraft", "Per", "Social", "Willpower"],
        "Description": "An emissary is a diplomat and envoy, skilled in negotiation, persuasion, and fostering alliances. Tasked with representing their faction, house, or organization, they navigate complex social and political landscapes to build relationships, broker deals, and further their agenda with tact and eloquence.",
        "Descritpion_DE": "Ein Gesandter ist ein Diplomat und Abgesandter, der in Verhandlungen, Überzeugungskunst und dem Aufbau von Allianzen bewandert ist. Mit der Aufgabe betraut, ihre Fraktion, ihr Haus oder ihre Organisation zu repräsentieren, navigieren sie durch komplexe soziale und politische Landschaften, um Beziehungen aufzubauen, Vereinbarungen zu treffen und ihre Ziele mit Taktgefühl und Eloquenz voranzutreiben.",
        "IMAGE": "emmisarry.png",
        "NAME": "Emissary",
        "NAME_DE": "Gesandter",
        "Talents": [["contact_network|keen_intuition","@@"]]
    },
    "enforcer": {
        "ADesc": "In addition to the normal uses of Fate Points, an Enforcer character may spend a Fate Point to automatically pass a Disarm, Double Team or Takedown action, with a number of degrees of success equal to his Weapon Skill Bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Vollstrecker einen Schicksalspunkt ausgeben, um eine Entwaffnen-, Doppelschlag- oder Niederschlagsaktion automatisch zu bestehen, mit einer Anzahl von Erfolgsgraden, die seinem Waffenfertigkeitsbonus entspricht.",
        "AName": "De-escalation Expert",
        "ANameDe": "Experte für Deeskalation",
        "Aptitudes": ["S", "T", "WS", "BS", "Offence"],
        "Description": "An enforcer is a lawkeeper and executor of authority, tasked with maintaining order and suppressing dissent. Operating in the dangerous and chaotic environments of the Imperium, they rely on intimidation, combat skills, and a strong sense of duty to impose the Emperor's justice and uphold societal stability.",
        "Descritpion_DE": "Ein Vollstrecker ist ein Gesetzeshüter und Ausführer von Autorität, dessen Aufgabe es ist, Ordnung aufrechtzuerhalten und Aufstände zu unterdrücken. In den gefährlichen und chaotischen Umgebungen des Imperiums agierend, verlassen sie sich auf Einschüchterung, Kampffähigkeiten und einen starken Sinn für Pflicht, um die Gerechtigkeit des Imperators durchzusetzen und die Stabilität der Gesellschaft zu wahren.",
        "IMAGE": "enforcer.png",
        "NAME": "Enforcer",
        "NAME_DE": "Vollstrecker",
        "Talents": [["q_draw|disarm","@@"]]
    },
    "engineer": {
        "ADesc": "In addition to the normal use of Fate Points, an Engineer character may spend a Fate Point to automatically pass a Repair test with a number of Degrees of Success equal to his Intelligence Bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Ingenieur einen Schicksalspunkt ausgeben, um eine Reparaturprobe automatisch zu bestehen, mit einer Anzahl von Erfolgsgraden, die seinem Intelligenzbonus entspricht.",
        "AName": "Rites of Rewiring",
        "ANameDe": "Riten der Neuverdrahtung",
        "Aptitudes": ["Tech", "S", "T", "Int", "Per"],
        "Description": "An engineer is a highly skilled individual responsible for designing, building, and maintaining complex systems, machinery, and structures. They play a vital role in the Imperium, ensuring that its vast array of technologies, vehicles, and infrastructures function properly, often combining technical expertise with creativity and problem-solving skills.",
        "Descritpion_DE": "Ein Ingenieur ist eine hochqualifizierte Person, die für die Planung, den Bau und die Wartung komplexer Systeme, Maschinen und Strukturen verantwortlich ist. Sie spielen eine entscheidende Rolle im Imperium, indem sie sicherstellen, dass die Vielzahl an Technologien, Fahrzeugen und Infrastrukturen ordnungsgemäß funktioniert, und kombinieren dabei technisches Wissen mit Kreativität und Problemlösungskompetenz.",
        "IMAGE": "engineer.png",
        "NAME": "Engineer",
        "NAME_DE": "Ingenieur",
        "Talents": [["res|weapon_tech","any@@"]]
    },
    "explorator": {
        "ADesc": "In addition to the normal uses of Fate Points, an Explorator character may spend a Fate Point to automatically pass an Investigative Skill during the pursuit of an Explication. If degrees of success are required, the success is counted as having rolled a 01.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Explorator einen Schicksalspunkt ausgeben, um automatisch eine Ermittlungsskill-Probe während der Verfolgung einer Erklärung zu bestehen. Wenn Erfolgsgrade erforderlich sind, wird der Erfolg so gewertet, als hätte er eine 01 gewürfelt.",
        "AName": "The Quest for Knowledge",
        "ANameDe": "Die Suche nach Wissen",
        "Aptitudes": ["Tech", "Int", "Per", "BS", "Finesse"],
        "Description": "An explorator is a member of the Adeptus Mechanicus tasked with venturing into the unknown to uncover lost technologies, forgotten knowledge, and resources for the Imperium. Equipped with advanced tools, cybernetics, and a zealous devotion to the Machine God, they lead expeditions into uncharted territories, alien ruins, or ancient battlefields to recover treasures of the past.",
        "Descritpion_DE": "Ein Explorator ist ein Mitglied des Adeptus Mechanicus, dessen Aufgabe es ist, in das Unbekannte vorzustoßen, um verlorene Technologien, vergessenes Wissen und Ressourcen für das Imperium zu entdecken. Ausgestattet mit fortschrittlichen Werkzeugen, Kybernetiken und einem glühenden Glauben an den Maschinengott führen sie Expeditionen in unerforschte Gebiete, fremde Ruinen oder alte Schlachtfelder, um die Schätze der Vergangenheit zu bergen.",
        "IMAGE": "explorator.png",
        "NAME": "Explorator",
        "NAME_DE": "Explorator",
        "Talents": [["tech_knock|keen_intuition","@@"]]
    },
    "fanatic": {
        "ADesc": "In addition to the normal uses of Fate points a Fanatic character may spend a Fate point to count as having the Hatred talent against his current foe for the duration of the encounter. Should he choose to leave combat against a Hated foe in that encounter, however, he gains 1 Insanity point.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Fanatiker-Charakter einen Schicksalspunkt ausgeben, um für die Dauer des Konflikts als im Besitz des Talents Hass gegen seinen aktuellen Feind zu gelten. Sollte er sich jedoch entscheiden, den Kampf gegen einen gehassten Feind in diesem Konflikt zu verlassen, erhält er 1 Wahnsinnspunkt.",
        "AName": "Death to All Who Oppose Me!",
        "ANameDe": "Tod allen, die sich mir widersetzen!",
        "Aptitudes": ["Leadership", "Offence", "T", "WS", "WP"],
        "Description": "A fanatic is an individual driven by unwavering devotion to a cause, belief, or figure, often to the point of obsession. Their zeal makes them fearless and unrelenting, willing to sacrifice everything in the name of their faith or mission, making them both inspiring and dangerous to those around them.",
        "Descritpion_DE": "Ein Fanatiker ist eine Person, die von unerschütterlicher Hingabe an eine Sache, einen Glauben oder eine Figur getrieben wird, oft bis zur Besessenheit. Ihr Eifer macht sie furchtlos und unnachgiebig, bereit, alles im Namen ihres Glaubens oder ihrer Mission zu opfern, was sie sowohl inspirierend als auch gefährlich für ihre Umgebung macht.",
        "IMAGE": "fanatic.png",
        "NAME": "Fanatic",
        "NAME_DE": "Fanatiker",
        "Talents": [["jaded|deny_witch","@@"]]
    },
    "grunt": {
        "ADesc": "A grunt character reduces all sources of damage by -1 for every ten wounds he possesses. In addition to the normal use of Fate Points, a Grunt character may spend a Fate Point to reduce the damage from a single source of damage by half.",
        "ADescDe": "Ein Fußsoldat reduziert alle Schadensquellen um -1 für jeweils zehn Lebenspunkte, die er besitzt. Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Fußsoldat einen Schicksalspunkt ausgeben, um den Schaden aus einer einzigen Schadensquelle um die Hälfte zu reduzieren.",
        "AName": "Resilient to Harm",
        "ANameDe": "Widerstandsfähig gegen Schaden",
        "Aptitudes": ["T", "Defense", "Fieldcraft", "S", "WP"],
        "Description": "A grunt is a basic infantry soldier, often tasked with the toughest and most dangerous jobs on the frontlines. Lacking specialization but equipped with resilience and determination, they serve as the backbone of any military force, enduring harsh conditions and following orders without question.",
        "Descritpion_DE": "Ein Fußsoldat ist ein einfacher Infanteriesoldat, der oft mit den härtesten und gefährlichsten Aufgaben an der Front betraut wird. Ohne Spezialisierung, aber mit Widerstandskraft und Entschlossenheit, bilden sie das Rückgrat jeder militärischen Einheit, trotzen widrigen Bedingungen und führen Befehle ohne Zögern aus.",
        "IMAGE": "grunt.png",
        "NAME": "Grunt",
        "NAME_DE": "Fußsoldat",
        "Talents": [["sound_const|jaded","@@"]]
    },
    "hierophant": {
        "ADesc": "In addition to the normal uses of Fate points, a Hierophant character may spend a Fate point to automatically succeed at a Charm, Command, or Intimidate skill test with a number of degrees of success equal to his Willpower bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Hierophant-Charakter einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Überreden, Befehlen oder Einschüchtern mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Willenskraftbonus entspricht.",
        "AName": "Sway the Masses",
        "ANameDe": "Die Massen beeinflussen",
        "Aptitudes": ["Fel", "Offence", "Social", "T", "WP"],
        "Description": "A hierophant is a charismatic and devout figure who acts as a preacher and guide, spreading the faith and teachings of the Emperor or their chosen creed. They inspire others through their words and deeds, rallying the faithful to action and serving as a living embodiment of their beliefs.",
        "Descritpion_DE": "Ein Hierophant ist eine charismatische und gläubige Persönlichkeit, die als Prediger und Führer auftritt und den Glauben und die Lehren des Imperators oder ihres gewählten Credos verbreitet. Durch Worte und Taten inspirieren sie andere, mobilisieren die Gläubigen zum Handeln und dienen als lebendige Verkörperung ihrer Überzeugungen.",
        "IMAGE": "hierophant.png",
        "NAME": "Hierophant",
        "NAME_DE": "Hierophant",
        "Talents": [["d_team|hatred","@@any"]]
    },
    "infiltrator": {
        "ADesc": "In addition to the normal use of Fate Points, an Infiltrator may spend a Fate Point to perfectly imitate the appearance, speech, and mannerisms of any one person. The effects of this last for ten minutes in narrative time.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Infiltrator einen Schicksalspunkt ausgeben, um das Aussehen, die Sprache und die Manierismen einer beliebigen Person perfekt zu imitieren. Dieser Effekt hält in erzählerischer Zeit zehn Minuten an.",
        "AName": "A Thousand Faces",
        "ANameDe": "Tausend Gesichter",
        "Aptitudes": ["Fel", "Int", "Tech", "Fieldcraft", "Per"],
        "Description": "An infiltrator is a stealthy and cunning individual trained to penetrate enemy lines, gain access to secure areas, or gather critical intelligence. Using deception, disguise, and precision, they excel at operating undetected, completing their objectives without drawing attention.",
        "Descritpion_DE": "Ein Infiltrator ist eine heimliche und gerissene Person, die darin ausgebildet ist, feindliche Linien zu durchdringen, sich Zugang zu gesicherten Bereichen zu verschaffen oder wichtige Informationen zu sammeln. Mit Täuschung, Tarnung und Präzision agieren sie unauffällig und erfüllen ihre Aufgaben, ohne Aufmerksamkeit zu erregen.",
        "IMAGE": "infiltrator.png",
        "NAME": "Infiltrator",
        "NAME_DE": "Infiltrator",
        "Talents": [["sprint|weapon_tech","@@"]]
    },
    "investigator": {
        "ADesc": "In addition to the normal uses of Fate Points, an Investigator character may spend a Fate Point to automatically succeed at a Scrutiny or Deceive skill test with a number of degrees of success equal to his Intelligence bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Ermittler einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Beobachten oder Täuschen mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Intelligenzbonus entspricht.",
        "AName": "Accustomed to Deception",
        "ANameDe": "Gewohnt an Täuschung",
        "Aptitudes":  ["Fel", "Per", "Int", "Fieldcraft", "Tech|Social"],
        "Description": "An investigator is a keen and methodical individual trained to uncover hidden truths, solve mysteries, and piece together evidence. Skilled in observation, interrogation, and research, they navigate complex scenarios to expose secrets, track down culprits, and unravel conspiracies.",
        "Descritpion_DE": "Ein Ermittler ist eine scharfsinnige und methodische Person, die darauf spezialisiert ist, verborgene Wahrheiten aufzudecken, Rätsel zu lösen und Beweise zusammenzutragen. Versiert in Beobachtung, Verhör und Recherche, navigieren sie durch komplexe Szenarien, um Geheimnisse zu enthüllen, Täter aufzuspüren und Verschwörungen aufzudecken.",
        "IMAGE": "investigator.png",
        "NAME": "Investigator",
        "NAME_DE": "Ermittler",
        "Talents": [["res|clues_crowd","fear@@"]]
    },
    "juve": {
        "ADesc": "In addition to the normal use of Fate Points, a Juve character may spend a Fate Point to treat a single skill as Rank 1 (Known) for the duration of an encounter. In narrative time, this lasts for 10 minutes.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Jungspund einen Schicksalspunkt ausgeben, um eine einzelne Fertigkeit für die Dauer eines Konflikts als Rang 1 (Bekannt) zu behandeln. In erzählerischer Zeit hält dies 10 Minuten an.",
        "AName": "Quick to learn",
        "ANameDe": "Schnell lernfähig",
        "Aptitudes": ["S", "T", "WS|BS", "Ag", "Fieldcraft"],
        "Description": "A juve is a young and inexperienced individual, often seen in gang culture or lower hive societies, learning the ropes and fighting to prove themselves. While lacking in skill and experience, juves are eager, ambitious, and determined to rise in the ranks, often serving as runners, lookouts, or apprentices to more seasoned members.",
        "Descritpion_DE": "Ein Jungspund ist eine junge und unerfahrene Person, oft in Gangkulturen oder den unteren Gesellschaftsschichten der Makropolen anzutreffen, die versucht, sich zu beweisen und ihre Fähigkeiten zu entwickeln. Obwohl es an Fertigkeiten und Erfahrung mangelt, sind Jungspunde ehrgeizig, eifrig und entschlossen, in den Rängen aufzusteigen, oft als Läufer, Wachposten oder Lehrlinge erfahrener Mitglieder.",
        "IMAGE": "juve.png",
        "NAME": "Juve",
        "NAME_DE": "Jungspund",
        "Talents": [["catfall|leapup","@@"]]
    },
    "marksman": {
        "ADesc": "In addition to the normal uses of Fate Points, a marksman character may spend a Fate Point to reduce the effective range a target is considered by one level, making a target at Long Range treated as Normal Range, etc.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Scharfschütze einen Schicksalspunkt ausgeben, um die effektive Reichweite eines Ziels um eine Stufe zu reduzieren, sodass ein Ziel auf großer Distanz als normale Distanz behandelt wird usw.",
        "AName": "Weapon Specialist",
        "ANameDe": "Waffenspezialist",
        "Aptitudes": ["BS", "Fieldcraft", "Ag", "Finesse", "Int"],
        "Description": "A marksman is a highly trained and precise shooter, specializing in long-range combat and pinpoint accuracy. Whether wielding sniper rifles, lasguns, or other ranged weaponry, they excel at eliminating high-value targets and providing cover for their allies with deadly efficiency.",
        "Descritpion_DE": "Ein Scharfschütze ist ein hochqualifizierter und präziser Schütze, spezialisiert auf den Fernkampf und punktgenaue Treffer. Ob mit Scharfschützengewehren, Lasergewehren oder anderen Fernkampfwaffen, sie brillieren darin, hochrangige Ziele auszuschalten und ihren Verbündeten mit tödlicher Effizienz Deckung zu geben.",
        "IMAGE": "marksman.png",
        "NAME": "Marksman",
        "NAME_DE": "Scharfschütze",
        "Talents": [["q_draw|rap_reload","@@"]]
    },
    "mystic": {
        "ADesc": "Stare into the Warp ",
        "ADescDe": "The character can automatically identify whether an effect, presence, or event is Warp-based without requiring a test, provided they are aware of it. This ability extends to recognizing the subtle marks of Warp influence on objects, places, or beings.",
        "AName": "Blick in den Warp",
        "ANameDe": "Der Charakter kann automatisch erkennen, ob ein Effekt, eine Präsenz oder ein Ereignis auf den Warp zurückzuführen ist, ohne einen Test ablegen zu müssen, vorausgesetzt, er ist sich dessen bewusst. Diese Fähigkeit erstreckt sich auch darauf, die subtilen Zeichen von Warp-Einfluss auf Objekte, Orte oder Wesen zu erkennen.",
        "Aptitudes": ["Defence", "Int", "Knowledge", "Per", "WP"],
        "Description": "A mystic is an individual attuned to the unseen forces of the universe, often wielding psychic abilities or deeply understanding esoteric knowledge. Guided by visions, intuition, or communion with the Warp, they are enigmatic figures whose powers can inspire awe or fear, depending on their intent and control over the forces they channel.",
        "Descritpion_DE": "Ein Mystiker ist eine Person, die auf die verborgenen Kräfte des Universums eingestimmt ist und oft über psionische Fähigkeiten verfügt oder ein tiefes Verständnis für esoterisches Wissen besitzt. Geleitet von Visionen, Intuition oder der Verbindung mit dem Warp, sind sie rätselhafte Gestalten, deren Kräfte Ehrfurcht oder Furcht wecken können, je nach ihrer Absicht und Kontrolle über die Kräfte, die sie kanalisieren.",
        "IMAGE": "mystic.png",
        "NAME": "Mystic",
        "NAME_DE": "Mystiker",
        "Talents": [["res|warp_sense","psychic@@"]]
    },
    "operative": {
        "ADesc": "Once per encounter, an Operative character gains 1 additional Half Action in addition to their normal actions for a single Round. In addition to the normal use of Fate Points, an Operative may spend a Fate Point to gain an additional Half Action in the same turn.",
        "ADescDe": "Einmal pro Begegnung erhält ein Operative-Charakter eine zusätzliche Halbe Aktion zusätzlich zu seinen normalen Aktionen für eine einzige Runde. Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Operative einen Schicksalspunkt ausgeben, um in derselben Runde eine weitere Halbe Aktion zu erhalten.",
        "AName": "In the Knick of time",
        "ANameDe": "Im letzten Moment",
        "Aptitudes": ["Int", "Tech", "Fieldcraft", "Per", "Ag"],
        "Description": "An operative is a versatile and highly trained individual tasked with carrying out covert missions, intelligence gathering, or specialized operations. They excel in adaptability, stealth, and efficiency, making them invaluable for assignments that require precision and discretion in hostile or complex environments.",
        "Descritpion_DE": "Ein Operative ist eine vielseitige und hochqualifizierte Person, die mit der Durchführung verdeckter Missionen, der Beschaffung von Informationen oder spezialisierten Einsätzen betraut ist. Sie zeichnen sich durch Anpassungsfähigkeit, Heimlichkeit und Effizienz aus und sind daher unverzichtbar für Aufträge, die Präzision und Diskretion in feindlichen oder komplexen Umgebungen erfordern.",
        "IMAGE": "operative.png",
        "NAME": "Operative",
        "NAME_DE": "Operative",
        "Talents": [["tech_knock|weapon_tech","@@"]]
    },
    "penitent": {
        "ADesc": "Whenever a Penitent character suffers 1 or more points of damage (after reductions for Toughness bonus and Armor), he gains a +10 bonus to the first test he makes before the end of his next turn.",
        "ADescDe": "Immer wenn ein Büßer-Charakter 1 oder mehr Schadenspunkte erleidet (nach Abzug von Zähigkeitsbonus und Rüstung), erhält er einen Bonus von +10 auf die erste Probe, die er vor dem Ende seines nächsten Zuges ablegt.",
        "AName": "Cleansing Pain",
        "ANameDe": "Reinigender Schmerz",
        "Aptitudes": ["Ag", "Fieldcraft", "Int", "Offence", "T"],
        "Description": "A penitent is an individual seeking redemption for their perceived sins or failures, often through acts of extreme devotion, suffering, or sacrifice. They carry the weight of guilt and strive to prove their loyalty and worthiness to the Emperor or their faith, sometimes enduring brutal trials or taking on suicidal missions in their pursuit of absolution.",
        "Descritpion_DE": "Ein Büßer ist eine Person, die Vergebung für ihre vermeintlichen Sünden oder Versagen sucht, oft durch extreme Hingabe, Leiden oder Opferbereitschaft. Sie tragen die Last der Schuld und bemühen sich, ihre Loyalität und Würdigkeit gegenüber dem Imperator oder ihrem Glauben zu beweisen, indem sie manchmal brutale Prüfungen erdulden oder selbstmörderische Missionen übernehmen, um Erlösung zu finden.",
        "IMAGE": "penitent.png",
        "NAME": "Penitent",
        "NAME_DE": "Büßer",
        "Talents": [["diehard|flagellant","@@"]]
    },
    "politico": {
        "ADesc": "In addition to the normal uses of Fate Points, a Politico character may spend a Fate point to upgrade or downgrade the Disposition of his target by 2 ranks. This effect lasts for one Skill Test made by the target.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Politico-Charakter einen Schicksalspunkt ausgeben, um die Haltung seines Ziels um 2 Stufen zu verbessern oder zu verschlechtern. Dieser Effekt hält für eine Fertigkeitsprobe des Ziels an.",
        "AName": "Scandalous Socialite",
        "ANameDe": "Skandalöser Gesellschaftsmensch",
        "Aptitudes": ["Fel", "Finesse", "WP", "Social", "Int"],
        "Description": "A politico is a skilled manipulator and strategist, deeply entrenched in the art of politics and intrigue. Whether influencing decisions, forming alliances, or scheming in the shadows, they wield words and influence as weapons, shaping the course of events to serve their ambitions or the greater goals of their faction.",
        "Descritpion_DE": "Ein Politiker ist ein geschickter Manipulator und Stratege, der die Kunst der Politik und Intrigen meisterlich beherrscht. Ob sie Entscheidungen beeinflussen, Allianzen schmieden oder im Schatten Pläne schmieden, sie setzen Worte und Einfluss als Waffen ein, um den Verlauf der Ereignisse zu ihren Gunsten oder im Interesse ihrer Fraktion zu gestalten.",
        "IMAGE": "Politico.png",
        "NAME": "Politico",
        "NAME_DE": "Politiker",
        "Talents": [["archivator|lexographer","@@"]]
    },
    "reclaimator": {
        "ADesc": "In addition to the normal uses of Fate Points, a Reclaimator character may spend a Fate point to automatically succeed at a Security, Tech-Use, or Trade (Technomat) skill test with a number of degrees of success equal to his Intelligence bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Restaurator einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Sicherheit, Technisches Wissen oder Handwerk (Technomat) mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Intelligenzbonus entspricht.",
        "AName": "Mechanical Expertise",
        "ANameDe": "Mechanisches Fachwissen",
        "Aptitudes": ["Tech", "Knowledge", "Fel|Ag", "Fieldcraft", "Social"],
        "Description": "A reclaimator is a scavenger and technician specializing in salvaging, repairing, and repurposing lost or discarded technology. Often found on industrial worlds or within hive cities, reclaimators sift through ruins and wreckage to recover valuable resources, breathing new life into the discarded remnants of the Imperium's vast infrastructure.",
        "Descritpion_DE": "Ein Restaurator ist ein Plünderer und Techniker, der sich auf die Bergung, Reparatur und Wiederverwendung von verlorener oder weggeworfener Technologie spezialisiert hat. Oft auf Industrieplaneten oder in Makropolen anzutreffen, durchsuchen Restauratoren Ruinen und Trümmer, um wertvolle Ressourcen wiederzugewinnen und den Überresten der gewaltigen Infrastruktur des Imperiums neues Leben einzuhauchen.",
        "IMAGE": "reclaimator.png",
        "NAME": "Reclaimator",
        "NAME_DE": "Restaurator",
        "Talents": [["tech_knock|rap_reload","@@"]]
    },
    "sage": {
        "ADesc": "In addition to the normal uses of Fate points, a Sage character may spend a Fate point to automatically succeed at a Logic or any Lore skill test with a number of degrees of success equal to his Intelligence bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Weiser-Charakter einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Logik oder einer beliebigen Wissensfertigkeit mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Intelligenzbonus entspricht.",
        "AName": "Quest for Knowledge",
        "ANameDe": "Streben nach Wissen",
        "Aptitudes": ["Int", "Knowledge", "Per", "Tech", "WP"],
        "Description": "A sage is a scholar and keeper of knowledge, deeply versed in history, science, and esoteric lore. They dedicate their lives to studying, preserving, and interpreting information, often serving as advisors or researchers. Their expertise makes them invaluable in unraveling mysteries, solving problems, and providing wisdom to those who seek it.",
        "Descritpion_DE": "Ein Weiser ist ein Gelehrter und Bewahrer von Wissen, tief vertraut mit Geschichte, Wissenschaft und esoterischen Lehren. Sie widmen ihr Leben dem Studium, der Bewahrung und der Interpretation von Informationen und dienen oft als Berater oder Forscher. Ihre Expertise macht sie unverzichtbar beim Entschlüsseln von Geheimnissen, Lösen von Problemen und Bereitstellen von Weisheit für diejenigen, die sie suchen.",
        "IMAGE": "sage.png",
        "NAME": "Sage",
        "NAME_DE": "Weiser",
        "Talents": [["ambidextrous|clues_crowd","@@"]]
    },
    "scavenger": {
        "ADesc": "Once per round, after performing a ranged Standard Attack, a Scavenger character may perform a single Dive for Cover action as a Free Action.",
        "ADescDe": "Einmal pro Runde kann ein Plünderer nach der Durchführung eines Standardangriffs mit einer Fernkampfwaffe eine einzelne Aktion \"In Deckung werfen\" als freie Aktion ausführen.",
        "AName": "Evasive",
        "ANameDe": "Ausweichend",
        "Aptitudes": ["S", "T", "WS", "BS", "Fieldcraf"],
        "Description": "A scavenger is a resourceful individual who survives by salvaging discarded materials, remnants of war, or abandoned technology. Skilled at finding value in what others deem useless, they thrive in desolate environments, using ingenuity and determination to turn scraps into tools or trade goods.",
        "Descritpion_DE": "Ein Plünderer ist eine einfallsreiche Person, die durch das Bergen von weggeworfenen Materialien, Kriegsüberresten oder verlassener Technologie überlebt. Geschickt darin, in Dingen, die andere für wertlos halten, Nutzen zu finden, gedeiht er in trostlosen Umgebungen und nutzt Einfallsreichtum und Entschlossenheit, um Schrott in Werkzeuge oder Handelswaren zu verwandeln.",
        "IMAGE": "scavenger.png",
        "NAME": "Scavenger",
        "NAME_DE": "Plünderer",
        "Talents": [["diehard|jaded","@@"]]
    },
    "scholariate": {
        "ADesc": "In addition to the normal uses of Fate Points, a Scholariate character may spend a Fate Point to negate Insanity Points or Corruption Points from profane sources or lore.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Scholariat-Charakter einen Schicksalspunkt ausgeben, um Wahnsinnspunkte oder Verderbnispunkte aus unheiligen Quellen oder Wissen zu negieren.",
        "AName": "Unfazeable",
        "ANameDe": "Unerschütterlich",
        "Aptitudes": ["Knowledge", "Int", "Social", "Fel", "Per"],
        "Description": "The scholariate refers to a group or individual dedicated to academic or intellectual pursuits, often associated with the study of history, philosophy, and esoteric knowledge. They are the keepers of knowledge and lore, tasked with preserving, analyzing, and expanding humanity’s understanding of the universe and its past.",
        "Descritpion_DE": "Das Scholariat bezeichnet eine Gruppe oder Einzelperson, die sich akademischen oder intellektuellen Tätigkeiten widmet, oft verbunden mit dem Studium von Geschichte, Philosophie und esoterischem Wissen. Sie sind die Hüter des Wissens und der Überlieferung und haben die Aufgabe, das Verständnis der Menschheit für das Universum und seine Vergangenheit zu bewahren, zu analysieren und zu erweitern.",
        "IMAGE": "scholariate.png",
        "NAME": "Scholariate",
        "NAME_DE": "Scholariat",
        "Talents": [["clues_crowd|jaded","@@"]]
    },
    "scout": {
        "ADesc": "In addition to the normal use of Fate Points, a Scout character may spend a Fate Point to automatically pass a Survival or Stealth test with a number of degrees of success equal to his Agility Bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Späher einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Überleben oder Schleichen zu bestehen, mit einer Anzahl von Erfolgsgraden, die seinem Beweglichkeitsbonus entspricht.",
        "AName": "Pathfinder",
        "ANameDe": "Pfadfinder",
        "Aptitudes": ["Fieldcraft", "Finesse", "Int", "BS", "Per"],
        "Description": "A scout is a highly mobile and observant individual skilled in reconnaissance, tracking, and navigating difficult terrain. Operating ahead of the main force, they gather intelligence, identify threats, and find optimal paths for movement, often relying on stealth and survival skills to accomplish their mission.",
        "Descritpion_DE": "Ein Späher ist eine hochbewegliche und aufmerksame Person, die sich auf Aufklärung, Verfolgung und die Navigation durch schwieriges Gelände spezialisiert hat. Sie operieren vor der Hauptstreitmacht, sammeln Informationen, identifizieren Bedrohungen und finden optimale Wege für die Bewegung, wobei sie sich oft auf Heimlichkeit und Überlebensfähigkeiten verlassen, um ihre Mission zu erfüllen",
        "IMAGE": "scout.png",
        "NAME": "Scout",
        "NAME_DE": "Späher",
        "Talents": [["no_hiding|leapup","@@"]]
    },
    "secutor": {
        "ADesc": "In addition to the normal uses of Fate Points, when a Secutor successfully hits with an attack, he may spend a Fate Point to decrease an opponent's Toughness Bonus equal to his degrees of Success on the attack roll on the first hit the attack inflicts.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Secutor, wenn er mit einem Angriff erfolgreich trifft, einen Schicksalspunkt ausgeben, um den Zähigkeitsbonus seines Gegners um eine Anzahl zu verringern, die seinen Erfolgsgraden beim Angriffswurf entspricht, und zwar nur für den ersten Treffer des Angriffs.",
        "AName": "Devastating Precision",
        "ANameDe": "Verheerende Präzision",
        "Aptitudes": ["T", "BS", "WS", "Fieldcraft|Finesse", "Perception"],
        "Description": "A secutor is a warrior-priest of the Adeptus Mechanicus, trained in both martial and technological disciplines. Tasked with leading military campaigns or defending Mechanicus interests, they are highly skilled in the art of war and often equipped with advanced weaponry and cybernetic augmentations.",
        "Descritpion_DE": "Ein Secutor ist ein Kriegerpriester des Adeptus Mechanicus, ausgebildet sowohl in kriegerischen als auch technologischen Disziplinen. Mit der Aufgabe betraut, militärische Kampagnen zu führen oder die Interessen des Mechanicus zu verteidigen, sind sie hochqualifiziert in der Kriegsführung und oft mit fortschrittlicher Bewaffnung und kybernetischen Verbesserungen ausgestattet.",
        "IMAGE": "secutor.png",
        "NAME": "Secutor",
        "NAME_DE": "Secutor",
        "Talents": [["ambidextrous|jaded","@@"]]
    },
    "seeker": {
        "ADesc": "In addition to the normal uses of Fate points, a Seeker character may spend a Fate point to automatically succeed at an Awareness or Inquiry skill test with a number of degrees of success equal to his Perception bonus",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Suchender-Charakter einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Wahrnehmung oder Nachforschung mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Wahrnehmungsbonus entspricht.",
        "AName": "Nothing Escapes My Sight",
        "ANameDe": "Nichts entgeht meinem Blick",
        "Aptitudes": ["Fel", "Int", "Per", "Social", "Tech"],
        "Description": "A seeker is an individual driven by an insatiable thirst for knowledge, truth, or hidden treasures. Whether pursuing ancient artifacts, uncovering lost histories, or solving mysteries, they are relentless in their quest, often willing to venture into danger and face the unknown to achieve their goals.",
        "Descritpion_DE": "Ein Suchender ist eine Person, die von einem unstillbaren Durst nach Wissen, Wahrheit oder verborgenen Schätzen angetrieben wird. Ob sie alte Artefakte suchen, verlorene Geschichten aufdecken oder Rätsel lösen, sie sind unermüdlich in ihrer Suche und oft bereit, Gefahren zu trotzen und das Unbekannte zu konfrontieren, um ihre Ziele zu erreichen.",
        "IMAGE": "seeker.png",
        "NAME": "Seeker",
        "NAME_DE": "Suchender",
        "Talents": [["keen_intuition|disarm","@@"]]
    },
    "socialite": {
        "ADesc": "In addition to the normal uses of Fate Points, a Socialite character may spend a Fate Point to automatically pass a Fellowship or Fellowship-based skill test with a number of degrees of success equal to his Fellowship Bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Gesellschaftsmensch einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Einfluss oder eine auf Einfluss basierende Fertigkeit mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Einflussbonus entspricht.",
        "AName": "Charming Blather",
        "ANameDe": "Charmantes Geschwätz",
        "Aptitudes": ["Fel", "Ag", "Int", "Social", "Fieldcraft"],
        "Description": "A socialite is a charismatic and influential individual, thriving in high society and social gatherings. Skilled in etiquette, conversation, and building networks, they use their charm and connections to navigate political, cultural, or economic landscapes, often advancing their own or their faction's interests.",
        "Descritpion_DE": "Ein Gesellschaftsmensch ist eine charismatische und einflussreiche Persönlichkeit, die in der High Society und bei gesellschaftlichen Anlässen glänzt. Versiert in Etikette, Konversation und dem Aufbau von Netzwerken, nutzt er seinen Charme und seine Verbindungen, um politische, kulturelle oder wirtschaftliche Landschaften zu durchqueren und dabei oft die eigenen oder die Interessen seiner Fraktion voranzutreiben.",
        "IMAGE": "socialite.png",
        "NAME": "Socialite",
        "NAME_DE": "Gesellschaftsmensch",
        "Talents": [["clues_crowd|keen_intuition","@@"]]
    },
    "steward": {
        "ADesc": "In addition to the normal use of Fate Points, a Seneschal character may spend a Fate point to automatically succeed at a Linguistics, Commerce or any Trade skill test with a number of degrees of success equal to his Intelligence Bonus.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Seneschall-Charakter einen Schicksalspunkt ausgeben, um automatisch eine Fertigkeitsprobe in Linguistik, Handel oder einer beliebigen Handwerksfertigkeit mit einer Anzahl von Erfolgsgraden zu bestehen, die seinem Intelligenzbonus entspricht.",
        "AName": "Master of Ceremonies",
        "ANameDe": "Meister der Zeremonien",
        "Aptitudes": ["Social|Knowledge", "Fel", "Per", "Int", "Finesse"],
        "Description": "A steward is a dedicated administrator and caretaker, responsible for managing resources, overseeing operations, and ensuring the smooth functioning of estates, organizations, or voidships. Skilled in logistics, leadership, and diplomacy, they act as the backbone of their domain, balancing the needs of those they serve with the demands of their duty.",
        "Descritpion_DE": "Ein Verwalter ist ein engagierter Administrator und Betreuer, verantwortlich für die Verwaltung von Ressourcen, die Überwachung von Abläufen und die Gewährleistung des reibungslosen Betriebs von Gütern, Organisationen oder Raumschiffen. Versiert in Logistik, Führung und Diplomatie, bilden sie das Rückgrat ihres Zuständigkeitsbereichs und balancieren die Bedürfnisse derer, denen sie dienen, mit den Anforderungen ihrer Aufgabe aus.",
        "IMAGE": "steward.png",
        "NAME": "Steward",
        "NAME_DE": "Verwalter",
        "Talents": [["contact_network|ambassador","@@"]]
    },
    "trader": {
        "ADesc": "In addition to the normal uses of Fate points, when a Trader character fails a Commerce, Inquiry or Acquisition test, he can spend a Fate point to automatically succeed with the degrees of success equal to his Fellowship bonus. This can be done only once per session, with the exception of Commerce. However, when making an Acquisition the modified score can’t be 10 or lower.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Händler-Charakter, wenn er eine Fertigkeitsprobe in Handel, Nachforschung oder Erwerb nicht besteht, einen Schicksalspunkt ausgeben, um automatisch zu bestehen, mit einer Anzahl von Erfolgsgraden, die seinem Einflussbonus entspricht. Dies kann nur einmal pro Sitzung durchgeführt werden, mit Ausnahme von Handel. Bei einem Erwerb darf der modifizierte Wert jedoch nicht 10 oder weniger betragen.",
        "AName": "Merchant Magnate",
        "ANameDe": "Handelsmagnat",
        "Aptitudes": ["Int", "Fel", "Ag|BS", "Social", "Fieldcraft"],
        "Description": "A trader is a shrewd negotiator and entrepreneur skilled in the exchange of goods, resources, and services. Whether operating in bustling marketplaces or traversing the vast expanse of the void, they rely on their charm, knowledge, and business acumen to secure profitable deals and expand their influence.",
        "Descritpion_DE": "Ein Händler ist ein gewiefter Verhandlungsführer und Unternehmer, der sich auf den Austausch von Waren, Ressourcen und Dienstleistungen spezialisiert hat. Ob auf belebten Märkten oder in den Weiten des Alls, sie verlassen sich auf ihren Charme, ihr Wissen und ihre Geschäftstüchtigkeit, um profitable Geschäfte abzuschließen und ihren Einfluss zu erweitern.",
        "IMAGE": "trader.png",
        "NAME": "Trader",
        "NAME_DE": "Händler",
        "Talents": [["hard_bargain|contact_network","@@"]]
    },
    "warrior": {
        "ADesc": "In addition to the normal uses of Fate points, after making a successful attack test, but before determining hits, a Warrior character may spend a Fate point to substitute his Weapon Skill (for melee) or Ballistic Skill (for ranged) bonus for the degrees of success scored on the attack test.",
        "ADescDe": "Zusätzlich zu den normalen Verwendungen von Schicksalspunkten kann ein Krieger-Charakter nach einer erfolgreichen Angriffsprobe, aber bevor die Treffer bestimmt werden, einen Schicksalspunkt ausgeben, um seinen Waffenfertigkeitsbonus (für Nahkampf) oder Ballistikfertigkeitsbonus (für Fernkampf) anstelle der erzielten Erfolgsgrade der Angriffsprobe zu verwenden.",
        "AName": "Expert at Violence",
        "ANameDe": "Experte der Gewalt",
        "Aptitudes": ["BS", "Defense", "Offence", "S", "WS"],
        "Description": "A warrior is a trained combatant, skilled in the art of battle and dedicated to fighting for a cause, survival, or conquest. Whether wielding a blade, a gun, or their own fists, warriors rely on discipline, strength, and strategy to overcome their enemies and achieve victory on the battlefield.",
        "Descritpion_DE": "Ein Krieger ist ein ausgebildeter Kämpfer, der die Kunst des Kampfes beherrscht und für eine Sache, das Überleben oder die Eroberung kämpft. Ob mit Klinge, Gewehr oder bloßen Fäusten, Krieger verlassen sich auf Disziplin, Stärke und Strategie, um ihre Feinde zu überwinden und auf dem Schlachtfeld zu triumphieren.",
        "IMAGE": "warrior.png",
        "NAME": "Warrior",
        "NAME_DE": "Krieger",
        "Talents": [["iron_jaw|rap_reload","@@"]]
    }
}


var birthrights = {
	"stubjack":{
		"name":"Stubjack",
		"nameDe":"Stubjack",
		"label":"You were born to violence. It has surrounded you your whole life, and you’ve had a weapon in easy reach ever since you were strong enough to grip one. You could have joined the PDF or even become a Guardsman, but what sort of life is that? Joining a regiment means orders here, orders there, and none that make any sense. It was clear to you that fighting for Thrones as a mercenary was the best way for a warrior to become rich in his trade and still escape with his skin. You’ve seen death, victory, and most of the ugly things that lie in-between, but as long as there is always a fat purse waiting on the far side of the battlefield that’s fine with you. As for the dead, the Emperor will know his own.",
		"labelDe":"Du wurdest in ein Leben voller Gewalt hineingeboren, von Konflikten umgeben, seit du denken kannst. Eine Waffe war immer in Reichweite, seitdem du stark genug warst, eine zu halten. Du hättest dich den Planetaren Verteidigungsstreitkräften oder der Imperialen Armee anschließen können, doch ein solches Leben erschien dir voller unsinniger Befehle und wenig Lohn. Stattdessen hast du dich entschieden, für Throne als Söldner zu kämpfen, überzeugt, dass dies der beste Weg ist, Reichtum zu erlangen und dabei am Leben zu bleiben. Du hast den Tod gesehen, Siege errungen und die düsteren Realitäten dazwischen erlebt, doch solange jenseits des Schlachtfeldes ein praller Geldbeutel auf dich wartet, ist alles in Ordnung. Was die Toten angeht? Der Imperator wird die Seinen erkennen.",
		"image":"stubjack.png",
		"options":{
			"soldiers":{
				"name":"Soldier",
				"nameDe":"Soldat",
				"label":"You were put to service quite quickly. Be it from your own decision or not, you were in war. You might have not seen any real combat but the army really did a number on you with their training.",
				"labelDe":"Du bist früh in den Militärdienst eingetreten, sei es aus eigenem Entschluss oder durch äußere Umstände. Du hast den Krieg aus erster Hand erlebt oder zumindest das harte Training, das dich darauf vorbereitet hat. Selbst wenn du noch keinen echten Kampf gesehen hast, hat die Armee ihre Spuren hinterlassen und dich zu jemandem geformt, der bereit ist, zu bestehen und zu überleben.",
				"skills":[["navigate","surface"]],
				"Talents":[],
				"stat":"S"
			},			
			"desperado":{
				"name":"Desperado",
				"nameDe":"Desperado",
				"label":"Life on the fringes of society is unforgiving. You’ve learned to always be ready to draw your weapon at a moment’s notice. When it comes down to survival, it’s either them or you—and you’ve decided it won’t be you. Not this time.",
				"labelDe":" Das Leben am Rande der Gesellschaft ist gnadenlos. Du hast gelernt, immer bereit zu sein, deine Waffe zu ziehen, wenn es darauf ankommt. Wenn es ums Überleben geht, sind es entweder sie oder du – und du hast entschieden, dass es nicht dich treffen wird. Nicht dieses Mal.",
				"skills":[["dodge",""]],
				"Talents":[],
				"stat":"S"
			},			
			"criminal":{
				"name":"Criminal",
				"nameDe":"Krimineller",
				"label":"Life wasn’t all that bad—you just had to get your hands dirty from time to time. People say crime doesn’t pay, but in your experience, it paid quite well. Maybe too well. If the Imperium doesn’t start teaching better lessons, you might end up inspiring others to follow your example.",
				"labelDe":"Das Leben war gar nicht so schlecht – man musste nur hin und wieder die Hände schmutzig machen. Man sagt, Verbrechen lohnt sich nicht, aber nach deiner Erfahrung hat es sich ziemlich gut bezahlt gemacht. Vielleicht sogar zu gut. Wenn das Imperium nicht anfängt, bessere Lektionen zu lehren, könntest du noch viele dazu inspirieren, deinem Beispiel zu folgen.",
				"skills":[["intimidate",""]],
				"Talents":[],
				"stat":"S"
			},			
			"gladiator":{
				"name":"Gladiator",
				"nameDe":"Gladiator",
				"label":"Was it for fun? Maybe. Was it for glory? Kinda. Or was it for the money? Who cares. You spent your early life with a blade in hand and survival in the mind. The cheering audience was a bonus.",
				"labelDe":"War es zum Spaß? Vielleicht. War es für Ruhm? Irgendwie. Oder war es wegen des Geldes? Wen interessiert's. Du hast deine frühen Jahre mit einer Klinge in der Hand und dem Überleben im Kopf verbracht. Das jubelnde Publikum? Das war nur ein Bonus.",
				"skills":[["parry",""]],
				"Talents":[],
				"stat":"S"
			}
		}
	},
	"f_survivor":{
		"name":"Fringe Survivor",
		"nameDe":"Randüberlebender",
		"label":"Life in the Imperium of Man is constrictive and stifling. You and your family did whatever it took to survive in this regime by living out on the fringes of society. Each day was a struggle, but somehow, against all odds, they found a way so you could go on and realise the destiny the God-Emperor had entrusted in you. Perhaps you come from a long line of hereteks, steeped in the dark arts of tech-reclamation; salvaging whatever scraps you could get your hands on in order to turn them into something a bit more useful, ever-fearful of discovery by the Adeptus Mechanicus. Or, your family might have travelled from place to place as traders, miners, or some other nomadic profession, never settling in one area for very long, but teaching you how to get by in nearly any environment and climate.",
		"labelDe":"Das Leben im Imperium des Menschen ist unterdrückend und erstickend. Um zu überleben, lebten du und deine Familie am Rande der Gesellschaft und taten alles, was nötig war, um durchzukommen. Jeder Tag war ein Kampf, doch irgendwie, allen Widrigkeiten zum Trotz, fanden sie einen Weg, damit du weitermachen und die vom Gott-Imperator an dich übertragene Bestimmung verwirklichen konntest. Vielleicht stammst du aus einer Linie von Häretikern, die in den verbotenen Künsten der Tech-Restaurierung bewandert sind, Schrott bergen und umfunktionieren, stets in Angst vor Entdeckung durch das Adeptus Mechanicus. Oder deine Familie war nomadisch—Händler, Bergleute oder Wanderer—und lehrte dich, wie man in fast jeder Umgebung und jedem Klima überlebt, ohne jemals lange an einem Ort zu verweilen.",
		"image":"fringe.png",
		"options":{
			"survivalist":{
				"name":"Survivalist",
				"nameDe":"Überlebenskünstler",
				"label":"Your life is one of constant wandering, with no fixed home or permanence. However, you possess skills and sharp instincts that enable you to survive even in the harshest and most hostile environments.",
				"labelDe":"Dein Leben ist das eines nomadischen Wanderers, ohne festen Wohnsitz oder Beständigkeit. Doch du besitzt Fähigkeiten und geschärfte Instinkte, die es dir ermöglichen, selbst in den rauesten und feindseligsten Umgebungen zu überleben.",
				"skills":[["survival",""]],
				"Talents":[],
				"stat":"WS"
			},
			"pit":{
				"name":"Pit-Fighter",
				"nameDe":"Gruben-Kämpfer",
				"label":"You have trained and honed your body from a young age, earning the title of champion more than once. You have studied under great pugilists and sword-masters, mastering the arts of combat and pushing your limits in the arenas.",
				"labelDe":"Du hast deinen Körper seit deiner Kindheit trainiert und geschärft und mehr als einmal den Titel des Champions errungen. Du hast bei großen Faustkämpfern und Schwertmeistern gelernt und die Kampfkünste in den Arenen bis an deine Grenzen gemeistert.",
				"skills":[],
				"Talents":[["unarmed_spec",""]],
				"stat":"WS"
			},
			"heretek":{
				"name":"Heretek",
				"nameDe":"Häretiker",
				"label":"Reclamators, scavengers, jury-riggers—all are considered hereteks if they dishonor the machine in the eyes of the Adeptus Mechanicus. However, the title of Heretek extends beyond those who break the tech-monopoly of the red priests of Mars to include those who delve into forbidden technologies. Pray the Cult of the Machine never discovers you, for if they do, your fate will likely be to join the ranks of their glassy-eyed servitors.",
				"labelDe":"Restauratoren, Plünderer, Bastler—alle gelten als Häretiker, wenn sie die Maschine in den Augen des Adeptus Mechanicus entehren. Doch der Titel des Häretikers umfasst nicht nur diejenigen, die das Tech-Monopol der roten Priester des Mars brechen, sondern auch jene, die verbotene Technologien erforschen. Bete, dass der Kult der Maschine dich niemals findet, denn wenn doch, wird dein Schicksal wahrscheinlich darin bestehen, dich den Reihen ihrer glasigen Auges Servitoren anzuschließen.",
				"skills":[["techuse",""]],
				"Talents":[],
				"stat":"WS"
			},
			"nomad":{
				"name":"Nomad",
				"nameDe":"Nomade",
				"label":"Those who live outside of society, moving from place to place and never settling long, are known as nomads. Perhaps you followed in the footsteps of a saint, served as a voidsman for hire, or are running from something darker in your past. Whatever the reason, your life is one of constant motion and adaptation.",
				"labelDe":"Diejenigen, die außerhalb der Gesellschaft leben, von Ort zu Ort ziehen und nie lange verweilen, werden als Nomaden bezeichnet. Vielleicht bist du in die Fußstapfen eines Heiligen getreten, hast als Voidsman zur Miete gedient oder fliehst vor etwas Dunklerem in deiner Vergangenheit. Was auch immer der Grund ist, dein Leben ist eines ständiger Bewegung und Anpassung.",
				"skills":[["navigate","surface"]],
				"Talents":[],
				"stat":"WS"
			}
		}
	},
	"service":{
		"name":"In Service to the Throne",
		"nameDe":"Im Dienst des Thrones",
		"label":"The Imperium is built upon the toil of untold trillions of men and women, and the blood and bones of countless generations form its foundations. Your life was spent as one in the Emperor’s service, destined to sacrifice yourself to the greater glories of His Empire. Some choose to serve; others find their service forced upon them, chosen to be one more cog within a machine of bewildering proportions. To serve the Emperor is to serve the ideal of conquest. Mankind is destined to rule the stars, so the preachers and missionaries say, and to reclaim worlds from the darkness between the stars is a bloody task indeed. In some way, shape or form, all who serve the Imperium directly contribute to its ongoing war of conquest and reclamation, a war that began a hundred centuries before and which has never truly ceased, though its form and pace have changed much with the ages",
		"labelDe":"Das Imperium ist auf der Arbeit von unzähligen Billionen aufgebaut, und das Blut und die Knochen zahlloser Generationen bilden seine unerschütterlichen Fundamente. Dein Leben war dem Dienst am Imperator gewidmet, ob aus eigenem Entschluss oder durch Zwang, als ein weiteres Zahnrad in der gewaltigen und unübersichtlichen Maschinerie seines Reiches. Dem Imperator zu dienen bedeutet, das Ideal der Eroberung zu verkörpern. Die Menschheit ist dazu bestimmt, die Sterne zu beherrschen, so verkünden es die Prediger und Missionare, doch die Rückeroberung von Welten aus der Dunkelheit ist ein blutiger und mühsamer Kampf. In irgendeiner Form tragen alle, die dem Imperium dienen, zu seinem unaufhörlichen Krieg der Eroberung und Rückgewinnung bei—ein Krieg, der vor Jahrtausenden begann und nie wirklich geendet hat, auch wenn sich seine Form und sein Tempo mit den Zeiten verändert haben.",
		"image":"throne.png",
		"options":{
			"tithed":{
				"name":"Tithed",
				"nameDe":"Abgegeben",
				"label":"Your time came sooner than you anticipated. You were chosen and sent off to fulfill your Imperial duty, serving one of the many organizations of the Imperium.",
				"labelDe":"Deine Zeit kam schneller, als du erwartet hattest. Du wurdest ausgewählt und entsandt, um deine Pflicht gegenüber dem Imperium zu erfüllen, indem du einer der zahlreichen Organisationen des Imperiums dienst.",
				"skills":[["c_lore","arbites|astro|mechanicus|ecc"]],
				"Talents":[],
				"stat":"T"
			},
			"one_amongst":{
				"name":"One Amongst Billions",
				"nameDe":"Einer unter Milliarden",
				"label":"You had little say in your fate. Assigned a place to work, your life was consumed by endless toil, leaving you with hardly any time for yourself.",
				"labelDe":"Du hattest kaum eine Wahl über dein Schicksal. Du wurdest einem Arbeitsplatz zugewiesen, und dein Leben war von endloser Arbeit geprägt, die dir kaum Zeit für dich selbst ließ.",
				"skills":[["c_lore","admin|guard|navy|pdf"]],
				"Talents":[],
				"stat":"T"
			},
			"leader":{
				"name":"Born to Lead",
				"nameDe":"Zum Führen geboren",
				"label":"Your talents were quickly acknowledged, and you were granted the position of authority you were destined to hold.",
				"labelDe":"Deine Fähigkeiten wurden schnell erkannt, und du erhieltst den dir zustehenden Platz in einer Führungsposition.",
				"skills":[["command",""]],
				"Talents":[],
				"stat":"T"
			},
			"studied":{
				"name":"Studied Fellow",
				"nameDe":"Gelehrter Gefährte",
				"label":"You excelled in tests more than others, earning you a reprieve from physical labor—only to be assigned to a different kind of drudgery, this time scribbling endlessly on paper.",
				"labelDe":"Du hast bei Prüfungen besser abgeschnitten als andere, was dir die körperliche Arbeit ersparte—nur um einer anderen Art von Plackerei zugeteilt zu werden, diesmal mit endlosem Herumkritzeln auf Papier.",
				"skills":[["s_lore","bureaucracy|heraldry|judgement"]],
				"Talents":[],
				"stat":"T"
			}
		}
	},
	"vaunted":{
		"name":"Vaunted",
		"nameDe":"Erhaben",
		"label":"You grew to adulthood upon the spire of wealth and privilege that towers, in some cases literally, high above the common Imperial masses. You expected their obedience and lived upon the fruits of their toil, surrendered to your extended family in solemn fealty. It was an upbringing amidst proud scions, wastrel lords, and high-priced retainers of silent, watchful competence. All the distractions available to the wealthy, bored elite were arrayed before you for the taking, day after day—a panoply of decadence to enervate the body and transport the mind. Those were years of fantastical exhibitions, sordid entanglements, strange drugs, conspiracies for the sake of show, mindless rivalries, and carefully hidden violence.",
		"labelDe":"Du wuchsest im Überfluss von Reichtum und Privilegien auf, hoch über den gewöhnlichen Massen des Imperiums—manchmal buchstäblich. Gehorsam wurde von anderen erwartet, und du lebtest von den Früchten ihrer Arbeit, die deiner weit verzweigten Familie in feierlicher Treue überlassen wurden. Deine Erziehung fand inmitten stolzer Nachkommen, verschwenderischer Herren und hochbezahlter, still und aufmerksam agierender Bediensteter statt. Jede Ablenkung, die sich die wohlhabende Elite nur vorstellen konnte, stand dir Tag für Tag zur Verfügung—ein Spektakel von Dekadenz, das den Körper erschöpfte und den Geist beschäftigte. Diese Jahre waren geprägt von fantastischen Darbietungen, schäbigen Verwicklungen, seltsamen Drogen, Verschwörungen zum Schein, sinnlosen Rivalitäten und sorgfältig versteckter Gewalt.",
		"image":"vaunted.png",
		"options":{
			"wealth":{
				"name":"Wealthy Family",
				"nameDe":"Reiche Familie",
				"label":"You grew up in a wealthy family, and some of their skills, habits, and privileges naturally rubbed off on you.",
				"labelDe":"Du bist in einer wohlhabenden Familie aufgewachsen, und einige ihrer Fähigkeiten, Gewohnheiten und Privilegien sind zwangsläufig auf dich übergegangen.",
				"skills":[["commerce",""]],
				"Talents":[],
				"stat":"Fel"
			},
			"movers":{
				"name":"Movers and Shakers",
				"nameDe":"Einflussreiche Persönlichkeiten",
				"label":"You experienced the highest echelons of Imperial life, surrounded by influence and power. You were prepared to live like this for the rest of your days.",
				"labelDe":"Du hast die höchsten Formen des imperialen Lebens erlebt, umgeben von Einfluss und Macht. Du warst darauf vorbereitet, so den Rest deines Lebens zu verbringen.",
				"skills":[["command",""]],
				"Talents":[],
				"stat":"Fel"
			},
			"influencer":{
				"name":"Influencers",
				"nameDe":"Beeinflusser",
				"label":"Masters of propaganda and manipulation don’t need to occupy the highest positions in the hierarchy. Those who pull the strings are often indifferent to being seen as the best—they care only about control.",
				"labelDe":"Meister der Propaganda und Manipulation müssen nicht die höchsten Positionen in der Hierarchie einnehmen. Diejenigen, die die Fäden ziehen, sind oft gleichgültig gegenüber dem Ansehen als die Besten – ihnen geht es nur um Kontrolle.",
				"skills":[["deceive",""]],
				"Talents":[],
				"stat":"Fel"
			},
			"pampered":{
				"name":"Silver-Spoon",
				"nameDe":"Verwöhnter",
				"label":"Pampered and privileged, you always knew how to get the best out of your friends and family. Life was free of worries and full of opportunities handed to you with ease.",
				"labelDe":"Verwöhnt und privilegiert, wusstest du immer, wie du das Beste aus deinen Freunden und deiner Familie herausholen konntest. Sorgen waren für dich kein Thema, und das Leben bot dir mühelos zahlreiche Gelegenheiten.",
				"skills":[["charm",""]],
				"Talents":[],
				"stat":"Fel"
			}
		}
	},
	"coc":{
		"name":"Child of the Creed",
		"nameDe":"Kind des Credos",
		"label":"It was not until comparatively late in your youth that you set foot in a room in which the stern gaze of the God-Emperor was absent, and during your impressionable years, you were shielded by the enfolding arms of the Ministorum from much of the hardship and uncertainty so many must endure. The unyielding visage of His statues was as much a part of your upbringing as the zealous, pure faith of those closest to you. Scripture, ritual, lessons, and priestly exhortations fill your memories, rising unbidden in every quiet moment—as though the aged, white-haired clerics who taught you still remain by your shoulder in spirit, jealously guarding over your soul. All men hear the God-Emperor’s holy words if they are born under His rule, but you heard more than most before even reaching adulthood.",
		"labelDe":"Ein Großteil deiner Jugend verging, ohne dass du einen Raum betratst, in dem der strenge Blick des Gott-Imperators nicht über dich wachte. Geschützt durch die Umarmung des Ministorums wurdest du vor vielen Härten und Unsicherheiten bewahrt, die andere ertragen müssen. Die unbeugsame Erscheinung seiner Statuen war ebenso ein Teil deiner Erziehung wie der eifrige, unerschütterliche Glaube deiner Umgebung. Schrifttexte, Rituale, Lektionen und priesterliche Ermahnungen füllen deine Erinnerungen und tauchen in stillen Momenten unwillkürlich auf, als stünden die weißhaarigen Kleriker, die dich unterrichteten, immer noch an deiner Seite und bewachten deine Seele. Alle, die unter der Herrschaft des Gott-Imperators geboren werden, hören seine heiligen Worte, aber du hast mehr als die meisten gehört, lange bevor du das Erwachsenenalter erreicht hast.",
		"image":"creed.png",
		"options":{
			"apostle":{
				"name":"Apostle",
				"nameDe":"Apostel",
				"label":"You worked closely with the devoted servants of the God-Emperor, assisting in spreading His teachings and carrying out His will.",
				"labelDe":"Du hast eng mit den treuen Dienern des Gott-Imperators zusammengearbeitet, um seine Lehren zu verbreiten und seinen Willen auszuführen.",
				"skills":[["s_lore","imp_creed"]],
				"Talents":[],
				"stat":"WP"
			},
			"fanatic":{
				"name":"Fanatic",
				"nameDe":"Fanatiker",
				"label":"Strict and unyielding fanaticism defined much of your upbringing, shaping your beliefs and actions from an early age.",
				"labelDe":"Strenger und kompromissloser Fanatismus prägte einen großen Teil deiner Kindheit und formte deine Überzeugungen und Handlungen von klein auf.",
				"skills":[],
				"Talents":[["flagellant",""]],
				"stat":"WP"
			},
			"philo":{
				"name":"Philosophian",
				"nameDe":"Philosoph",
				"label":"Many viewed you as odd or eccentric. After all, who truly needs philosophy in a galaxy consumed by war and survival?",
				"labelDe":"Viele hielten dich für seltsam oder exzentrisch. Wer braucht schon Philosophie in einer Galaxie, die von Krieg und Überleben geprägt ist?",
				"skills":[["s_lore","philo"]],
				"Talents":[],
				"stat":"WP"
			},
			"mechanicus":{
				"name":"Child of a Different Creed",
				"nameDe":"Kind eines anderen Credos",
				"label":"You worked closely with the devoted servants of the Omnissiah, learning their ways and assisting in their sacred duties.",
				"labelDe":"Du hast eng mit den treuen Dienern des Omnissiah zusammengearbeitet, ihre Lehren kennengelernt und sie bei ihren heiligen Aufgaben unterstützt.",
				"skills":[["s_lore","mechanicus"]],
				"Talents":[],
				"stat":"WP"
			}
		}
	},
	"unnatural":{
		"name":"Unnatural Origins",
		"nameDe":"Unnatürliche Ursprünge",
		"label":"There are many in the Imperium whose existence is not kind; indeed, there are few for whom the Imperium is anything other than a distant and uncaring master. For some, however, existence is something to be suffered and endured. For these wretched few, life is a twisted and unnatural thing, and such men and women either find release in an early death or rise above their abhorrent origins. Some are cursed by a polluted environment, others doomed by the taint of the Warp, while others still are false-men, wrought or remade in flesh-vats and genetic vaults, their lives and bodies as clay to the whims of others. Those who endure their bleak existence are hardened by it, made resolute by an unrelenting desire to leave their past behind. In either case, it is said in hushed tones that these men and women may be something less than human.",
		"labelDe":"Für viele im Imperium ist das Leben hart und unbarmherzig, und das Imperium selbst oft nicht mehr als ein ferner, gleichgültiger Herrscher. Für manche jedoch ist die Existenz nicht nur grausam, sondern auch verdreht und unnatürlich. Diese unglücklichen Seelen müssen ein Leben des Leidens ertragen, geformt durch verzerrte Umstände. Einige sind von einer verschmutzten Umwelt verflucht, andere durch die Verderbnis des Warp verdammt, und wieder andere sind falsche Menschen—erschaffen oder umgeformt in Fleischbottichen und genetischen Gewölben, ihre Körper wie Ton in den Händen anderer. Diejenigen, die ihre düsteren Ursprünge überleben, werden durch ihre Prüfungen gestählt, getrieben von einem unnachgiebigen Wunsch, ihre Vergangenheit hinter sich zu lassen. Doch im Flüsterton heißt es, dass diese Individuen möglicherweise weniger als menschlich sind.",
		"image":"unnatural.png",
		"options":{
			"vat":{
				"name":"Vat-Womb",
				"nameDe":"Kunstgeburt",
				"label":"You were born in a vat-womb, a product of artificial gestation, like many on certain death worlds. While not entirely a false-man, your origins set you apart from those born naturally.",
				"labelDe":"Du wurdest in einem Kunstgebärbehälter geboren, ein Produkt künstlicher Entwicklung, wie viele auf bestimmten Todeswelten. Obwohl du nicht vollständig ein falscher Mensch bist, heben deine Ursprünge dich von denen ab, die auf natürliche Weise geboren wurden.",
				"skills":[["survival",""]],
				"Talents":[],
				"stat":"Per"
			},
			"tainted":{
				"name":"Tainted by the Warp",
				"nameDe":"Vom Warp verdorben",
				"label":"From the moment of your birth, the Warp marked you, leaving a dark stain on your existence. Somehow, you evaded the hunters who would have ended your life for this taint, surviving against all odds.",
				"labelDe":"Seit deiner Geburt bist du vom Warp gezeichnet, ein dunkler Makel, der deine Existenz überschattet. Irgendwie hast du den Jägern entkommen, die dein Leben aufgrund dieser Verderbnis beendet hätten, und hast allen Widrigkeiten zum Trotz überlebt.",
				"skills":[],
				"Talents":[["grey_soul",""]],
				"stat":"Per"
			},
			"false_man":{
				"name":"False-Man",
				"nameDe":"Falscher Mensch",
				"label":"You were created artificially, a product of science rather than nature. It’s better to keep that a closely guarded secret.",
				"labelDe":"Du wurdest künstlich erschaffen, ein Produkt der Wissenschaft und nicht der Natur. Es ist besser, dieses Geheimnis gut zu wahren.",
				"skills":[],
				"Talents":[["sound_const",""]],
				"stat":"Per"
			},
			"contaminated":{
				"name":"Contaminated Environs",
				"nameDe":"Verseuchte Umgebung",
				"label":"You grew up in the lowest and most polluted parts of society, where hardship and filth were a daily reality. From this environment, you gained a deep understanding of its struggles and the people who endure them.",
				"labelDe":"Du bist in den niedrigsten und am meisten verschmutzten Teilen der Gesellschaft aufgewachsen, wo Härte und Elend zum Alltag gehörten. Aus dieser Umgebung hast du ein tiefes Verständnis für ihre Kämpfe und die Menschen, die sie ertragen, gewonnen.",
				"skills":[["f_lore","mutant"]],
				"Talents":[],
				"stat":"Per"
			}
		}
	},
	"scavenger":{
		"name":"Scavenger",
		"nameDe":"Plünderer",
		"label":"You grew into adulthood amidst the yearning and poverty of the God-Emperor’s forgotten flock. One among countless underhivers, renegades, bonepickers, and other outcast groups scraping to survive on the fringes of the Imperium, you scavenged whatever you could to stay alive. Everything you owned was taken from the waste of those above you in the Imperial hierarchy, gleaned from the wreckage of war and disaster—or claimed from the bodies of your peers and rivals. Yours was a life lived on a knife’s edge, balanced between the abyss of starvation on one side and death or worse on the other.",
		"labelDe":"Du bist inmitten der Sehnsucht und Armut der Vergessenen des Gott-Imperators erwachsen geworden. Einer von unzähligen Unterstockbewohnern, Gesetzlosen, Aasjägern und anderen Ausgestoßenen, die an den Rändern des Imperiums ums Überleben kämpfen, hast du alles geplündert, was dir das Überleben sichern konnte. Alles, was du besaßest, stammte aus den Abfällen derjenigen, die in der imperialen Hierarchie über dir standen, aus den Trümmern vergangener Kriege und Katastrophen—oder von den Körpern deiner Mitstreiter und Rivalen. Dein Leben war ein ständiger Balanceakt auf Messers Schneide, zwischen dem Abgrund des Hungers auf der einen Seite und dem Tod oder Schlimmerem auf der anderen.",
		"image":"scavenger.png",
		"options":{
			"underhiver":{
				"name":"Underhiver",
				"nameDe":"Unterstockbewohner",
				"label":"You spent most of your life beneath the towering spires of Imperial cities, in the “ruins” of once-great civilizations. These places are filled with wreckage and filth, inhabited by the desperate and the damned. Perhaps you avoided becoming like them, but you fought hard to survive in this toxic and unforgiving environment.",
				"labelDe":"Du hast den Großteil deines Lebens unter den riesigen Türmen der imperialen Städte verbracht, in den „Ruinen“ einst großer Zivilisationen. Diese Orte sind voller Trümmer und Abschaum, bewohnt von Verzweifelten und Verdammten. Vielleicht bist du nicht wie sie geworden, doch du hast hart gekämpft, um in dieser giftigen und gnadenlosen Umgebung zu überleben.",
				"skills":[],
				"Talents":[["res","radiation"]],
				"stat":"Ag"
			},
			"thief":{
				"name":"Thief",
				"nameDe":"Dieb",
				"label":"You didn’t choose this life; there was no other option. Most of your time was spent as a lowly thief, stealing wherever you could. Survival meant scraping by on the scraps you managed to collect, one way or another.",
				"labelDe":"Du hast dir dieses Leben nicht ausgesucht; es gab keine andere Möglichkeit. Die meiste Zeit hast du als einfacher Dieb verbracht, hier und da gestohlen, was du konntest. Dein Überleben hing davon ab, dich irgendwie von den Resten durchzuschlagen, die du sammeln konntest.",
				"skills":[["sl_o_hand",""]],
				"Talents":[],
				"stat":"Ag"
			},
			"destitute":{
				"name":"Destitute",
				"nameDe":"Verarmt",
				"label":"Life never gave you much, and whenever it did, you squandered it or lost it somehow. Happiness was a distant dream as you struggled to survive each day, plagued by disease, filth, or any other „gift“ life had to offer. Thankfully, those days are behind you now—at least for the moment.",
				"labelDe":"Das Leben hat dir nie viel gegeben, und wenn es das tat, hast du es irgendwie vergeudet oder verloren. Glück war ein ferner Traum, während du jeden Tag ums Überleben gekämpft hast, geplagt von Krankheit, Elend oder irgendeinem anderen „Geschenck“, das das Leben dir bereithielt. Zum Glück liegen diese Tage nun hinter dir—zumindest vorerst.",
				"skills":[],
				"Talents":[["res","disease"]],
				"stat":"Ag"
			},
			"lowlife":{
				"name":"Low-life",
				"nameDe":"Gesindel",
				"label":"You refused to let fate or destiny dictate your life. When life gave you lemons, you aimed your hand cannon directly at adversity—and often at many different people. Survival was the only rule, and you did whatever it took to keep going.",
				"labelDe":"Du hast dich geweigert, dein Leben von Schicksal oder Bestimmung bestimmen zu lassen. Wenn dir das Leben Zitronen gab, hast du deine Handkanone direkt auf das Unglück gerichtet—und oft auf viele verschiedene Leute. Überleben war die einzige Regel, und du hast alles getan, was nötig war, um weiterzumachen.",
				"skills":[["intimidate",""]],
				"Talents":[],
				"stat":"Ag"
			}
		}
	},
	"savant":{
		"name":"Savant",
		"nameDe":"Gelehrter",
		"label":"To the scholar’s ear, there is no worse sound than the tearing of parchment. It always marks a desecration of one sort or another, be it a priceless work lost or a savant destroying his own fl wed labours in disgust. You know this because the murmuring of savants, clicking of lexmachinery, and scent of ink and dust have been a part of your life for as long as you can recall. Apprentices are brought young into the Adept’s trade, for there is much to learn and the human span holds little time to learn it in. Apprentices sit in attendance at meeting after meeting between elder savants, bathed in the exchange of knowledge until they know how to learn and the correct knowledge has been drilled into them. All the galaxy is packed with knowledge, and even the smallest drop of it would fill the minds of a world of savants to bursting. Yet you derive much comfort from learning—even though you could never personally know more than a miniscule fraction of all there is to know.",
		"labelDe":"Für das Ohr eines Gelehrten gibt es kaum einen schlimmeren Klang als das Reißen von Pergament. Es markiert stets einen Verlust, sei es ein unschätzbares Werk oder ein Gelehrter, der seine eigenen fehlerhaften Arbeiten aus Frustration zerstört. Das weißt du nur zu gut, denn das Murmeln der Gelehrten, das Klicken der Lexmachinen und der Geruch von Tinte und Staub waren so lange Teil deines Lebens, wie du dich erinnern kannst. Lehrlinge werden jung in das Handwerk der Adepten aufgenommen, denn die unermessliche Fülle an Wissen in der Galaxis lässt im menschlichen Lebenslauf nur wenig Zeit zum Lernen. Du hast unzählige Stunden in Sitzungen mit älteren Gelehrten verbracht, ihre Weisheit aufgesogen, bis sowohl die Methoden des Lernens als auch das „richtige“ Wissen in dich eingeprägt waren. Die Galaxis quillt über vor Wissen, so gewaltig, dass selbst der kleinste Bruchteil davon die Köpfe unzähliger Gelehrter zum Bersten bringen würde. Doch du findest Trost im Lernen, obwohl du weißt, dass du nur einen winzigen Bruchteil von allem erfassen wirst, was es zu wissen gibt.",
		"image":"savant.png",
		"options":{
			"adept":{
				"name":"Adept",
				"nameDe":"Adept",
				"label":"You spent your life navigating the labyrinthine pyramid of Imperial bureaucracy, serving as one of countless cogs in its vast and unyielding machinery.",
				"labelDe":"Du hast dein Leben in der pyramidenartigen Bürokratie des Imperiums verbracht und als eines von unzähligen Zahnrädern in seiner gewaltigen und unerbittlichen Maschinerie gedient.",
				"skills":[["s_lore","bureaucracy"]],
				"Talents":[],
				"stat":"Int"
			},
			"judge":{
				"name":"Judge",
				"nameDe":"Richter",
				"label":"Your calling was to work alongside local law enforcement, upholding the Emperor’s law and delivering justice where it was needed.",
				"labelDe":"Deine Berufung war es, mit den örtlichen Strafverfolgungsbehörden zusammenzuarbeiten, das Gesetz des Imperators aufrechtzuerhalten und Gerechtigkeit dort zu bringen, wo sie gebraucht wurde.",
				"skills":[["s_lore","judgement"]],
				"Talents":[],
				"stat":"Int"
			},
			"chir":{
				"name":"Chirurgeon",
				"nameDe":"Chirurg",
				"label":"Blood was a constant companion in your work, as you dedicated yourself to saving lives amidst the chaos and carnage.",
				"labelDe":"Blut war ein ständiger Begleiter deiner Arbeit, während du dich dem Retten von Leben inmitten von Chaos und Blutvergießen widmetest.",
				"skills":[["medicae",""]],
				"Talents":[],
				"stat":"Int"
			},
			"scholar":{
				"name":"Scholar",
				"nameDe":"Gelehrter",
				"label":"You dedicated many years to studying and trying to comprehend the intricate and often paradoxical ways of the Imperium’s mindset and philosophy.",
				"labelDe":"Du hast viele Jahre damit verbracht, die komplexen und oft widersprüchlichen Denkweisen und Philosophien des Imperiums zu verstehen.",
				"skills":[["s_lore","numerology"]],
				"Talents":[],
				"stat":"Int"
			}
		}
	},
	"scapegrace":{
		"name":"Scapegrace",
		"nameDe":"Sündenbock",
		"label":"An orphan of the borderland between light and dark, you spent years living by your wits as a scapegrace amidst entertainers, gangers, reclaimators, and other ne’er-do-wells on the fringes of Imperial society. Your youth was spent in a grey borderland where the near-outcast mingled with shadowed figures risen from the depths and thrill-seekers come down from safer climes. A good scapegrace knows that the law only applies to those caught by the enforcers, that a life is worth only as much as is spent on keeping it. You’ve carried these hard earned lessons on into later life. Survival is best thought of as a game, with pleasure and ease the rewards along the way. A body must eat, drink, and live well, for death can come calling when it pleases.",
		"labelDe":"Als Waise im Grenzgebiet zwischen Licht und Dunkelheit hast du deine Jugend damit verbracht, mit deinem Verstand unter Entertainern, Gangs, Restauratoren und anderen zwielichtigen Gestalten an den Rändern der imperialen Gesellschaft zu überleben. In diesem grauen Bereich vermischten sich Beinahe-Außenseiter mit schattenhaften Figuren aus den Tiefen und Nervenkitzel-Suchenden aus sicheren Gefilden. Als Gauner hast du die harte Lektion gelernt, dass Gesetze nur für diejenigen gelten, die von den Ordnungshütern gefasst werden, und dass ein Leben nur so viel wert ist, wie man bereit ist, für dessen Erhalt zu zahlen. Diese Lehren haben dein Erwachsenwerden geprägt, indem du das Überleben als ein Spiel betrachtest, bei dem Vergnügen und Leichtigkeit die Belohnungen sind. Schließlich muss ein Körper essen, trinken und gut leben, denn der Tod kann kommen, wann er will.",
		"image":"scapegrace.png",
		"options":{
			"worker":{
				"name":"Worker",
				"nameDe":"Arbeiter",
				"label":"From the moment of your birth, your fate was sealed. A melta-drill became your first companion, and hard labor defined your existence.",
				"labelDe":"Vom Moment deiner Geburt an war dein Schicksal entschieden. Ein Melta-Bohrer wurde dein erster Begleiter, und harte Arbeit prägte dein Dasein.",
				"skills":[["trade","tr_any"]],
				"Talents":[],
				"stat":"BS"
			},
			"servant":{
				"name":"Servant",
				"nameDe":"Diener",
				"label":"You had the opportunity to serve someone of greater importance, dedicating your efforts to their needs and ambitions.",
				"labelDe":"Du hattest die Gelegenheit, für jemanden von größerer Bedeutung zu arbeiten und deine Anstrengungen ihren Bedürfnissen und Ambitionen zu widmen.",
				"skills":[["s_lore","heraldry"]],
				"Talents":[],
				"stat":"BS"
			},
			"unremark":{
				"name":"Unremarkable",
				"nameDe":"Unauffällig",
				"label":"You managed to avoid the most grueling and horrifying tasks by blending seamlessly into the crowd, escaping notice and expectations.",
				"labelDe":"Du hast es geschafft, den schlimmsten und härtesten Aufgaben zu entgehen, indem du dich unauffällig in der Menge verborgen hast und so der Aufmerksamkeit und den Erwartungen entkommen bist.",
				"skills":[["stealth",""]],
				"Talents":[],
				"stat":"BS"
			},
			"catspaw":{
				"name":"Catspaw",
				"nameDe":"Handlanger",
				"label":"You were little more than a useful tool for the Imperials, gangers, or any other group you happened to fall in with, used for their purposes and discarded when convenient.",
				"labelDe":"Du warst kaum mehr als ein nützliches Werkzeug für die Imperialen, Gangs oder jede andere Gruppe, in die du hineingeraten bist, benutzt für ihre Zwecke und bei Bedarf fallengelassen.",
				"skills":[["scrutiny",""]],
				"Talents":[],
				"stat":"BS"
			}
		}
	}
}


var lure = 
{
	"crusader":
	{
		"Name":"Crusader",
		"Desc":"The Imperium is in a near-total state of war, and the need for those willing to fight in the Emperor’s name is great. In these times, great armies are raised, a Warmaster is named, and crusades head out in massive campaigns to smash the enemy into oblivion. As great as the Imperial war machine is, there are thousands of smaller units and PDFs that struggle to hold out until reinforcements arrive. Many citizens answer the clarion call to march in the name of the Golden Throne. There are some who have been charged with eliminating the enemy from their territory, and just as they are about to complete the herculean task set before them, the cowardly enemy flees across the expanse. It’s only fit and right for these soldiers of the Imperium to pursue such cowards and eliminate them with extreme prejudice as an affront to the God-Emperor of Man. Others excel at martial combat, trained by the Imperium until their skills are razor-sharp. These men and women comprise the elite forces that are aimed at the enemies of the Imperium, striving to become ever better by seeking out other warriors on the field of battle and test their mettle in single combat—either learning new techniques in the process, or becoming another casualty of war.",
		"NameDe":"Kreuzritter",
		"DescDe":"Das Imperium befindet sich in einem nahezu vollständigen Kriegszustand, und der Bedarf an denen, die bereit sind, im Namen des Imperators zu kämpfen, ist groß. In diesen Zeiten werden gewaltige Armeen aufgestellt, ein Kriegsherr wird ernannt, und Kreuzzüge ziehen in massiven Feldzügen aus, um den Feind in Vergessenheit zu schlagen. So groß die Kriegsmaschinerie des Imperiums auch ist, es gibt Tausende kleinerer Einheiten und planetarer Verteidigungsstreitkräfte (PDFs), die darum kämpfen, standzuhalten, bis Verstärkungen eintreffen. Viele Bürger folgen dem Ruf des Goldenen Thrones und marschieren im Namen des Imperators.</br>Manche wurden damit beauftragt, den Feind aus ihrem Gebiet zu vertreiben, und gerade als sie die herkulische Aufgabe fast abgeschlossen haben, flieht der feige Feind über das weite Land. Es ist nur angemessen und richtig, dass diese Soldaten des Imperiums solche Feiglinge verfolgen und mit äußerster Härte beseitigen, als Beleidigung des Gott-Imperators der Menschheit. Andere wiederum zeichnen sich durch meisterhaften Nahkampf aus, ausgebildet vom Imperium, bis ihre Fähigkeiten messerscharf sind. Diese Männer und Frauen bilden die Eliteeinheiten, die gegen die Feinde des Imperiums gerichtet sind, und streben danach, immer besser zu werden, indem sie andere Krieger auf dem Schlachtfeld suchen und ihre Stärke im Einzelkampf testen – entweder um neue Techniken zu lernen oder um ein weiteres Opfer des Krieges zu werden.",
		"options":{
			"calltowar":{
				"Name":"Call to War",
				"Desc":"War called and you answered. Imperium needs those ready to fight.",
				"NameDe":"Ruf zum Krieg",
				"DescDe":"Der Krieg rief, und du hast geantwortet. Das Imperium braucht jene, die bereit sind zu kämpfen.",
				"Talents":[["hatred","any_opp"],["jaded",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"unlikelyallies":{
				"Name":"Unlikely Allies",
				"Desc":"Influential people found that you had some connections that could come in handy for Rogue Traders.",
				"NameDe":"Unwahrscheinliche Verbündete",
				"DescDe":"Einflussreiche Personen stellten fest, dass du über Verbindungen verfügst, die für Freihändler nützlich sein könnten.",
				"Talents":[["peer","xenos"]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"chasingtheenemy":{
				"Name":"Chasing the Enemy",
				"Desc":"You have some enemy that wronged you and you will not back down until he is found and killed by your hand.",
				"NameDe":"Den Feind verfolgen",
				"DescDe":"Du hast einen Feind, der dir Unrecht getan hat, und du wirst nicht ruhen, bis du ihn gefunden und eigenhändig getötet hast.",
				"Talents":[["no_hiding",""],["hard_target",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"firebrand":{
				"Name":"Firebrand",
				"Desc":"Your fiery heart screamed for enemies. Your thirst wasn’t satisfied by staying in one place.",
				"NameDe":"Heißsporn",
				"DescDe":"Dein feuriges Herz verlangte nach Feinden. Dein Durst wurde nicht gestillt, indem du an einem Ort verweiltest.",
				"Talents":[["frenzy",""],["battlerage",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"renegade":
	{
		"Name":"Renegade",
		"Desc":"The Imperium survives and prospers in no small part due to the narrowness of its vision, and by the strictures imposed by high walls, harsh order, and obedient faith on worlds where no man looks beyond the simple rotes taught in childhood. A rebellious mind such as yours could not be so easily constrained, however, but you have had to pay a price for your freedom and have learned those high walls are there for a reason. Perhaps you were a visionary in search of strange knowledge, seeking answers to questions those around you never thought to ask, answers that proved dark indeed. Or perhaps you denied the sanctity of the God-Emperor’s church in your heart and fled its shackles of faith, or fought as part of a bloody revolt against the tyranny and injustice of your home world. In any case, you saw your only options to be escape or death. Now, the stars beyond await you with the possibility of freedoms and powers unguessed at and perils unknown.",
		"NameDe":"Renegat",
		"DescDe":"Das Imperium überlebt und gedeiht nicht zuletzt durch die Enge seiner Sichtweise, durch die strengen Vorgaben, die durch hohe Mauern, harte Ordnung und gehorsamen Glauben auferlegt werden, auf Welten, wo kein Mensch über die einfachen Riten hinausblickt, die in der Kindheit gelehrt wurden. Ein rebellischer Geist wie deiner ließ sich jedoch nicht so leicht einschränken, doch du musstest einen Preis für deine Freiheit zahlen und hast gelernt, dass diese hohen Mauern aus einem Grund existieren.</br>Vielleicht warst du ein Visionär auf der Suche nach fremdem Wissen und suchtest Antworten auf Fragen, die niemand um dich herum zu stellen wagte – Antworten, die sich als wahrlich dunkel erwiesen. Oder vielleicht hast du im Herzen die Heiligkeit der Kirche des Gott-Imperators verleugnet, bist vor ihren Fesseln des Glaubens geflohen oder hast in einem blutigen Aufstand gegen die Tyrannei und Ungerechtigkeit deiner Heimatwelt gekämpft. Wie dem auch sei, du sahst nur zwei Möglichkeiten: Flucht oder Tod. Nun erwarten dich die Sterne jenseits dieser Mauern mit der Möglichkeit von Freiheiten und Mächten, die unerkannt blieben, und Gefahren, die noch unbekannt sind.",
		"options":{
			"recidivist":{
				"Name":"Recidivist",
				"Desc":"You’ve spent many years inside and outside. The arm of the law never was able to convict you to death. ",
				"NameDe":"Wiederholungstäter",
				"DescDe":"Du hast viele Jahre drinnen und draußen verbracht. Der Arm des Gesetzes konnte dich nie zum Tode verurteilen.",
				"Talents":[],
				"Skills":[["c_lore","underworld"],["f_lore","cartel"],["f_lore","smuggler"]],
				"Points":5,
				"PType":"CP"
			},
			"darkvisionary":{
				"Name":"Dark Visionary",
				"Desc":"You dabbled in knowledge you shouldn’t have. A witch of sorts. You were saved from the pyre.",
				"NameDe":"Dunkler Visionär",
				"DescDe":"Du hast dich mit Wissen beschäftigt, das dir verboten war. Eine Art Hexer. Du wurdest vor dem Scheiterhaufen gerettet.",
				"Talents":[],
				"Skills":[["s_lore","occult"],["f_lore","heresy"]],
				"Points":5,
				"PType":"CP"
			},
			"freethinker":{
				"Name":"Free-thinker",
				"Desc":"You spent your days thinking outside the box. This was deadly dangerous. Before some would take your life, you escaped.",
				"NameDe":"Freidenker",
				"DescDe":"Du hast deine Tage damit verbracht, über den Tellerrand hinauszudenken. Das war tödlich gefährlich. Bevor dir jemand dein Leben nehmen konnte, bist du geflohen.",
				"Talents":[],
				"Skills":[["s_lore","philo"],["f_lore","philo"]],
				"Points":5,
				"PType":"CP"
			},
			"vigilante":{
				"Name":"Vigilante",
				"Desc":"Where there is a lot of crime and innocents, sometimes someone like you shows up to even the odds. The enemies you acquired wanted you dead but you were long gone before they showed up.",
				"NameDe":"Vigilant",
				"DescDe":"Wo es viel Kriminalität und Unschuldige gibt, taucht manchmal jemand wie du auf, um die Chancen auszugleichen. Die Feinde, die du dir gemacht hast, wollten dich tot sehen, aber du warst längst verschwunden, bevor sie auftauchten.",
				"Talents":[],
				"Skills":[["scrutiny",""],["interrogation",""]],
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"hunter":
	{
		"Name":"Hunter",
		"Desc":"Across the Calixis Sector and within the Koronus Expanse hunters come in all shapes and types. Some of them hunt down the creatures of death worlds, capturing them alive and bringing them back to “civilisation,” so that the beasts can be put to use entertaining the masses of the Imperium. Others prefer to hunt down and stalk the myriad xenos races that haunt and threaten humanity. Bounty hunters are at once reviled and honoured within Imperial society, for too often do those who are to face Imperial justice flee to parts unknown—beyond the reach of the Adeptus Arbites. When this happens, a bounty is posted and anyone willing to go forth and bring back the fugitive (dead or alive in many cases) can make a small fortune over time. Then there are those on the other side of the coin: they have become the hunted, whether by a member of the mysterious Officio Assassinorum, a bounty hunter, or some xenos agent. These unfortunates spend their days looking over their shoulders and nights sleeping with one eye open.",
		"NameDe":"Jäger",
		"DescDe":"Im gesamten Calixis-Sektor und innerhalb der Koronus-Weite gibt es Jäger in allen Formen und Arten. Einige von ihnen jagen die Kreaturen von Todeswelten, fangen sie lebend ein und bringen sie zurück in die „Zivilisation“, damit diese Bestien die Massen des Imperiums unterhalten können. Andere ziehen es vor, die zahllosen Xenos-Rassen aufzuspüren und zu jagen, die die Menschheit bedrohen.</br>Kopfgeldjäger werden in der imperialen Gesellschaft gleichzeitig verachtet und geehrt, denn allzu oft fliehen jene, die der imperialen Gerechtigkeit ins Auge sehen sollen, in unbekannte Teile – jenseits der Reichweite des Adeptus Arbites. In solchen Fällen wird ein Kopfgeld ausgesetzt, und jeder, der bereit ist, sich auf den Weg zu machen und den Flüchtigen zurückzubringen (oft tot oder lebendig), kann mit der Zeit ein kleines Vermögen verdienen.</br>Dann gibt es noch die andere Seite der Medaille: jene, die selbst zu Gejagten geworden sind – sei es durch ein Mitglied des geheimnisvollen Officio Assassinorum, einen Kopfgeldjäger oder einen Agenten der Xenos. Diese Unglücklichen verbringen ihre Tage damit, sich ständig umzusehen, und ihre Nächte damit, mit einem offenen Auge zu schlafen.",
		"options":{
			"bountyhunter":{
				"Name":"Bounty Hunter",
				"Desc":"You worked as a mercenary, hunting those that heads are worth your time.",
				"NameDe":"Kopfgeldjäger",
				"DescDe":"Du hast als Söldner gearbeitet und jene gejagt, deren Köpfe deine Zeit wert waren.",
				"Talents":[["bloodtracker",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"xenoshunter":{
				"Name":"Xenos Hunter",
				"Desc":"Your skills of hunting Xenos were noteworthy and useful to someone.",
				"NameDe":"Xenos-Jäger",
				"DescDe":"Deine Fähigkeiten im Jagen von Xenos waren bemerkenswert und für jemanden von Nutzen.",
				"Talents":[["hatred","xenos"]],
				"Skills":[["f_lore","xenos"]],
				"Points":5,
				"PType":"IP"
			},
			"hunted":{
				"Name":"Hunted",
				"Desc":"You were hunted by someone. They were close, too close, to get to you, until you were saved.",
				"NameDe":"Gejagter",
				"DescDe":"Du wurdest von jemandem gejagt. Sie kamen dir zu nah, viel zu nah, bis du gerettet wurdest.",
				"Talents":[["face_in_crowd",""],["coverup",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"ranger":{
				"Name":"Ranger",
				"Desc":"You lived on the outskirts of human civilization. People who walk ruined worlds need people such as yourself.",
				"NameDe":"Waldläufer",
				"DescDe":"Ein Meister des Überlebens, der Jagd und der Erkundung in ungezähmten und gefährlichen Gebieten.",
				"Talents":[["constant_vigilance","any"]],
				"Skills":[["navigate","surface"]],
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"dutybound":
	{
		"Name":"Duty Bound",
		"Desc":"Only the ignorant believe that duty is a prison forced on others by those in power. True duty arises spontaneously from the soul, a call to service and struggle that should be neither shirked nor denied. It is your faith and your honour that impels you to places and labours far beyond the imagining of those that grub in the dirt of self-interest. Whether you serve the Aquila, strive to guide and guard the numberless masses of mankind, or serve the honour and calling of your blood, you know well the great trials and far journeys that lie ahead, and intend to see them through to the last.",
		"NameDe":"Pflichtbewusst",
		"DescDe":"Nur die Unwissenden glauben, dass Pflicht ein Gefängnis ist, das von den Mächtigen anderen aufgezwungen wird. Wahre Pflicht entspringt spontan der Seele – ein Ruf zum Dienst und zum Kampf, der weder verweigert noch geleugnet werden sollte. Es sind dein Glaube und deine Ehre, die dich an Orte und zu Aufgaben treiben, die weit über die Vorstellungskraft jener hinausgehen, die im Dreck des Eigennutzes wühlen.</br>Ob du dem Aquila dienst, danach strebst, die unzähligen Massen der Menschheit zu führen und zu schützen, oder der Ehre und Berufung deines Blutes folgst, du kennst die großen Prüfungen und langen Reisen, die vor dir liegen, und hast die feste Absicht, sie bis zum Ende durchzustehen.",
		"options":{
			"throne":{
				"Name":"Duty to the Throne",
				"Desc":"Your duty is to the Imperium of Mankind, no matter who leads it at the moment. You are ready to note every deed, so nothing and nobody will be forgotten, and their names written on Holy Terra itself.",
				"NameDe":"Pflicht gegenüber dem Thron",
				"DescDe":"Deine Pflicht gilt dem Imperium der Menschheit, unabhängig davon, wer es derzeit regiert. Du bist bereit, jede Tat zu dokumentieren, damit nichts und niemand vergessen wird und ihre Namen auf dem Heiligen Terra selbst niedergeschrieben werden.",
				"Talents":[],
				"Skills":[["c_lore","imperium"],["s_lore","imperium"],["trade","loremancer"]],
				"Gear":["Memorance Implant"],
				"Points":5,
				"PType":"IP"
			},
			"humanity":{
				"Name":"Duty to Humanity",
				"Desc":"Your duty is to all Mankind. What if it means you will need to commit some acts that are deemed heresy? So be it! If there’s a chance for Humanity to survive, it is better to take it than turn to ash.",
				"NameDe":"Pflicht gegenüber der Menschheit",
				"DescDe":"Deine Pflicht gilt der gesamten Menschheit. Was, wenn das bedeutet, dass du einige Taten begehen musst, die als Ketzerei gelten? So sei es! Wenn es eine Chance für das Überleben der Menschheit gibt, ist es besser, sie zu ergreifen, als zu Asche zu werden.",
				"Talents":[["delicatedealings",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"dynasty":{
				"Name":"Duty to Your Dynasty",
				"Desc":"Your duty is to the Dynasty you serve. Nobody will question your loyalty. You would gladly sacrifice yourself to save your Lord Captain.",
				"NameDe":"Pflicht gegenüber deiner Dynastie",
				"DescDe":"Deine Pflicht gilt der Dynastie, der du dienst. Niemand wird deine Loyalität infrage stellen. Du würdest dich bereitwillig opfern, um deinen Lord Captain zu retten.",
				"Talents":[["aoa",""]],
				"Skills":[["inquiry",""]],
				"Points":5,
				"PType":"IP"
			},
			"other":{
				"Name":"Duty to Other",
				"Desc":"Your duty is to a specific organization. They must have sent you to spy on the Dynasty or join them as “allies.” However, they wanted assurances that you will never betray them.",
				"NameDe":"Pflicht gegenüber anderen",
				"DescDe":"Deine Pflicht gilt einer bestimmten Organisation. Sie haben dich entweder geschickt, um die Dynastie auszuspionieren, oder um ihnen als „Verbündete“ beizutreten. Allerdings wollten sie sicherstellen, dass du sie niemals verraten wirst.",
				"Talents":[["peer","any_imp"]],
				"Skills":"",
				"Gear":["Volitor Implant"],
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"destiny":
	{
		"Name":"Chosen by Destiny",
		"Desc":"For as long as you can recall, you have been certain that a grand destiny awaits you. The God-Emperor must watch over you, for sometimes events have unfolded in exactly the right manner to carry your plans forward, and at others times, the actions needed to set you upon the way ahead were quickly apparent. Perhaps you quest for forbidden truths that have made you enemies amongst the stolid thinkers of the Imperium, or perhaps you know in your heart that your fate lies upon strange xenos worlds, or perhaps you are sure that you will be the greatest of your bloodline, whose name will echo down through the ages, no matter what the cost.",
		"NameDe":"Auserwählt vom Schicksal",
		"DescDe":"Solange du dich erinnern kannst, warst du dir sicher, dass ein großes Schicksal auf dich wartet. Der Gott-Imperator muss über dich wachen, denn manchmal haben sich Ereignisse genau so entwickelt, dass sie deine Pläne voranbrachten, und zu anderen Zeiten waren die notwendigen Schritte, um dich auf den richtigen Weg zu bringen, schnell offensichtlich.</br>Vielleicht suchst du nach verbotenen Wahrheiten, die dir Feinde unter den starren Denkern des Imperiums eingebracht haben, oder vielleicht weißt du in deinem Herzen, dass dein Schicksal auf seltsamen Xenos-Welten liegt. Vielleicht bist du dir sicher, dass du der Größte deiner Blutlinie sein wirst, dessen Name durch die Zeitalter hallen wird, egal, welchen Preis es kostet.",
		"options":{
			"predestined":{
				"Name":"Predestined",
				"Desc":"Your destiny was written by someone else. Without a choice of your own, you were taught by the best. Now you are ready and everybody will understand your destiny.",
				"NameDe":"Vorherbestimmt",
				"DescDe":"Dein Schicksal wurde von jemand anderem geschrieben. Ohne eigene Wahl wurdest du von den Besten unterrichtet. Jetzt bist du bereit, und jeder wird dein Schicksal verstehen.",
				"Talents":[["lexographer",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"greatness":{
				"Name":"Fated for Greatness",
				"Desc":"A vision from an Imperial psyker or the local witch led many to believe you would bring salvation. Somebody of note took you in and taught you about the past so you will be ready for the future.",
				"NameDe":"Für Größe bestimmt",
				"DescDe":"Eine Vision eines imperialen Psionikers oder der lokalen Hexe ließ viele glauben, dass du Erlösung bringen würdest. Jemand von Bedeutung nahm dich auf und lehrte dich über die Vergangenheit, damit du für die Zukunft bereit bist.",
				"Talents":[],
				"Skills":[["s_lore","legends"],["s_lore","warrants"]],
				"Points":5,
				"PType":"CP"
			},
			"laststand":{
				"Name":"Last Stand",
				"Desc":"You had that one moment in your life. Do or die, yet you lived. Broken you stood up. Maybe destiny has more in store for you.",
				"NameDe":"Letzter Widerstand",
				"DescDe":"Du hattest diesen einen Moment in deinem Leben. Alles oder nichts, und doch hast du überlebt. Gebrochen standest du wieder auf. Vielleicht hat das Schicksal noch mehr für dich bereit.",
				"Talents":[["hardy",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"xenophile":{
				"Name":"Xenophile",
				"Desc":"Seen as the bridge on the divide between Xenos and Humanity. Many see you as a chance to have better relations with those more trustworthy aliens.",
				"NameDe":"Xenophil",
				"DescDe":"Du wirst als Brücke zwischen Xenos und der Menschheit gesehen. Viele betrachten dich als Chance, bessere Beziehungen zu vertrauenswürdigeren Aliens aufzubauen.",
				"Talents":[["ambassador",""]],
				"Skills":[],
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"zealot":
	{
		"Name":"Zealot",
		"Desc":"You possess faith so great that it has carried you far beyond the mundane life that would otherwise have been your lot. Whether it is something that has always been a part of you or was born in you from amidst a battlefield or came to you in a revelation, where others merely believe, you have certainty. It is this faith that has led you on a pilgrim’s path to the stars, where you will bring the God-Emperor’s will to the unbeliever and the needy, to protect the righteous and punish the enemies of mankind.",
		"NameDe":"Eiferer",
		"DescDe":"Du besitzt einen Glauben, der so groß ist, dass er dich weit über das gewöhnliche Leben hinausgetragen hat, das sonst dein Los gewesen wäre. Ob dieser Glaube schon immer ein Teil von dir war, auf einem Schlachtfeld in dir geboren wurde oder dir durch eine Offenbarung zuteilwurde – wo andere nur glauben, hast du Gewissheit. Es ist dieser Glaube, der dich auf einen Pilgerpfad zu den Sternen geführt hat, wo du den Willen des Gott-Imperators zu den Ungläubigen und Bedürftigen bringen wirst, um die Gerechten zu schützen und die Feinde der Menschheit zu bestrafen.",
		"options":{
			"blessed":{
				"Name":"Blessed Scars",
				"Desc":"You might have gained your scars due to battle or torture, however, these same scars show you are ready to make sacrifices for the God-Emperor. In his service, you will bring the galaxy to kneel.",
				"NameDe":"Gesegnete Narben",
				"DescDe":"Vielleicht hast du deine Narben durch den Kampf oder durch Folter erhalten, doch diese Narben zeigen, dass du bereit bist, Opfer für den Gott-Imperator zu bringen. In seinem Dienst wirst du die Galaxie in die Knie zwingen.",
				"Talents":[["diehard",""],["sound_const",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"faithful":{
				"Name":"Favoured of the Faithful",
				"Desc":"Many hear your words, many will follow them. You preach of hope and fire. Somebody important listened and answered.",
				"NameDe":"Liebling der Gläubigen",
				"DescDe":"Viele hören deine Worte, viele folgen ihnen. Du predigst von Hoffnung und Feuer. Jemand Bedeutendes hörte zu und antwortete.",
				"Talents":[["peer","faithful"]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"clarity":{
				"Name":"Unnerving Clarity",
				"Desc":"None can stand in your way. Your mind is guarded against those wretched beings called psykers. The stars will be yours.",
				"NameDe":"Unheimliche Klarheit",
				"DescDe":"Niemand kann sich dir in den Weg stellen. Dein Geist ist vor diesen verabscheuungswürdigen Wesen namens Psioniker geschützt. Die Sterne werden dir gehören.",
				"Talents":[["strong_minded",""]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			},
			"zealous":{
				"Name":"Zealous Convert",
				"Desc":"You lived a life of sin, but that ended when you met faith. Be it in the form of a fiery missionary or a vision, you left your sinful life behind.",
				"NameDe":"Eifernder Bekehrter",
				"DescDe":"Du hast ein Leben in Sünde geführt, aber das endete, als du den Glauben gefunden hast. Sei es in Form eines feurigen Missionars oder einer Vision, du hast dein sündiges Leben hinter dir gelassen.",
				"Talents":[["hatred","heretics"],["pure_hatred","heretics"]],
				"Skills":[],
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"criminal":
	{
		"Name":"Criminal",
		"Desc":"The wheels of Imperial justice turn slowly, but they will surely grind to a pulp any life caught in their path. To make matters worse, there are traps in the criminal underworld that will lead to far worse consequences than years of hard labour in an Imperial penal colony. You are an individual declared guilty by Imperial law or called outcast by the crime baron you once served and have no recourse but to leave the life you once knew. The black paths of smugglers and renegades that winds behind the façade of Imperial society offer a dangerous refuge for those one step ahead of justice, as well as those so damaged by past punishment that they could never rejoin a law-abiding citizenry. ",
		"NameDe":"Krimineller",
		"DescDe":"Die Räder der imperialen Justiz drehen sich langsam, doch sie werden unweigerlich jedes Leben, das ihnen in den Weg gerät, zermalmen. Noch schlimmer sind die Fallen der kriminellen Unterwelt, die weit schlimmere Konsequenzen nach sich ziehen können als Jahre harter Arbeit in einer imperialen Strafkolonie. Du bist eine Person, die vom imperialen Gesetz für schuldig erklärt oder vom Verbrecherbaron, dem du einst gedient hast, verstoßen wurde und keinen anderen Ausweg sieht, als das Leben hinter sich zu lassen, das sie einst kannte. Die dunklen Pfade der Schmuggler und Renegaten, die sich hinter der Fassade der imperialen Gesellschaft verbergen, bieten einen gefährlichen Zufluchtsort für jene, die der Gerechtigkeit einen Schritt voraus sind, sowie für jene, die durch frühere Bestrafungen so sehr beschädigt wurden, dass sie nie wieder Teil einer gesetzestreuen Bürgerschaft werden könnten.",
		"options":{
			"wanted":{
				"Name":"Wanted Fugitive",
				"Desc":"You are a wanted man on some world. You were given a chance to escape and took it.",
				"NameDe":"Gesuchter Flüchtling",
				"DescDe":"Du wirst auf einer Welt gesucht. Dir wurde eine Chance zur Flucht gegeben, und du hast sie ergriffen.",
				"Talents":[],
				"Skills":[["stealth",""],["awareness",""]],
				"Points":5,
				"PType":"CP"
			},
			"judged":{
				"Name":"Judged and Found Wanting",
				"Desc":"You spent a lot of your years in the prison. Thankfully, you are out and the skills you learned will be useful.",
				"NameDe":"Verurteilt und für unzureichend befunden",
				"DescDe":"Du hast viele Jahre deines Lebens im Gefängnis verbracht. Zum Glück bist du nun frei, und die Fähigkeiten, die du dort gelernt hast, werden nützlich sein.",
				"Talents":[],
				"Skills":[["survival",""],["s_lore","judgement"]],
				"Points":5,
				"PType":"CP"
			},
			"crim_mastermind":{
				"Name":"Criminal Mastermind",
				"Desc":"You worked on many deals, dangerous and highly illegal one. You never were captured. An asset to many.",
				"NameDe":"Kriminelles Genie",
				"DescDe":"Du hast an vielen Geschäften gearbeitet, gefährlichen und hochillegalen. Du wurdest nie gefasst – ein Gewinn für viele.",
				"Talents":[["contact_network",""]],
				"Skills":[],
				"Points":5,
				"PType":"CP"
			},
			"mindcleansed":{
				"Name":"Mind-Cleansed",
				"Desc":"Your past was removed from your mind. Whatever happened there, who knows. These things are better left alone.",
				"NameDe":"Geistig gereinigt",
				"DescDe":"Deine Vergangenheit wurde aus deinem Gedächtnis entfernt. Was dort geschah? Wer weiß. Es ist besser, diese Dinge ruhen zu lassen.",
				"Talents":[["foresight",""],["total_recall",""]],
				"Skills":[],
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"tainted":
	{
		"Name":"Tainted",
		"Desc":"You are vile in the eyes of the holy, declared tainted by your twisted form or marked by your accursed bloodline or your strange demeanour and heretical beliefs. Few look more closely than is needed to condemn you, fearing the contagion of evil and the judgment of the God-Emperor’s appointed servants. But despite the excoriation by the witless fools who have turned their hands against you, your soul burns for greatness. You now search relentlessly for the place where you might attain even a small fraction of what would have been your rightful victories were your life not so blighted by fate, and the power to avenge yourself on those who would see you suffer.",
		"NameDe":"Verdorben",
		"DescDe":"Du bist in den Augen der Heiligen abscheulich, als besudelt erklärt durch deine entstellte Gestalt, deine verfluchte Blutlinie, dein seltsames Auftreten oder deine ketzerischen Überzeugungen. Nur wenige schauen genauer hin, als es nötig ist, um dich zu verdammen, aus Angst vor der Ansteckung des Bösen und dem Urteil der Diener des Gott-Imperators. Doch trotz der Verachtung der törichten Narren, die sich gegen dich gewandt haben, brennt deine Seele nach Größe. Du suchst nun unermüdlich nach einem Ort, an dem du auch nur einen Bruchteil der Erfolge erreichen kannst, die dir rechtmäßig zugestanden hätten, wäre dein Leben nicht so vom Schicksal verwüstet worden – und nach der Macht, dich an jenen zu rächen, die dich leiden sehen wollen.",
		"options":{
			"mutant":{
				"Name":"Mutant",
				"Desc":"Your strange mutations grant you more skills than normal humans. This was an asset to someone.",
				"NameDe":"Mutant",
				"DescDe":"Deine seltsamen Mutationen verleihen dir mehr Fähigkeiten als gewöhnlichen Menschen. Dies war für jemanden von Nutzen.",
				"Talents":[["neverdie",""]],
				"Skills":[["f_lore","mutant"]],
				"Mutation":["1d69"],
				"Points":5,
				"PType":"CP"
			},
			"Insane":{
				"Name":"Insane",
				"Desc":"The insane mind is a free mind. Your mind is full of great ideas, somebody will use your knowledge.",
				"NameDe":"Wahnsinnig",
				"DescDe":"Der wahnsinnige Geist ist ein freier Geist. Dein Geist ist voller großartiger Ideen, und jemand wird dein Wissen nutzen.",
				"Talents":[],
				"Skills":[],
				"Points":5,
				"PType":"CP"
			},
			"deviant":{
				"Name":"Deviant Philosophy",
				"Desc":"You always had strange ideas. Many would call you a heretic, while others useful.",
				"NameDe":"Abweichende Philosophie",
				"DescDe":"Du hattest schon immer seltsame Ideen. Viele würden dich als Ketzer bezeichnen, andere hingegen als nützlich.",
				"Talents":[],
				"Skills":[["s_lore","numerology"],["f_lore","heresy"]],
				"Points":5,
				"PType":"CP"
			},
			"warptouched":{
				"Name":"Warp-Touched",
				"Desc":"While you have no visible corruption, your mind was freed. Who knows, maybe someone will need you.",
				"NameDe":"Warp-Berührt",
				"DescDe":"Obwohl du keine sichtbare Verderbnis hast, wurde dein Geist befreit. Wer weiß, vielleicht wird dich jemand brauchen.",
				"Talents":[["grey_soul",""],["res","disease"]],
				"Skills":[],
				"Malignancy":1,
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"newhorizons":
	{
		"Name":"New Horizons",
		"Desc":"There’s a whole galaxy out there that’s full of the unknown. A select few seek out the hidden knowledge of the cosmos and the truths of existence. They pore over ancient lore and texts, something deep within them driving them ever onward. Some seek out the technology of the past, hoping to seize it for their own use or for use by a powerful patron, as they traverse the galaxy studying ancient ruins and decrepit tombs. A rare few walk a dangerous line as they seek out and study knowledge and lore concerning the various works of the xenos. All of these endeavours are perilous, for in the Imperium knowledge can lead to a life of persecution, misery and insanity—but many are willing to brave the risks, for the rewards are great indeed.",
		"NameDe":"Neue Horizonte",
		"DescDe":"Da draußen liegt eine ganze Galaxie voller Unbekanntem. Eine ausgewählte Gruppe sucht nach dem verborgenen Wissen des Kosmos und den Wahrheiten der Existenz. Sie durchforsten alte Überlieferungen und Texte, getrieben von etwas Tiefem in ihrem Inneren, das sie immer weiter vorantreibt. Einige suchen nach der Technologie der Vergangenheit, in der Hoffnung, sie für ihre eigenen Zwecke oder die eines mächtigen Gönners zu nutzen, während sie die Galaxie durchstreifen und alte Ruinen und verfallene Gräber studieren. Wenige wagen den gefährlichen Pfad, Wissen und Überlieferungen über die Werke der Xenos zu suchen und zu studieren. All diese Unternehmungen sind gefährlich, denn im Imperium kann Wissen zu einem Leben voller Verfolgung, Elend und Wahnsinn führen – doch viele sind bereit, die Risiken einzugehen, denn die Belohnungen sind wahrlich großartig.",
		"options":{
			"seeker":{
				"Name":"Seeker of Truth",
				"Desc":"Knowledge is power. You studied the most of your life, never leaving the librarium.",
				"NameDe":"Wahrheitssucher",
				"DescDe":"Wissen ist Macht. Du hast den Großteil deines Lebens studiert und das Librarium nie verlassen.",
				"Talents":[["infusedknowledge",""]],
				"Skills":[],
				"Points":5,
				"PType":"CP"
			},
			"xenoarcanist":{
				"Name":"Xeno-Arcanist",
				"Desc":"Very few can study xenotech or even Xenos. Many will die for trying. You somehow got your hands on some good knowledge.",
				"NameDe":"Xeno-Arkanist",
				"DescDe":"Nur wenige können Xenotechnologie oder sogar Xenos studieren. Viele sterben bei dem Versuch. Du hast es irgendwie geschafft, an wertvolles Wissen zu gelangen.",
				"Talents":[["xenosavant",""]],
				"Skills":[["s_lore","xenology"]],
				"Points":5,
				"PType":"CP"
			},
			"archeotech":{
				"Name":"Archeotechnologist",
				"Desc":"You spent your time studying old technology. If it was sanctioned or not, you learnt a lot.",
				"NameDe":"Archeotechnologe",
				"DescDe":"Du hast deine Zeit damit verbracht, alte Technologie zu studieren. Ob es sanktioniert war oder nicht, du hast viel gelernt.",
				"Talents":[],
				"Skills":[["f_lore","archeotech"],["f_lore","tech"]],
				"Points":5,
				"PType":"CP"
			},
			"creator":{
				"Name":"Creator",
				"Desc":"You worked close with the Manufactorum folk. Weapons, armour, vehicles and more. You had your hands in everything.",
				"NameDe":"Erzeuger",
				"DescDe":"Du hast eng mit den Leuten des Manufactorums zusammengearbeitet. Waffen, Rüstungen, Fahrzeuge und mehr – du hattest bei allem deine Hände im Spiel.",
				"Talents":[],
				"Skills":[["trade","armourer"],["trade","vehiculum|shipwright"]],
				"Points":5,
				"PType":"CP"
			}
		}
	}
}

var trials = {
	"handofwar":{
		"Name":"The Hand of War",
		"Desc":"The Imperium of Man is wracked by war and violence, whilst beyond its borders, the strife and conflict are even worse in many regions. Not all wars, however, are equal, and you were caught up in a bitter and terrifying campaign in which starships were left as burning hulks and cities were blasted to ruin in a vicious series of battles that saw no quarter asked or given. The war and the enemy you fought to the death has had a profound effect on you, and to the present day, the faces of the dead haunt you still when you close your eyes. Now, you count only those you have fought and bled with as true allies, and will never forgive your old foe. You strive hard for what you desire, for you know that death stands never more than a heartbeat away.",
		"NameDe":"Die Hand des Krieges",
		"DescDe":"Das Imperium der Menschheit wird von Krieg und Gewalt heimgesucht, und jenseits seiner Grenzen sind die Konflikte in vielen Regionen noch schlimmer. Doch nicht alle Kriege sind gleich, und du wurdest in einen erbitterten und schrecklichen Feldzug verwickelt, in dem Sternenschiffe als brennende Wracks zurückblieben und Städte in einer grausamen Serie von Schlachten dem Erdboden gleichgemacht wurden, ohne dass Gnade gewährt oder erwartet wurde.</br>Der Krieg und der Feind, gegen den du bis zum Tod gekämpft hast, haben dich zutiefst geprägt, und bis heute verfolgen dich die Gesichter der Toten, wenn du die Augen schließt. Jetzt zählst du nur jene, mit denen du gekämpft und geblutet hast, zu deinen wahren Verbündeten, und wirst deinem alten Feind niemals vergeben. Du strebst entschlossen nach dem, was du begehrst, denn du weißt, dass der Tod nie mehr als einen Herzschlag entfernt ist.",
		"options":{
			"scarred":{
				"Name":"Scarred for Life",
				"Desc":"Many say that you get used to death. However, not everybody gets the chance to see this way. You’ve seen your comrades not only die in your hands but also get blown into bits. The horror of war still is in your mind and whenever something bad shows up, it triggers your memories of terror.",
				"NameDe":"Fürs Leben gezeichnet",
				"DescDe":"Viele sagen, man gewöhne sich an den Tod. Doch nicht jeder bekommt die Gelegenheit, das auf diese Weise zu erleben. Du hast nicht nur gesehen, wie deine Kameraden in deinen Händen starben, sondern auch, wie sie in Stücke gerissen wurden. Der Schrecken des Krieges ist immer noch in deinem Geist, und wann immer etwas Schlechtes auftaucht, werden deine Erinnerungen an den Terror ausgelöst",
				"Talents":[["sound_const",""],["sound_const",""]],
				"Skills":[],
				"AName":"War, War Never Changes",
				"ADesc":"The character will never heal his scars from the wars he was in, they will be with him until his death. The Jaded talent doesn’t work for the character.",
				"ANameDe":"Krieg, Krieg bleibt immer gleich",
				"ADescDe":"Die Narben der Kriege, in denen der Charakter gekämpft hat, werden niemals heilen und ihn bis zu seinem Tod begleiten. Das Talent <b>Abgestumpft</b> wirkt nicht für diesen Charakter.",
				"Points":5,
				"PType":"CP"
			},
			"nocomingback":{
				"Name":"Nobody is Coming Back",
				"Desc":"You aren’t a pacifist. Rarely anybody has time for such a privilege. You’ve seen war. The worst part of war and it will never leave your mind. The thousands, millions, untold billions of dead, the price Humanity needs to pay each time. It's so unbearable that its scars your mind and makes your hands shiver. ",
				"NameDe":"Niemand kehrt zurück",
				"DescDe":"Du bist kein Pazifist. Kaum jemand hat das Privileg, sich solch einen Luxus zu leisten. Du hast den Krieg gesehen – die schlimmsten Teile davon – und er wird deinen Geist nie verlassen. Die Tausenden, Millionen, unerzählbaren Milliarden von Toten, der Preis, den die Menschheit jedes Mal zahlen muss. Es ist so unerträglich, dass es deinen Geist zeichnet und deine Hände zittern lässt.",
				"Talents":[],
				"Skills":[["s_lore","tactica"],["operate","any"],["operate","any"]],
				"AName":"War is Hell",
				"ADesc":"The character saw enough of war, that he really doesn’t want to go back. The character receives -10 penalty to any weapon that deals damage to more than one target, this ranges from weapons with the Blast Quality to voidship weapons.",
				"ANameDe":"Krieg ist die Hölle",
				"ADescDe":" Der Charakter hat genug vom Krieg gesehen, dass er nicht wirklich zurück will. Er erhält einen Malus von -10 auf den Einsatz von Waffen, die mehr als ein Ziel verletzen, einschließlich Waffen mit der Eigenschaft Explosion und Voidship-Waffen.",
				"Points":5,
				"PType":"CP"
			},
			"doomed":{
				"Name":"Doomed from the Start",
				"Desc":"No war was won without sacrifices. Some wars aren’t won at all and sacrifices were enormous. You were unlucky, most of your conflicts were the bad ones. Whenever you return to fighting, return to the war, the fear of losing comes back. You are the only person to change it or everybody will perish!",
				"NameDe":"Von Anfang an verdammt",
				"DescDe":"Kein Krieg wurde ohne Opfer gewonnen. Manche Kriege werden überhaupt nicht gewonnen, und die Opfer sind enorm. Du hattest Pech, denn die meisten deiner Konflikte waren die schlechten. Immer wenn du wieder kämpfst, kehrst du zum Krieg zurück, und die Angst vor dem Verlieren kehrt zurück. Du bist die einzige Person, die das ändern kann, oder alle werden untergehen!",
				"Talents":[["leapingdodge",""]],
				"Skills":[["dodge",""],["parry",""],["awareness",""]],
				"AName":"It’s all over",
				"ADesc":"The character rolls 1d10 at the start of each combat. A result of 7 means he remembers all those failures and lost men during his time with war. He receives -10 penalty to all tests until combat ends or he personally kills an Elite or higher type creature.",
				"ANameDe":"Es ist alles vorbei",
				"ADescDe":"Der Charakter würfelt zu Beginn jedes Kampfes einen W10. Bei einem Ergebnis von 7 erinnert er sich an all die Misserfolge und verlorenen Männer während seiner Zeit im Krieg. Er erhält einen Malus von -10 auf alle Tests, bis der Kampf endet oder er persönlich eine Kreatur vom Typ Elite oder höher tötet.",
				"Points":5,
				"PType":"CP"
			},
			"onlything":{
				"Name":"Only Thing I’ll Ever Know",
				"Desc":"There are those that are scarred by war to the point of breaking. You are one of those people. Conflict didn’t bring you happiness nor fulfillment, only anger, devastation and fear. The moment death shows its ugly head, you wonder, if it is your time? Are you the next one on the chopping block? Your mind fills with death, while your subconscious takes over and wants only one thing - run away.",
				"NameDe":"Das Einzige, was ich je kannte",
				"DescDe":"Es gibt jene, die vom Krieg so sehr gezeichnet sind, dass sie beinahe zerbrechen. Du bist einer dieser Menschen. Konflikte brachten dir weder Glück noch Erfüllung, nur Wut, Verwüstung und Angst. In dem Moment, in dem der Tod sein hässliches Haupt erhebt, fragst du dich, ob es deine Zeit ist? Bist du der Nächste, der fällt? Dein Geist füllt sich mit Gedanken an den Tod, während dein Unterbewusstsein übernimmt und nur eines will – fliehen.",
				"Talents":[["truegrit",""]],
				"Skills":[["dodge",""],["awareness",""]],
				"AName":"Death is Coming for Me",
				"ADesc":"The moment the character sees a death in combat, be them enemy or ally, he rolls on the Shock Table, unless he is already under an effect of Shock due to failed Fear Test. When he can finally act normally, he must make a Challenging (+0) Fear Test or roll again on the table. After snapping out of it the second time, he can return to duty.",
				"ANameDe":"Der Tod kommt für mich",
				"ADescDe":"In dem Moment, in dem der Charakter im Kampf einen Tod sieht, sei es ein Feind oder ein Verbündeter, würfelt er auf der Schock-Tabelle, es sei denn, er steht bereits unter dem Einfluss von Schock durch einen fehlgeschlagenen Angsttest. Wenn er schließlich wieder normal handeln kann, muss er einen Herausfordernden (+0) Angsttest bestehen oder erneut auf der Tabelle würfeln. Nach dem zweiten Mal kann er zu seinen Aufgaben zurückkehren.",
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"pressganged":{
		"Name":"Press-Ganged",
		"Desc":"Skilled women and men with unique and valuable talents, be they Navigators or Armsmen, are themselves commodities to the unscrupulous and the desperate. There are many voyages undertaken and crewed by those who have little choice in the matter, from ratings that toil under an overseer’s lash in the depths of a warship to abducted Astropaths and scions of Rogue Trader blood whose shackles may be made of silken threats and prison cells crafted by insidious blackmail but are no less real for that. Although some may see such experiences as no more than part of the “great game” of things, you take a different view and have sworn never to be a puppet or pawn in someone else’s game again. Just who you were forced into serving in the past and how you managed to escape your bondage is a secret you rarely share, but one day your captors will have cause to remember the offence they did you and regret it.",
		"NameDe":"Zwangsrekrutiert",
		"DescDe":"Fähige Frauen und Männer mit einzigartigen und wertvollen Talenten, seien es Navigatoren oder Waffenspezialisten, sind für die Skrupellosen und Verzweifelten selbst Handelswaren. Viele Reisen werden von jenen angetreten und bemannt, die kaum eine Wahl hatten – von Besatzungsmitgliedern, die unter der Peitsche eines Aufsehers in den Tiefen eines Kriegsschiffs schuften, bis hin zu entführten Astropathen und Erben des Freihändlerbluts, deren Fesseln aus seidigen Drohungen und Gefängniszellen aus hinterhältiger Erpressung geschmiedet sein mögen, aber nicht weniger real sind.</br>Obwohl manche solche Erfahrungen nur als Teil des „großen Spiels“ ansehen, hast du eine andere Sichtweise und geschworen, niemals wieder eine Marionette oder ein Bauer im Spiel eines anderen zu sein. Wer genau dich einst in seinen Dienst zwang und wie du deiner Knechtschaft entkommen bist, ist ein Geheimnis, das du selten teilst. Doch eines Tages werden deine Peiniger den Grund für ihre Tat bereuen, wenn sie sich an das Unrecht erinnern, das sie dir angetan haben.",
		"options":{
			"pawn":{
				"Name":"Just a Pawn",
				"Desc":"You were used as some political ploy. Either your good friend or ally, whom you would give your life, trusted as nobody else, showed his true colors. When push came to shove, you were betrayed. A life of a pawn has no glory or honour, you will be sacrificed when the chess player wants it.",
				"NameDe":"Nur ein Bauer",
				"DescDe":"Du wurdest für irgendein politisches Manöver benutzt. Entweder dein guter Freund oder Verbündeter, dem du dein Leben anvertraut hast, zeigte sein wahres Gesicht. Als es darauf ankam, wurdest du verraten. Das Leben eines Bauern bringt weder Ruhm noch Ehre; du wirst geopfert, wenn der Schachspieler es will.",
				"Talents":[],
				"Skills":[["scrutiny",""],["awareness",""]],
				"AName":"Everybody just wants to use me",
				"ADesc":"The character can’t trust anyone anymore. He receives a -10 penalty to all social interaction tests made against newly met people. He loses this penalty if they become his friends and gain his trust somehow.",
				"ANameDe":"Alle wollen mich nur benutzen",
				"ADescDe":"Der Charakter kann niemandem mehr vertrauen. Er erhält einen Malus von -10 auf alle sozialen Interaktionsproben mit neu kennengelernten Personen. Dieser Malus entfällt, wenn sie zu seinen Freunden werden und irgendwie sein Vertrauen gewinnen.",
				"Points":5,
				"PType":"IP"
			},
			"serf":{
				"Name":"Just a Serf",
				"Desc":"Major part of your life was servitude. You might have been very rebellious at the start but was quickly whipped into shape. These scars might be gone from the body but not the soul. Your mind quickly returns to that time of servitude and you want nothing more than to fulfill your duty. Problem is that the other person might just use you and never allow your soul to rest.",
				"NameDe":"Nur ein Leibeigene",
				"DescDe":"Ein großer Teil deines Lebens bestand aus Dienerschaft. Vielleicht warst du am Anfang sehr rebellisch, wurdest aber schnell in Form gebracht. Diese Narben mögen vom Körper verschwunden sein, aber nicht von der Seele. Dein Geist kehrt schnell in diese Zeit der Knechtschaft zurück, und du willst nichts mehr, als deine Pflicht zu erfüllen. Das Problem ist, dass die andere Person dich nur ausnutzen könnte und deine Seele niemals zur Ruhe kommen lässt.",
				"Talents":[],
				"Skills":[["charm",""],["inquiry",""],["s_lore","heraldry"]],
				"AName":"Forever a Serf",
				"ADesc":"The character wants to please people of higher rank than himself at all times. Whenever meeting a person, who is of higher rank, the character receives -10 penalty to all social interactions tests and Awareness tests. He will want to appease this person, until he will be happy with him. This can go into extreme length as “happy” is defined by the person being appeased.",
				"ANameDe":"Für immer ein Leibeigener",
				"ADescDe":"Der Charakter will Menschen von höherem Rang als er selbst jederzeit gefallen. Wann immer er eine Person von höherem Rang trifft, erhält er einen Malus von -10 auf alle sozialen Interaktionsproben und Wahrnehmungsproben. Er wird versuchen, diese Person zu besänftigen, bis diese mit ihm zufrieden ist. Dies kann extreme Ausmaße annehmen, da „zufrieden“ von der besänftigten Person definiert wird.",
				"Points":5,
				"PType":"IP"
			},
			"slave":{
				"Name":"Just a Slave",
				"Desc":"Maybe you were abducted or just lived most of your life as a slave. This was the biggest trial in your life. However, this made you jaded towards those slave-owners, people who think they can own a human and use him as they like. Slavery in the Imperium might help it grow, however, the cost is too high for your soul and mind.",
				"NameDe":"Nur ein Sklave",
				"DescDe":"Vielleicht wurdest du entführt oder hast den Großteil deines Lebens als Sklave gelebt. Dies war die größte Prüfung in deinem Leben. Doch es hat dich gegenüber Sklavenhaltern und Menschen, die glauben, sie könnten andere Menschen besitzen und nach Belieben nutzen, abgestumpft. Sklaverei mag das Imperium voranbringen, aber der Preis für deine Seele und deinen Geist ist zu hoch.",
				"Talents":[["q_draw",""],["hardy",""]],
				"Skills":[["awareness",""],["survival",""]],
				"AName":"Scars of Servitude",
				"ADesc":"The character will never forget how he was treated, when he was just a slave. A worse than a meager life made it hard for him to accept a better one. Whenever in situations of wealth and influence, be them grand balls, meeting between merchant-kings or similar, the character receives -10 penalty to all tests as his mind fixates on those horrid moments of slavery. He needs to leave the gathering for the penalty to be lost.",
				"ANameDe":"Narben der Knechtschaft",
				"ADescDe":" Der Charakter wird niemals vergessen, wie er behandelt wurde, als er nur ein Sklave war. Ein Leben, das schlimmer war als das bloße Überleben, macht es ihm schwer, ein besseres zu akzeptieren. Wann immer er sich in Situationen von Reichtum und Einfluss befindet – sei es auf rauschenden Bällen, Treffen zwischen Kaufmannskönigen oder Ähnlichem – erhält der Charakter einen Malus von -10 auf alle Proben, da sein Geist auf die schrecklichen Momente der Sklaverei fixiert ist. Der Malus entfällt, sobald er die Versammlung verlässt.",
				"Points":5,
				"PType":"IP"
			},
			"thrall":{
				"Name":"Just a Thrall",
				"Desc":"Slavery would be a piece of cake compared to the horrors you had to endure. Maybe a Chaos Warband used you to create dark towers that broke the fabric of reality. Maybe a Chaos Apothecary used you as a breeding tool. Dark Eldar made you into their plaything or an ornamental piece. Whatever horrific experience you had, you endured it and survived. The body healed but the mind is broken forever. Those memories will flood back soon enough.",
				"NameDe":"Nur ein Diener",
				"DescDe":"Sklaverei wäre ein Kinderspiel im Vergleich zu den Schrecken, die du erdulden musstest. Vielleicht hat eine Chaoskriegsbande dich benutzt, um dunkle Türme zu errichten, die das Gewebe der Realität zerschmetterten. Vielleicht hat ein Chaosapotheker dich als Zuchtwerkzeug verwendet. Dunkle Eldar machten dich zu ihrem Spielzeug oder einem Zierstück. Was auch immer für eine grausame Erfahrung du gemacht hast, du hast sie überlebt. Der Körper mag geheilt sein, aber der Geist ist für immer gebrochen. Diese Erinnerungen werden bald wieder auftauchen.",
				"Talents":[["hatred","any"],["pure_hatred","any"],["truegrit",""]],
				"Skills":[],
				"AName":"Less than a Slave",
				"ADesc":"The character had a worse life than a slave. Be it in a Chaos camp or Drukhari slave pens, he was used in all manner of situations and his body was toyed with. He will never forget the anguish brought upon him. Whenever the character meets the race or organization of his oppressors, his mind goes back to the moment of terror and he must succeed a Fear (3) test. This is additional to any Fear ratings these creatures might possess. Additionally, he gains -40 penalty to all social interactions (even Intimidate) with the chosen group.",
				"ANameDe":"Weniger als ein Sklave",
				"ADescDe":"Der Charakter hatte ein schlimmeres Leben als ein Sklave. Sei es in einem Chaoslager oder in den Sklavenpferchen der Drukhari, er wurde in allen möglichen Situationen benutzt, und sein Körper wurde als Spielzeug missbraucht. Er wird die Qualen, die ihm zugefügt wurden, niemals vergessen. Wann immer der Charakter die Rasse oder Organisation seiner Unterdrücker trifft, kehrt sein Geist zu den Momenten des Schreckens zurück, und er muss einen Angsttest (3) bestehen. Dies gilt zusätzlich zu den Furchtratings, die diese Kreaturen möglicherweise besitzen. Außerdem erhält er einen Malus von -40 auf alle sozialen Interaktionen (selbst Einschüchtern) mit dieser Gruppe.",
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"calamity":{
		"Name":"Calamity",
		"Desc":"When reaching out beyond the relative safety of the Imperium, one of the great, often underestimated, dangers is a disaster, whether it affects an isolated colony outpost or affects a star vessel suddenly robbed of its supplies by circumstances or sabotage. Famine, plague, and other unlooked-for disasters kill the weak, can make death a mercy, and often destroy the thin veneer of civilization worn by many, revealing both the worst and best in humanity. You have seen all this and more, and perhaps were forced into desperate measures in order to survive or remain true to your honour. Regardless, you hold no illusions about what others are capable of in extremis and have learned the hard way that sometimes a bolt shell is worth a Lord Commander’s ransom and that a starving man cannot eat gold, no matter how much he has grasped.",
		"NameDe":"Katastrophe",
		"DescDe":"Jenseits der relativen Sicherheit des Imperiums liegt eine der großen, oft unterschätzten Gefahren in Form von Katastrophen, sei es eine, die einen isolierten Kolonieaußenposten betrifft, oder eine, die ein Sternenschiff plötzlich seiner Vorräte beraubt – durch Umstände oder Sabotage. Hungersnöte, Seuchen und andere unerwartete Katastrophen töten die Schwachen, machen den Tod oft zu einer Gnade und zerstören häufig den dünnen Schleier der Zivilisation, den viele tragen, wobei sie sowohl das Beste als auch das Schlimmste der Menschheit enthüllen. Du hast all das und mehr gesehen und warst vielleicht gezwungen, verzweifelte Maßnahmen zu ergreifen, um zu überleben oder deiner Ehre treu zu bleiben. Wie dem auch sei, du hegst keine Illusionen darüber, wozu andere in Extremsituationen fähig sind, und hast auf die harte Tour gelernt, dass manchmal eine Bolterschale so viel wert ist wie ein Vermögen eines Lordkommandanten und dass ein hungernder Mann kein Gold essen kann, egal wie viel er in seinen Händen hält.",
		"options":{
			"famine":{
				"Name":"Horseman of Famine",
				"Desc":"What happens to a world that depends its food supply on another? Nothing, unless the supplies suddenly stop. You were shit out of luck and spent years on a world that didn’t have a way to sustain the population. People eating each other was the least of your concerns. You had to survive on the most vile things imaginable. It is over, thankfully. Now you can gorge yourself on delicious meats and meals. Who will stop you?",
				"NameDe":"Reiter der Hungersnot",
				"DescDe":"Was geschieht mit einer Welt, die von der Nahrungsversorgung einer anderen abhängig ist? Nichts, solange die Lieferungen nicht plötzlich ausbleiben. Du hattest unglaubliches Pech und verbrachtest Jahre auf einer Welt, die ihre Bevölkerung nicht erhalten konnte. Menschen, die sich gegenseitig fraßen, waren noch dein geringstes Problem. Du musstest von den abscheulichsten Dingen leben, die man sich vorstellen kann. Es ist vorbei, zum Glück. Jetzt kannst du dich an köstlichem Fleisch und Mahlzeiten laben. Wer wird dich aufhalten?",
				"Talents":[],
				"Skills":[["trade","cook"],["survival",""]],
				"AName":"Resources Were Short",
				"ADesc":"The character survived the worst famine possible and it took a lot of time to recuperate. However, the damage is done. Whenever the character is offered food, she will gladly accept and start eating, unless she passes a Difficult (-10) Willpower test. This makes the character easier to be poisoned and more of a hog that will eat anything that smell at least a little nice.",
				"ANameDe":"Die Ressourcen waren knapp",
				"ADescDe":"Der Charakter hat die schlimmste Hungersnot überlebt, aber es dauerte lange, sich davon zu erholen. Der Schaden ist jedoch angerichtet. Wann immer dem Charakter Essen angeboten wird, nimmt er es gerne an und beginnt zu essen, es sei denn, er besteht eine Erschwerter (-10) Willenskraftprobe. Dies macht den Charakter anfälliger für Vergiftungen und zu einem Vielfraß, der alles isst, was zumindest ein wenig gut riecht.",
				"Points":5,
				"PType":"CP"
			},
			"plague":{
				"Name":"Horseman of Plague",
				"Desc":"Was it the Warp or just a normal plague? It didn’t matter really. You saw with your own two eyes the horrifying looks of decaying living humans. Their bodies destroyed by the diseases they carry. While you had the fortune to survive, you really didn’t. The plague just mutated when it entered your body. It is a part of you forever and ever. It will spread everywhere and nothing will be able to stop it. You are the patient zero.",
				"NameDe":"Reiter der Pest",
				"DescDe":"War es der Warp oder nur eine gewöhnliche Seuche? Es spielte wirklich keine Rolle. Du hast mit eigenen Augen die schrecklichen Anblicke von zerfallenden lebenden Menschen gesehen, deren Körper von den Krankheiten zerstört wurden, die sie tragen. Obwohl du das Glück hattest zu überleben, hast du es nicht wirklich geschafft. Die Seuche mutierte in deinem Körper und bleibt für immer ein Teil von dir. Sie wird sich überall verbreiten, und nichts wird sie aufhalten können. Du bist Patient Null.",
				"Talents":[["res","poison"],["hardy",""]],
				"Skills":[],
				"AName":"More than a Disease",
				"ADesc":"The character bears the scars of dangerous, virulent disease that doesn’t want to go away, no matter how the character tries. Whenever the character suffers Blood Loss or receives Critical Damage, the disease spreads into the air. Also, sometimes the disease doesn’t need for the character to be wounded to spread, all it needs is a little not-so clean environment.",
				"ANameDe":"Mehr als eine Krankheit",
				"ADescDe":"Der Charakter trägt die Narben einer gefährlichen, virulenten Krankheit, die nicht verschwinden will, egal wie sehr er es versucht. Wann immer der Charakter Blutverlust erleidet oder kritischen Schaden erhält, breitet sich die Krankheit in der Luft aus. Manchmal benötigt die Krankheit nicht einmal eine Verletzung, um sich zu verbreiten – ein wenig unsaubere Umgebung reicht aus",
				"Points":5,
				"PType":"CP"
			},
			"death":{
				"Name":"Horseman of Death",
				"Desc":"Nobody in the galaxy has a peaceful life, everybody sooner or later will get their grim piece of the cake. You got the worst part of the stick. When time came for salvation, nobody came. You had to live in constant fear of death by your captors and abusers. You learnt how to defend yourself, adequately. This changed you for the worst. Wherever you go, you will need a piece with you. It will not only defend you but also that one bullet in the chamber will grant you sweet release when the time comes.",
				"NameDe":"Reiter des Todes",
				"DescDe":"Niemand in der Galaxie führt ein friedliches Leben; früher oder später bekommt jeder sein düsteres Stück vom Kuchen. Du hast den schlimmsten Teil abbekommen. Als die Zeit der Rettung kam, kam niemand. Du musstest in ständiger Angst vor dem Tod durch deine Entführer und Peiniger leben. Du hast gelernt, dich einigermaßen zu verteidigen. Das hat dich jedoch zum Schlechteren verändert. Wohin du auch gehst, du brauchst immer eine Waffe bei dir. Sie wird dich nicht nur verteidigen, sondern diese eine Kugel im Lauf wird dir die süße Erlösung bringen, wenn die Zeit gekommen ist.",
				"Talents":[["intep_target",""],["two_weapon","ballistic"]],
				"Skills":[["trade","armourer"]],
				"AName":"Want of a Bullet",
				"ADesc":"Salvation never came and the bullet in the chamber is the only way out. The character can’t function without a working gun at her side. If she ever finds herself without one, she receives a -20 penalty to all tests. She will go into extreme lengths to acquire one for herself, as this is the only thing that keeps her sanity in check.",
				"ANameDe":"Verlangen nach einer Kugel",
				"ADescDe":"Die Rettung kam nie, und die Kugel im Lauf ist der einzige Ausweg. Der Charakter kann nicht ohne eine funktionierende Waffe an seiner Seite funktionieren. Sollte er jemals ohne eine Waffe sein, erhält er einen Malus von -20 auf alle Proben. Er wird extreme Maßnahmen ergreifen, um eine für sich zu beschaffen, da dies das Einzige ist, was seine geistige Gesundheit im Zaum hält.",
				"Points":5,
				"PType":"CP"
			},
			"conquest":{
				"Name":"Horseman of Conquest",
				"Desc":"Salvation came to your world. However, you weren’t part of that plan. Explosions. Constant fighting. You weren’t the enemy but you were in the crossfire. When the “heroes” came, nobody believed you and was taken prisoner like all the rest. Many years spent as nothing more than a person waiting for his execution. It never came, you were released. Nobody was sorry and the scars of war and conquest were left on your body. You don’t want to relive those horrors again.",
				"NameDe":"Reiter des Eroberung",
				"DescDe":"Die Rettung kam zu deiner Welt. Doch du warst nicht Teil dieses Plans. Explosionen. Ständige Kämpfe. Du warst nicht der Feind, aber du gerietst ins Kreuzfeuer. Als die „Helden“ kamen, glaubte dir niemand, und du wurdest wie alle anderen gefangen genommen. Viele Jahre hast du als nichts weiter als eine Person verbracht, die auf ihre Hinrichtung wartete. Sie kam nie, du wurdest freigelassen. Niemand entschuldigte sich, und die Narben des Krieges und der Eroberung blieben auf deinem Körper. Du willst diese Schrecken nie wieder erleben.",
				"Talents":[["hardenedsoul",""],["iron_resolve",""],["iron_faith",""]],
				"Skills":[],
				"AName":"A Victim of War",
				"ADesc":"The character was during the worst parts of Imperial Warfare but not as the frontline, but the victim. Be it a mistake or not, shackled and turned into a prisoner wasn’t for the best. The character relives those moments in bad way. Whenever he fails his Fear Test, he gains +20 bonus to the Shock Table, while also gaining additional 2 Insanity Points each time he would gain at least 1. His mind is breaking slowly but steadily.",
				"ANameDe":"Ein Opfer des Krieges",
				"ADescDe":"Der Charakter erlebte die schlimmsten Teile des imperialen Krieges, jedoch nicht an der Front, sondern als Opfer. Ob ein Fehler oder nicht, in Ketten gelegt und zum Gefangenen gemacht zu werden, war alles andere als das Beste. Der Charakter erlebt diese Momente auf schreckliche Weise erneut. Wann immer er einen Angsttest nicht besteht, erhält er einen Bonus von +20 auf die Schocktabelle und jedes Mal 2 zusätzliche Wahnsinnspunkte, wenn er mindestens 1 erhalten würde. Sein Geist zerbricht langsam, aber stetig.",
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"shiplorn":{
		"Name":"Ship-Lorn",
		"Desc":"For those who ply the void, there are few things that provoke as much fear in them as to be robbed of their starship, to have the very crux of their identity cruelly taken from them by sudden destruction or betrayal. Whether by shipwreck, enemy action, or darker reasons such as mutiny or deliberate abandonment, there are few more terrible fates for an Explorer than to have been a castaway without help, either on a strange world or, worse yet, lost in the icy grip of the cold stars. It takes a remarkable individual to survive such a fate, capable of drawing on reservoirs of resolve and self-reliance few can hope to muster, but such endurance can be a two-edged sword. To others who travel the stars and brave the tides of the empyrean, you are marked out and distrusted for surviving what you should not have endured, and the void born whisper that your ill-luck will follow you wherever you go. You care not, for every day you stride the deck of a ship and see another star dawn is another step taken in scorn of the doom you have escaped.",
		"NameDe":"Schiffslos",
		"DescDe":"Für jene, die die Leere durchqueren, gibt es nur wenige Dinge, die mehr Furcht auslösen als der Verlust ihres Sternenschiffs – die grausame Wegnahme des zentralen Kerns ihrer Identität durch plötzliche Zerstörung oder Verrat. Ob durch Schiffbruch, feindliche Angriffe oder dunklere Gründe wie Meuterei oder vorsätzliche Aussetzung – es gibt kaum ein schrecklicheres Schicksal für einen Entdecker, als ein Schiffbrüchiger ohne Hilfe zu sein, sei es auf einer fremden Welt oder, noch schlimmer, verloren im eisigen Griff der kalten Sterne. </br>Es braucht eine außergewöhnliche Persönlichkeit, um ein solches Schicksal zu überleben, jemanden, der auf Reserven von Entschlossenheit und Selbstständigkeit zurückgreifen kann, wie es nur wenige vermögen. Doch solche Ausdauer ist ein zweischneidiges Schwert. Für andere, die die Sterne bereisen und den Gezeiten des Empyreums trotzen, bist du gezeichnet und misstraut, weil du überlebt hast, was du nicht hättest überstehen dürfen. Die in der Leere Geborenen flüstern, dass dein Unglück dich überallhin verfolgen wird. Doch das kümmert dich nicht, denn jeder Tag, an dem du das Deck eines Schiffs betrittst und einen neuen Stern aufgehen siehst, ist ein weiterer Schritt, um das Schicksal zu verhöhnen, dem du entkommen bist.",
		"options":{
			"survival":{
				"Name":"Fight for Survival",
				"Desc":"There was no way around it. Your voyage didn’t end well. The supplies were running low and people had to make choices. Maybe some were prepared for it, since they lived in hive cities, however, you had to adapt to this new environment. Death was just a number, a horrifying one, that would grant sustenance. You vowed to never again feel the same, to eat the same and never allow it to happen to others, no matter the costs.",
				"NameDe":"Kampf ums Überleben",
				"DescDe":"Es gab keinen Ausweg. Deine Reise endete nicht gut. Die Vorräte gingen zur Neige, und die Menschen mussten Entscheidungen treffen. Vielleicht waren einige darauf vorbereitet, da sie in Makropolen lebten, doch du musstest dich an diese neue Umgebung anpassen. Der Tod war nur eine Zahl, eine schreckliche, die Nahrung brachte. Du hast dir geschworen, niemals wieder das Gleiche zu fühlen, das Gleiche zu essen und niemals zuzulassen, dass es anderen passiert – egal, was es kostet.",
				"Talents":[],
				"Skills":[["trade","chymist"],["medicae",""]],
				"AName":"Survival of the Fittest is a Lie",
				"ADesc":"The character survived the gruesome trek without food or water, on years without end, trying to life on “rations.” He never wants to inflict such a horror to others, however, his kindness is a downfall. The character will go to extreme lengths to ensure everybody on the ship gains enough food, this means that the ship he serves on will have rations for only 3 months instead of 6 months.",
				"ANameDe":"Das Überleben der Stärksten ist eine Lüge",
				"ADescDe":"Der Charakter überlebte den grausamen Marsch ohne Nahrung oder Wasser über Jahre hinweg und lebte von „Rationen.“ Er will solch einen Schrecken anderen niemals zufügen, doch seine Güte wird zu einem Nachteil. Der Charakter geht extreme Wege, um sicherzustellen, dass jeder auf dem Schiff genug Nahrung bekommt, was bedeutet, dass das Schiff, auf dem er dient, nur Vorräte für 3 Monate statt für 6 Monate hat.",
				"Points":5,
				"PType":"CP"
			},
			"ghostship":{
				"Name":"Ghost Ship",
				"Desc":"It might have happened after a battle or a warp jump. Whatever it was, the ship lost most of its crew. You were alone, trapped with just a small group of people on a vessel that needed tens of thousands to work. Working on such a humongous project made you wary of your surroundings. The empty halls made sounds you don’t want to remember. There was nobody there but you heard movement. Those were horrifying years that to this day haunt your every move.",
				"NameDe":"Geisterschiff",
				"DescDe":"Es könnte nach einer Schlacht oder einem Warpsprung passiert sein. Was auch immer es war, das Schiff verlor den größten Teil seiner Besatzung. Du warst allein, gefangen mit nur einer kleinen Gruppe von Menschen auf einem Schiff, das zehntausende benötigte, um zu funktionieren. An einem solch riesigen Projekt zu arbeiten, machte dich misstrauisch gegenüber deiner Umgebung. Die leeren Gänge erzeugten Geräusche, an die du dich nicht erinnern willst. Es war niemand da, aber du hast Bewegungen gehört. Diese schrecklichen Jahre verfolgen bis heute jeden deiner Schritte.",
				"Talents":[],
				"Skills":[["s_lore","occult"],["trade","soothsayer"],["operate","voidship"],
					["techuse",""]],
				"AName":"Ghost Stories",
				"ADesc":"The character lived tales of darkness and sorrow. The ship lost more crew than he can count and the empty halls haunted him for no end. He is unable to be always aware of his surroundings. As such, enemies who attack him while he is Unaware gain +20 bonus to melee and ranged attacks, however, no further than 10 meters. The character treats all creatures with Incorporeal Trait and Fear Rating as having Fear rating one rank higher.",
				"ANameDe":"Geistergeschichten ",
				"ADescDe":"Der Charakter hat Geschichten von Dunkelheit und Trauer durchlebt. Das Schiff verlor mehr Besatzung, als er zählen kann, und die leeren Gänge verfolgten ihn endlos. Er kann nicht immer seine Umgebung im Auge behalten. Feinde, die ihn angreifen, während er unaufmerksam ist, erhalten einen Bonus von +20 auf Nah- und Fernkampfangriffe, jedoch nicht weiter als 10 Meter. Der Charakter behandelt alle Kreaturen mit der Eigenschaft Inkorporal und einem Furchtwert als hätten sie einen Furchtwert, der eine Stufe höher ist.",
				"Points":5,
				"PType":"CP"
			},
			"hunted":{
				"Name":"Hunted at Home",
				"Desc":"Whenever it was at your home planet, maybe some once peaceful land or the voidship you lived for some time, the worst happened. Something or someone came aboard. People started to go missing. Bodies started to pile up in strange places. Skulls littered without bodies. Something was playing with you and the rest of your friends. You survived in the nick of time but the scars are still there. You start to have attacks of paranoia, especially in silent situations. You want sound or else the memories will flood back.",
				"NameDe":"Gejagt im eigenen Heim",
				"DescDe":"Egal, ob es auf deinem Heimatplaneten geschah, vielleicht einem einst friedlichen Land, oder dem Voidschiff, auf dem du eine Zeit lang lebtest, das Schlimmste passierte. Etwas oder jemand kam an Bord. Menschen begannen zu verschwinden. Leichen häuften sich an seltsamen Orten. Schädel verstreut ohne Körper. Etwas spielte mit dir und dem Rest deiner Freunde. Du hast es im letzten Moment überlebt, aber die Narben sind noch da. Du bekommst Panikattacken, besonders in stillen Situationen. Du brauchst Geräusche, sonst kehren die Erinnerungen zurück.",
				"Talents":[["constant_vigilance","any"]],
				"Skills":[["scrutiny",""],["survival",""],["trade","voidfarer"]],
				"AName":"They Are Here, I know it",
				"ADesc":"The character was hunted in his own home, be it on a voidship or on his home planet by Xenos or worse. The constant feeling of fear never left him, leaving him more of a shell. The character is extremely paranoid of everything, especially being in a small group or alone. He receives -20 penalty to all Stealth actions, while also being very easy to find, allowing others to have +20 bonus to find him.",
				"ANameDe":"Sie sind hier, ich weiß es",
				"ADescDe":"Der Charakter wurde in seinem eigenen Heim gejagt, sei es auf einem Voidschiff oder seinem Heimatplaneten, von Xenos oder Schlimmerem. Das ständige Gefühl von Angst hat ihn nie verlassen und ihn zu einer Hülle gemacht. Der Charakter ist extrem paranoid, besonders in kleinen Gruppen oder wenn er allein ist. Er erhält einen Malus von -20 auf alle Schleichen-Aktionen und ist leicht zu finden, was anderen einen Bonus von +20 gibt, um ihn zu entdecken.",
				"Points":5,
				"PType":"CP"
			},
			"shadow":{
				"Name":"Only a Shadow of his Former Self",
				"Desc":"It was one of the worst things you remember and will never forget. The ship was lost in the Warps and the Geller Field flickered. Strange beings hunted the halls and you were just one of the prey. But they didn’t eat you, not right away. They toyed with you, played to your fear, they were having fun with tormenting you. The sweat you exude forever will mark you. Even if you escaped from that dreadful place. They will find you again.",
				"NameDe":"Nur ein Schatten seines früheren Selbst",
				"DescDe":"Es war eines der schlimmsten Dinge, an die du dich erinnerst und die du niemals vergessen wirst. Das Schiff war im Warp verloren, und das Geller-Feld flackerte. Seltsame Wesen jagten durch die Gänge, und du warst nur eine der Beute. Doch sie fraßen dich nicht sofort. Sie spielten mit dir, weckten deine Ängste und hatten Spaß daran, dich zu quälen. Der Schweiß, den du absonderst, wird dich für immer kennzeichnen. Selbst wenn du aus diesem schrecklichen Ort entkommen bist, werden sie dich wiederfinden.",
				"Talents":[["daemonhunter",""],["witchfinder",""]],
				"Skills":[["f_lore","daemonology"],["f_lore","psyker"],["f_lore","warp"]],
				"AName":"A Broken Man",
				"ADesc":" The character’s spirit was broken by some unknown force, to this end, he is seen as easy prey. All creatures with the Daemonic Trait and Xenos creatures that hunt (like the Tyranids) gain +30 bonus to find the character. Creatures with the Daemonic Trait using mental Psychic Powers gain +20 bonus to their tests when used against the character. Also, he treats all Fear Ratings as one rank higher than normal.",
				"ANameDe":"Ein gebrochener Mann",
				"ADescDe":"Der Charakter wurde von einer unbekannten Macht gebrochen und ist nun leichte Beute. Alle Kreaturen mit der Eigenschaft Dämonisch und Xenos-Kreaturen, die jagen (wie die Tyraniden), erhalten einen Bonus von +30, um den Charakter zu finden. Kreaturen mit der Eigenschaft Dämonisch, die mentale Psionik einsetzen, erhalten einen Bonus von +20 auf ihre Proben, wenn sie gegen den Charakter eingesetzt werden. Außerdem behandelt der Charakter alle Furchtwerte als eine Stufe höher als normal.",
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"vendetta":{
		"Name":"High Vendetta",
		"Desc":"Honour, friendship, and loyalty are not mere empty words or worthy ideals to you, they are tools for survival. Without your ship, your crewmates, and your allies, you are alone in the cold darkness of space and prey to enemies and rivals without number; with them, you are protected, you have a home and backup when others seek your life. This knowledge was brought home to you when you and your allies were caught up in a deadly vendetta with another faction, a murderous feud that consumed your life and sent friends to their graves. Whether your enemies were a rival crew, noble house, cult, cartel, or outlaw gang, blood was spilt and vengeance taken. Regardless of whether your side was victorious, or was left tasting bitter defeat in the end, what matters was that you fought and would to so again.",
		"NameDe":"Blutige Vendetta",
		"DescDe":"Ehre, Freundschaft und Loyalität sind für dich keine leeren Worte oder bloße Ideale, sondern Werkzeuge des Überlebens. Ohne dein Schiff, deine Crewmitglieder und deine Verbündeten bist du allein in der kalten Dunkelheit des Alls und eine leichte Beute für Feinde und Rivalen, die zahlreicher sind, als du zählen kannst. Mit ihnen jedoch bist du geschützt, hast ein Zuhause und Rückhalt, wenn andere dir nach dem Leben trachten.</br>Diese Erkenntnis wurde dir schmerzlich bewusst, als du und deine Verbündeten in eine tödliche Fehde mit einer anderen Fraktion verwickelt wurdet – ein mörderisches Duell, das dein Leben bestimmte und Freunde in den Tod schickte. Ob deine Feinde eine rivalisierende Crew, ein Adelsgeschlecht, ein Kult, ein Kartell oder eine Gesetzlosenbande waren, Blut wurde vergossen und Rache geübt. Unabhängig davon, ob deine Seite am Ende siegreich war oder bittere Niederlage schmecken musste, zählt nur, dass du gekämpft hast – und es wieder tun würdest.",
		"options":{
			"newblood":{
				"Name":"New Blood",
				"Desc":"Your exploits are well known or actually your ambitions are. Maybe lower people look up to you as somebody that will help them, change the world for the better. However, other powers see you as a threat to their stability. You will tip the scales one day but until then it is a long battle.",
				"NameDe":"Neues Blut",
				"DescDe":"Deine Taten sind weithin bekannt – oder vielmehr deine Ambitionen. Vielleicht blicken die niederen Schichten zu dir auf, sehen in dir jemanden, der ihnen helfen und die Welt zum Besseren verändern wird. Doch andere Mächte sehen in dir eine Bedrohung für ihre Stabilität. Eines Tages wirst du das Gleichgewicht kippen, aber bis dahin liegt ein langer Kampf vor dir.",
				"Talents":[],
				"Skills":[["charm",""],["deceive",""]],
				"AName":"Greenhorn ",
				"ADesc":"Despite the character’s best efforts, he is seen as an upstart, trying to tip the balanced scales of influence in the Imperium. The character receives -10 penalty to all social interaction tests made against higher ranking people.",
				"ANameDe":"Grünschnabel",
				"ADescDe":"Trotz aller Bemühungen wird der Charakter als Emporkömmling wahrgenommen, der versucht, das fragile Gleichgewicht der Einflüsse im Imperium zu stören. Der Charakter erhält einen Malus von -10 auf alle sozialen Interaktionsproben gegenüber höhergestellten Personen.",
				"Points":5,
				"PType":"CP"
			},
			"rivals":{
				"Name":"Rivals",
				"Desc":"Maybe it happened during your parents time or even before but this rivalry goes for ages or just feels like it. No matter how much you try to amend this, it falls flat. The rival swats your hand away with a smile, waiting to make your life miserable another time. Maybe he finds it appealing, fun or just his duty? No matter what you do, he will always be there, first, better than you.",
				"NameDe":"Rivalen",
				"DescDe":"Vielleicht begann es schon zu Zeiten deiner Eltern oder noch früher, doch diese Rivalität zieht sich wie eine endlose Geschichte hin. Egal, wie sehr du versuchst, den Streit beizulegen, deine Bemühungen bleiben erfolglos. Dein Rivale weist deine Hand mit einem Lächeln zurück und wartet nur darauf, dir erneut das Leben schwer zu machen. Vielleicht findet er es spannend, amüsant oder sieht es als seine Pflicht an? Egal, was du tust, er wird immer zuerst da sein und dich übertrumpfen.",
				"Talents":[],
				"Skills":[["s_lore","heraldry"],["scrutiny",""],["charm",""]],
				"AName":"Dynasty Rival",
				"ADesc":"The character has a very influential rival, maybe a different Dynasty, that always tries to one-up him, no matter what the character tries, this rival shows up in the most opportune times to snatch the best deals or come out ahead. This barely teeters on a blood feud and the character needs to be wary of exacting any revenge.",
				"ANameDe":"Dynastischer Rivale",
				"ADescDe":"Der Charakter hat einen sehr einflussreichen Rivalen, vielleicht eine andere Dynastie, die immer versucht, ihn auszustechen. Egal, was der Charakter unternimmt, dieser Rivale taucht in den günstigsten Momenten auf, um die besten Geschäfte zu machen oder als Sieger hervorzugehen. Dies grenzt an eine Blutfehde, und der Charakter muss vorsichtig sein, wie er Vergeltung übt.",
				"Points":5,
				"PType":"IP"
			},
			"honor":{
				"Name":"Honor Above All",
				"Desc":"You live your life full of honor. You sleep with the idea and never think about anything else. Are my actions honorable? Am I doing the right thing? Would my ancestors be proud of me? This constant thoughts create doubts and those doubts create conflict that manifests whenever you hear or see somebody inflicting injury upon your or your friend’s honour. You can’t just let it slide, be it just murdering the person or challenging him to a duel.",
				"NameDe":"Ehre über alles",
				"DescDe":"Du lebst dein Leben voller Ehre. Du schläfst mit dem Gedanken daran ein und denkst nie an etwas anderes. Sind meine Handlungen ehrenhaft? Tue ich das Richtige? Würden meine Vorfahren stolz auf mich sein? Diese ständigen Gedanken schaffen Zweifel, und diese Zweifel führen zu Konflikten, die jedes Mal aufkommen, wenn jemand deine oder die Ehre deiner Freunde verletzt. Du kannst es nicht einfach hinnehmen – sei es, den Täter zu töten oder ihn zum Duell herauszufordern.",
				"Talents":[["oneonone",""],["blademaster",""]],
				"Skills":[["parry",""]],
				"AName":"Brook no Insult",
				"ADesc":"The character can have his honor easily tarnish and worse, he places his sense of honor upon his others, which means that if anybody would even speak badly about them, he will feel very insulted. The character doesn’t back down from a challenge to his honor and will do everything, even taking the offender’s life for it. It will bring him untimely doom, when he will take a life he shouldn’t have or a duel he never had a chance to win.",
				"ANameDe":"Keine Beleidigung dulden",
				"ADescDe":"Der Charakter lässt sich leicht in seiner Ehre kränken und legt seine Vorstellung von Ehre auch auf andere. Wenn jemand schlecht über sie spricht, fühlt er sich zutiefst beleidigt. Der Charakter zieht sich von einer Herausforderung an seine Ehre nicht zurück und wird alles tun, sogar das Leben des Beleidigers nehmen. Dies könnte ihn in einen frühen Tod führen, wenn er das Leben einer Person nimmt, die er nicht hätte töten sollen, oder ein Duell annimmt, das er nicht gewinnen kann.",
				"Points":5,
				"PType":"IP"
			},
			"bloodfeud":{
				"Name":"Blood Feud",
				"Desc":"This is above your abilities. Somebody bad happened in the past and it will never go away, it will never wash out. This person, this family, this Dynasty, seeks nothing more than your torment. They want to see you on the pyre, that might be not even of your making! No matter what you do, it will never please them and will seek nothing less than total annihilation of your person, your family, friends and your home.",
				"NameDe":"Blutfehde",
				"DescDe":"Das liegt jenseits deiner Möglichkeiten. Irgendetwas Schreckliches geschah in der Vergangenheit, und es wird nie vergessen oder vergeben. Eine Person, eine Familie oder eine Dynastie sucht nichts Geringeres als dein Leid. Sie wollen dich auf dem Scheiterhaufen sehen – selbst wenn du nicht einmal die Ursache dafür bist! Egal, was du tust, du wirst sie niemals besänftigen können, und sie streben nicht weniger an als deine völlige Auslöschung – von dir, deiner Familie, deinen Freunden und deiner Heimat.",
				"Talents":[["l_sleeper",""],["constant_vigilance","any"],["hatred","any_dyn"],["pure_hatred","any_dyn"]],
				"Skills":[["awareness",""],["s_lore","heraldry"]],
				"AName":"Highest of Feuds",
				"ADesc":"When it all started? It doesn’t matter. What matters is that it continues to this day. The rival is someone who is much stronger and influential than the character, maybe he isn’t a Dynasty but an Inquisitor. He will always try his best to bring death or destruction upon the character without being outright responsible for it. Maybe sending a self-destructing assassin, killing a member of the character’s family when he wasn’t home or worse - planting seeds of destruction on the character’s homeworld, so when he comes back, it is either overrun with Tyranids, Orks or Exterminatus.",
				"ANameDe":"Höchste Fehde",
				"ADescDe":"Wann hat es angefangen? Das spielt keine Rolle. Wichtig ist, dass es bis heute andauert. Der Rivale ist viel mächtiger und einflussreicher als der Charakter – vielleicht keine Dynastie, sondern ein Inquisitor. Er wird immer versuchen, Tod oder Zerstörung über den Charakter zu bringen, ohne dafür direkt verantwortlich zu sein. Vielleicht schickt er einen selbstzerstörenden Attentäter, tötet ein Familienmitglied des Charakters, während dieser nicht da ist, oder – schlimmer noch – pflanzt Samen der Zerstörung auf der Heimatwelt des Charakters, sodass sie bei seiner Rückkehr entweder von Tyraniden, Orks überrannt oder durch ein Exterminatus ausgelöscht wurde.",
				"Points":5,
				"PType":"CP"
			}
		}
	},
	"darkvoyage":{
		"Name":"Dark Voyage",
		"Desc":"Starport taverns and station galleys are filled with travellers, wanderers, and old voidfarers. Sooner or later, when the lumen globes have dimmed, these folk will tell of the many strange legends they have heard. They tell of hell-hulks crewed by the lost and warp storms that howl with mocking voices, of the things that claw and scratch at the hull waiting for the merest flicker of the Geller Field for the warp to pour in and devour all, and of horrifying xenos encounters and voyages of the damned. But you have no taste for such stories, because you know the truth—you have lived them. You have stared into the eyes of the abyss and lived. You have seen the dead walk and the bulkheads bleed. These experiences have marked you, opening your eyes to the darkness that hides beneath the surface of things, and whether you have recoiled in dread or been drawn on in fascination is a truth you keep to yourself.",
		"NameDe":"Dunkle Reise",
		"DescDe":"In Raumhafen-Tavernen und den Messen von Stationen sammeln sich Reisende, Wanderer und alte Voidfahrer. Früher oder später, wenn die Lumen-Kugeln gedimmt sind, erzählen diese Leute von den seltsamen Legenden, die sie gehört haben. Sie sprechen von Höllenschiffen, bemannt von den Verlorenen, und Warpstürmen, die mit spöttischen Stimmen heulen, von Dingen, die an den Rümpfen kratzen und auf das kleinste Flackern des Geller-Felds warten, damit der Warp einströmen und alles verschlingen kann, und von erschreckenden Begegnungen mit Xenos und Reisen der Verdammten.</br>Doch du hast keinen Geschmack für solche Geschichten, denn du kennst die Wahrheit – du hast sie erlebt. Du hast dem Abgrund in die Augen geblickt und überlebt. Du hast die Toten wandeln und Schottwände bluten sehen. Diese Erlebnisse haben dich geprägt und dir die Augen für die Dunkelheit geöffnet, die unter der Oberfläche lauert. Ob du in Schrecken zurückgewichen bist oder von einer unheimlichen Faszination weitergezogen wurdest, ist eine Wahrheit, die du für dich behältst.",
		"options":{
			"scratches":{
				"Name":"Scratches on the Walls",
				"Desc":"Your first Warp travel wasn’t fun. You always woke up to the sound of scratching. Later, it evolved and you started to see scratch marks on the walls. The more you travelled, the worse it got. Strange whispers, deep scratch marks on plasteel walls or the feel that somebody is breathing down your neck.",
				"NameDe":"Kratzer an den Wänden",
				"DescDe":"Deine erste Warp-Reise war alles andere als angenehm. Du wurdest ständig von einem Kratzen geweckt. Später wurde es schlimmer, und du begannst, Kratzspuren an den Wänden zu sehen. Je öfter du reiste, desto schlimmer wurde es. Seltsames Flüstern, tiefe Kratzspuren in den Plasteel-Wänden oder das Gefühl, dass jemand dir in den Nacken atmet.",
				"Talents":[["l_sleeper",""]],
				"Skills":[["awareness",""]],
				"AName":"Sometimes You are just Unlucky",
				"ADesc":"The character smells very nice, at least to the daemons that inhabit the Warp. Whenever making a Warp Travel, the character receives -10 penalty to Willpower tests as the Daemons try hard to possess him.",
				"ANameDe":"Manchmal hat man einfach Pech",
				"ADescDe":"Der Charakter riecht für die Dämonen des Warp verlockend. Während einer Warp-Reise erhält der Charakter einen Malus von -10 auf Willenskraft-Proben, da die Dämonen versuchen, ihn zu besessen.",
				"Points":5,
				"PType":"IP"
			},
			"deepvoid":{
				"Name":"Deep Void Run",
				"Desc":"You ventured beyond anybody really should. Between the stars there is no light, there is nothing. However, there was something. And that something lurked in the darkness as light was its enemy. Each time the flames go out, you can hear it, moving, scratching, breathing. It is near you at all times and only the light helps you survive.",
				"NameDe":"Reise in die Tiefen der Leere",
				"DescDe":"Du wagtest dich weiter hinaus, als es irgendjemand sollte. Zwischen den Sternen gibt es kein Licht, nichts. Doch da war etwas. Und dieses Etwas lauerte in der Dunkelheit, denn Licht war sein Feind. Jedes Mal, wenn die Flammen erlöschen, kannst du es hören – wie es sich bewegt, kratzt, atmet. Es ist immer in deiner Nähe, und nur das Licht bewahrt dich vor ihm.",
				"Talents":[],
				"Skills":[["f_lore","archeotech"]],
				"AName":"Hurled from the System",
				"ADesc":"The character saw many things beyond the limit of a star system. Things nobody searches for, since there is nearly 0% chance of finding. Well, the character found it or maybe it found the character. Whatever that thing was, it brought with itself darkness that nobody can understand. The character gains -10 penalty to all tests while in total darkness. Dark-sight or similar abilities (granted by items or not) do not help, he needs a source of light. Also, the character is unable to sleep without light.",
				"ANameDe":"Aus dem System gestoßen",
				"ADescDe":"Der Charakter hat Dinge gesehen, die jenseits der Grenzen eines Sternensystems liegen, Dinge, die niemand sucht, weil die Chance, sie zu finden, praktisch null ist. Doch der Charakter fand es – oder es fand ihn. Was auch immer dieses Etwas war, es brachte eine Dunkelheit mit sich, die niemand begreifen kann. Der Charakter erhält einen Malus von -10 auf alle Proben in völliger Dunkelheit. Dunkelsicht oder ähnliche Fähigkeiten (durch Gegenstände oder nicht) helfen nicht; er benötigt eine Lichtquelle. Außerdem kann der Charakter ohne Licht nicht schlafen.",
				"Points":5,
				"PType":"IP"
			},
			"beyondpale":{
				"Name":"Beyond the Pale",
				"Desc":"One bad jump, that all it takes. Many think that warp travel is actually very safe, only a select few ships ever get the raw end of the deal. Yours got the rawest and in a sense, the purest form of a bad one. The universe opened its maw to you and gazed back. The abyss looked and you will never forget what you saw. Every time fear returns, it actually is from that moment.",
				"NameDe":"Jenseits des Fassbaren",
				"DescDe":"Ein schlechter Sprung – mehr braucht es nicht. Viele denken, Warp-Reisen seien eigentlich sicher, nur wenige Schiffe erleben wirklich das Schlimmste. Doch deines hatte das schlimmste und reinste Pech. Das Universum öffnete sein Maul und starrte dich an. Der Abgrund sah dich an, und du wirst niemals vergessen, was du gesehen hast. Jedes Mal, wenn die Angst zurückkehrt, stammt sie aus diesem Moment.",
				"Talents":[["res","fear"]],
				"Skills":[["f_lore","warp"],["f_lore","daemonology"]],
				"AName":"A Sharp Pull to the Other",
				"ADesc":"The character was sent into a world of no meaning and entropy. He can’t even describe the horrors he witnessed and “they” saw him. He will never forget them. The character treats all Fear Ratings as one higher.",
				"ANameDe":"Ein scharfer Zug zur anderen Seite",
				"ADescDe":"Der Charakter wurde in eine Welt ohne Bedeutung und voller Entropie geschickt. Er kann die Schrecken, die er sah, nicht einmal beschreiben, doch „sie“ sahen ihn. Er wird sie niemals vergessen. Der Charakter behandelt alle Furcht-Werte als eine Stufe höher.",
				"Points":5,
				"PType":"IP"
			},
			"horrors":{
				"Name":"Horrors Lurking",
				"Desc":"Whatever lies beyond the galaxy? Maybe there are some far flung systems that can still be salvaged? Full with archeotech treasure or better? The Light of the Holy Astronomican might not be visible there, even the slightest, but maybe there is something there… and you found it. Lurking beyond the stars. The immeasurable mass of horror and terror. Not even the Daemons can come close to it. It is coming and you are on the list.",
				"NameDe":"Lauernde Schrecken",
				"DescDe":"Was liegt jenseits der Galaxis? Vielleicht gibt es weit entfernte Systeme, die noch gerettet werden können? Voll mit Archeotech-Schätzen oder besser? Das Licht des heiligen Astronomican mag dort nicht einmal schwach zu sehen sein, doch vielleicht gibt es dort etwas… und du hast es gefunden. Lauernd jenseits der Sterne. Die unermessliche Masse aus Schrecken und Entsetzen. Nicht einmal die Dämonen kommen ihm nahe. Es kommt, und du stehst auf seiner Liste.",
				"Talents":[["hatred","allxenos"],["hatred","daemons"],["pure_hatred","allxenos"],["pure_hatred","daemons"]],
				"Skills":[],
				"AName":"There are out there, lurking",
				"ADesc":"The character saw horror unimaginable. This cannot even be described in words. The talents Jaded and Resistance (Fear) do not work for the character, while the Adamantium Faith Talent treats his Willpower Bonus as 1 point lower. He treats all Xenos Fear ratings as one higher.",
				"ANameDe":"Sie lauern dort draußen",
				"ADescDe":"Der Charakter hat Schrecken gesehen, die unvorstellbar sind. Sie können nicht einmal in Worte gefasst werden. Die Talente Abgehärtet und Widerstand (Furcht) wirken nicht für den Charakter, während das Talent Glauben aus Adamantium seinen Willenskraft-Bonus um 1 Punkt senkt. Er behandelt alle Furcht-Werte von Xenos als eine Stufe höher.",
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"upbringing":{
		"Name":"Product of Upbringing",
		"Desc":"There are many different types of nobility within the Imperium. Some might be part of the Commercia Houses, others are Imperial Officers, and still others are members of the Rogue Trader Dynasties and clans. It’s a confusing and often tangled web of intrigue and fealty. Only the High Lords of Terra can declare a family line to be nobility, but planetary lords, Imperial Commanders, and sector Governors can all declare lesser vassals to be raised in status under them. Some families are given titles as a reward for service to the Golden Throne; these family members are often looked down upon as upstarts until they have proven themselves over the course of many generations. Of course, noble families are always trying to gain the advantage over one another, and thus earn the favour of their lords. They scheme and plot in the hopes that one day their plans will come to fruition and they will be elevated in status and gain even more power and wealth. Aside from the direct bloodlines and heirs, there are those family members who are associated by marriage, and those who have been brought into the family for some potent ability they possess. These scions typically form the backbone of the nobility and help keep the lines viable for future generations.",
		"NameDe":"Produkt der Erziehung",
		"DescDe":"Im Imperium gibt es viele verschiedene Arten von Adel. Einige gehören zu den Häusern der Commercia, andere sind imperiale Offiziere, und wieder andere sind Mitglieder der Dynastien und Clans der Rogue Trader. Es ist ein verwirrendes und oft verstricktes Netz aus Intrigen und Lehnstreue. Nur die Hohen Lords von Terra können eine Familienlinie offiziell zum Adel erklären, aber planetarische Lords, imperiale Kommandanten und Sektor-Gouverneure können auch niedere Vasallen erheben und ihnen einen höheren Status verleihen.</br>Einige Familien erhalten Titel als Belohnung für ihre Dienste am Goldenen Thron; diese Familienmitglieder werden oft als Emporkömmlinge betrachtet, bis sie sich über viele Generationen hinweg bewährt haben. Natürlich versuchen Adelsfamilien immer, sich gegenseitig zu übertrumpfen, um die Gunst ihrer Herren zu gewinnen. Sie schmieden Intrigen und planen, in der Hoffnung, dass ihre Pläne eines Tages Früchte tragen und sie an Status gewinnen sowie mehr Macht und Reichtum erlangen.</br>Neben den direkten Blutlinien und Erben gibt es Familienmitglieder, die durch Heirat assoziiert sind, sowie solche, die aufgrund einer besonderen Fähigkeit in die Familie aufgenommen wurden. Diese Nachkommen bilden in der Regel das Rückgrat des Adels und tragen dazu bei, die Linien für zukünftige Generationen stabil zu halten.",
		"options":{
			"cautious":{
				"Name":"Cautious Moves",
				"Desc":"You try your best, moving past different houses, dynasties and nobility is tiring. Stepping on someone’s foot might be a cause for a milenia spanning vendetta. Rather than getting into trouble, it might be better for you to just concentrate on what matters.",
				"NameDe":"Vorsichtige Schritte",
				"DescDe":"Der Umgang mit verschiedenen Häusern, Dynastien und Adeligen ist anstrengend. Ein falscher Schritt könnte leicht eine Jahrtausende währende Fehde auslösen. Anstatt sich in Schwierigkeiten zu bringen, konzentrierst du dich lieber auf das Wesentliche.",
				"Talents":[],
				"Skills":[["s_lore","heraldry"],["f_lore","heraldry"]],
				"AName":"I need to concentrate",
				"ADesc":"The character’s life is full of distractions. The worst come in social situations, when he needs to look for every problem in etiquette he might be doing. Whenever there is a social gathering, be it an officer meeting or a grand ball, the character receives -10 penalty to all tests not concerning the goal of the gathering itself - like Awareness test if there’s an assassin on the loose coming to get him, while he is rather busy with crumpets.",
				"ANameDe":"Ich muss mich konzentrieren",
				"ADescDe":"Das Leben des Charakters ist voller Ablenkungen. Besonders in gesellschaftlichen Situationen, in denen er ständig darauf achten muss, keinen Fehler im Protokoll zu machen, wird es schwierig. Bei sozialen Zusammenkünften, sei es ein Offizierstreffen oder ein großer Ball, erhält der Charakter einen Malus von -10 auf alle Proben, die nicht direkt mit dem Ziel der Zusammenkunft zu tun haben – zum Beispiel ein Wahrnehmungs-Test, um einen Attentäter zu erkennen, während er mit Gebäck beschäftigt ist.",
				"Points":5,
				"PType":"IP"
			},
			"badfoot":{
				"Name":"Bad Foot",
				"Desc":"Whenever by choice or accident, one thing led to another and it left a sour taste in your mouth. This just won’t go away, no matter how much you tried. Might be something you said or there was just a misunderstanding. However, these people do not see the world how you see it and you have problems with addressing that. Worst yet, you should be on the same side!",
				"NameDe":"Schlechter Start",
				"DescDe":"Ob aus freiem Willen oder durch einen Unfall, etwas führte zu einer Situation, die einen bitteren Nachgeschmack hinterlassen hat. Egal wie sehr du dich bemühst, es wird nicht verschwinden. Vielleicht war es etwas, das du gesagt hast, oder ein Missverständnis. Doch die andere Seite sieht die Welt anders, und das macht es schwer, eine Verbindung herzustellen – besonders, wenn ihr eigentlich auf derselben Seite stehen solltet!",
				"Talents":[],
				"Skills":[["c_lore","any"],["scrutiny",""]],
				"AName":"I can’t trust them, ever",
				"ADesc":"The character has bad memories or history with one specific Imperial organization. This taints any future relationship the character can have with the organization and reflects in his attitude and actions. All social interactions (except for Intimidate Skill) are made with -10 penalty with that organization.",
				"ANameDe":"Ich kann ihnen niemals vertrauen",
				"ADescDe":"Der Charakter hat schlechte Erinnerungen oder eine problematische Geschichte mit einer bestimmten imperialen Organisation. Dies belastet alle zukünftigen Beziehungen zu dieser Organisation und spiegelt sich in seiner Einstellung und seinen Handlungen wider. Alle sozialen Interaktionen (außer mit der Fertigkeit Einschüchtern) erhalten einen Malus von -10, wenn es um diese Organisation geht.",
				"Points":5,
				"PType":""
			},
			"abused":{
				"Name":"Abused",
				"Desc":"This couldn’t turn for the better. It might have happened when you were just a child or recently. This scar will stay with you for the rest of your life. While this might have been a misunderstanding or “normal procedure”, your character was tortured or be a witness to a gruesome act by one of the Imperials. This didn’t bode well for your psyche.",
				"NameDe":"Missbraucht",
				"DescDe":"Es hätte nicht schlimmer kommen können. Vielleicht geschah es in deiner Kindheit oder erst kürzlich. Diese Narbe wird dich für den Rest deines Lebens begleiten. Ob es ein Missverständnis oder „normale Vorgehensweise“ war, dein Charakter wurde gefoltert oder war Zeuge einer grausamen Tat durch Imperiale. Das hat Spuren in deiner Psyche hinterlassen.",
				"Talents":[["l_sleeper",""]],
				"Skills":[["awareness",""],["scrutiny",""]],
				"AName":"Don’t make me remember!",
				"ADesc":"The character’s family, close ones or himself, maybe even has a long history of abuse by an Imperial organization. This can be from torture, killing their close friends or similar. To this end, the character was brought up with a phobia concerning this group. If the character ever needs to work with the group that abused him, he needs to pass a Challenging (+0) Willpower test or he will receive -20 penalty to all tests as long as the group is nearby.",
				"ANameDe":"Erinnere mich nicht daran!",
				"ADescDe":"Die Familie, Freunde oder der Charakter selbst haben eine lange Geschichte des Missbrauchs durch eine imperiale Organisation, sei es durch Folter, Mord an engen Freunden oder Ähnliches. Der Charakter entwickelt eine Phobie gegenüber dieser Gruppe. Muss der Charakter mit der Gruppe zusammenarbeiten, die ihn missbraucht hat, muss er einen Herausfordernden (+0) Willenskraft-Test bestehen, sonst erhält er einen Malus von -20 auf alle Proben, solange die Gruppe in der Nähe ist.",
				"Points":5,
				"PType":"IP"
			},
			"polimine":{
				"Name":"Political Landmine",
				"Desc":"You or someone from your past made a giant mistake. Treachery, stealing, heresy, you name it, something was done and it is nor irreversible. Your reputation is ruined and will haunt you. You might be destined for a better fate but no matter how much you try, they will always think you are up to no good and will go to extreme lengths to end your life.",
				"NameDe":"Politische Landmine",
				"DescDe":"Du oder jemand aus deiner Vergangenheit hat einen gewaltigen Fehler gemacht – Verrat, Diebstahl, Ketzerei, was auch immer, etwas wurde getan, das nicht rückgängig zu machen ist. Dein Ruf ist ruiniert und wird dich verfolgen. Egal, wie sehr du dich bemühst, sie werden dich immer verdächtigen und alles daran setzen, dein Leben zu zerstören.",
				"Talents":[],
				"Skills":[["deceive",""],["s_lore","heraldry"],["scrutiny",""]],
				"AName":"Political quagmire",
				"ADesc":"The character or someone from his past is responsible for creating an enemy from an Imperial organization! The character gains an Enemy talent that isn’t easily resolved and might stay for the rest of his life and his descendants.",
				"ANameDe":"Politisches Minenfeld",
				"ADescDe":"Der Charakter oder jemand aus seiner Vergangenheit hat sich eine imperiale Organisation zum Feind gemacht! Der Charakter erhält ein Feind-Talent, das schwer zu lösen ist und ihn möglicherweise sein ganzes Leben lang und sogar seine Nachkommen begleitet.",
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"lostworlds":{
		"Name":"Lost Worlds",
		"Desc":"There are long-lost worlds being discovered all the time by members of the Imperium. The Explorator fleets of the Adeptus Mechanicus chart and record planets, sending that information back to be analysed. Some are worlds that were once part of a Rogue Trader dynasty, now lost to antiquity. Some are bizarre and upset the laws of physics: rogue worlds torn from their stars to float in the voids, alien constructs, space hulks of enormous size, and other equally strange phenomena. Those who choose to catalogue and explore these lost worlds sometimes return with wealth or knowledge undreamt of; others come back changed, as if they passed beyond the material universe.",
		"NameDe":"Verschollene Welten",
		"DescDe":"Ständig werden von Mitgliedern des Imperiums längst verlorene Welten entdeckt. Die Explorator-Flotten des Adeptus Mechanicus kartieren und dokumentieren Planeten und senden diese Informationen zur Analyse zurück. Einige dieser Welten gehörten einst zu einer Rogue-Trader-Dynastie und sind nun der Vergessenheit anheimgefallen. Manche sind bizarr und stellen die Gesetze der Physik auf den Kopf: herrenlose Welten, die aus ihren Sternensystemen gerissen wurden und im Nichts treiben, fremdartige Konstruktionen, gigantische Raumwracks und andere ebenso seltsame Phänomene.</br>Diejenigen, die sich entscheiden, diese verlorenen Welten zu katalogisieren und zu erforschen, kehren manchmal mit unvorstellbarem Reichtum oder Wissen zurück; andere kommen verändert zurück, als hätten sie die Grenzen des materiellen Universums überschritten.",
		"options":{
			"alienplus":{
				"Name":"More than Alien",
				"Desc":"Humanity was naive, truly naive. The galaxy was filled with immeasurable number of different races. There were bound to be at least few that are bad, right? Well, you saw the truth. It is the other way around. No Xenos is the friend of Humanity. All of them seek to use Humanity or destroy it. There is no place for optimism.",
				"NameDe":"Mehr als Fremdartig",
				"DescDe":"Die Menschheit war naiv, wirklich naiv. Die Galaxie ist von einer unermesslichen Anzahl verschiedener Rassen bevölkert. Es musste doch zumindest ein paar geben, die schlecht sind, oder? Nun, du hast die Wahrheit gesehen. Es ist genau umgekehrt. Kein Xenos ist ein Freund der Menschheit. Alle streben danach, die Menschheit zu benutzen oder zu zerstören. Es gibt keinen Platz für Optimismus.",
				"Talents":[],
				"Skills":[["f_lore","xenos"],["f_lore","xenos"],["linguistics","xenos"]],
				"AName":"Nobody is Humanity’s Ally",
				"ADesc":"The character saw the truth behind the Xenos’ lies. Many worlds were lost or enslaved, and he saw a good measure of them. He will never trust another Xenos ever again. All social interaction (except for Intimidate) actions are done with -10 penalty.",
				"ANameDe":"Niemand ist ein Verbündeter der Menschheit",
				"ADescDe":"Der Charakter hat die Wahrheit hinter den Lügen der Xenos erkannt. Viele Welten gingen verloren oder wurden versklavt, und er hat eine gute Anzahl davon gesehen. Er wird niemals wieder einem Xenos vertrauen. Alle sozialen Interaktionen (außer mit der Fertigkeit Einschüchtern) erhalten einen Malus von -10.",
				"Points":5,
				"PType":"IP"
			},
			"rogueplanet":{
				"Name":"Rogue Planet",
				"Desc":"There was this little planet, flung far from the Imperial space. Who knew what riches it might hold? At least, that’s what you thought before making your first step. Forgotten technology woke up, the moment you put your hands on it and it didn’t like it. You made it out alive but not the hundreds of voidcrew that went with you down to the planet. How did you survive?",
				"NameDe":"Rogue-Planet",
				"DescDe":"Es gab diesen kleinen Planeten, weit entfernt vom imperialen Raum. Wer wusste schon, welche Reichtümer er bergen könnte? Zumindest dachtest du das, bevor du deinen ersten Schritt darauf gesetzt hast. Vergessene Technologie erwachte in dem Moment, in dem du sie berührtest – und sie mochte es nicht. Du hast es lebend herausgeschafft, aber nicht die Hunderte von Crewmitgliedern, die mit dir auf den Planeten hinabstiegen. Wie hast du überlebt",
				"Talents":[],
				"Skills":[["f_lore","astromancy"],["f_lore","men_o_iron"],["f_lore","numerology"]],
				"AName":"A Price was Paid",
				"ADesc":"The character received an undetectable implant in his body that is bonded with his DNA. He will never be able to remove it. At the start of a session, roll 1d10. On a 7 or higher, the implant is activated. From this point on, the character will seek out a way to disrupt his personal plans, be it by destroying the item he was crafting, burning the papers he was preparing or killing his aide. The character is fully aware of what is going on and the implant wants to destroy his life but not kill him. Once he made an action that would make the character miserable in the nearby future, it deactivates itself until the next session.",
				"ANameDe":"Ein Preis wurde bezahlt",
				"ADescDe":"Der Charakter hat ein unentdeckbares Implantat in seinem Körper, das mit seiner DNA verbunden ist. Es kann nie entfernt werden. Zu Beginn einer Sitzung würfelt der Spieler 1W10. Bei einer 7 oder höher wird das Implantat aktiviert. Von diesem Moment an wird der Charakter nach Möglichkeiten suchen, seine eigenen Pläne zu sabotieren, sei es, indem er einen Gegenstand zerstört, den er herstellte, Dokumente verbrennt, die er vorbereitete, oder seinen Assistenten tötet. Der Charakter ist sich dessen voll bewusst und weiß, dass das Implantat darauf abzielt, sein Leben zu ruinieren, ihn aber nicht zu töten. Sobald er eine Aktion durchgeführt hat, die ihn in naher Zukunft unglücklich macht, deaktiviert sich das Implantat bis zur nächsten Sitzung.",
				"Points":5,
				"PType":"IP"
			},
			"vision":{
				"Name":"A Vision of the Future",
				"Desc":"Maybe what you found was some Men of Iron machine that predicted the future? Maybe it was some ancient Xenos creation that showed you the vision? Whatever it was, doesn’t matter now, since the visions stayed. You saw the end. End of all things. What death brings and what is beyond it. It scares you and you fear for the future of, not only yourself, but of Mankind too.",
				"NameDe":"Eine Vision der Zukunft",
				"DescDe":"Vielleicht hast du eine Maschine der „Men of Iron“ gefunden, die die Zukunft voraussagte? Oder es war eine alte Xenos-Kreation, die dir eine Vision zeigte? Was auch immer es war, spielt jetzt keine Rolle mehr, denn die Visionen blieben. Du hast das Ende gesehen. Das Ende aller Dinge. Was der Tod bringt und was jenseits davon liegt. Es macht dir Angst, und du fürchtest nicht nur um dich selbst, sondern auch um die Zukunft der Menschheit.",
				"Talents":[["l_sleeper",""],["foresight",""],["total_recall",""]],
				"Skills":[],
				"AName":"Is it Real? Is that how it all ends?",
				"ADesc":"The character sees glimpses of the future. The biggest one was when he visited the unknown world, he saw something he never should have. The character is very paranoid of his demise and those around him, seeking assurance and safety every time, because he knows there is a worse fate than death. At the start of the session, the character rolls 1d10 and on a result of 7 or higher, he is reminded that the clock is ticking. He receives -10 penalty to all tests until the end of the session, unless he finds a way to change the future. This, however, might mean anything from him or one of his allies surviving Critical Damage instead of dying, gaining a Critical Success on a test or similar. The GM is the final arbiter.",
				"ANameDe":"Ist es real? Ist das, wie alles endet?",
				"ADescDe":"Der Charakter sieht flüchtige Einblicke in die Zukunft. Der größte davon ereignete sich, als er die unbekannte Welt besuchte, und er sah etwas, das er niemals hätte sehen sollen. Der Charakter ist sehr paranoid, was sein eigenes Ende und das seiner Umgebung betrifft, und sucht ständig nach Sicherheit. Zu Beginn der Sitzung würfelt der Spieler 1W10. Bei einer 7 oder höher wird der Charakter daran erinnert, dass die Uhr tickt. Er erhält einen Malus von -10 auf alle Tests bis zum Ende der Sitzung, es sei denn, er findet einen Weg, die Zukunft zu ändern. Das könnte bedeuten, dass er oder ein Verbündeter eine kritische Verletzung überlebt, anstatt zu sterben, oder bei einem Test einen kritischen Erfolg erzielt. Der Spielleiter hat das letzte Wort.",
				"Points":5,
				"PType":"IP"
			},
			"horror":{
				"Name":"Parallel Horror",
				"Desc":"You visited a world that seemed familiar for some reason. When you got to the planet, something happened, that nobody will believe. Did you meet your doppelganger and he disappeared in a flash of light when he saw you? Some paradox happened that shouldn’t? Maybe you opened a tomb of an ancient star-god and was punished. Whatever happened, it changed you.",
				"NameDe":"Paralleler Schrecken",
				"DescDe":"Du hast eine Welt besucht, die dir aus irgendeinem Grund vertraut vorkam. Als du auf dem Planeten ankamst, geschah etwas, das dir niemand glauben wird. Hast du deinen Doppelgänger getroffen, der in einem Lichtblitz verschwand, als er dich sah? Hat sich ein Paradox ereignet, das nicht hätte geschehen dürfen? Vielleicht hast du das Grab eines alten Sternengottes geöffnet und wurdest bestraft. Was auch immer geschah, es hat dich verändert.",
				"Talents":[],
				"Skills":[["f_lore","any"],["f_lore","any"],["f_lore","any"]],
				"AName":"Warum bist du hier? Wer bist du?",
				"ADesc":"Der Charakter hat einen zusätzlichen „Besucher“ in seinem Kopf. Dieser sucht nicht seinen Untergang, hat jedoch andere Meinungen über Dinge. Wann immer der Charakter eine wichtige Handlung durchführen möchte – etwa direkt auf einen Feind zuzustürmen, sich für andere zu opfern oder einen Inquisitor anzulügen – muss er 1W10 würfeln. Bei einer 6 oder höher muss er einen Herausfordernden (+0) Willenskraft-Test bestehen. Andernfalls wird er versuchen, das Gegenteil zu tun: auf den Feind schießen, anstatt zu stürmen, sich nicht opfern und sich stattdessen zurückziehen oder die Wahrheit sagen bzw. schweigen.",
				"Fate":1,
				"ANameDe":"Why are you there? Who are you?",
				"ADescDe":"The character was gifted with an additional visitor, in his head. He doesn’t seek his doom, he just has different… opinions on things. Whenever the character makes an important move, like charging head on against the enemy, trying to sacrifice himself for others or lying to an Inquisitor, he must roll 1d10. If the result is 6 or higher, he must pass a Challenging (+0) Willpower test; otherwise, he will try doing the opposite - shoot at the enemy instead of charging or just retreat, not sacrificing himself and just leaving or speaking the truth to the Inquisitor or being quiet.",
				"Points":5,
				"PType":"IP"
			}
		}
	},
	"darkness":{
		"Name":"Darkness",
		"Desc":"The galaxy is a dark and unforgiving place; anyone who says otherwise is a fool! As happens in the universe, some are selected by things dark and terrible. Their exposure to such things has left its mark upon their souls. Some study forbidden tomes and texts in the hopes of learning some arcane or esoteric lore. Others have been victim to a warp-incursion, a tear in the barrier between the material universe and the Realm of Chaos. A rare few have been touched by something wicked, even possessed by it, and now carry the burden of that encounter—seeking to rid themselves of the affliction before they either succumb to it or are found out by their peers or the authorities.",
		"NameDe":"Dunkelheit",
		"DescDe":"Die Galaxis ist ein dunkler und erbarmungsloser Ort; wer etwas anderes behauptet, ist ein Narr! Wie es im Universum geschieht, werden einige von dunklen und schrecklichen Dingen ausgewählt. Ihre Begegnung mit solchen Mächten hat Spuren auf ihren Seelen hinterlassen. Manche studieren verbotene Bücher und Texte in der Hoffnung, arkanes oder esoterisches Wissen zu erlangen. Andere wurden Opfer einer Warp-Inkursion, eines Risses in der Barriere zwischen dem materiellen Universum und dem Reich des Chaos. Eine seltene Minderheit wurde von etwas Bösem berührt, vielleicht sogar davon besessen, und trägt nun die Last dieser Begegnung – auf der Suche nach einem Weg, sich von diesem Fluch zu befreien, bevor sie ihm erliegen oder von ihren Mitmenschen oder den Autoritäten entdeckt werden.",
		"options":{
			"fknowledge":{
				"Name":"Forbidden Knowledge",
				"Desc":"You have accessed a cogitator you shouldn’t have or gained access to a lost library full of knowledge. Knowledge that is forbidden to everybody, except for the Inquisition themselves. You couldn’t resist and read and reread everything that was there. Now, your head is filled with forbidden knowledge that you can’t erase. This will bring your untimely death if the Inquisition ever hears about this.",
				"NameDe":"Verbotenes Wissen",
				"DescDe":"Du hattest Zugriff auf einen Cogitator oder eine verlorene Bibliothek voller Wissen, die du niemals hättest betreten dürfen. Wissen, das jedem außer der Inquisition selbst verboten ist. Du konntest nicht widerstehen und hast alles gelesen und nochmals gelesen, was dort war. Nun ist dein Kopf mit verbotenem Wissen gefüllt, das du nicht löschen kannst. Sollte die Inquisition jemals davon erfahren, wird dies deinen vorzeitigen Tod bedeuten.",
				"Talents":[],
				"Skills":[["f_lore","daemonology|horusheresy|longwar|inquisition|assassinorum"],
					["f_lore","daemonology|horusheresy|longwar|inquisition|assassinorum"]],
				"AName":"You better keep your mouth shut!",
				"ADesc":"The character got access to some forbidden knowledge, that nobody should ever have. Be it knowledge about summoning daemons, truth about the Horus Heresy, Inquisition and its branches as well as different philosophies or even knowledge about the Temple Assassins and their almost-takeover. This knowledge is highly forbidden for someone who isn’t an Inquisitor. If this is found out, the character might gain an Enemy (Inquisition) (or just be a useful tool)! Because of this, he receives -20 penalty to Scrutiny tests made against the Inquisition.",
				"ANameDe":"Besser den Mund halten!",
				"ADescDe":"Der Charakter hat Zugang zu verbotenem Wissen erlangt, das niemand besitzen sollte. Seien es Informationen über die Beschwörung von Dämonen, die Wahrheit über die Horus-Häresie, die Inquisition und ihre Strukturen oder gar über die Tempel-Assassinen und deren beinahe erfolgten Umsturzversuch. Dieses Wissen ist streng verboten für jeden, der kein Inquisitor ist. Sollte dies herauskommen, könnte der Charakter den Talent <b>Feind</b> (Inquisition) erlangen (oder als nützliches Werkzeug verwendet werden)! Aufgrund dieses Wissens erhält er einen Malus von -20 auf Wachsamkeitstests gegen die Inquisition.",
				"Points":5,
				"PType":"CP"
			},
			"warpincursion":{
				"Name":"Warp Incursion",
				"Desc":"You were spending quality time in your quarters or on a Pleasure World, when all hell broke loose and darkness came down like a hammer. Creatures of the warp spilled out, murderfucking everything on their path. How did you survive all of this? Nobody really knows. Maybe you were lucky.",
				"NameDe":"Warp-Inkursion",
				"DescDe":"Du hast gerade entspannt deine Zeit in deinen Quartieren oder auf einer Vergnügungswelt verbracht, als plötzlich die Hölle losbrach und die Dunkelheit wie ein Hammer niederging. Kreaturen aus dem Warp strömten heraus und zerstörten alles auf ihrem Weg. Wie hast du das alles überlebt? Niemand weiß es so genau. Vielleicht hattest du einfach Glück.",
				"Talents":[["hardenedsoul",""],["darksoul",""]],
				"Skills":[["f_lore","heresy"],["f_lore","warp"]],
				"AName":"Marked by a Claw",
				"ADesc":"The character survived a Warp Incursion on the ship or the world and due to this, he is marked forever by the forces of Chaos. Every chaos aligned creature sees him as a prize to sacrifice to the Chaos Gods. Daemons are more likely to choose him as a target. While chaos worshippers will do their best to drop him unconscious and then drag him to the sacrificial chamber. All Chaos aligned creatures (Daemons or not) gain +10 bonus to all tests against the character.",
				"ANameDe":"Von einer Klaue gezeichnet",
				"ADescDe":"Der Charakter hat eine Warp-Inkursion auf einem Schiff oder einer Welt überlebt und ist dadurch für immer von den Kräften des Chaos gezeichnet. Jede chaosausgerichtete Kreatur sieht ihn als Opfer, das den Chaosgöttern dargebracht werden soll. Dämonen werden ihn bevorzugt angreifen, und Chaos-Anhänger werden alles tun, um ihn bewusstlos zu schlagen und in eine Opferkammer zu bringen. Alle chaosausgerichteten Kreaturen (Dämonen oder nicht) erhalten einen Bonus von +10 auf alle Tests gegen den Charakter.",
				"Points":5,
				"PType":"CP"
			},
			"secret":{
				"Name":"Dark Secret",
				"Desc":"This couldn’t happen to just anyone. You just had to do it, right? The deed is done. The dead tell no tales. However, it will haunt you and when it surfaces, there will be consequences more deadly than anybody can imagine. Maybe even sending a Temple Assassin for your ass. Whatever you did, nobody will help you after they learn your secret.",
				"NameDe":"Dunkles Geheimnis",
				"DescDe":"Dies hätte jedem passieren können, aber es musste ausgerechnet dir geschehen, oder? Die Tat ist vollbracht, und die Toten erzählen keine Geschichten. Doch es wird dich verfolgen, und wenn es ans Licht kommt, werden die Konsequenzen tödlicher sein, als sich irgendjemand vorstellen kann. Vielleicht wird sogar ein Tempel-Assassine auf dich angesetzt. Was auch immer du getan hast, niemand wird dir helfen, sobald sie dein Geheimnis kennen.",
				"Talents":[["constant_vigilance","any"],["coverup",""],["face_in_crowd",""]],
				"Skills":[],
				"AName":"A Ghastly Deed",
				"ADesc":"The character made a mistake, he can never be forgiven for. If the truth goes out, he will be branded Excommunicato Traitoris for this. It has to be some heinous deed, like selling out an Inquisitor to the Drukhari, making a sacred world the target of a Tyranid invasion or worse. People, however, must use it against the character. As such, he receives -40 penalty to any social test made against those who know his secret.",
				"ANameDe":"Eine abscheuliche Tat",
				"ADescDe":"Der Charakter hat einen Fehler gemacht, der ihm niemals verziehen werden kann. Wenn die Wahrheit herauskommt, wird er als Excommunicato Traitoris gebrandmarkt. Es muss sich um eine abscheuliche Tat handeln, wie den Verrat an einem Inquisitor an die Drukhari, das Verursachen einer Tyranideninvasion auf einer heiligen Welt oder Schlimmeres. Menschen, die dies wissen, werden es gegen den Charakter verwenden. Daher erhält er einen Malus von -40 auf soziale Tests gegenüber Personen, die sein Geheimnis kennen.",
				"Points":5,
				"PType":"CP"
			},
			"posessed":{
				"Name":"Possessed and Alluring",
				"Desc":"This one time, when travelling the warp, you felt some strange sensation. Or was during some chaos cult ritual? Either way, something or someone occupied your body to do heinous acts, while your soul was devoured. Thankfully, you were saved from it! Or were you? You have that strange feeling that something is not quite right. Maybe somebody is watching over you?",
				"NameDe":"Besessen und verführerisch",
				"DescDe":"Während einer Warp-Reise oder bei einem Chaos-Kult-Ritual hast du eine seltsame Erfahrung gemacht. Etwas oder jemand hat deinen Körper besetzt, um abscheuliche Taten zu begehen, während deine Seele verschlungen wurde. Zum Glück wurdest du gerettet! Oder doch nicht? Du hast das seltsame Gefühl, dass etwas nicht stimmt. Vielleicht beobachtet dich jemand?",
				"Talents":[["hatred","daemons"],["pure_hatred","daemons"],["daemonhunter",""],["bulwark_o_faith",""]],
				"Skills":[["f_lore","daemonology"]],
				"AName":"One Bad Trip",
				"ADesc":"The character was possessed, once, and that was all it took for him to break. However, nobody really exorcised him, or they tried and think it worked, the Daemon just left, without a reason. At least that what he wants you to think. The character gains Enemy (Daemons) but it isn’t as obvious as many might think. The GM chooses one Chaos God from which the Daemon hailed (or none for more fun). The opposite daemons, if they find the character, will drop whatever they are doing (if they can) and rush to kill the character. While those from the Chaos God will goad him into turning, he receives a -20 penalty to all defensive tests (including psychic attacks) made by Daemons from that specific Chaos God. While those that are not really opposed, more “allied”, then it flips between those two effects. The GM might just roll 1d10 to see what (1-5 want his death, 6-10 want him to serve).",
				"ANameDe":"Eine schlechte Reise",
				"ADescDe":"Der Charakter war einmal besessen, und das reichte aus, um ihn zu brechen. Niemand konnte ihn wirklich exorzieren, oder der Dämon verließ ihn ohne Grund – zumindest möchte er, dass du das glaubst. Der Charakter erhält den Talent <b>Feind</b> (Dämonen), aber die Auswirkungen sind subtil. Der Spielleiter wählt einen Chaosgott, von dem der Dämon stammte (oder keinen für mehr Ungewissheit). Dämonen des gegnerischen Chaosgottes werden alles tun, um den Charakter zu töten, während Dämonen des gleichen Chaosgottes ihn versuchen werden zu korrumpieren. Der Charakter erhält einen Malus von -20 auf alle Verteidigungstests (einschließlich gegen psychische Angriffe) gegen Dämonen dieses Chaosgottes. Der Spielleiter kann auch 1W10 würfeln (1-5: Wollen seinen Tod, 6-10: Wollen ihn bekehren).",
				"Points":5,
				"PType":"CP"
			}
		}
	}
}

var motivations = {
	"wrath":{
		"Name":"Wrath",
		"Desc":"You live for excitement, and no greater excitement can be found than that of battle. You yearn for the din and mayhem of conflict, the tests of skill, wits, and courage, and eagerly seek out fights wherever they can be found. Others may condemn you as a warmonger or find your belligerent ways off-putting, but your heart craves the rush of battle and such a thing should not be denied. Even in times of peace, you prepare for war, dueling for sport and honor, honing your skills and musing through countless theoretical strategies in anticipation of wars to come.",
		"NameDe":"Zorn",
		"DescDe":"Du lebst für die Aufregung, und keine größere Aufregung gibt es als die des Kampfes. Du sehnst dich nach dem Lärm und Chaos des Gefechts, den Prüfungen von Geschick, Verstand und Mut, und suchst eifrig nach Kämpfen, wo immer sie zu finden sind. Andere mögen dich als Kriegstreiber verurteilen oder deine streitlustige Art abstoßend finden, doch dein Herz verlangt nach dem Rausch des Kampfes, und so etwas sollte nicht verleugnet werden. Selbst in Zeiten des Friedens bereitest du dich auf den Krieg vor, duellierst dich aus Sport oder Ehre, verfeinerst deine Fähigkeiten und denkst über zahllose theoretische Strategien nach, in Erwartung der kommenden Kriege.",
		"options":{
			"mayhem":{
				"Name":"Mayhem",
				"Desc":"You are always in the front of things. Bringing destruction and mayhem, creating as much havoc as you please. This makes a valuable asset during combat but can create the same amount of problems outside of it.",
				"NameDe":"Chaos",
				"DescDe":"Du stehst immer an vorderster Front, bringst Zerstörung und Chaos und verursachst so viel Verwüstung, wie du möchtest. Dies macht dich im Kampf zu einem wertvollen Verbündeten, kann außerhalb davon jedoch ebenso viele Probleme schaffen.",
				"AName":"Walking Fury",
				"ADesc":"If the character inflicted in the last round at least 1 point of damage, after reductions, he gains a +10 bonus to hit against that target. If he damaged more than one target, he can choose which one grants him the bonus.",
				"ANameDe":"Wandelnder Zorn",
				"ADescDe":"Wenn der Charakter in der letzten Runde mindestens 1 Punkt Schaden verursacht hat (nach Abzügen), erhält er einen Bonus von +10 auf Angriffe gegen dieses Ziel. Hat er mehr als ein Ziel beschädigt, kann er wählen, welches den Bonus gewährt.",
				"stat":"S"
			},
			"warmonger":{
				"Name":"Warmonger",
				"Desc":"You live for war. War is in your veins. It is like your lover and will never leave you. The Imperium of Mankind has many enemies and war never ends. You will never allow it to end.",
				"NameDe":"Kriegstreiber",
				"DescDe":"Du lebst für den Krieg. Krieg liegt dir im Blut. Er ist wie ein Liebhaber, der dich niemals verlässt. Das Imperium der Menschheit hat viele Feinde, und der Krieg endet nie. Du wirst niemals zulassen, dass er endet.",
				"AName":"Bringer of War",
				"ADesc":"The character gains a +10 bonus to tests on the battlefield or during war, that are like leading a company, a siege or an orbital bombardment.",
				"ANameDe":"Bringer des Krieges",
				"ADescDe":"Der Charakter erhält einen Bonus von +10 auf Tests, die auf dem Schlachtfeld oder im Krieg durchgeführt werden, wie das Anführen einer Kompanie, eine Belagerung oder ein orbitaler Bombardement.",
				"stat":"S"
			},
			"thrill":{
				"Name":"Thrill-Seeker",
				"Desc":"Whenever it is more of a desire for adrenaline or lack of common sense. You always catch yourself in the heat of things. Astonishing friends and allies, while stupefying your enemies. This might lead you to your untimely death but where is the fun in worrying?",
				"NameDe":"Abenteurer",
				"DescDe":"Ob es der Wunsch nach Adrenalin oder ein Mangel an gesundem Menschenverstand ist – du gerätst immer mitten ins Geschehen. Du beeindruckst Freunde und Verbündete, während du deine Feinde verblüffst. Das könnte zu deinem frühen Tod führen, aber wo wäre der Spaß, wenn man sich Sorgen macht?",
				"AName":"Recklessness",
				"ADesc":"The character gains a +10 bonus to any non-combat test deemed reckless for a normal man. Be it jumping over a deadly ravine, jumping between fast moving cars or the like.",
				"ANameDe":"Rücksichtslosigkeit",
				"ADescDe":"Der Charakter erhält einen Bonus von +10 auf jeden nicht kämpferischen Test, der für einen normalen Menschen als waghalsig gilt, wie das Überspringen einer tödlichen Schlucht oder das Springen zwischen schnell fahrenden Fahrzeugen.",
				"stat":"S"
			},
			"destroyer":{
				"Name":"Destroyer",
				"Desc":"You are a juggernaut that cannot be stopped. A destroyer of ways, traditions and most importantly architecture. Once beautiful landscapes will be left burning, destroyed and filled with ash after you are done with them. No history will stand in your way.",
				"NameDe":"Zerstörer",
				"DescDe":"Du bist ein unaufhaltsamer Koloss, ein Zerstörer von Wegen, Traditionen und vor allem von Architektur. Einst schöne Landschaften werden nach dir in Flammen stehen, zerstört und von Asche bedeckt sein. Keine Geschichte wird dir im Weg stehen.",
				"AName":"Nothing Stands in My Way",
				"ADesc":"The character’s weapons gain the Vengeful (9) Quality whenever they are used against structures, doors or vehicles.",
				"ANameDe":"Nichts hält mich auf",
				"ADescDe":"Die Waffen des Charakters erhalten die Eigenschaft Rachsüchtig (9), wenn sie gegen Strukturen, Türen oder Fahrzeuge eingesetzt werden.",
				"stat":"S"
			}
			}
	},
	"vengeance":{
		"Name":"Vengeance",
		"Desc":"Vengeance burns within your heart, flaming afresh in your veins each time you wake from dreams of knives and murder.  You seek revenge against those who have wronged you. That desire gnaws at you, haunts your sleep, and shadows your every action. All must toil to live, but with each step you take, you ask yourself: “Is this a step closer to my revenge?” The need rides you, and it will do so until the day you stand above the bloody corpses of the last of your enemies. And what then? It matters not, now, for that day is far yet, and the path is long. If retribution consumes you entirely between now and then, making a ghost of the man you once were, then that is a price you are willing to pay.",
		"NameDe":"Rache",
		"DescDe":"Die Rache brennt in deinem Herzen, lodert frisch in deinen Adern, jedes Mal, wenn du aus Träumen von Messern und Mord erwachst. Du suchst Vergeltung gegen diejenigen, die dir Unrecht getan haben. Dieses Verlangen nagt an dir, verfolgt deinen Schlaf und überschattet jede deiner Handlungen. Jeder muss arbeiten, um zu leben, doch mit jedem Schritt, den du machst, fragst du dich: „Bringt mich dieser Schritt meiner Rache näher?“ Dieses Bedürfnis treibt dich an und wird es tun, bis zu dem Tag, an dem du über den blutigen Leichen deiner letzten Feinde stehst. Und was dann? Es spielt jetzt keine Rolle, denn dieser Tag liegt noch fern und der Weg ist lang. Wenn dich die Vergeltung bis dahin vollständig verzehrt und zu einem Schatten des Menschen macht, der du einst warst, dann ist das ein Preis, den du bereit bist zu zahlen.",
		"options":{
			"vengeful":{
				"Name":"Vengeful",
				"Desc":"Vengeance is pure. Who doesn’t want to repay those that inflicted pain onto them? Turning the other cheek doesn’t work but swinging back the chainsword does!",
				"NameDe":"Rachsüchtig",
				"DescDe":"Rache ist rein. Wer möchte nicht denen vergelten, die einem Schmerz zugefügt haben? Die andere Wange hinzuhalten, funktioniert nicht, aber mit der Kettensäge zurückzuschlagen, schon!",
				"AName":"This was your mistake",
				"ADesc":"Whenever the character is hit with an attack, he gains +10 bonus for his next round to attack the creature who attacked him.",
				"ANameDe":"Das war dein Fehler",
				"ADescDe":"Immer wenn der Charakter von einem Angriff getroffen wird, erhält er in der nächsten Runde +10 auf Angriffe gegen das Wesen, das ihn angegriffen hat.",
				"stat":"WS"
			},
			"vindictive":{
				"Name":"Vindictive",
				"Desc":"You would rather have a simple life. However, not everybody will grant it. Sometimes things go poorly and those that inflict suffering onto you must pay.",
				"NameDe":"Rechthaberisch",
				"DescDe":"Du würdest lieber ein einfaches Leben führen. Aber nicht jeder gewährt dir dieses Glück. Manchmal läuft es schlecht, und jene, die dir Leid zufügen, müssen dafür bezahlen.",
				"AName":"You’ve made a big mistake",
				"ADesc":"Once during the session, the character nominates a creature or person that wronged him, until the end of combat or social encounter, he gains +10 bonus to all tests against it.",
				"ANameDe":"Du hast einen großen Fehler gemacht",
				"ADescDe":"Einmal pro Sitzung kann der Charakter ein Wesen oder eine Person benennen, die ihm Unrecht getan hat. Bis zum Ende des Kampfes oder der sozialen Begegnung erhält er +10 auf alle Tests gegen diese.",
				"stat":"WS"
			},
			"unforgiving":{
				"Name":"Unforgiving",
				"Desc":"You have all the time in the world to plan your vengeance. It will come, sooner or later and when it does, it will dawn like a thunderhammer.",
				"NameDe":"Unvergebbar",
				"DescDe":"Du hast alle Zeit der Welt, deine Rache zu planen. Sie wird kommen, früher oder später, und wenn sie kommt, wird sie wie ein Donnerhammer einschlagen.",
				"AName":"There’s no way I’ve forgotten",
				"ADesc":"At the start of the session, the character selects a person or creature that wronged him in some way. He gets +10 bonus to tests against it until the end of the session.",
				"ANameDe":"Das vergesse ich nie",
				"ADescDe":"Zu Beginn der Sitzung wählt der Charakter eine Person oder ein Wesen aus, das ihm in irgendeiner Weise Unrecht getan hat. Er erhält bis zum Ende der Sitzung +10 auf Tests gegen dieses Ziel.",
				"stat":"WS"
			},
			"avenging":{
				"Name":"Avenging",
				"Desc":"You care little for personal revenge. You rather see your allies and friends prosper. You will never allow pain to be inflicted on them. When it does happen, you will avenge them.",
				"NameDe":"Vergeltend",
				"DescDe":"Dir liegt wenig an persönlicher Rache. Vielmehr möchtest du, dass deine Freunde und Verbündeten gedeihen. Du wirst nie zulassen, dass ihnen Schmerz zugefügt wird. Und wenn es doch geschieht, wirst du sie rächen.",
				"AName":"You’ll Pay for This",
				"ADesc":"The character gains +10 bonus to attack a target that attacked one of his allies.",
				"ANameDe":"Dafür wirst du bezahlen",
				"ADescDe":"Der Charakter erhält +10 auf Angriffe gegen ein Ziel, das einen seiner Verbündeten angegriffen hat.",
				"stat":"WS"
			}
		}
	},
	"renown":{
		"Name":"Renown",
		"Desc":"The Imperium is undying and uncaring, and every day countless billions toil and strive and die unknown, nameless, unremarked, and unthanked. But there are a rare few whose names echo through eternity in glory: Macharius, Solon, Haarlock, Land… And it is amongst their company you will one day be counted, or such is your most fervent desire. You have grand visions and the burning desire to make them real.  Through your actions and victories, you will ensure that your name will be spoken on the lips of the multitudes yet to be born in the millennia ahead. You will gather the best and brightest to your banner, secure the allegiance of Imperial potentates, and then achieve such great deeds that those who come after you will one day bow down to statues cast in your image.",
		"NameDe":"Ruhm",
		"DescDe":"Das Imperium ist ewig und gleichgültig, und jeden Tag schuften, kämpfen und sterben unzählige Milliarden, unbekannt, namenlos, unbeachtet und ohne Dank. Doch es gibt wenige, deren Namen in Ewigkeit in Ruhm nachhallen: Macharius, Solon, Haarlock, Land … Und du wirst eines Tages zu ihnen gehören – oder so lautet dein brennendster Wunsch. Du hast grandiose Visionen und den unbändigen Willen, sie Wirklichkeit werden zu lassen. Durch deine Taten und Siege wirst du dafür sorgen, dass dein Name auf den Lippen der Massen gepriesen wird, die in den kommenden Jahrtausenden geboren werden. Du wirst die Besten und Klügsten unter deinem Banner vereinen, die Loyalität imperialer Machthaber sichern und Taten vollbringen, die so großartig sind, dass diejenigen, die nach dir kommen, eines Tages vor Statuen niederknien werden, die in deinem Abbild gegossen wurden.",
		"options":{
			"famous":{
				"Name":"Famous",
				"Desc":"Everybody knows you, no matter how much they try to forget. You might have an easier way of dealing with those whom you gained trust. The rest will come.",
				"NameDe":"Berühmt",
				"DescDe":"Jeder kennt dich, egal wie sehr sie versuchen, dich zu vergessen. Es könnte dir leichter fallen, mit denen umzugehen, die dir bereits vertrauen. Der Rest wird folgen.",
				"AName":"It comes with the territory",
				"ADesc":"The character gains additional +5 bonus to his Peer Talents for each rank of that Talent.",
				"ANameDe":"Gehört zum Ruhm",
				"ADescDe":"Der Charakter erhält einen zusätzlichen +5-Bonus auf seine Peer-Talente für jeden Rang dieses Talents.",
				"stat":"BS"
			},
			"celebrity":{
				"Name":"Celebrity",
				"Desc":"You act as you are famous and influential. Maybe you are or maybe you aren’t, it doesn’t matter. You are convincing when it matters the most.",
				"NameDe":"Prominent",
				"DescDe":"Du trittst auf, als wärst du berühmt und einflussreich. Vielleicht bist du es, vielleicht auch nicht – das spielt keine Rolle. Du bist überzeugend, wenn es darauf ankommt.",
				"AName":"Don’t you know Who I am?",
				"ADesc":"The character gains +10 bonus to all social test where etiquette is required like a grand ball",
				"ANameDe":"Weißt du nicht, wer ich bin?",
				"ADescDe":"Der Charakter erhält einen +10-Bonus auf alle sozialen Tests, bei denen Etikette gefragt ist, wie etwa bei einem großen Ball.",
				"stat":"BS"
			},
			"hotshot":{
				"Name":"Hotshot",
				"Desc":"You always wanted to be the center of attention. No matter the reason, now you are and people gather to listen to what you have to say or to see your skills.",
				"NameDe":"Im Rampenlicht",
				"DescDe":"Du wolltest immer im Rampenlicht stehen. Aus welchem Grund auch immer, jetzt bist du es, und die Leute versammeln sich, um dir zuzuhören oder deine Fähigkeiten zu bewundern.",
				"AName":"Trick is the Hand",
				"ADesc":"The character gains +10 bonus to all test when trying to garner the attention of crowds and groups.",
				"ANameDe":"Die Kunst der Aufmerksamkeit",
				"ADescDe":"Der Charakter erhält einen +10-Bonus auf alle Tests, bei denen es darum geht, die Aufmerksamkeit von Menschenmengen oder Gruppen auf sich zu ziehen.",
				"stat":"BS"
			},
			"bigwig":{
				"Name":"Bigwig",
				"Desc":"It’s all a big game, nothing more. You know how it is played and you play it masterfully. People will believe that you are someone they need to respect.",
				"NameDe":"Hochstapler",
				"DescDe":"Das alles ist ein großes Spiel, nicht mehr. Du weißt, wie es gespielt wird, und spielst es meisterhaft. Die Leute werden glauben, dass du jemand bist, den sie respektieren müssen.",
				"AName":"I’m Important, Trust me",
				"ADesc":"The character gains +10 bonus to all Deceive tests when trying to lie about his wealth or status (or disguising himself as someone of higher status).",
				"ANameDe":"Vertrau mir, ich bin wichtig",
				"ADescDe":"Der Charakter erhält einen +10-Bonus auf alle Deceive-Tests, wenn er versucht, über seinen Reichtum oder Status zu lügen (oder sich als jemand mit höherem Status auszugeben).",
				"stat":"BS"
			}
		}
	},
	"endurance":{
		"Name":"Endurance",
		"Desc":"You seek to endure and, in enduring, grow stronger. You welcome opposition, risk, setbacks, injury, and pain as old friends—for these trials are but a stairway by which you will climb to greater heights. Endure, and you shall be made mighty in the God-Emperor’s eyes, and a power of the Imperium.  The virtuous welcome the storm, the Imperial Creed teaches, for its fury guides humanity upon the path to strength in body and soul. Just as a mighty tree sheds its weakest limbs before the tearing winds, and stands the greater for it, so too is humanity made sturdy by struggle and want. Others would put it more simply: the weak die and only the strong remain, and you choose to be the latter.",
		"NameDe":"Ausdauer",
		"DescDe":"Du strebst danach, zu überdauern und durch das Überdauern stärker zu werden. Du begrüßt Widerstände, Risiken, Rückschläge, Verletzungen und Schmerzen wie alte Freunde – denn diese Prüfungen sind nur eine Treppe, auf der du zu größeren Höhen emporsteigen wirst. Ertrage sie, und du wirst in den Augen des Gott-Imperators mächtig und eine Stütze des Imperiums. Die Tugendhaften begrüßen den Sturm, lehrt das Imperiale Credo, denn seine Wut führt die Menschheit auf den Pfad zu Stärke in Körper und Seele. So wie ein mächtiger Baum seine schwächsten Äste vor den reißenden Winden abwirft und dadurch umso stärker dasteht, so wird auch die Menschheit durch Kampf und Entbehrung widerstandsfähig. Andere würden es einfacher ausdrücken: Die Schwachen sterben, und nur die Starken bleiben – und du wählst, einer der Letzteren zu sein.",
		"options":{
			"tenacious":{
				"Name":"Tenacious",
				"Desc":"You will never back down. Nobody will stop you in your tracks. No matter how much they try, you will stand up and fight!",
				"NameDe":"Zäh",
				"DescDe":"Du wirst niemals zurückweichen. Niemand wird dich aufhalten. Egal, wie sehr sie es versuchen, du wirst aufstehen und kämpfen!",
				"AName":"Never Stand Down",
				"ADesc":"The character, once per session, can ignore the effects of accumulated Fatigue. This lasts for the duration of combat.",
				"ANameDe":"Steh immer wieder auf",
				"ADescDe":"Der Charakter kann einmal pro Sitzung die Auswirkungen von angesammelter Erschöpfung ignorieren. Dies gilt für die Dauer des Kampfes.",
				"stat":"T"
			},
			"stubborn":{
				"Name":"Stubborn",
				"Desc":"You might be stubborn as a mule but you are far from being dumb as one. You know that failure is just a part of trying and success is granted for those that try.",
				"NameDe":"Stur",
				"DescDe":"Du magst stur wie ein Maultier sein, aber du bist weit davon entfernt, so dumm wie eines zu sein. Du weißt, dass Scheitern nur ein Teil des Versuchs ist, und Erfolg ist denen vorbehalten, die es erneut versuchen.",
				"AName":"If you fail, try again",
				"ADesc":"When the character tries again on the same test (not reroll), he reduces penalties for trying again by 10.",
				"ANameDe":"Wenn du scheiterst, versuche es erneut",
				"ADescDe":"Wenn der Charakter denselben Test noch einmal versucht (kein Wiederholungswurf), werden die Strafmodifikatoren für den erneuten Versuch um 10 reduziert.",
				"stat":"T"
			},
			"tough":{
				"Name":"Tough",
				"Desc":"You are ready to stand in the way of the enemies. Be it for your friends, allies or something more materialistic. You will stand and you will not fall so easily.",
				"NameDe":"Robust",
				"DescDe":"Du bist bereit, dich den Feinden in den Weg zu stellen. Sei es für deine Freunde, Verbündeten oder etwas Materielles. Du wirst standhalten und nicht so leicht fallen.",
				"AName":"I can take it",
				"ADesc":"When the character is Healthy, the first time he is damaged in the session, he reduces the damage by 2.",
				"ANameDe":"Ich halte das aus",
				"ADescDe":"Solange der Charakter Gesund ist, reduziert er den Schaden des ersten Treffers, den er in einer Sitzung erleidet, um 2.",
				"stat":"T"
			},
			"gritty":{
				"Name":"Gritty",
				"Desc":"Fear might be irrational to some folk, while others see it as rational reaction to the horrors. You see it as a notification. The horror must be taken out, before others die to it.",
				"NameDe":"Hart im Nehmen",
				"DescDe":"Angst mag für manche irrational sein, während andere sie als rationale Reaktion auf Schrecken sehen. Du betrachtest sie als Benachrichtigung: Das Grauen muss beseitigt werden, bevor andere daran sterben",
				"AName":"Unphased",
				"ADesc":"When the character succeeds on a Fear Test, he is granted +10 bonus to his next attack against the target of the fear.",
				"ANameDe":"Unerschütterlich ",
				"ADescDe":"Wenn der Charakter einen Angsttest besteht, erhält er einen Bonus von +10 auf seinen nächsten Angriff gegen das Ziel der Angst.",
				"stat":"T"
			}
		}
	},
	"pride":{
		"Name":"Pride",
		"Desc":"Above all else, you want respect—the admiration of allies and the grudging esteem of foes and will countenance no insult to your honor to go unchallenged. You suffer none to be so ignorant as to deride you as unworthy of your name, unfit for your legacy, or lacking in talent. When you seek to prove yourself, it is for the sake of your own high standards, or perhaps out of frustration that the mighty do not yet recognize your true worth. Regardless, it is for you to lead and demonstrate your worth by your actions and your bearing, and any that doubt or disparage you had best have the steel to back up their words.",
		"NameDe":"Stolz",
		"DescDe":"Über allem anderen steht dein Wunsch nach Respekt – die Bewunderung von Verbündeten und die widerwillige Achtung von Feinden. Kein Angriff auf deine Ehre bleibt ungeahndet. Du erträgst es nicht, von jemandem als unwürdig deines Namens, ungeeignet für dein Erbe oder ohne Talent verspottet zu werden. Wenn du dich beweisen willst, dann geschieht dies entweder, um deinen eigenen hohen Ansprüchen zu genügen, oder aus Frustration darüber, dass die Mächtigen deinen wahren Wert noch nicht erkannt haben. In jedem Fall liegt es an dir, durch deine Taten und dein Auftreten zu führen und deinen Wert zu demonstrieren – und diejenigen, die an dir zweifeln oder dich herabsetzen, sollten besser bereit sein, ihre Worte mit Stahl zu verteidigen.",
		"options":{
			"heirloom":{
				"Name":"Heirloom Holder",
				"Desc":"Your great-great-great-great-grandfather was a hero. Whatever he did, this heirloom stayed in your family for generations and it is now passed to you. Nothing can truly replace it.",
				"NameDe":"Erbe eines Familienschatzes",
				"DescDe":"Dein Ur-Ur-Ur-Ur-Großvater war ein Held. Was auch immer er getan hat, dieses Erbstück blieb über Generationen in deiner Familie und wurde nun an dich weitergegeben. Nichts kann es wirklich ersetzen.",
				"AName":"Belonged to an Ancestor",
				"ADesc":"The character starts with one item that is up to Extremely Rare and Best Quality or is a Common Quality Near Unique item. The character gains an additional +10 bonus to use the item, however, if it is destroyed, he gains 10 Insanity points.",
				"ANameDe":"Gehörte einem Vorfahren",
				"ADescDe":"Der Charakter beginnt mit einem Gegenstand bis zu Extrem selten und in bester Qualität oder einem gewöhnlichen Qualitätsgegenstand, der nahezu einzigartig ist. Der Charakter erhält einen zusätzlichen +10-Bonus bei der Verwendung des Gegenstands. Wird dieser zerstört, erhält er 10 Wahnsinnspunkte.",
				"stat":"Fel"
			},
			"leadexamp":{
				"Name":"Lead by Example",
				"Desc":"You are a leader of the people. You never lead from the behind, always in the front. Leading people with a shout and sword.",
				"NameDe":"Anführen durch Vorbild",
				"DescDe":"Du bist ein Anführer des Volkes. Du führst niemals aus der sicheren Entfernung, sondern immer an der Spitze, mit Ruf und Klinge.",
				"AName":"Inspirational Soul",
				"ADesc":"Whenever the character uses the Command’s special use Inspire, he increases the bonus by double his Fellowship Bonus to total of +20. However, he must be at the forefront of action.",
				"ANameDe":"Inspirierende Seele ",
				"ADescDe":"Immer wenn der Charakter die spezielle Verwendung Inspiration des Befehls-Skills einsetzt, erhöht sich der Bonus um das Doppelte seines Fellowship-Bonus auf insgesamt +20. Allerdings muss er an vorderster Front stehen.",
				"stat":"Fel"
			},
			"speechwright":{
				"Name":"Speechwright",
				"Desc":"You are able to craft speeches like no other. People come just to listen to your words and how they play in their minds, like little minstrels.",
				"NameDe":"Redekünstler",
				"DescDe":"Du kannst Reden wie kein anderer formulieren. Menschen kommen, um deinen Worten zu lauschen, die in ihren Köpfen wie kleine Minnesänger widerhallen.",
				"AName":"Improvise Master",
				"ADesc":"The character can switch dice to get a better result when making tests for speeches, oratory or similar talking to a group of at least 10 people.",
				"ANameDe":"Meister der Improvisation",
				"ADescDe":"Der Charakter kann Würfel für ein besseres Ergebnis tauschen, wenn er Tests für Reden, Vorträge oder ähnliche Gruppenansprachen von mindestens 10 Personen ablegt.",
				"stat":"Fel"
			},
			"honorful":{
				"Name":"Honorful",
				"Desc":"Honor is the most important thing in your life. You will never give it up and when you put it on the table, you will fulfill your duty or die trying.",
				"NameDe":"Ehrenvoll",
				"DescDe":"Ehre ist das Wichtigste in deinem Leben. Du wirst sie niemals aufgeben, und wenn du sie aufs Spiel setzt, wirst du deine Pflicht erfüllen oder im Versuch sterben.",
				"AName":"You have my Word",
				"ADesc":"The character gains +10 bonus to social test, when trying to convince someone by putting his honor on the line.",
				"ANameDe":"Ihr habt mein Wort",
				"ADescDe":"Der Charakter erhält einen +10-Bonus auf soziale Tests, wenn er jemanden überzeugen will, indem er seine Ehre aufs Spiel setzt.",
				"stat":"Fel"
			}
		}
	},
	"devotion":{
		"Name":"Devotion",
		"Desc":"You go into the unknown not for yourself, but for something greater. You believe, and whether your belief is a religious one, a matter of personal loyalty, an absolute dedication to duty, or something else entirely, it gives you the strength to persevere when all seems lost. You will not rest, nor will you falter, while your faith remains intact. Others may question your devotion, unable to understand how someone could cleave so tightly to something as distant and abstract as duty, loyalty, honour, or faith, when other paths grant so much more...but you know better. You will not be swayed by those who comprehend nothing beyond themselves and their own ambitions.",
		"NameDe":"Hingabe",
		"DescDe":"Du wagst dich ins Unbekannte, nicht für dich selbst, sondern für etwas Größeres. Du glaubst – und ob dieser Glaube religiöser Natur ist, einer persönlichen Loyalität entspringt, absoluter Pflicht gewidmet ist oder etwas völlig anderes darstellt, er gibt dir die Kraft, durchzuhalten, wenn alles verloren scheint. Du wirst weder ruhen noch schwanken, solange dein Glaube ungebrochen bleibt. Andere mögen deine Hingabe hinterfragen, unfähig zu begreifen, wie jemand sich so fest an etwas so Entferntes und Abstraktes wie Pflicht, Loyalität, Ehre oder Glauben binden kann, wenn andere Wege so viel mehr versprechen... aber du weißt es besser. Du wirst dich nicht von jenen beeinflussen lassen, die nichts jenseits von sich selbst und ihren eigenen Ambitionen verstehen.",
		"options":{
			"faithful":{
				"Name":"Faithful",
				"Desc":"You are an example of a true God-Emperor worshiper or maybe the Omnissiah. Your devotion cannot be questioned.",
				"NameDe":"Gläubig",
				"DescDe":"Du bist ein wahrhaftiges Beispiel eines Anhängers des Gottimperators oder vielleicht des Omnissiah. Deine Hingabe ist unantastbar.",
				"AName":"Pious",
				"ADesc":"The character gains +10 bonus to all social tests made against faithful Imperials.",
				"ANameDe":"Fromm",
				"ADescDe":"Der Charakter erhält +10 auf alle sozialen Tests gegenüber gläubigen Imperialen.",
				"stat":"WP"
			},
			"zealous":{
				"Name":"Zealous",
				"Desc":"You are ready to make the ultimate sacrifice for the God-Emperor. Until that day comes, his enemies are still breathing and it is your duty to end their miserable lives.",
				"NameDe":"Eifernd",
				"DescDe":"Du bist bereit, das ultimative Opfer für den Gottimperator zu bringen. Bis zu diesem Tag gibt es noch Feinde, die atmen – und es ist deine Pflicht, ihr elendes Leben zu beenden.",
				"AName":"Death to Heretics!",
				"ADesc":"The character increases damage done to those he has Hatred Talent for by 2.",
				"ANameDe":"Tod den Ketzern!",
				"ADescDe":"Der Charakter erhöht den Schaden gegen Ziele, für die er das Talent Hass (Hatred) besitzt, um 2.",
				"stat":"WP"
			},
			"unwavering":{
				"Name":"Unwavering",
				"Desc":"You are your own man. No heretic or Xenos can tamper with your will, the God-Emperor as the witness.",
				"NameDe":"Unerschütterlich",
				"DescDe":"Du bist dein eigener Herr. Kein Ketzer oder Xenos kann deinen Willen beugen, mit dem Gottimperator als deinem Zeugen.",
				"AName":"My Mind is My Temple",
				"ADesc":"The character gains +10 bonus to all Opposed Willpower tests.",
				"ANameDe":"Mein Geist ist mein Tempel",
				"ADescDe":"Der Charakter erhält +10 auf alle Willenskraft-Tests, die als Opposed Tests durchgeführt werden.",
				"stat":"WP"
			},
			"loyal":{
				"Name":"Loyal",
				"Desc":"You are utmost loyal to your allies, friends and family, they will always trust you, because you will never betray them.",
				"NameDe":"Loyal",
				"DescDe":"Du bist deinen Verbündeten, Freunden und deiner Familie zutiefst treu, und sie vertrauen dir, weil du sie niemals verraten wirst.",
				"AName":"You have my Loyalty",
				"ADesc":"The character gains +10 bonus to all social tests made against men under him.",
				"ANameDe":"Du hast meine Loyalität",
				"ADescDe":"Der Charakter erhält +10 auf alle sozialen Tests gegenüber Truppen, die unter seinem Kommando stehen.",
				"stat":"WP"
			}
		}
	},
	"secrets":{
		"Name":"Secrets",
		"Desc":"There is no worth in knowledge if everyone possesses it; if knowledge is commonplace, then it bestows no power upon its keepers. You understand this better than most, because you possess much knowledge. It is a tool to greater power, a means of fulfilling other ambitions, bringing ruin to enemies and elevating allies, and in all ways an advantage over those less knowledgeable. You gather information to wield in these aways, bolstering your arsenal of insights with every passing day and every new encounter. Few are those who think to cross you, for you are knowledgeable and willing to use that to your advantage in all things.",
		"NameDe":"Geheimnisse",
		"DescDe":"Wissen hat keinen Wert, wenn jeder es besitzt; wenn Wissen alltäglich ist, verleiht es seinen Hütern keine Macht. Du verstehst dies besser als die meisten, denn du besitzt viel Wissen. Es ist ein Werkzeug zu größerer Macht, ein Mittel, um andere Ambitionen zu erfüllen, Feinde zu ruinieren und Verbündete zu erheben, und in jeder Hinsicht ein Vorteil gegenüber jenen, die weniger wissen. Du sammelst Informationen, um sie auf diese Weise zu nutzen und dein Arsenal an Einsichten mit jedem Tag und jeder neuen Begegnung zu stärken. Wenige wagen es, dich zu hintergehen, denn du bist wissend und bereit, dieses Wissen in allen Dingen zu deinem Vorteil einzusetzen.",
		"options":{
			"enigmatic":{
				"Name":"Enigmatic",
				"Desc":"You aren’t secretive. You just don’t tell the whole truth. Leave out some, make people think one thing, while you are doing or thinking another.",
				"NameDe":"Rätselhaft",
				"DescDe":"Du bist nicht unbedingt geheimniskrämerisch, du erzählst nur nicht die ganze Wahrheit. Du lässt einiges weg, führst die Leute in eine bestimmte Richtung, während du ganz andere Dinge tust oder denkst.",
				"AName":"Not fully Understood",
				"ADesc":"All creatures trying to understand the characters motives and actions are made with -20 penalty.",
				"ANameDe":"Nicht leicht zu durchschauen",
				"ADescDe":"Alle Wesen, die versuchen, die Absichten oder Motive des Charakters zu verstehen, erhalten einen Malus von -20 auf ihre Tests.",
				"stat":"Per"
			},
			"cryptic":{
				"Name":"Cryptic",
				"Desc":"No matter how cryptic things are, the words have the utmost meaning every time they are spoken. Between them, the truth lies.",
				"NameDe":"Kryptisch",
				"DescDe":"Egal wie verschlüsselt deine Worte erscheinen, sie haben stets eine tiefere Bedeutung. Zwischen den Zeilen verbirgt sich die Wahrheit.",
				"AName":"Hidden between Word",
				"ADesc":"The character gains +10 bonus to decipher codes or find hidden meanings.",
				"ANameDe":"Zwischen den Worten verborgen",
				"ADescDe":"Der Charakter erhält einen Bonus von +10 auf Tests, um Codes zu entschlüsseln oder versteckte Bedeutungen zu erkennen.",
				"stat":"Per"
			},
			"secretive":{
				"Name":"Secretive",
				"Desc":"You keep to yourself and never real your true intentions. It better to lie than to open yourself to disappointment.",
				"NameDe":"Geheimniskrämerisch",
				"DescDe":"Du behältst deine Pläne für dich und offenbarst deine wahren Absichten nie. Es ist besser, zu lügen, als sich Enttäuschungen auszusetzen.",
				"AName":"Unwilling to Tell",
				"ADesc":"The character gains +10 bonus to Deceive test, when questioned about the truth and +10 bonus to Opposed tests against Interrogation.",
				"ANameDe":"Verschlossen",
				"ADescDe":"Der Charakter erhält +10 auf Täuschungs-Tests, wenn er nach der Wahrheit befragt wird, und +10 auf Oppositionswürfe gegen Verhöre.",
				"stat":"Per"
			},
			"watchful":{
				"Name":"Watchful",
				"Desc":"People will keep their secrets, you would rather they don’t play games. Especially with you. They hide in the shadows, listening to every word you say.",
				"NameDe":"Wachsam",
				"DescDe":"Die Leute mögen ihre Geheimnisse haben, doch du bevorzugst es, wenn sie keine Spielchen spielen – besonders nicht mit dir. Du bist wachsam und bemerkst, wenn jemand in den Schatten lauert und deinen Worten lauscht.",
				"AName":"I can see you",
				"ADesc":"The character can switch dice to get a better result on an Awareness  test.",
				"ANameDe":"Ich sehe dich",
				"ADescDe":"Der Charakter kann Würfelwerte auf Aufmerksamkeitstests tauschen, um ein besseres Ergebnis zu erzielen.",
				"stat":"Per"
			}
		}
	},
	"fortune":{
		"Name":"Fortune",
		"Desc":"You seek wealth beyond measure, countless Thrones with which to purchase the fulfilment of your every desire. You understand that all things begin with the clink, clink, clink of worn Throne coins dropped upon a finely crafted counter.  That is the sound that carries into the hearts of men and compels them to your will. Perhaps your ultimate goals are admirable, perhaps they are despicable—wealth cares not, and wealth causes others to care not. So it is that everything you have ever wanted, everything you could ever need, all comes down to Thrones. You must have them and the great wealth they represent. That is your quest, and you can only hope that you are still the same person at the end of it, having evaded the myriad ways in which single-minded fortune seeking twists the mind and the soul.",
		"NameDe":"Reichtum",
		"DescDe":"Du strebst nach Reichtum jenseits aller Vorstellungen, unzähligen Thronen, mit denen du all deine Wünsche erfüllen kannst. Du verstehst, dass alles mit dem klirrenden Klang abgenutzter Thronmünzen beginnt, die auf einen fein gearbeiteten Tresen fallen. Dieser Klang hallt in die Herzen der Menschen und zwingt sie, deinem Willen zu folgen. Vielleicht sind deine ultimativen Ziele bewundernswert, vielleicht abscheulich – Reichtum kümmert sich nicht darum, und Reichtum sorgt dafür, dass es auch andere nicht tut. So ist alles, was du je wolltest, alles, was du jemals brauchen könntest, auf Throne zurückzuführen. Du musst sie haben, und den großen Wohlstand, den sie repräsentieren. Das ist deine Suche, und du kannst nur hoffen, dass du am Ende immer noch dieselbe Person bist, die den vielen Wegen entgangen ist, auf denen ein zielgerichtetes Streben nach Reichtum Geist und Seele verdreht.",
		"options":{
			"fortuitous":{
				"Name":"Fortuitous",
				"Desc":"You let Fate decide your future. Are you going to be a winner? Or a loser? Are you gonna struck big? Or just struck out? You never question Fate.",
				"NameDe":"Vom Schicksal Begünstigt",
				"DescDe":"Du überlässt dem Schicksal deinen Weg. Wirst du gewinnen oder verlieren? Einen großen Treffer landen oder kläglich scheitern? Du stellst das Schicksal nie in Frage.",
				"AName":"Dice? Why not Coins?",
				"ADesc":"The character once per session can spend a Fate Point before making a test, heads or tails, he chooses. If it lands on his choice, he succeeds with DoS equal to his tested Characteristic Bonus. If it doesn’t, he fails with DoF equal half of his tested Characteristic Bonus, rounded down.",
				"ANameDe":"Münze oder Würfel?",
				"ADescDe":"Der Charakter kann einmal pro Sitzung einen Schicksalspunkt ausgeben, bevor er eine Probe macht, und sich für Kopf oder Zahl entscheiden. Fällt die Münze auf seine Wahl, gelingt die Probe mit Erfolgsgraden in Höhe seines getesteten Attributbonus. Wenn nicht, misslingt die Probe mit Misserfolgsgraden in Höhe der Hälfte seines getesteten Attributbonus (abgerundet)",
				"stat":"Ag"
			},
			"deeppockets":{
				"Name":"Deep Pockets",
				"Desc":"Whatever others might think about buying yourself to the top, you don’t care about them. You got what you need in your pockets and all you need is to grease some people up.",
				"NameDe":"Tief in die Tasche greifen",
				"DescDe":"Was andere über „Sich den Weg nach oben kaufen“ denken, ist dir egal. Du hast, was du brauchst, und mit ein bisschen Schmiergeld läuft alles besser.",
				"AName":"Why won’t you work for me?",
				"ADesc":"The character gains +10 bonus whenever he is using Influence or any other form of bribery to get what he wants.",
				"ANameDe":"Warum nicht für mich arbeiten?",
				"ADescDe":"Der Charakter erhält +10 auf alle Proben, bei denen er Einfluss oder Bestechung einsetzt, um seine Ziele zu erreichen.",
				"stat":"Ag"
			},
			"greedy":{
				"Name":"Greedy",
				"Desc":"Doesn’t matter what people’s opinions are, the most important thing is money. Money makes people talk. Makes dreams happen. Makes the Imperium run. You want it and there’s always not enough.",
				"NameDe":"Gierig",
				"DescDe":"Es spielt keine Rolle, was die Meinung anderer ist. Das Wichtigste ist Geld. Geld bringt Leute zum Reden. Erfüllt Träume. Hält das Imperium am Laufen. Du willst mehr davon, und es ist nie genug.",
				"AName":"There’s always some to go",
				"ADesc":"The character can make a Challenging (+0) Commerce test at the end of an Endeavour. For each DoS, he finds additional 10 Achievement Points.",
				"ANameDe":"Es gibt immer noch etwas zu holen.",
				"ADescDe":"Der Charakter kann am Ende eines Unterfangens eine Herausfordernde (+0) Handelsprobe ablegen. Für jeden Erfolgsgrad erhält er zusätzliche 10 Errungenschaftspunkte.",
				"stat":"Ag"
			},
			"charitable":{
				"Name":"Charitable",
				"Desc":"Money doesn’t buy happiness. You felt it yourself. Those fortunate are those that have friends and family close. You will always be by their side, since losing them is worse than being poor.",
				"NameDe":"Großzügig",
				"DescDe":"Geld allein macht nicht glücklich, das hast du selbst erlebt. Glücklich sind diejenigen, die Freunde und Familie an ihrer Seite haben. Du wirst immer für sie da sein, denn sie zu verlieren wäre schlimmer, als alles zu verlieren.",
				"AName":"Here you go, friend",
				"ADesc":"Once per session, the character can use his Fate Point to reroll a test an ally made. This test should be the original one and can’t be rerolled with more Fate Points or abilities.",
				"ANameDe":"Hier, mein Freund.",
				"ADescDe":"Einmal pro Sitzung kann der Charakter einen Schicksalspunkt einsetzen, um eine Probe eines Verbündeten erneut würfeln zu lassen. Diese Probe muss dieselbe wie die ursprüngliche sein und kann nicht mit weiteren Schicksalspunkten oder Fähigkeiten erneut wiederholt werden.",
				"stat":"Ag"
			}
		}
	},
	"knowledge":{
		"Name":"Knowledge",
		"Desc":"Lore is all-important to you; it is your purpose and your reason, it is your goal and your desire, and it is the one thing above all else that you aspire to possess. There is no ulterior motive to your drive to understand, no hidden purpose to give that curiosity a focus. You simply crave knowledge with every fibre of your being, and you cannot stand the idea of not knowing or not understanding something. Though new insights and revelations cannot hope to sate this bottomless surge, new understanding brings with it new power and new means with which to find yet more knowledge. Each answer leads to still more questions, and every new vista promises a variety of secrets yet to be uncovered.",
		"NameDe":"Wissen",
		"DescDe":"Wissen ist für dich von höchster Bedeutung; es ist dein Zweck und deine Bestimmung, dein Ziel und dein Wunsch, und es ist das eine, wonach du über alles hinaus strebst. Es gibt kein verstecktes Motiv hinter deinem Drang zu verstehen, keinen verborgenen Zweck, der diese Neugier lenkt. Du strebst einfach mit jeder Faser deines Wesens nach Wissen und kannst den Gedanken nicht ertragen, etwas nicht zu wissen oder nicht zu verstehen. Obwohl neue Einsichten und Offenbarungen dieses unersättliche Verlangen nicht stillen können, bringen sie dir neue Macht und neue Mittel, um noch mehr Wissen zu erlangen. Jede Antwort führt zu weiteren Fragen, und jede neue Entdeckung verspricht eine Vielzahl von Geheimnissen, die es noch zu enthüllen gilt.",
		"options":{
			"seeker":{
				"Name":"Seeker",
				"Desc":"Wherever it might lead you, you never stop the search for knowledge. It is out there, no matter where. You will find it.",
				"NameDe":"Suchender",
				"DescDe":"Wohin auch immer die Suche dich führt, du hörst nie auf, nach Wissen zu streben. Es ist irgendwo da draußen, und du wirst es finden.",
				"AName":"Truth is out there",
				"ADesc":"The character gains +10 bonus to Scrutiny tests when using Augurs of any kind or trying to see through lies.",
				"ANameDe":"Die Wahrheit ist da draußen",
				"ADescDe":"Der Charakter erhält +10 auf Nachforschen-Tests, wenn er Auguren jeglicher Art nutzt oder versucht, Lügen zu durchschauen.",
				"stat":"Int"
			},
			"analyzer":{
				"Name":"Analyzer",
				"Desc":"You are keen on finding new knowledge or technology. It is like an obsession, to find what it does and how it can be used. Even if it might spell your doom later.",
				"NameDe":"Analytiker",
				"DescDe":"Du bist besessen davon, neues Wissen oder Technologien zu entdecken. Es ist eine Obsession, herauszufinden, was sie tun und wie sie genutzt werden können, auch wenn es später dein Verderben sein könnte.",
				"AName":"Truth is inside",
				"ADesc":"The character gains +10 bonus when doing research of newly acquired items, found ruins, knowledge or similar.",
				"ANameDe":"Die Wahrheit liegt im Detail",
				"ADescDe":"Der Charakter erhält +10 auf Tests zur Untersuchung neu entdeckter Gegenstände, Ruinen, Wissen oder Ähnlichem.",
				"stat":"Int"
			},
			"artisan":{
				"Name":"Artisan",
				"Desc":"Many people seek knowledge in ancient ruins. You know you can use what you gained to create new, that will last for millenia. People will remember you most of all.",
				"NameDe":"Kunsthandwerker",
				"DescDe":"Viele suchen Wissen in alten Ruinen. Du weißt, dass du das Erlernte nutzen kannst, um etwas Neues zu erschaffen, das Jahrtausende überdauert. Die Menschen werden sich an dich erinnern.",
				"AName":"Knowledge is by making",
				"ADesc":"The character gains +10 bonus to all Trade tests.",
				"ANameDe":"Wissen entsteht durch Handwerk",
				"ADescDe":"Der Charakter erhält +10 auf alle Handwerk-Tests",
				"stat":"Int"
			},
			"hoarder":{
				"Name":"Hoarder",
				"Desc":"You hoard all knowledge and information to yourself, and use it in the right opportune time. Trust is something you will never learn.",
				"NameDe":"Horter",
				"DescDe":"Du sammelst Wissen und Informationen für dich allein und nutzt sie zur richtigen Zeit. Vertrauen ist etwas, das du nie lernen wirst.",
				"AName":"Knowledge is power",
				"ADesc":"The character gains +10 bonus to all social tests against targets he has “hook” on (either by having some dark secret of theirs or similar).",
				"ANameDe":"Wissen ist Macht",
				"ADescDe":"Der Charakter erhält +10 auf alle sozialen Tests gegen Ziele, über die er einen „Hebel“ (z. B. ein dunkles Geheimnis) besitzt.",
				"stat":"Int"
			}
		}
	}
}