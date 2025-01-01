let currentLanguage = 'en';
let currentMenu = 0;

	  
function setLanguage(language) {
	currentLanguage = language;
	document.querySelector('h1').innerText = currentLanguage === 'en' 
	  ? 'Warhammer 40k Character Builder' 
	  : 'Warhammer 40k Charaktergenerator';

	refresh();

}

function formatDataForExcel(data) {
    let output = [];

    // Add basic details
    output.push("language\tCareer\tHomeworld\tBackground\tRole\tBirthright\tLure\tTrial\tMotivation");
    output.push(currentLanguage+"\t"+data.Career+"\t"+data.Homeworld+"\t"+data.Background
		+"\t"+data.Role+"\t"+data.Birthright+"\t"+data.Lure+"\t"+data.Trial+"\t"+data.Motivation);
	output.push("\t\t\t\t\t"+data.BRDetail+"\t"+data.LureDetail+"\t"+data.TrialDetail+
		"\t"+data.MotivationDetail);
	output.push("");
	output.push("");
	
	let statsTab = [];
	statsTab.push(["Aptitudes","","Stats"])
	for(let i = 0; i < 10; i++)
	{
		let subArr = [];
		if(i < data.Aptitudes.length){
			subArr.push(data.Aptitudes[i].value);
			subArr.push(data.Aptitudes[i].amount.toString());
		}else{
			subArr.push("");
			subArr.push("");
		}
		
		if(i < data.Stats.length){
			subArr.push(data.Stats[i].value);
			subArr.push(data.Stats[i].base);
			subArr.push(data.Stats[i].brBonus);
			subArr.push(data.Stats[i].moBonus);
			subArr.push(data.Stats[i].rolledValues);
		}else{
			for (let x = 0; i < 5; i++) {
				subArr.push("");
			}
		}
		subArr.push("");
		if(i===0){
			subArr.push(data.Fate);
		}if(i===1){
			subArr.push(data.HP);
		}if(i===2){
			subArr.push(data.Insanity);
		}if(i===3){
			subArr.push(data.Corruption);
		}
		
		statsTab.push(subArr);
	}
	
	statsTab.forEach(item => {
		output.push(item.join("\t"));
	});
	
	output.push("");
	output.push("");
	
	const maxValue = Math.max(data.Talents.length, data.Traits.length, data.Skills.length, 
		data.Gear.length, data.Implants.length, data.Mutations.length, data.Malignancies.length);

	statsTab = [];
	
	for(let i = 0; i < maxValue; i++)
	{
		let subArr = [];
		if(i < data.Talents.length){
			subArr.push(data.Talents[i].value.id);
			subArr.push(data.Talents[i].value.grp_id);
			console.log(data.Talents[i]);
			subArr.push(data.Talents[i].amount.toString());
		}else{
			for (let x = 0; x < 3; x++) {
				subArr.push("");
			}
		}
		
		subArr.push("");
		
		
		if(i < data.Traits.length){
			subArr.push(data.Traits[i].id);
			subArr.push("");
		}else{
			for (let x = 0; x < 2; x++) {
				subArr.push("");
			}
		}
		
		subArr.push("");
		
		if(i < data.Skills.length){
			subArr.push(data.Skills[i].value.id);
			subArr.push(data.Skills[i].value.grp_id);
			subArr.push(data.Skills[i].amount);
		}else{
			for (let x = 0; x < 3; x++) {
				subArr.push("");
			}
		}
		
		subArr.push("");
		
		if(i < data.Gear.length){
			subArr.push(data.Gear[i].value.id);
			subArr.push(data.Gear[i].value.grp_id);
			subArr.push(data.Gear[i].value.qty);
		}else{
			for (let x = 0; x < 3; x++) {
				subArr.push("");
			}
		}
		subArr.push("");
		
		if(i < data.Implants.length){
			subArr.push(data.Implants[i].id);
			subArr.push(data.Implants[i].quality);
		}else{
			for (let x = 0; x < 2; x++) {
				subArr.push("");
			}
		}
		subArr.push("");
		
		if(i < data.Mutations.length){
			subArr.push(data.Mutations[i]);
		}else{
			for (let x = 0; x < 1; x++) {
				subArr.push("");
			}
		}
		subArr.push("");
		
		if(i < data.Malignancies.length){
			subArr.push(data.Malignancies[i]);
		}else{
			for (let x = 0; x < 1; x++) {
				subArr.push("");
			}
		}
			
		
		statsTab.push(subArr);
	}

	statsTab.forEach(item => {
		output.push(item.join("\t"));
	});



    // Join output with newlines
    return output.join("\n");
}



function refresh(){
	if(currentMenu === 2)
	{
		populateHomeworlds();
	}else if(currentMenu === 1)
	{
		populateCareers();
	}else if(currentMenu === 3)
	{
		populateBackgrounds()
	}else if(currentMenu === 4)
	{
		populateRoles();
	}else if(currentMenu === 5)
	{
		populateBirthrights();
	}else if(currentMenu === 6)
	{
		populateLures();
	}else if(currentMenu === 7)
	{
		populateTrials()
	}else if(currentMenu === 8)
	{
		populateMotivations()
	}else{
		clearContentDivs();
	}
}

function clearContentDivs(){
	document.getElementById('tiles').innerHTML = '';
	document.getElementById('tiles2').innerHTML = '';
	document.getElementById('charChoice').innerHTML = '';	
	scroll(0,0);
}

function start(lang)
{
	setLanguage(lang);
	populateCareers();
}

function parseSkills(pSkills){
	if (!Array.isArray(pSkills)) {
        throw new Error("The 'pSkills' parameter must be an array.");
    }

	var result = [];
	
	pSkills.forEach((item,index) => {
		if(!Array.isArray(item)){
			throw new Error(`Item at index ${index} is not an array.`);
		}
		else{
			const or = ((currentLanguage==='de') ? ' oder ' : ' <or> ');
			const res = splitAndTranslateSkills(item[0],item[1]);
			result.push(res.join(or));
		}
	});
	
	if(result.length === 0)
	{
		result.push('---');
	}
	return result;
}

function splitAndTranslateSkills(pSkills, pGroups)
{
	const skillsOr = pSkills.split('|');
	const pGroupsOr = pGroups.split('@@');
	var result = [];
	
	for (let i = 0; i < skillsOr.length; i++) 
	{
		result.push('<b class="skill">'+translateSkill(skillsOr[i])+
			'</b>'+translateGroups(pGroupsOr[i]));
	}
	return result;
}

function translateSkill(skillkey){
	const currSkill = skills[skillkey];
	if (!currSkill) {
            return `Unknown key: ${skillkey}`;
        }
	return ((currentLanguage==='de') ? currSkill.NameDe : currSkill.Name);
}

function translateGroups(sGroups){
	var res = '';
	
	if(!(sGroups.length === 0)){
		const groupsArray = sGroups.split('|');
		return ' ('+groupsArray.map(translateGroup).join(((currentLanguage==='de') ? ' oder ' : ' or '))+')';

	}
	return res;
}



function translateGroup(sGroup){
	
	var res = groups[sGroup.replace(/@.*/, '')];
	if (!res) {
		return `Unknown key: ${sGroup}`;
	}
	return ((currentLanguage === 'de') ? res.NameDe : res.Name);
}

function translateGear(pGear)
{
	const gearOr = pGear[0].split('|');
	const pGroupsOr = pGear[1].split('@@');
	const indivQty = (pGear.lengt > 3);
	var result = [];
	
	for (let i = 0; i < gearOr.length; i++) 
	{	
		const gearAnd = gearOr[i].split('&');
		let gear = ''
		
		for(let j = 0; j < gearAnd.length; j++)
		{
			if(j > 1){
				gear+=' & ';
			}
			gear+= '<b>'+((currentLanguage==='de') ? Gear[gearAnd[j]].NameDe: Gear[gearAnd[j]].Name)+'</b>';
			const qty = ((indivQty) ? pGear[2+i+j].toString() : pGear[2].toString());
			gear+= ((qty > 1) ? ' x'+qty.toString() : '');
		}
		if(pGroupsOr[i]!==""){
			gear+=((currentLanguage==='de') ? GearGroups[pGroupsOr[i]].NameDe : GearGroups[pGroupsOr[i]].Name);
		}
		result.push(gear);
	}
	const or = ((currentLanguage === 'de')? ' oder ' : ' or ');
	return result.join(or);
}

function parseGear(pGear){
	if (!Array.isArray(pGear)) {
        throw new Error("The 'pGear' parameter must be an array.");
    }
	var result = [];
	
	pGear.forEach((item,index) => {
		if(item)
		{
			if(Array.isArray(item)){
				result.push(translateGear(item));
			}
		}
	});
	
	if(result.length === 0)
	{
		result.push('---');
	}
	return result;
}

function parseTalents(pTalents){
	if (!Array.isArray(pTalents)) {
        throw new Error("The 'pTalents' parameter must be an array.");
    }
	var result = [];
	
	pTalents.forEach((item,index) => {
		if(!Array.isArray(item)){
			throw new Error(`Item at index ${index} is not an array.`);
		}
		else{		
			const or = ((currentLanguage==='de') ? ' oder ' : ' or ');
			const res = splitAndTranslateTalents(item[0],item[1]);
			result.push(res.join(or));
		}
	});
	
	if(result.length === 0)
	{
		result.push('---');
	}
	return result;
}

function translateTalent(talentkey){
	const currTalent = talents[talentkey];
	if (!currTalent) {
            return `Unknown key: ${talentkey}`;
        }
	return ((currentLanguage==='de') ? currTalent.NameDe : currTalent.Name);
}

function splitAndTranslateTalents(pTalent, pGroups)
{
	const talentsOr = pTalent.split('|');
	const pGroupsOr = pGroups.split('@@');
	var result = [];
	
	for (let i = 0; i < talentsOr.length; i++) 
	{
		result.push('<b class="talent">'+translateTalent(talentsOr[i])+
			'</b>'+translateGroups(pGroupsOr[i]));
	}
	
	return result;
}

function getTranslatedApts(input, language) {
    // Ensure input is always an array for easier processing
    const keys = Array.isArray(input) ? input : [input];
    
    // Map over the keys and return the corresponding labels
    return keys.map(key => {
        // Split the key by "|" if it exists, otherwise handle it as a single key
        const subKeys = key.split("|");

        // Translate each part of the split key
        const translatedParts = subKeys.map(subKey => {
            const apt = Apts[subKey];
            if (!apt) {
                return `Unknown key: ${subKey}`;
            }
            return language === "de" ? apt.LabelDe : apt.Label;
        });
		
		const or = ((currentLanguage === 'de')? " oder " : " or ");

        // Join translated parts with " or " and return
        return translatedParts.join(or);
    });
}

function addHomeworld(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("hw_sel");
	document.querySelectorAll(".homeworld.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
		populateBackgrounds();
	}
}

function addCareer(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("cr_sel");
	document.querySelectorAll(".career.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
		populateHomeworlds();
	}
}

function addBackground(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("bg_sel");
	document.querySelectorAll(".background.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
		populateRoles();
	}
}

function addRole(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("rl_sel");
	document.querySelectorAll(".role.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
		populateBirthrights();
	}
}

function addBirthright(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("br_sel");
	document.querySelectorAll(".birthright.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		CharData[event.currentTarget.pDType] = event.currentTarget.pData;
		event.currentTarget.classList.add('selected');
		populateLures();
	}
}

function addLure(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("lr_sel");
	document.querySelectorAll(".lure.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		CharData[event.currentTarget.pDType] = event.currentTarget.pData;
		event.currentTarget.classList.add('selected');
		populateTrials();
	}
}
function addTrial(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("tr_sel");
	document.querySelectorAll(".trial.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		CharData[event.currentTarget.pDType] = event.currentTarget.pData;
		populateMotivations();
	}
}
function addMotivation(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("mo_sel");
	document.querySelectorAll(".motivation.selected").forEach(div => div.dispatchEvent(ev));
	refreshCharData();
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		CharData[event.currentTarget.pDType] = event.currentTarget.pData;
		event.currentTarget.classList.add('selected');
		generateStatSelection();
	}
}


function removeSelection(){
	event.currentTarget.classList.remove('selected');
}

function refreshCharData(){
	if(currentMenu > 0){
		
		CharData.Career = ((currentMenu<=1)? "" : CharData.Career);
		CharData.Homeworld=((currentMenu<=2)? "" : CharData.Homeworld);
		CharData.Background=((currentMenu<=3)? "" : CharData.Background);
		CharData.Role=((currentMenu<=4)? "" : CharData.Role);
		CharData.Birthright=((currentMenu<=5)? "" : CharData.Birthright);
		CharData.BRDetail=((currentMenu<=5)? "" : CharData.BRDetail);
		CharData.Lure=((currentMenu<=6)? "" : CharData.Lure);
		CharData.LureDetail=((currentMenu<=6)? "" : CharData.LureDetail);
		CharData.Trial=((currentMenu<=7)? "" : CharData.Trial);
		CharData.TrialDetail=((currentMenu<=7)? "" : CharData.TrialDetail);
		CharData.Motivation=((currentMenu<=8)? "" : CharData.Motivation);
		CharData.MotivationDetail=((currentMenu<=8)? "" : CharData.MotivationDetail);
	}
}


function populateHomeworlds() {
	
	clearContentDivs();
	const container = document.getElementById('tiles');
	currentMenu = 2;
	
	var sortedHwArray = Object.entries(homeworlds).sort((a, b) => {
    return ((currentLanguage === 'de') 
        ? a[1].Name_De.localeCompare(b[1].Name_De) 
		: a[1].Name.localeCompare(b[1].Name));
	});
	// Convert sorted array back to object
	var sortedHw = Object.fromEntries(sortedHwArray);
	// Loop through the homeworlds object
	for (let key in sortedHw) {
		if (homeworlds.hasOwnProperty(key)) {
			const homeworld = homeworlds[key];
			const Ability = {"Name": "",
				"Effect": ""
			}
			
			if(hwAbilities.hasOwnProperty(key)){
				const hwAbt = hwAbilities[key];
				Ability.Name = ((currentLanguage === 'de')? hwAbt.NameDe : hwAbt.Name);
				Ability.Effect = ((currentLanguage === 'de')? hwAbt.EffectDe : hwAbt.Effect);
			}
			
			const labels = {
				"Aptitude":((currentLanguage === 'de')? "Eignungen" : "Aptitudes"),
				"Wounds":((currentLanguage === 'de')? "Wunden" : "Wounds"),
				"Fate":((currentLanguage === 'de')? "Schicksal" : "Fate")
			}
			// Create a div for each homeworld
			const div = document.createElement('div');
			
			div.classList.add('tile');
			div.classList.add('homeworld');
			if(CharData["Homeworld"] === key){
				div.classList.add('selected');
			}
			div.addEventListener("click", addHomeworld,false);
			div.dType="Homeworld";
			div.data=key;
			div.addEventListener("hw_sel",removeSelection,false);

			// Add content to the div
			div.innerHTML = `
				<img src="images/hws/${homeworld.image}" alt="${homeworld.Name}">
				<h2>${((currentLanguage === 'de') ? homeworld.Name_De : homeworld.Name)}</h2>
				<p>${((currentLanguage === 'de') ? homeworld.Desc_De : homeworld.Desc)}</p>
				<hr>
				<p class="stats"><strong>${getTranslatedApts(homeworld.PosChars,currentLanguage).join('+,  ')}+, ${getTranslatedApts(homeworld.NegChars,currentLanguage)}-</strong></p>
				<p class="stats"><strong>${labels.Fate}: </strong>${homeworld.Fate.join(' (')}+)</p>
				<p class="stats"><strong>${labels.Wounds}: </strong>${homeworld.Wounds}</p>
				<p class="stats"><strong>${labels.Aptitude}: </strong>${getTranslatedApts(homeworld.Apt,currentLanguage)}</p>
				<hr>
				<p class="stats"><strong>${Ability.Name}</strong></br> ${Ability.Effect}</p>
			`;
			container.appendChild(div);
		}
	}
}

function validateSelections() {
    const dropdowns = document.querySelectorAll("select");
	
	const btChoice = document.querySelectorAll(".choice");

    // If no dropdowns exist, return true
    if (dropdowns.length === 0 && btChoice.length ===0) {
        return true;
    }

    // Check that every dropdown has a non-empty value
    return ((Array.from(dropdowns).every(dropdown => dropdown.value !== "")) && (btChoice.length ===0));
}

function validateHPandFate() {
    return ((CharData.Fate > 0) && (CharData.HP > 0));
}

function generateAptitudeSelection() {
	clearContentDivs();
	CharData.Aptitudes = [];
	choices.Aptitudes = [];
	
	updateAptitudes([careers[CharData.Career].Apt, 
		[homeworlds[CharData.Homeworld].Apt],
		backgrounds[CharData.Background].Apts,
		roles[CharData.Role].Aptitudes]);
		
		
		
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? aptitudesTexts.InfoTextDe : aptitudesTexts.InfoText)}</div>`;
	container.appendChild(div);
	
	div = document.createElement('div');
		
	div.classList.add('dataCard');
	
	const tab = document.createElement('table'); // Create the table
	tab.classList.add("twctab");
	const tHead = document.createElement('tHead'); // Create the header
	const htr = document.createElement('tr');
	var th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Begabungen' : 'Aptitudes');
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Beschreibung' : 'Description');
	htr.appendChild(th);
	tHead.appendChild(htr);
	tab.appendChild(tHead);
	
	const tbody = document.createElement('tbody'); // Create the tbody

	for (let i = 0; i < choices.Aptitudes.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.classList.add("tdStat");
		const apts = choices.Aptitudes[i].split('|');
		let aptFiltered = apts.filter(key => !CharData.Aptitudes.some(obj => obj.value === key));
		
		
		if(aptFiltered.length === 0){
			aptFiltered = Object.keys(Apts).filter(
					key => !(CharData.Aptitudes.some(obj => obj.value === key) && key.length <= 3)
				);
		}
		
		var dropDown = document.createElement('select');
		dropDown.id = 'selApt'+i.toString();
		dropDown.classList.add('selectA');
		dropDown.LabelId = "tdApt_"+i.toString();
		const placeholder = document.createElement('option');
		placeholder.textContent = '---';
		placeholder.value = "";
		placeholder.disabled = true;
		placeholder.selected = true;
		dropDown.appendChild(placeholder);
		
		aptFiltered.forEach(aptitude => {
		const option = document.createElement('option');
		option.value = aptitude;
		option.textContent = getTranslatedApts(aptitude);
		dropDown.appendChild(option);
		});
		
		dropDown.addEventListener("change", (event) => {
		  if(Apts[event.target.value])
		  {
			  var lblTxt = ((currentLanguage==='de') ? Apts[event.target.value].ShortDescDe : Apts[event.target.value].ShortDesc);
			  document.getElementById(event.target.LabelId).textContent = lblTxt;
		  }
		  if(validateSelections()){
			showNextBt();
		  }
		});
		
		td.appendChild(dropDown);

		
		tr.appendChild(td);
		td = document.createElement('td');
		td.classList.add('tdDescLong');
		td.id = "tdApt_"+i.toString();
		tr.appendChild(td);
		tbody.appendChild(tr);
	}
	for (let i = 0; i < CharData.Aptitudes.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		td.classList.add("tdStat");
		
		td.textContent = getTranslatedApts(CharData.Aptitudes[i].value,currentLanguage);
		
		tr.appendChild(td);
		td = document.createElement('td');
		td.classList.add('tdDescLong');
		td.textContent = ((currentLanguage==='de') ? Apts[CharData.Aptitudes[i].value].ShortDescDe : Apts[CharData.Aptitudes[i].value].ShortDesc);
		tr.appendChild(td);
		tbody.appendChild(tr);
	}
	tab.appendChild(tbody);
	div.appendChild(tab);
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardNext");
	
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  setSelectedAptitudes();
		  chooseTalents();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
	container.appendChild(div);
	
	if(validateSelections())
	{
		showNextBt();
	}
}

function setSelectedAptitudes(){
	const selections = document.getElementsByClassName("selectA");
	Array.from(selections).forEach(item => {
		const existingEntry = CharData.Aptitudes.find(entry => entry.value === item.value);
		if (existingEntry) {
			// If it exists, increment the amount
			existingEntry.amount += 1;
		} else {
			// If it doesn't exist, add a new entry with amount 1
			CharData.Aptitudes.push({ value: item.value, amount: 1 });
		}
	});
}

function getTranslatedSkills(input) {
	const result = [];
	const base = splitInputWithOptions(input);

	for(let i = 0; i < base.length; i++){
		const skillId = base[i][0];
		const grpId = base[i][1];
		let resString = ((currentLanguage === 'de') ? (skills[skillId].NameDe) : (skills[skillId].Name));
		
		if(grpId !== "")
		{
			if(grpId in skills[skillId].SkillGroups){
				const currGrp = skills[skillId].SkillGroups[grpId];
				currGrp.forEach(item => {
					const res = resString+"("+((currentLanguage === 'de') ? (groups[item].NameDe) : (groups[item].Name))+")";
					result.push({id: skillId, grp_id: item, value: res});
				});
			}
			else{
					let grp_transl = grpId
						.split('&') // Split the string into parts
						.map(SPLIT => (currentLanguage === 'de' ? groups[SPLIT].NameDe : groups[SPLIT].Name)) // Translate each part
						.join(' & '); // Join the translated parts with " and "
				
					resString+="("+grp_transl+")";
					result.push({id: skillId, grp_id: grpId, value: resString});
			}
		}else {
			result.push({id: skillId, grp_id:"", value: resString});
		}
	}
	return result;
}

function getTranslatedGear(input) {
	
	const result = [];
	const base = splitInputWithOptions([input[0],input[1]]);

	for(let i = 0; i < base.length; i++){
		const gearId = base[i][0];
		const grpId = base[i][1];
		const qty = ((input.length > 3) ? input[2+i] : input[2]);
		
		let resString = gearId
						.split('&') // Split the string into parts
						.map(SPLIT => (currentLanguage === 'de' ? Gear[SPLIT].NameDe : Gear[SPLIT].Name)) // Translate each part
						.join(' & '); // Join the translated parts with " and "		
		if(grpId !== "")
		{
			resString+=((currentLanguage === 'de') ? (GearGroups[base[i][1]].NameDe) : (GearGroups[base[i][1]].Name));
		}
		
		result.push({id: gearId, grp_id:grpId, value: resString, qty: qty});
	}
	return result;
}

function getTranslatedImplants(input) {
	const result = [];

	const filteredItems = Object.entries(implants)
							.filter(([key, item]) => item.Type === input[0]) // Filter by the Type property
							.map(([key, item]) => ({ key, ...item }));
	
	filteredItems.forEach(item => {
		
		result.push({id: item.key , value: ((currentLanguage === 'de') ? (item.NameDe) : (item.Name)), });
	});
	
	return result;
}

function getTranslatedTalents(input) {
	const result = [];
	const base = splitInputWithOptions(input);
	for(let i = 0; i < base.length; i++){
		let talendId = base[i][0];
		let resString = ((currentLanguage === 'de') ? (talents[talendId].NameDe) : (talents[talendId].Name));
		let grp_id = base[i][1];
		
		if(grp_id !== "")
		{
			if(grp_id in talents[talendId].TalentGroups){
				const currGrp = talents[talendId].TalentGroups[grp_id];
				currGrp.forEach(item => {
					const res = resString+"("+((currentLanguage === 'de') ? (groups[item].NameDe) : (groups[item].Name))+")";
					result.push({id: talendId, grp_id: item, value: res});
				});
			}
			else{
					let grp_transl = grp_id
						.split('&') // Split the string into parts
						.map(SPLIT => (currentLanguage === 'de' ? groups[SPLIT].NameDe : groups[SPLIT].Name)) // Translate each part
						.join(' & '); // Join the translated parts with " and "
				
					resString+="("+grp_transl+")";
					result.push({id: talendId, grp_id: grp_id, value: resString});
			}
			
		}else {
			result.push({id: talendId, grp_id:"", value: resString});
		}
	}
	return result;
}

function splitInputWithOptions(input) {
    if (!Array.isArray(input) || input.length !== 2) {
        throw new Error("Input must be an array of size 2.");
    }

    const [firstString, secondString] = input;
    let firstParts = [firstString];
    let secondParts = [secondString];

    // Split the first string if it contains "|"
    if (firstString.includes("|")) {
        firstParts = firstString.split("|");
		if (!secondString.includes("@@")) {
			throw new Error("Insufficient options for Talent group");
		}
		secondParts = secondString.split("@@");
    }

    const result = [];

    // Process the second parts for nested "|"
    secondParts.forEach((part, index) => {
        if (part.includes("|")) {
            const nestedParts = part.split("|");
            nestedParts.forEach((nestedPart) => {
                const firstValue = firstParts[Math.min(index, firstParts.length - 1)];
                result.push([firstValue, nestedPart]);
            });
        } else {
            const firstValue = firstParts[Math.min(index, firstParts.length - 1)];
            result.push([firstValue, part]);
        }
    });

    // Ensure all firstParts are represented if the secondParts are smaller
    for (let i = result.length; i < firstParts.length; i++) {
        result.push([firstParts[i], ""]);
    }

    return result;
}
function updateSkills(data){
    data.forEach(skillsArray => {
        skillsArray.forEach(value => {
			let currSkills = [];
			
			if(Array.isArray(value) && value.length === 2)
			{
				currSkills = getTranslatedSkills(value);
			}else
			{
				console.log("Error");
				CharData.Skills.push(["ERROR"])
			}
			
			if(currSkills.length > 1)
			{
				choices.Skills.push(currSkills);
			}
			else{
				const existingEntry = CharData.Skills.find(entry => entry.value.value === currSkills[0].value);
				if (existingEntry) {
					existingEntry.amount += 1;
				} else {
					CharData.Skills.push({ value: currSkills[0], amount: 1 });
				}
			}
        });
    });
}

function updateTraits(data)
{
	data.forEach(traitArray => {
        traitArray.forEach(value => {
			let currTrait = [];
			
			value.split('|').forEach(item => {
				currTrait.push({value: ((currentLanguage==='de') ? traits[item].NameDe : traits[item].Name), id: item});
			});
			
			if(currTrait.length > 1){
				choices.Traits.push(currTrait);
			}else{
				CharData.Traits.push(currTrait[0]);
			}
			
        });
    });
	
	
}

function updateMutations(data)
{
	data.forEach(mutArray => {
		
        mutArray.forEach(value => {
			choices.Mutations.push(value);	
        });
    });
}

function updateImplants(data){
    data.forEach(implArray => {
        implArray.forEach(value => {
			let currimpl = [];
			
			if(Array.isArray(value) && value.length === 2)
			{
				currimpl = getTranslatedImplants(value);	
			}
			else
			{
				console.log("Error");
				CharData.Implants.push(["ERROR"])
			}
			
			currimpl.forEach(item => {
				item["quality"] = value[1];
			})
			
			if(currimpl.length > 1)
			{
				choices.Implants.push({ value: currimpl});
			}
			else{
				CharData.Implants.push(currimpl[0]);
			}
			
        });
    });
}
function updateGear(data){
    data.forEach(gearArray => {
        gearArray.forEach(value => {
			let currGear = [];
			
			if(Array.isArray(value) && value.length > 2)
			{
				currGear = getTranslatedGear(value);	
			}
			else
			{
				console.log("Error");
				CharData.Gear.push(["ERROR"])
			}
			
			if(currGear.length > 1)
			{
				choices.Gear.push(currGear);
			}
			else{
				CharData.Gear.push({ value: currGear[0], amount: 1 });
			}
			
        });
    });
}

function updateTalents(data) {
    data.forEach(talentsArray => {
        talentsArray.forEach(value => {
			let currTalents = [];
			
			if(Array.isArray(value) && value.length === 2)
			{
				currTalents = getTranslatedTalents(value);
			}else
			{
				console.log("Error");
				CharData.Talents.push(["ERROR"])
			}
			
			if(currTalents.length > 1)
			{
				choices.Talents.push(currTalents);
			}
			else{
				const existingEntry = CharData.Talents.find(entry => entry.value.value === currTalents[0].value);
				if (existingEntry) {
					existingEntry.amount += 1;
				} else {
					CharData.Talents.push({ value: currTalents[0], amount: 1 });
				}
				
			}
			
        });
    });
}

function setSelectedImpMutTrait(){
	const selections = document.getElementsByClassName("selTrait");
	Array.from(selections).forEach(item => {
		CharData.Traits.push(item.value);
	});
	
	const selImplants = document.getElementsByClassName("selImpl");
	Array.from(selImplants).forEach(item => {
		CharData.Implants.push(JSON.parse(item.value));
	});
	
}

function setSelectedGear(){
	const selections = document.getElementsByClassName("selGear");
	Array.from(selections).forEach(item => {
		const jObj = JSON.parse(item.value);
		
		CharData.Gear.push({ value: jObj, amount: 1 });
	});
}

function setSelectedSkills(){
	const selections = document.getElementsByClassName("selSkill");
	Array.from(selections).forEach(item => {
		const jObj = JSON.parse(item.value);
		
		const existingEntry = CharData.Skills.find(entry => entry.value.value === jObj.value);
		if (existingEntry) {
			// If it exists, increment the amount
			existingEntry.amount += 1;
		} else {
			// If it doesn't exist, add a new entry with amount 1
			CharData.Skills.push({ value: jObj, amount: 1 });
		}
	});
}

function setSelectedTalents(){
	const selections = document.getElementsByClassName("selTal");
	Array.from(selections).forEach(item => {
		const jObj = JSON.parse(item.value);
		
		const existingEntry = CharData.Talents.find(entry => entry.value.value === jObj.value);
		
		if (existingEntry) {
			// If it exists, increment the amount
			existingEntry.amount += 1;
		} else {
			// If it doesn't exist, add a new entry with amount 1
			CharData.Talents.push({ value: jObj, amount: 1 });
		}
	});
}

function chooseTalents(){
	
	clearContentDivs();
	CharData.Talents = [];
	choices.Talents = [];
	
	const hwT = hwAbilities[CharData.Homeworld];
	const caT = careerOpts[CharData.Career];
	const bgT = backgrounds[CharData.Background];
	const rT  = roles[CharData.Role];
	const brT = birthrights[CharData.Birthright].options[CharData.BRDetail];
	const luT = lure[CharData.Lure].options[CharData.LureDetail];
	const trT = trials[CharData.Trial].options[CharData.TrialDetail];

	
	updateTalents([
			(("Talents" in hwT)? hwT.Talents : []),
			(("Talents" in caT)? caT.Talents : []),
			(("Talents" in bgT)? bgT.Talents : []),
			(("Talents" in rT )? rT.Talents : []),
			(("Talents" in brT)? brT.Talents : []),
			(("Talents" in luT)? luT.Talents : []),
			(("Talents" in trT)? trT.Talents : []),
		]);
	
	
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}</div>`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table // Create the table
	table.classList.add("twctab");
	const tHead = document.createElement('tHead'); // Create the header
	const htr = document.createElement('tr');
	var th = document.createElement('th');
	th.classList.add("thTalent");
	th.textContent = 'Talent';
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Beschreibung' : 'Description');
	htr.appendChild(th);
	tHead.appendChild(htr);
	table.appendChild(tHead);
	
	
	const tbody = document.createElement('tbody'); // Create the tbody

	const currChoices = choices.Talents;
	for (let i = 0; i < currChoices.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdTalent');
		
		const filteredChoices = currChoices[i];
		
		if(filteredChoices.length === 1){
			td.textContent = filteredChoices[0].value;
		}else{
			var dropDown = document.createElement('select');
			dropDown.id = 'selTal'+i.toString();
			dropDown.classList.add('selTal');
			dropDown.lblId = 'tdDesc'+i.toString();
			const placeholder = document.createElement('option');
			placeholder.textContent = '---';
			placeholder.value = "";
			placeholder.disabled = true;
			placeholder.selected = true;
			dropDown.appendChild(placeholder);
			
			filteredChoices.forEach(tal => {
			const option = document.createElement('option');
			option.value = JSON.stringify(tal);
			option.textContent = tal.value;
			dropDown.appendChild(option);
			});
			
			dropDown.addEventListener("change", (event) => {
				const x = JSON.parse(event.target.value);
				const lbl = ((currentLanguage==='de') ? talents[x.id].ShortDescDe : talents[x.id].ShortDesc);
				document.getElementById(event.target.lblId).textContent = lbl;
				if(validateSelections()){
					showNextBt();
				}
			});
			
			td.appendChild(dropDown);
		}
		
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdDescLong');
		td.id = 'tdDesc'+i.toString();
		tr.appendChild(td);
		
		
		tbody.appendChild(tr);
	}
	
	const selTalents = CharData.Talents;
	for (let i = 0; i < selTalents.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdTalent');
		
		const filteredChoices = selTalents[i];
		
		td.textContent = filteredChoices.value.value;
		
		tr.appendChild(td);
		td = document.createElement('td');
		
		td.classList.add('tdDescLong');
		td.textContent = ((currentLanguage==='de') ? talents[filteredChoices.value.id].ShortDescDe : talents[filteredChoices.value.id].ShortDesc);
		tr.appendChild(td);
		
		tbody.appendChild(tr);
	}

	table.appendChild(tbody); // Append tbody to the table
	div.appendChild(table); // Append the table to the div

	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardNext");
	
	
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  setSelectedTalents();
		  chooseSkills();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
	
	if(validateSelections())
	{
		showNextBt();
	}
}

function chooseSkills(){
	
	clearContentDivs();
	CharData.Skills = [];
	choices.Skills = [];
	
	const hwT = hwAbilities[CharData.Homeworld];
	const caT = careerOpts[CharData.Career];
	const bgT = backgrounds[CharData.Background];
	const rT  = roles[CharData.Role];
	const brT = birthrights[CharData.Birthright].options[CharData.BRDetail];
	const luT = lure[CharData.Lure].options[CharData.LureDetail];
	const trT = trials[CharData.Trial].options[CharData.TrialDetail];

	
	updateSkills([
			(("Skills" in hwT)? hwT.Skills : []),
			(("Skills" in caT)? caT.Skills : []),
			(("Skills" in bgT)? bgT.Skills : []),
			(("Skills" in rT )? rT.Skills : []),
			(("skills" in brT)? brT.skills : []),
			(("Skills" in luT)? luT.Skills : []),
			(("Skills" in trT)? trT.Skills : []),
		]);
	
	
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? skillsTexts.InfoTextDe : skillsTexts.InfoText)}</div>`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table
	table.classList.add("twctab");
	const tHead = document.createElement('tHead'); // Create the header
	const htr = document.createElement('tr');
	var th = document.createElement('th');
	th.textContent = 'Skills';
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Beschreibung' : 'Description');
	htr.appendChild(th);
	tHead.appendChild(htr);
	table.appendChild(tHead);
	
	
	const tbody = document.createElement('tbody'); // Create the tbody

	const currChoices = choices.Skills;
	for (let i = 0; i < currChoices.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdSkill');
		
		const filteredChoices = currChoices[i];
		
		var dropDown = document.createElement('select');
		dropDown.id = 'selSkill'+i.toString();
		dropDown.classList.add("selSkill");
		const placeholder = document.createElement('option');
		placeholder.textContent = '---';
		placeholder.value = "";
		placeholder.disabled = true;
		placeholder.selected = true;
		dropDown.appendChild(placeholder);
		dropDown.lblId = 'tdSkillDesc' + i.toString();
		
		filteredChoices.forEach(skill => {
		const option = document.createElement('option');
		option.value = JSON.stringify(skill);
		option.textContent = skill.value;
		dropDown.appendChild(option);
		});

		dropDown.addEventListener("change", (event) => {
			const x = JSON.parse(event.target.value);
			const lbl = ((currentLanguage==='de') ? skills[x.id].ShortDescDe : skills[x.id].ShortDesc);
			document.getElementById(event.target.lblId).textContent = lbl;
			if(validateSelections()){
				showNextBt();
			}
		});

		td.appendChild(dropDown);
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.id = 'tdSkillDesc' + i.toString();
		td.classList.add('tdDescLong');
		td.textContent = '';
		tr.appendChild(td);
		
		
		tbody.appendChild(tr);
	}
	
	const selSkills = CharData.Skills;
	for (let i = 0; i < selSkills.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdSkill');
		
		const filteredChoices = selSkills[i];
		
		td.textContent = filteredChoices.value.value;
		
		tr.appendChild(td);
		td = document.createElement('td');
		
		td.classList.add('tdDescLong');
		td.textContent = ((currentLanguage==='de') ? skills[filteredChoices.value.id].ShortDescDe : skills[filteredChoices.value.id].ShortDesc);
		tr.appendChild(td);
		
		tbody.appendChild(tr);
	}

	table.appendChild(tbody); // Append tbody to the table
	div.appendChild(table); // Append the table to the div

	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardNext");
	
	
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
			setSelectedSkills();
			chooseGear();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
	
	if(validateSelections())
	{
		showNextBt();
	}
}

function chooseImplantsMutationsAndTraits(){
	
	clearContentDivs();
	CharData.Implants = [];
	CharData.Mutations = [];
	CharData.Traits = [];
	choices.Mutations = [];
	choices.Implants = [];
	choices.Traits = [];
	
	const hwT = hwAbilities[CharData.Homeworld];
	const caT = careerOpts[CharData.Career];
	const bgT = backgrounds[CharData.Background];
	const rT  = roles[CharData.Role];
	const brT = birthrights[CharData.Birthright].options[CharData.BRDetail];
	const luT = lure[CharData.Lure].options[CharData.LureDetail];
	const trT = trials[CharData.Trial].options[CharData.TrialDetail];

	
	updateImplants([
			(("Cybernetics" in hwT)? hwT.Cybernetics : []),
			(("Cybernetics" in caT)? caT.Cybernetics : []),
			(("Cybernetics" in bgT)? bgT.Cybernetics : []),
			(("Cybernetics" in rT )? rT.Cybernetics : []),
			(("Cybernetics" in brT)? brT.Cybernetics : []),
			(("Cybernetics" in luT)? luT.Cybernetics : []),
			(("Cybernetics" in trT)? trT.Cybernetics : []),
			(("SImplant" in luT)? luT.SImplant : [])
		]);
	
		
	updateMutations([
		(("Mutations" in hwT)? hwT.Mutations : []),
		(("Mutations" in caT)? caT.Mutations : []),
		(("Mutations" in bgT)? bgT.Mutations : []),
		(("Mutations" in rT )? rT.Mutations : []),
		(("Mutations" in brT)? brT.Mutations : []),
		(("Mutations" in luT)? luT.Mutations : []),
		(("Mutations" in trT)? trT.Mutations : [])
	]);
	
	updateTraits([
		(("Traits" in hwT)? hwT.Traits : []),
		(("Traits" in caT)? caT.Traits : []),
		(("Traits" in bgT)? bgT.Traits : []),
		(("Traits" in rT )? rT.Traits : []),
		(("Traits" in brT)? brT.Traits : []),
		(("Traits" in luT)? luT.Traits : []),
		(("Traits" in trT)? trT.Traits : [])
	]);
	
	const container = document.getElementById('charChoice');
	
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? implMutaTraits.InfoTextDe : implMutaTraits.InfoText)}</div>`;
	container.appendChild(div);
	

	div = document.createElement('div');
	
	if(choices.Implants.length > 0 || CharData.Implants.length > 0)
	{
		let ptsDiv = document.createElement('div');
		ptsDiv.classList.add("dataCardPtsSelect");
		
		ptsDiv.appendChild(document.createElement('br'));
		
		var el = document.createElement('h2');
		el.textContent = ((currentLanguage==='de') ? 'Implantate': 'Cybernetics');
		ptsDiv.appendChild(el);
		
		div.appendChild(ptsDiv);
	
		const table = document.createElement('table'); // Create the table // Create the table
		table.classList.add("twctab");
		const tHead = document.createElement('tHead'); // Create the header
		const htr = document.createElement('tr');
		var th = document.createElement('th');
		th.textContent = ((currentLanguage==='de') ? 'Implantate' : 'Cybernetics');
		htr.appendChild(th);
		th = document.createElement('th');
		th.textContent = ((currentLanguage==='de') ? 'Beschreibung' : 'Description');
		htr.appendChild(th);
		tHead.appendChild(htr);
		table.appendChild(tHead);
		
		
		const tbody = document.createElement('tbody'); // Create the tbody

		const currChoices = choices.Implants;
		for (let i = 0; i < currChoices.length; i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			
			td.classList.add('tdStat');
			
			const filteredChoices = currChoices[i].value;
			if(filteredChoices.length === 1){
				td.textContent = filteredChoices[0];
			}else{
				var dropDown = document.createElement('select');
				dropDown.id = 'selImpl'+i.toString();
				dropDown.classList.add('selImpl');
				const placeholder = document.createElement('option');
				placeholder.textContent = '---';
				placeholder.value = "";
				placeholder.disabled = true;
				placeholder.selected = true;
				dropDown.appendChild(placeholder);
				dropDown.lblId = 'tdImpl'+i.toString();
				filteredChoices.forEach(implant => {
				const option = document.createElement('option');
				option.value = JSON.stringify(implant);
				option.textContent = implant.value;
				dropDown.appendChild(option);
				});				
				dropDown.addEventListener("change", (event) => {
					const x = JSON.parse(event.target.value);
					const lbl = ((currentLanguage==='de') ? implants[x.id].ShortDescDe : implants[x.id].ShortDesc);
					document.getElementById(event.target.lblId).textContent = lbl;
					if(validateSelections()){
						showNextBt();
					}
				});				
				td.appendChild(dropDown);
			}
			
			tr.appendChild(td);			
			td = document.createElement('td');
			td.classList.add('tdDescLong');
			td.id = 'tdImpl'+i.toString();
			td.textContent = '';
			tr.appendChild(td);
			
			
			tbody.appendChild(tr);
		}
		
		const selImplants = CharData.Implants;
		for (let i = 0; i < selImplants.length; i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			
			td.classList.add('tdStat');
			
			const filteredChoices = selImplants[i];
			
			td.textContent = filteredChoices.value;
			
			tr.appendChild(td);
			td = document.createElement('td');
			
			td.classList.add('tdDescLong');
			td.textContent = ((currentLanguage ==='de') ? implants[filteredChoices.id].ShortDescDe : implants[filteredChoices.id].ShortDesc);
			tr.appendChild(td);
			
			tbody.appendChild(tr);
		}

		table.appendChild(tbody); // Append tbody to the table
		div.appendChild(table); // Append the table to the div
	}
	
	if(choices.Mutations.length > 0)
	{
		let ptsDiv = document.createElement('div');
		ptsDiv.classList.add("dataCardPtsSelect");
		
		ptsDiv.appendChild(document.createElement('br'));
		
		var el = document.createElement('h2');
		el.textContent = ((currentLanguage==='de') ? 'Mutationen': 'Mutations');
		ptsDiv.appendChild(el);
		
		ptsDiv.appendChild(document.createElement('br'));
		ptsDiv.appendChild(document.createElement('br'));
				
		
		const table = document.createElement('table'); // Create the table // Create the table
		table.classList.add("twctab");
		const tHead = document.createElement('tHead'); // Create the header
		const htr = document.createElement('tr');
		var th = document.createElement('th');
		th.textContent = 'Mutation';
		htr.appendChild(th);
		th = document.createElement('th');
		th.textContent = ((currentLanguage==='de') ? 'Beschreibung' : 'Description');
		htr.appendChild(th);
		tHead.appendChild(htr);
		table.appendChild(tHead);
		
		const tbody = document.createElement('tbody'); // Create the tbody
		
		
		for(let x = 0; x < choices.Mutations.length; x++)
		{
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			
			td.classList.add('tdStat');
			
			td.id = "tdMutations"+x.toString();
			
			el = document.createElement("button");
			el.classList.add("btRollBig","choice");
			el.id = "btMutations"+x.toString();
			el.MutaRoll = choices.Mutations[x];
			el.textContent = ((currentLanguage==='de')? "Rolle " : "roll ") + choices.Mutations[x];
			el.MainTD = "tdMutations"+x.toString();
			el.DecTD = "tdMutatDesc"+x.toString();
			
			el.addEventListener("click", (event) => {
				event.target.classList.add("clicked");
				  rollNewMutation(event.target.MainTD, event.target.DecTD, event.target.MutaRoll);
				  event.target.classList.remove("choice");
				  if(validateSelections()){
				    showNextBt();
				  }
				}, { once: true });
				
			td.appendChild(el);
			
			tr.appendChild(td);
			td = document.createElement('td');
			
			td.classList.add('tdDesc');
			td.id = "tdMutatDesc"+x.toString();
			td.textContent = '';
			tr.appendChild(td);
			
			tbody.appendChild(tr);
			

		}
		
		table.appendChild(tbody);
		ptsDiv.appendChild(table);
		div.appendChild(ptsDiv);
	}
	
	if(choices.Traits.length > 0 ||CharData.Traits.length > 0)
	{
		let ptsDiv = document.createElement('div');
		ptsDiv.classList.add("dataCardPtsSelect");
		
		ptsDiv.appendChild(document.createElement('br'));
		
		var el = document.createElement('h2');
		el.textContent = ((currentLanguage==='de') ? 'Eigenschaften': 'Traits');
		ptsDiv.appendChild(el);
		
		div.appendChild(ptsDiv);
	
		const table = document.createElement('table'); // Create the table // Create the table
		table.classList.add("twctab");
		const tHead = document.createElement('tHead'); // Create the header
		const htr = document.createElement('tr');
		var th = document.createElement('th');
		th.textContent = ((currentLanguage==='de') ? 'Eigenschaft' : 'Trait');
		htr.appendChild(th);
		th = document.createElement('th');
		th.textContent = ((currentLanguage==='de') ? 'Beschreibung' : 'Description');
		htr.appendChild(th);
		tHead.appendChild(htr);
		table.appendChild(tHead);
		
		
		const tbody = document.createElement('tbody'); // Create the tbody

		const currChoices = choices.Traits;
		for (let i = 0; i < currChoices.length; i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			
			td.classList.add('tdStat');
			
			const filteredChoices = currChoices[i];

			if(filteredChoices.length === 1){
				td.textContent = filteredChoices[0];
			}else{
				var dropDown = document.createElement('select');
				dropDown.id = 'selTrait'+i.toString();
				dropDown.classList.add('selTrait');
				const placeholder = document.createElement('option');
				placeholder.textContent = '---';
				placeholder.value = "";
				placeholder.disabled = true;
				placeholder.selected = true;
				dropDown.appendChild(placeholder);
				dropDown.lblId = 'tdTrait'+i.toString();
				filteredChoices.forEach(trait => {
				const option = document.createElement('option');
				option.value = trait.id;
				option.textContent = trait.value;
				dropDown.appendChild(option);
				});				
				dropDown.addEventListener("change", (event) => {
					const lbl = ((currentLanguage==='de') ? traits[event.target.value].DescDe : traits[event.target.value].Desc);
					document.getElementById(event.target.lblId).textContent = lbl;
					if(validateSelections()){
						showNextBt();
					}
				});				
				td.appendChild(dropDown);
			}
			
			tr.appendChild(td);			
			td = document.createElement('td');
			td.classList.add('tdDescLong');
			td.id = 'tdTrait'+i.toString();
			td.textContent = '';
			tr.appendChild(td);
			
			
			tbody.appendChild(tr);
		}
		
		const selTraits = CharData.Traits;
		for (let i = 0; i < selTraits.length; i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			
			td.classList.add('tdStat');
			
			const filteredChoices = selTraits[i];
			
			td.textContent = filteredChoices.value;
			
			tr.appendChild(td);
			td = document.createElement('td');
			
			td.classList.add('tdDescLong');
			td.textContent = ((currentLanguage ==='de') ? traits[filteredChoices.id].DescDe : traits[filteredChoices.id].tDesc);
			tr.appendChild(td);
			
			tbody.appendChild(tr);
		}

		table.appendChild(tbody); // Append tbody to the table
		div.appendChild(table); // Append the table to the div
	}
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardNext");
	
	
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  setSelectedImpMutTrait();
		  chooseInsanityAndCorruption();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
	
	if(validateSelections()){
		showNextBt();
	}
}

function chooseGear(){
	clearContentDivs();
	CharData.Gear = [];
	choices.Gear = [];
	
	const bgT = backgrounds[CharData.Background];

	updateGear([(("Gear" in bgT)? bgT.Gear : [])
		]);
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? gearTexts.InfoTextDe : gearTexts.InfoText)}</div>`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table // Create the table
	table.classList.add("twctab");
	const tHead = document.createElement('tHead'); // Create the header
	const htr = document.createElement('tr');
	var th = document.createElement('th');
	th.textContent = ((currentLanguage==='de')? 'Ausrüstung' : 'Gear');
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Beschreibung' : 'Description');
	htr.appendChild(th);
	tHead.appendChild(htr);
	table.appendChild(tHead);
	
	
	const tbody = document.createElement('tbody'); // Create the tbody

	const currChoices = choices.Gear;
	for (let i = 0; i < currChoices.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdStat');
		
		const filteredChoices = currChoices[i];
		
		if(filteredChoices.length === 1){
			td.textContent = filteredChoices[0].Value;
		}else{
			var dropDown = document.createElement('select');
			dropDown.id = 'selGear'+i.toString();
			dropDown.classList.add('selGear');
			dropDown.lblId = 'lbselGear'+i.toString();
			const placeholder = document.createElement('option');
			placeholder.textContent = '---';
			placeholder.value = "";
			placeholder.disabled = true;
			placeholder.selected = true;
			dropDown.appendChild(placeholder);
			
			filteredChoices.forEach(gear => {
			const option = document.createElement('option');
				option.value = JSON.stringify(gear);
				option.textContent = gear.value;
				dropDown.appendChild(option);
			});	
			
			dropDown.addEventListener("change", (event) => {
				const x = JSON.parse(event.target.value);
				const lbl = x.id
					.split('&') // Split the string into individual items
					.map(item => ((currentLanguage==='de') ? Gear[item].ShortDescDe : Gear[item].ShortDesc)) // Translate each item
					.join(' || '); // Join the translated items with ' || '
				document.getElementById(event.target.lblId).textContent = lbl;
				
			  if(validateSelections()){
				showNextBt();
			  }
			});
			
			td.appendChild(dropDown);
		}
		
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdDescLong');
		td.id = 'lbselGear'+i.toString();
		tr.appendChild(td);
		
		
		tbody.appendChild(tr);
	}
	
	const selGear = CharData.Gear;
	for (let i = 0; i < selGear.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdStat');
		
		const filteredChoices = selGear[i];

		td.textContent = filteredChoices.value.value;
		
		tr.appendChild(td);
		td = document.createElement('td');

		
		td.textContent = filteredChoices.value.id
			.split('&') // Split the string into individual items
			.map(item => ((currentLanguage==='de') ? Gear[item].ShortDescDe : Gear[item].ShortDesc)) // Translate each item
			.join(' || '); // Join the translated items with ' || '
		td.classList.add('tdDescLong');
		
		tr.appendChild(td);
		
		tbody.appendChild(tr);
	}

	table.appendChild(tbody); // Append tbody to the table
	div.appendChild(table); // Append the table to the div

	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardNext");
	
	
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
			setSelectedGear();
			chooseImplantsMutationsAndTraits();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
	
	if(validateSelections()){
		showNextBt();
	}
}

function populateCopyChardata(){
	clearContentDivs();
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('copy-container');
	
	var tA = document.createElement('textarea');
	tA.id = "copyArea";
	tA.classList.add("copyArea");
	tA.textContent = formatDataForExcel(CharData);
	tA.setAttribute('readonly', true)
	div.appendChild(tA);
	
	var bt = document.createElement('button');
	bt.id = "copyButton";
	bt.classList.add("copyButton");
	bt.textContent = (currentLanguage ==='de') ? 'Charakter Kopieren': 'Copy character';
	bt.addEventListener("click", function(event) {
		let resTxt = document.getElementById("copyArea").value;
		navigator.clipboard.writeText(resTxt)
			.then(() => {
				// Success feedback
				event.target.textContent = (currentLanguage === 'de') ? 'Kopieret' : 'Copied';
				event.target.style.backgroundColor = '#28a745'; // Green background
				setTimeout(() => {
					event.target.textContent = (currentLanguage === 'de') ? 'Charakter Kopieren' : 'Copy character';
					event.target.style.backgroundColor = '#007BFF'; // Revert to blue
				}, 2000);
			})
			.catch(err => {
				// Error handling
				console.error('Failed to copy text: ', err);
				alert('Failed to copy configuration.');
			});
	});
	div.appendChild(bt);
	
	container.appendChild(div);
	
	
}


function chooseHealthAndFate(){
	clearContentDivs();
	CharData.Fate = 0;
	CharData.HP = 0;
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? hpFateTexts.InfoTextDe : hpFateTexts.InfoText)}</div>`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardPtsSelect","cntr");
	
	nextDiv.appendChild(document.createElement('br'));
	
	var el = document.createElement('h2');
	el.textContent = ((currentLanguage==='de') ? 'Wunden': 'Wounds');
	nextDiv.appendChild(el);
	
	el = document.createElement('span');
	el.classList.add("rolled", "spWounds");
	el.innerHTML = ((currentLanguage==='de') ? 'Basis Wunden:': 'Base Wounds:') + '<b>'+homeworlds[CharData.Homeworld].Wounds.substring(1, '+')+'</b>';
	
	nextDiv.appendChild(el);
	nextDiv.appendChild(document.createElement('br'));
	nextDiv.appendChild(document.createElement('br'));
	
	el = document.createElement("button");
	el.classList.add("btRollMalig");
	el.id = "btWounds"; 
	el.textContent = ((currentLanguage==='de')? "Rolle 1W5 Bonus-Wunden" : "roll 1d5 bonus-wounds");
	el.addEventListener("click", (event) => {
		  updateWounds();
		  event.target.classList.add("clicked");
		  if(validateHPandFate()){
			  showNextBt();
		  }
		}, { once: true });
		
	nextDiv.appendChild(el);
	nextDiv.appendChild(document.createElement('br'));
	nextDiv.appendChild(document.createElement('br'));
	
	el = document.createElement('span');
	el.classList.add("rolled", "spWounds");
	el.innerHTML = ((currentLanguage==='de') ? 'Gesamt Wunden:': 'Total Wounds:') + '<b id="totWounds"></b>';
	nextDiv.appendChild(el);
	
	
	
	el = document.createElement('h2');
	el.textContent = ((currentLanguage==='de') ? 'Schicksal': 'Fate');
	nextDiv.appendChild(el);
	
	el = document.createElement('span');
	el.classList.add("rolled", "spFate");
	el.innerHTML = ((currentLanguage==='de') ? 'Basis Schicksal:': 'Base Fate:') + '<b>'+homeworlds[CharData.Homeworld].Fate[0].toString()+'</b>';
	
	nextDiv.appendChild(el);
	nextDiv.appendChild(document.createElement('br'));
	nextDiv.appendChild(document.createElement('br'));
	
	el = document.createElement("button");
	el.classList.add("btRollMalig");
	el.id = "btFate"; 
	el.textContent = ((currentLanguage==='de')? "Rolle 1W10. +1 Shicksal Wenn >= " : "roll 1d10. +1 Fate on >=")+homeworlds[CharData.Homeworld].Fate[1].toString();
	el.addEventListener("click", (event) => {
		  updateFate();
		  event.target.classList.add("clicked");
		  if(validateHPandFate()){
			  showNextBt();
		  }
		}, { once: true });
		
	nextDiv.appendChild(el);
	nextDiv.appendChild(document.createElement('br'));
	nextDiv.appendChild(document.createElement('br'));
	
	el = document.createElement('span');
	el.classList.add("rolled", "spFate");
	el.innerHTML = ((currentLanguage==='de') ? 'Gesamt Schicksal:': 'Total Fate:') + '<b id="totFate"></b>';
	nextDiv.appendChild(el);
	
	div.appendChild(nextDiv);
	
	nextDiv = document.createElement('div');
	
	nextDiv.classList.add("dataCardNext");
		
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  populateCopyChardata();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	
	container.appendChild(div);
}

function updateCorruption(data)
{
	const corruption = parseAndRollDice(data);
	CharData.Corruption = CharData.Corruption + corruption;
	return corruption;
}

function updateFate(){
	const baseFate = parseInt(homeworlds[CharData.Homeworld].Fate[0]);
	const bonus = rollDice(10);
	const totFate = baseFate + ((bonus >= homeworlds[CharData.Homeworld].Fate[1]) ?  1 : 0);
	document.getElementById("btFate").textContent = ((currentLanguage==='de')? "Ergebnis:" : "rolled: ")+bonus.toString();
	CharData.Fate  = totFate; 
	document.getElementById("totFate").textContent = +CharData.Fate.toString()
}
function updateWounds(){
	const baseHp = parseInt(homeworlds[CharData.Homeworld].Wounds.substring(1, '+'))
	const bonus = rollDice(5);
	document.getElementById("btWounds").textContent = ((currentLanguage==='de')? "Ergebnis:" : "rolled:")+bonus.toString();
	CharData.HP = baseHp+bonus;
	document.getElementById("totWounds").textContent = CharData.HP.toString()
}

function parseAndRollDice(diceString)
{
	const regex = /^([+-]?\d+)?(?:([+-]?\d+)d(\d+))([+-]\d+)?$/;
    const match = diceString.match(regex);
	let result = 0;
	
	if (!match) {
        throw new Error("Invalid dice string format");
    }	
	const preModifier = match[1] ? parseInt(match[1], 10) : 0; // Modifier before XdX
    const numOfDice = match[2] ? parseInt(match[2], 10) : 1;   // Number of dice (default to 1)
    const diceValue = parseInt(match[3], 10);                 // Value of dice
    const postModifier = match[4] ? parseInt(match[4], 10) : 0; // Modifier after XdX
	
	let modifier = 0;
    let modifierPosition = null;

    if (preModifier) {
        modifier = preModifier;
        modifierPosition = "before";
    }
    if (postModifier) {
        modifier = postModifier;
        modifierPosition = "after";
    }
	
	for(let i = 0; i < Math.abs(numOfDice); i++){
		result = result + rollDice(diceValue);
	}
	
	result = ((modifierPosition==='before') ? modifier + (result * Math.sign(numOfDice)) : result + modifier);
	return ((result<1)? 1 : result);
	
}

function rollNewMutation(mainTd, descTd, rollType)
{
	let i = 0;
	
	let result = ''
	
	do {  
	  result = getMutationKeyByRoll(parseAndRollDice(rollType));
	  i++;
	} while (i < 50 && CharData.Mutations.includes(result));
	
	CharData.Mutations.push(result);
	document.getElementById(mainTd).textContent = ((currentLanguage==='de')? Mutations[result].NameDe : Mutations[result].Name);
	document.getElementById(descTd).textContent = ((currentLanguage==='de')? Mutations[result].EffectDe : Mutations[result].Effect);
	
}

function rollMalignancy()
{
	let i = 0;
	let result = ''
	
	do {  
	  result = getMalignancyKeyByRoll(parseAndRollDice("1d100"));
	  i++;
	} while (i < 50 && (CharData.Malignancies.includes(result)));
	
	CharData.Malignancies.push(result);
	return result;
}

function rollMalignancyTest()
{
	const wpObject = CharData.Stats.find(item => item.value === "WP");
	const WPTotal = wpObject.base + wpObject.brBonus + wpObject.moBonus + wpObject.rolledValues;
	
	const dRes = rollDice(100);

	return [(dRes <= WPTotal), dRes];
}

function getMalignancyKeyByRoll(roll) {
    let resultKey = null;
    let lowestMinRoll = 1;
    let highestMaxRoll = 1;
    let lowestKey = null;
    let highestKey = null;

    for (const [key, malignancy] of Object.entries(Malignancies)) {
        const { from, to } = malignancy;

        // Update lowest and highest keys
        if (from < lowestMinRoll) {
            lowestMinRoll = from;
            lowestKey = key;
        }
        if (to > highestMaxRoll) {
            highestMaxRoll = to;
            highestKey = key;
        }

        // Check if roll is within range
        if (roll >= from && roll <= to) {
            resultKey = key;
        }
    }

    // Determine fallback if no match
    if (resultKey === null) {
        if (roll < lowestMinRoll) {
            return lowestKey;
        } else {
            return highestKey;
        }
    }

    return resultKey;
}

function getMutationKeyByRoll(roll) {
    let resultKey = null;
    let lowestMinRoll = 1;
    let highestMaxRoll = 1;
    let lowestKey = null;
    let highestKey = null;

    for (const [key, mutation] of Object.entries(Mutations)) {
        const { MinRoll, MaxRoll } = mutation;

        // Update lowest and highest keys
        if (MinRoll < lowestMinRoll) {
            lowestMinRoll = MinRoll;
            lowestKey = key;
        }
        if (MaxRoll > highestMaxRoll) {
            highestMaxRoll = MaxRoll;
            highestKey = key;
        }

        // Check if roll is within range
        if (roll >= MinRoll && roll <= MaxRoll) {
            resultKey = key;
        }
    }

    // Determine fallback if no match
    if (resultKey === null) {
        if (roll < lowestMinRoll) {
            return lowestKey;
        } else {
            return highestKey;
        }
    }

    return resultKey;
}

function updatePoints(data,rollData){
	data.forEach(dataArray => {
		if(Array.isArray(dataArray) && dataArray.length === 2)
		{
			if(dataArray[1] === 'IP'){
				CharData.Insanity = CharData.Insanity + dataArray[0];
			}else if(dataArray[1] ==='CP'){
				CharData.Corruption = CharData.Corruption + dataArray[0];
			}
		}
	});
    
	rollData.forEach(dataArray => {
		if(Array.isArray(dataArray))
		{
			dataArray.forEach(entry => {
				choices.Corruption.push(entry);
			});
		}
		
    });
}

function updateTraumaAndMalig(){
	
	let noOfDisorders = 0;
	let noOfMalignancies = 0;
	
	const hwT = hwAbilities[CharData.Homeworld];
	const caT = careerOpts[CharData.Career];
	const bgT = backgrounds[CharData.Background];
	const rT  = roles[CharData.Role];
	const brT = birthrights[CharData.Birthright].options[CharData.BRDetail];
	const luT = lure[CharData.Lure].options[CharData.LureDetail];
	const trT = trials[CharData.Trial].options[CharData.TrialDetail];
	
	noOfDisorders = (("Disorder" in hwT)? hwt.Disorder : 0)+
		(("Disorder" in caT)? caT.Disorder : 0)+
		(("Disorder" in bgT)? bgT.Disorder : 0)+
		(("Disorder" in rT )?  rT.Disorder : 0)+
		(("Disorder" in brT)? brT.Disorder : 0)+
		(("Disorder" in luT)? luT.Disorder : 0)+
		(("Disorder" in trT)? trT.Disorder : 0)+
		Math.floor(CharData.Insanity / 30)
	
		
	noOfMalignancies = (("Malignancy" in hwT)? hwt.Malignancy : 0)+
		(("Malignancy" in caT)? caT.Malignancy : 0)+
		(("Malignancy" in bgT)? bgT.Malignancy : 0)+
		(("Malignancy" in rT )?  rT.Malignancy : 0)+
		(("Malignancy" in brT)? brT.Malignancy : 0)+
		(("Malignancy" in luT)? luT.Malignancy : 0)+
		(("Malignancy" in trT)? trT.Malignancy : 0);
	
	choices.Malignancies = noOfMalignancies;
	choices.MalignanciyTests = Math.floor(CharData.Corruption / 10);
	choices.Disorders = noOfDisorders;
}

function chooseTraumaAndMalig(){
	clearContentDivs();
	CharData.Malignancies= [];
	CharData.Traumas= [];
	choices.Malignancies = 0;
	choices.Traumas= 0;
	choices.MalignanciyTests = 0;
	
	updateTraumaAndMalig();
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? disordersText.InfoTextDe : disordersText.InfoText)}</div>`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardPtsSelect");
	
	nextDiv.appendChild(document.createElement('br'));
	
	
	
	if(choices.Disorders > 0)
	{
		let el = document.createElement('h2');
		
		el.textContent = ((currentLanguage==='de') ? 'Psychische Störungen': 'Mental Disorders');
		nextDiv.appendChild(el);
		nextDiv.appendChild(document.createElement('br'));
		el = document.createElement('p');
		el.classList.add("spDisorder");
		el.textContent = ((currentLanguage==='de') ? 'Du startest das spiel mit '+choices.Disorders.toString()+ ' Psychischen Störungen. Dies müssen mit dem GM ausgemacht werden.' : 'You start the game with ') + choices.Disorders.toString()+ ' mental disorders. Consult with the DM.';
		nextDiv.appendChild(el);
		nextDiv.appendChild(document.createElement('br'));
	}
	
	if(choices.Malignancies > 0 || choices.MalignanciyTests > 0)
	{
		let el = document.createElement('h2');
		el.textContent = ((currentLanguage==='de') ? 'Verderbniserscheinung': 'Malignancies');
		nextDiv.appendChild(el);
		nextDiv.appendChild(document.createElement('br'));
		nextDiv.appendChild(document.createElement('br'));
	}
	
	for(let i = 0; i < choices.Malignancies; i++)
	{
		let mTDiv = document.createElement("div");
		mTDiv.classList.add("divmtest");
		
		let el = document.createElement("button");
		el.classList.add("btRollMalig","choice");
		el.id = "btMalig"+i.toString(); 
		el.textContent = ((currentLanguage==='de')? "Rolle Malignität" : "roll Malignancy");
		el.txtId = "txtMalig"+i.toString();
		el.addEventListener("click", (event) => {
			  const result = rollMalignancy();
			event.target.classList.add("clicked");
			event.target.classList.remove("choice");
			event.target.textContent = ((currentLanguage==='de')? Malignancies[result].NameDe : Malignancies[result].Name);
			document.getElementById(event.target.txtId).textContent = ((currentLanguage==='de') ? Malignancies[result].EffectDe : Malignancies[result].Effect);
			if(validateSelections())
			{
				showNextBt();
			}
			  
		}, { once: true });
			
		mTDiv.appendChild(el);
		mTDiv.appendChild(document.createElement('br'));
		el = document.createElement("p");
		el.classList.add("resMalig");
		let resTxt = document.createElement('b');
		resTxt.id = "txtMalig"+i.toString();
		el.appendChild(resTxt);
		mTDiv.appendChild(el);
		mTDiv.appendChild(document.createElement('br'));
		mTDiv.appendChild(document.createElement('br'));
		
		nextDiv.appendChild(mTDiv);
	}
	
	for(let i = 0; i < choices.MalignanciyTests; i++)
	{
		let mTDiv = document.createElement("div");
		mTDiv.classList.add("divmtest");
		el = document.createElement("button");
		el.classList.add("btRollMalig","choice");
		el.id = "btMaligTest"+i.toString(); 
		el.textContent = ((currentLanguage==='de')? "Rolle Malignitäten Test" : "roll Malignancies-Test");
		el.fBtId = "btMaligFtest"+i.toString();
		el.addEventListener("click", (event) => {
			const result = rollMalignancyTest();
			event.target.classList.add("clicked");
			event.target.classList.remove("choice");
			event.target.textContent = ((currentLanguage==='de')? "Ergebnis: " : "result:  ")+result[1].toString() + ' | '+
				((currentLanguage==='de')? ((result[0])? "Bestanden" : 'Nicht Bestanden') : ((result[0])? "passed" : 'failed'));
			if(!result[0])
			{
				document.getElementById(event.target.fBtId).classList.remove("hidden","clicked");
				document.getElementById(event.target.fBtId).classList.add("choice");
			} else {
				if(validateSelections())
				{
					showNextBt();
				}
			}
			  
		}, { once: true });
			
		mTDiv.appendChild(el);
		
		el = document.createElement("button");
		el.classList.add("btRollMalig","hidden","clicked");
		el.id = "btMaligFtest"+i.toString(); 
		el.textContent = ((currentLanguage==='de')? "Rolle Verderbniserscheinung" : "roll Malignancies");
		el.txtId = "txtMaligFtest"+i.toString();
		el.txtId = "txtMaligFtest"+i.toString();
		el.addEventListener("click", (event) => {
			const result = rollMalignancy();
			event.target.classList.add("clicked");
			event.target.classList.remove("choice");
			event.target.textContent = ((currentLanguage==='de')? Malignancies[result].NameDe : Malignancies[result].Name);
			document.getElementById(event.target.txtId).textContent = ((currentLanguage==='de') ? Malignancies[result].EffectDe : Malignancies[result].Effect);
			if(validateSelections())
			{
				showNextBt();
			}
			  
			}, { once: true });
			
		mTDiv.appendChild(el);
		
		el = document.createElement("p");
		el.classList.add("txtMaligFtest");
		el.id = "txtMaligFtest"+i.toString();
		mTDiv.appendChild(el);
		mTDiv.appendChild(document.createElement('br'));
		nextDiv.appendChild(mTDiv);
	}
		
	div.appendChild(nextDiv);
	
	nextDiv = document.createElement('div');
	
	nextDiv.classList.add("dataCardNext");
		
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  chooseHealthAndFate();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
	
	if(validateSelections())
	{
		showNextBt();
	}
}

function chooseInsanityAndCorruption(){
	
	clearContentDivs();
	CharData.Insanity = 0;
	CharData.Corruption= 0;
	choices.Corruption= [];
	
	const hwT = hwAbilities[CharData.Homeworld];
	const caT = careerOpts[CharData.Career];
	const bgT = backgrounds[CharData.Background];
	const rT  = roles[CharData.Role];
	const brT = birthrights[CharData.Birthright].options[CharData.BRDetail];
	const luT = lure[CharData.Lure].options[CharData.LureDetail];
	const trT = trials[CharData.Trial].options[CharData.TrialDetail];

	updatePoints([
			(("PType" in hwT)? [hwT.Points,hwT.PType] : []),
			(("PType" in caT)? [caT.Points,caT.PType] : []),
			(("PType" in bgT)? [bgT.Points,bgT.PType] : []),
			(("PType" in rT )? [rT.Points,rT.PType] : []),
			(("PType" in brT)? [brT.Points,brT.PType] : []),
			(("PType" in luT)? [luT.Points,luT.PType] : []),
			(("PType" in trT)? [trT.Points,trT.PType] : [])
		],  [
			(("Corruption" in hwT)? [hwT.Corruption] : []),
			(("Corruption" in caT)? [caT.Corruption] : []),
			(("Corruption" in bgT)? [bgT.Corruption] : []),
			(("Corruption" in rT )? [rT.Corruption] : []),
			(("Corruption" in brT)? [brT.Corruption] : []),
			(("Corruption" in luT)? [luT.Corruption] : []),
			(("Corruption" in trT)? [trT.Corruption] : [])
		]);
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">${((currentLanguage==='de') ? ipCptexts.InfoTextDe : ipCptexts.InfoText)}</div>`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardPtsSelect","cntr");
	
	nextDiv.appendChild(document.createElement('br'));
	
	var el = document.createElement('h2');
	el.textContent = ((currentLanguage==='de') ? 'Wahnsinnspunkte': 'Insanity Points');
	nextDiv.appendChild(el);
	
	el = document.createElement('span');
	el.classList.add("rolled", "spInsanity");
	el.innerHTML = ((currentLanguage==='de') ? 'Basis Wahnsinnspunkte:': 'Base Insanity Points:') + '<b>'+CharData.Insanity.toString()+'</b>';
	
	nextDiv.appendChild(el);
	nextDiv.appendChild(document.createElement('br'));
	nextDiv.appendChild(document.createElement('br'));
	
	el = document.createElement('span');
	el.classList.add("rolled", "spInsanity");
	el.innerHTML = ((currentLanguage==='de') ? 'Gesamt Wahnsinnspunkte:': 'Total Insanity Points:') + '<b id="totInsanity">'+CharData.Insanity.toString()+'</b>';
	nextDiv.appendChild(el);
	
	
	
	el = document.createElement('h2');
	el.textContent = ((currentLanguage==='de') ? 'Korruptions Punkte': 'Corruption Points');
	nextDiv.appendChild(el);
	
	el = document.createElement('span');
	el.classList.add("rolled", "spInsanity");
	el.innerHTML = ((currentLanguage==='de') ? 'Basis Korruptions Punkte:': 'Base Corruption Points:') + '<b>'+CharData.Corruption.toString()+'</b>';
	
	nextDiv.appendChild(el);
	nextDiv.appendChild(document.createElement('br'));
	nextDiv.appendChild(document.createElement('br'));
	
	choices.Corruption.forEach((value, index) =>
		{
			el = document.createElement("button");
			el.classList.add("btRollBig", "btMargin","choice");
			el.id = "btCorruption"+index.toString(); 
			el.textContent = ((currentLanguage==='de')? "Rolle " : "roll ")+value;
			el.RollData = value;
			el.addEventListener("click", (event) => {
				event.target.classList.add("clicked");
				event.target.classList.remove("choice");
				const result = updateCorruption(event.target.RollData);
				event.target.textContent = ((currentLanguage==='de')? "Ergebnis: " : "result:  ")+result.toString();;
				document.getElementById("totCorruption").textContent = CharData.Corruption;
				if(validateSelections())
				{
					showNextBt();
				}
				  
			}, { once: true });
				
			nextDiv.appendChild(el);
			nextDiv.appendChild(document.createElement('br'));
			nextDiv.appendChild(document.createElement('br'));
		}
	);
	
	
	el = document.createElement('span');
	el.classList.add("rolled", "spInsanity");
	if(choices.Corruption.length === 0){
		el.innerHTML = ((currentLanguage==='de') ? 'Gesamt Korruptions Punkte:': 'Total Corruption Points:') + '<b id="totCorruption">'+CharData.Corruption.toString()+'</b>';
	}
	else {
		el.innerHTML = ((currentLanguage==='de') ? 'Gesamt Korruptions Punkte:': 'Total Corruption Points:') + '<b id="totCorruption"></b>';
	}
	
	nextDiv.appendChild(el);
	
	div.appendChild(nextDiv);
	
	nextDiv = document.createElement('div');
	
	nextDiv.classList.add("dataCardNext");
		
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  chooseTraumaAndMalig();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);	
	
	if(validateSelections())
	{
		showNextBt();
	}
}



function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1;
    }

function rollStatWithMod(modifier) {
	const nums = [rollDice(10), rollDice(10), rollDice(10)];
		
    if (modifier === 1) {
        nums.sort((a, b) => b - a); // Sort descending
    } else if (modifier === -1){
        nums.sort((a, b) => a - b); // Sort ascending
    } 
	return nums[0] + nums[1];
}

function hideinfoCardBts(){
	document.getElementById("infoCardBts").innerHTML ="";
}

function hideRerolls(){
	document.querySelectorAll(".btReroll").forEach(entry => entry.classList.add("hidden"));
}

function showNextBt(){
	document.querySelectorAll(".btNext.hidden").forEach(entry => entry.classList.remove("hidden"));
	document.querySelectorAll(".prRest").forEach(entry => entry.classList.add("hidden"));
}

function hideNextBt(){
	document.querySelectorAll(".btNext").forEach(entry => entry.classList.add("hidden"));
	document.querySelectorAll(".prRest.hidden").forEach(entry => entry.classList.remove("hidden"));
}


function showRestPoint(){
	document.querySelectorAll(".prRest.hidden").forEach(entry => entry.classList.remove("hidden"));
}

function rollStats()
{
	document.querySelectorAll(".btReroll.hidden").forEach(entry => entry.classList.remove("hidden"));
	for (let i = 0; i < CharData.Stats.length; i++) {
		CharData.Stats[i].rolledValues = rollStatWithMod(CharData.Stats[i].mod);
		var classes = ".tdIncr."+CharData.Stats[i].value;
		document.querySelectorAll(classes).forEach(entry => entry.textContent = "+"+CharData.Stats[i].rolledValues.toString());
		
		refreshTotals(i);
		hideinfoCardBts();
		showNextBt();
	}
}

function refreshTotals(index){
	var classes = ".tdRes."+CharData.Stats[index].value;
	
	document.querySelectorAll(classes).forEach(entry => entry.textContent = 
			(CharData.Stats[index].brBonus+CharData.Stats[index].moBonus+
			CharData.Stats[index].rolledValues+CharData.Stats[index].base).toString());
	const freePts = getFreeStatPoints();
	if(freePts===0)
	{
		showNextBt();
	}else{
		hideNextBt();
	}
	
	document.querySelectorAll(".prRest").forEach(entry => entry.textContent=freePts);

}

function getFreeStatPoints(){
	return 100 - (CharData.Stats.reduce((total, entry) => {
        return total + (entry.rolledValues);
    }, 0));
}

function enablePtBuy()
{
	document.querySelectorAll(".tbBuys.hidden").forEach(entry => entry.classList.remove("hidden"));
	hideinfoCardBts();
	for (let i = 0; i < CharData.Stats.length; i++) {
		refreshTotals(i);
	}
	
	hideinfoCardBts();
	showRestPoint();
	
}

function generateStatSelection() {
	clearContentDivs();
	CharData.Stats = [];
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `<div class="infotext">
		${((currentLanguage==='de') ? characteristicsTexts.InfoTextDe : characteristicsTexts.InfoText)}
		</div>
		<div class="infoCardBts" id="infoCardBts">
		<hr>
		<button class="rollBt" id="btRoll" onclick="rollStats()">${((currentLanguage === 'de') ? characteristicsTexts.rollBtTextDe : characteristicsTexts.rollBtText)}</button>
		<hr>
		<button class="ptBuyBt" id="ptBuyBt" onclick="enablePtBuy()">${((currentLanguage === 'de') ? characteristicsTexts.ptBuyBtTextDe : characteristicsTexts.ptBuyBtText)}</button>
		</div>
		<p></p>
	`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table // Create the table
	table.classList.add("twctab");
	const tHead = document.createElement('tHead'); // Create the header
	const htr = document.createElement('tr');
	var th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Charakteristika' : 'Characteristics');
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Basis' : 'Base');
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Bonus';
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = ((currentLanguage==='de') ? 'Vergabe' : 'Increase');
	htr.appendChild(th);
	th = document.createElement('th');
	htr.appendChild(th);
	th = document.createElement('th');
	th.textContent = 'Total';
	htr.appendChild(th);
	tHead.appendChild(htr);
	table.appendChild(tHead);
	
	
	const tbody = document.createElement('tbody'); // Create the tbody

	for (let i = 0; i < charLists.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		var isNeg = 0;
		var isPos = 0;
		
		CharData.Stats.push({ value: charLists[i], base: 25, brBonus:0, moBonus: 0, rolledValues: 0, mod: 0 });
		
		td.classList.add('tdStat');
		td.textContent = getTranslatedApts(charLists[i],currentLanguage);
		if(homeworlds[CharData.Homeworld].NegChars == charLists[i]){
			td.classList.add('stNeg');
			CharData.Stats.find(entry => entry.value === charLists[i]).mod=-1;
			isNeg = 1;
		}
		if(homeworlds[CharData.Homeworld].PosChars.includes(charLists[i])){
			td.classList.add('stPos');
			CharData.Stats.find(entry => entry.value === charLists[i]).mod=1;
			isPos = 1;
		}
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdBase');
		td.textContent = '25';
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdBonus');
			var bonus = 0;
			if(birthrights[CharData.Birthright].options[CharData.BRDetail].stat == charLists[i]){
				CharData.Stats.find(entry => entry.value === charLists[i]).brBonus=5;
				bonus = 5;
			}
			if(motivations[CharData.Motivation].options[CharData.MotivationDetail].stat == charLists[i]){
				bonus+=5;
				CharData.Stats.find(entry => entry.value === charLists[i]).moBonus=5;
			}
			if(bonus > 0)
			{
				td.textContent = '+'+bonus.toString();
			}
		tr.appendChild(td);
				
		td = document.createElement('td');
		td.classList.add('tdIncr');
		td.classList.add(charLists[i]);
		td.textContent = '';
		
		const txBx = document.createElement("input");
		txBx.type = "number";
		txBx.classList.add("tbBuys","hidden");
		txBx.min = "0";
		txBx.max = "15";
		txBx.value = "0";
		
		txBx.MaxValue = (15 + (isPos * 5)) - (isNeg * 5);
		txBx.ArrIndex = i;
		
		txBx.addEventListener("input", (event) => {
		  let value = parseInt(event.target.value, 10); // Convert to an integer
		  CharData.Stats.find(entry => entry.value === charLists[i]).rolledValues=0;
		  let maxVal = ((event.target.MaxValue > getFreeStatPoints())? getFreeStatPoints() : event.target.MaxValue);
		  if (isNaN(value)) {
			event.target.value = "0"; // Default to 0 if the input is empty or invalid
		  } else if (value < 0) {
			event.target.value = "0"; // Set to minimum
		  } else if (value >maxVal) {
			event.target.value = maxVal; // Set to maximum
		  }
		  CharData.Stats.find(entry => entry.value === charLists[i]).rolledValues = parseInt(event.target.value, 0);
		  refreshTotals(event.target.ArrIndex);
		});
		td.appendChild(txBx);
		
		tr.appendChild(td);
		
		
		
		td = document.createElement('td');
		td.classList.add('tdReRoll');

		const bt = document.createElement("button");
		bt.classList.add("btReroll","hidden");
		bt.textContent = "reroll";
		bt.ArrIndex = i;
		bt.CurrMod = CharData.Stats[i].mod;
		bt.addEventListener("click", (event) => {
		  CharData.Stats[event.target.ArrIndex].rolledValues = rollStatWithMod(event.target.CurrMod);
		  var classes = ".tdIncr."+CharData.Stats[i].value;
		  document.querySelectorAll(classes).forEach(entry => entry.textContent = "+"+CharData.Stats[event.target.ArrIndex].rolledValues.toString());
		  refreshTotals(event.target.ArrIndex);
		  hideRerolls();
		  showNextBt();
		});
		td.appendChild(bt);
		tr.appendChild(td);
		
		
		
		
		td = document.createElement('td');
		td.classList.add('tdRes');
		td.classList.add(charLists[i]);
		td.textContent = '';
		tr.appendChild(td);
		
		tbody.appendChild(tr);
	}

	table.appendChild(tbody); // Append tbody to the table
	div.appendChild(table); // Append the table to the div

	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardNext");
	
	const pRest = document.createElement("p");
	pRest.classList.add("prRest","hidden");
	pRest.textContent = "0";
	nextDiv.appendChild(pRest);
	
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  generateAptitudeSelection();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
	
	
}

function updateAptitudes(data) {
    // Ensure CharData.Aptitudes is initialized as an array
    data.forEach(aptitudesArray => {
        aptitudesArray.forEach(value => {
            // Check if the value already exists in CharData.Aptitudes
            
			if(value.includes('|')){
				choices.Aptitudes.push(value);
			}
			else{
				const existingEntry = CharData.Aptitudes.find(entry => entry.value === value);
				if (existingEntry) {
					// If it exists, increment the amount
					existingEntry.amount += 1;
				} else {
					// If it doesn't exist, add a new entry with amount 1
					CharData.Aptitudes.push({ value: value, amount: 1 });
				}
			}
        });
    });
	//for all duplicates: Push Character choice.
	CharData.Aptitudes.filter(entry => entry.amount > 1).forEach(entry => {
		const resultString = Object.keys(Apts)
			.filter(key => key.length <= 3)
			.join('|');
			
		for(let i = 1; i < entry.amount; i++){
			choices.Aptitudes.push(resultString);
		}
		entry.amount =1;
	});
	
}

function populateCareers() {
	const container = document.getElementById('tiles');
	clearContentDivs();
	currentMenu = 1;
	
	var sortedCareersArray = Object.entries(careers).sort((a, b) => {
    return ((currentLanguage === 'de') 
        ? a[1].NAME_DE.localeCompare(b[1].NAME_DE) 
        : a[1].NAME.localeCompare(b[1].NAME));});
	

	// Convert sorted array back to object
	var sortedCareers = Object.fromEntries(sortedCareersArray);
	
	// Loop through the homeworlds object
	for (let key in sortedCareers) {
		if (careers.hasOwnProperty(key)) {
			const career = careers[key];
			
			const Ability = {"Name": "",
				"Effect": "",
				"Skills": [],
				"Talents": []
			}
			
			
			if(careerOpts.hasOwnProperty(key)){
				const cwAbt = careerOpts[key];
				Ability.Name = ((currentLanguage === 'de')? cwAbt.ANameDe : cwAbt.AbilityName);
				Ability.Effect = ((currentLanguage === 'de')? cwAbt.AEffectDe : cwAbt.AbilityEffect);
				Ability.Skills = parseSkills(cwAbt.Skills);
				Ability.Talents = parseTalents(cwAbt.Talents);
			}
			
			const labels = {
				"Aptitude":((currentLanguage === 'de')? "Eignungen" : "Aptitudes"),
				"Skills":((currentLanguage === 'de')? "Fähigkeiten" : "Skills"),
				"Talents":((currentLanguage === 'de')? "Talente" : "Talents")
			}

			// Create a div for each homeworld
			const div = document.createElement('div');
			
			div.classList.add('tile');
			div.classList.add('career');
			if(CharData["Career"] === key){
				div.classList.add('selected');
			}
			
			div.addEventListener("click", addCareer,false);
			div.dType="Career";
			div.data=key;
			div.addEventListener("cr_sel",removeSelection,false);

			// Add content to the div
			div.innerHTML = `
				<img src="images/careers/${career.IMAGE}" alt="${career.IMAGE}">
				<h2>${((currentLanguage === 'de') ? career.NAME_DE : career.NAME)}</h2>
				<p class="desc">${((currentLanguage === 'de') ? career.Descritpion_DE : career.Description)}</p>
				<hr>
				<p class="stats"><strong>${labels.Aptitude}: </strong>${getTranslatedApts(career.Apt,currentLanguage)}</p>
				<hr>
				<p class="stats"><strong>${labels.Skills}</strong></br></br>${Ability.Skills.join('</br>')}</p>
				<hr>
				<p class="stats"><strong>${labels.Talents}</strong></br></br>${Ability.Talents.join('</br>')}</p>
				<hr>
				<p class="stats"><strong>${Ability.Name}</strong></br></br> ${Ability.Effect}</p>
			`;
			container.appendChild(div);
		}
	}
}

function populateBackgrounds() {
	const container = document.getElementById('tiles');
	clearContentDivs();
	currentMenu = 3;
	
	var sortedBGArray = Object.entries(backgrounds).sort((a, b) => {
    return ((currentLanguage === 'de') 
        ? a[1].NAME_DE.localeCompare(b[1].NAME_DE) 
        : a[1].NAME.localeCompare(b[1].NAME));});
	

	// Convert sorted array back to object
	var sortedBG = Object.fromEntries(sortedBGArray);
	
	// Loop through the homeworlds object
	for (let key in sortedBG) {
		if (sortedBG.hasOwnProperty(key)) {
			const bg = sortedBG[key];
			
			const Ability = {"Name": ((currentLanguage === 'de')? bg.ANameDe : bg.AName),
				"Effect": ((currentLanguage === 'de')? bg.ADescDe : bg.ADesc)
			}
			
			
			const labels = {
				"Aptitude":((currentLanguage === 'de')? "Eignung" : "Aptitude"),
				"Skills":((currentLanguage === 'de')? "Fähigkeiten" : "Skills"),
				"Talents":((currentLanguage === 'de')? "Talente" : "Talents"),
				"Gear":((currentLanguage === 'de')? "Ausrüstung" : "Gear")
			}

			// Create a div for each homeworld
			const div = document.createElement('div');
			
			div.classList.add('tile');
			div.classList.add('background');
			if(CharData["Background"] === key){
				div.classList.add('selected');
			}
			div.addEventListener("click", addBackground,false);
			div.dType="Background";
			div.data=key;
			div.addEventListener("bg_sel",removeSelection,false);
			
			// Add content to the div
			div.innerHTML = `
				<img src="images/bgs/${bg.IMAGE}" alt="${bg.IMAGE}">
				<h2>${((currentLanguage === 'de') ? bg.NAME_DE : bg.NAME)}</h2>
				<p>${((currentLanguage === 'de') ? bg.Descritpion_DE : bg.Description)}</p>
				<hr>
				<p class="stats"><strong>${labels.Aptitude}: </strong>${getTranslatedApts(bg.Apts,currentLanguage).join('</br>')}</p>
				<hr>
				<p class="stats"><strong>${labels.Skills}</strong></br></br>${parseSkills(bg.Skills).join('</br>')}</p>
				<hr>
				<p class="stats"><strong>${labels.Talents}</strong></br></br>${parseTalents(bg.Talents).join('</br>')}</p>
				<hr>
				<p class="stats"><strong>${labels.Gear}</strong></br></br>${parseGear(bg.Gear).join('</br>')}</p>
				<hr>
				<p class="stats"><strong>${Ability.Name}</strong></br> ${Ability.Effect}</p>
			`;
			container.appendChild(div);
		}
	}
}

function populateRoles() {
	const container = document.getElementById('tiles');
	clearContentDivs();
	currentMenu = 4;
	
	var sortedArray = Object.entries(roles).sort((a, b) => {
    return ((currentLanguage === 'de') 
        ? a[1].NAME_DE.localeCompare(b[1].NAME_DE) 
        : a[1].NAME.localeCompare(b[1].NAME));});
	

	// Convert sorted array back to object
	var sorted = Object.fromEntries(sortedArray);
	
	// Loop through the object
	for (let key in sorted) {
		if (sorted.hasOwnProperty(key)) {
			const entry = sorted[key];
			
			const Ability = {"Name": ((currentLanguage === 'de')? entry.ANameDe : entry.AName),
				"Effect":  ((currentLanguage === 'de')? entry.ADescDe : entry.ADesc)
			}
			
			
			const labels = {
				"Aptitude":((currentLanguage === 'de')? "Eignungen" : "Aptitudes"),
				"Talents":((currentLanguage === 'de')? "Talente" : "Talents"),
			}

			// Create a div for each homeworld
			const div = document.createElement('div');
			
			div.classList.add('tile');
			div.classList.add('role');
			if(CharData["Role"] === key){
				div.classList.add('selected');
			}
			div.addEventListener("click", addRole,false);
			div.dType="Role";
			div.data=key;
			div.addEventListener("rl_sel",removeSelection,false);

			// Add content to the div
			div.innerHTML = `
				<img src="images/roles/${entry.IMAGE}" alt="${entry.IMAGE}">
				<h2>${((currentLanguage === 'de') ? entry.NAME_DE : entry.NAME)}</h2>
				<p>${((currentLanguage === 'de') ? entry.Descritpion_DE : entry.Description)}</p>
				<hr>
				<p class="stats"><strong>${labels.Aptitude}: </strong>${getTranslatedApts(entry.Aptitudes,currentLanguage).join(' or ')}</p>
				<hr>
				<p class="stats"><strong>${labels.Talents}</strong></br></br>${parseTalents(entry.Talents).join(',  ')}</p>
				<hr>
				<p class="stats"><strong>${Ability.Name}</strong></br> ${Ability.Effect}</p>
			`;
			container.appendChild(div);
		}
	}
}

function populateBirthrights() {
	clearContentDivs();
	
	const container = document.getElementById('tiles2');

	currentMenu = 5;
	
	var sortedArray = Object.entries(birthrights).sort((a, b) => {
    return ((currentLanguage === 'de') 
        ? a[1].nameDe.localeCompare(b[1].nameDe) 
        : a[1].name.localeCompare(b[1].name));});
	
	const labels = {
		"Skills":((currentLanguage === 'de')? "Fähigkeit: " : "Skill: "),
		"Talents":((currentLanguage === 'de')? "Talent: " : "Talent: ")
	}
	// Convert sorted array back to object
	var sorted = Object.fromEntries(sortedArray);
	
	// Loop through the object
	for (let key in sorted) {
		if (sorted.hasOwnProperty(key)) {
			const entry = sorted[key];
			
			const mDiv = document.createElement('div');
			mDiv.classList.add('originTiles');
			mDiv.classList.add(key);
			
			const hDiv = document.createElement('div');
			hDiv.classList.add('originHeaderTile');
			hDiv.style.backgroundImage = `url(images/birthrights/${entry.image})`;
			hDiv.innerHTML = `
				<h2 class="tHead">${((currentLanguage === 'de') ? entry.nameDe : entry.name)}</h2>
				<p class="pHead">${((currentLanguage === 'de') ? entry.labelDe : entry.label)}</p>
				<hr>
			`;
			
			mDiv.appendChild(hDiv);

			const div = document.createElement('div');
			div.classList.add('origTiles');
			div.classList.add('br_'+key);
					
			for (let subKey in entry.options) {
				if (entry.options.hasOwnProperty(subKey)) {
					const subEntry = entry.options[subKey];
					
					const subDiv = document.createElement('div');
					subDiv.classList.add('origtile');
					subDiv.classList.add('birthright');
					if(CharData["BRDetail"] === subKey){
						subDiv.classList.add('selected');
					}
					subDiv.dType="BRDetail";
					subDiv.data=subKey;
					subDiv.pDType="Birthright";
					subDiv.pData=key;
					
					subDiv.addEventListener("click", addBirthright,false);
					subDiv.addEventListener("br_sel",removeSelection,false);
					
					const subDivHead = document.createElement('div');
					subDivHead.classList.add('origtileHead');
					const subDivB = document.createElement('div');
					subDivB.classList.add('origtileBody');
					
					subDivHead.innerHTML = `
					<h2>${((currentLanguage === 'de') ? subEntry.nameDe : subEntry.name)}</h2>
					`;

					subDiv.appendChild(subDivHead);
					
					subDivB.innerHTML = `
					<p class="stats">${((currentLanguage === 'de') ? subEntry.labelDe : subEntry.label)}</p>
					<hr>
					<p class="stats"><b>+5 ${getTranslatedApts(subEntry.stat,currentLanguage).join('')}</b></p>
					`
					
					if(subEntry.skills.length > 0){
						subDivB.innerHTML+=`
						<p class="stats"><strong>${labels.Skills}</strong>${parseSkills(subEntry.skills).join(',  ')}</p>
						`;
					}
					if(subEntry.Talents.length > 0){
						subDivB.innerHTML+=`
						<p class="stats"><strong>${labels.Talents}</strong>${parseTalents(subEntry.Talents).join(',  ')}</p>
						`;
					}
					subDiv.appendChild(subDivB);
					div.appendChild(subDiv);
				}
			}
			mDiv.appendChild(div);
			container.appendChild(mDiv);	
		}
	}
}

function populateLures() {
	clearContentDivs();
	
	const container = document.getElementById('tiles2');

	currentMenu = 6;
	
	var sortedArray = Object.entries(lure).filter(([key]) => 
		((brLure.hasOwnProperty(CharData.Birthright)) ? brLure[CharData.Birthright].includes(key) : true)).sort((a, b) => {
			return ((currentLanguage === 'de') 
				? a[1].NameDe.localeCompare(b[1].NameDe) 
				: a[1].Name.localeCompare(b[1].Name));});
	
	const labels = {
		"Skills":((currentLanguage === 'de')? "Fähigkeit: " : "Skill: "),
		"Talents":((currentLanguage === 'de')? "Talent: " : "Talent: ")
	}
	// Convert sorted array back to object
	var sorted = Object.fromEntries(sortedArray);
	
	// Loop through the object
	for (let key in sorted) {
		if (sorted.hasOwnProperty(key)) {
			const entry = sorted[key];
			
			const mDiv = document.createElement('div');
			mDiv.classList.add('originTiles');
			mDiv.classList.add(key);
			
			const hDiv = document.createElement('div');
			hDiv.classList.add('originHeaderTile');
			//hDiv.style.backgroundImage = `url(images/birthrights/${entry.image})`;
			hDiv.innerHTML = `
				<h2 class="tHead">${((currentLanguage === 'de') ? entry.NameDe : entry.Name)}</h2>
				<p class="pHead">${((currentLanguage === 'de') ? entry.DescDe : entry.Desc)}</p>
				<hr>
			`;
			
			mDiv.appendChild(hDiv);

			const div = document.createElement('div');
			div.classList.add('origTiles');
			div.classList.add('lr_'+key);
					
			for (let subKey in entry.options) {
				if (entry.options.hasOwnProperty(subKey)) {
					const subEntry = entry.options[subKey];
					
					const subDiv = document.createElement('div');
					subDiv.classList.add('origtile');
					subDiv.classList.add('lure');
					if(CharData["LureDetail"] === subKey){
						subDiv.classList.add('selected');
					}
					subDiv.dType="LureDetail";
					subDiv.data=subKey;
					subDiv.pDType="Lure";
					subDiv.pData=key;
					
					subDiv.addEventListener("click", addLure,false);
					subDiv.addEventListener("lr_sel",removeSelection,false);
					
					const subDivHead = document.createElement('div');
					subDivHead.classList.add('origtileHead');
					const subDivB = document.createElement('div');
					subDivB.classList.add('origtileBody');
					
					subDivHead.innerHTML = `
					<h2>${((currentLanguage === 'de') ? subEntry.NameDe : subEntry.Name)}</h2>
					`;

					subDiv.appendChild(subDivHead);
					
					subDivB.innerHTML = `
					<p class="stats">${((currentLanguage === 'de') ? subEntry.DescDe : subEntry.Desc)}</p>
					<hr>
					<p class="stats"><b>+${subEntry.Points} ${subEntry.PType}</b></p>
					`
					//<p class="stats"><b>+5 ${getTranslatedApts(subEntry.stat,currentLanguage).join('')}</b></p>
					if(subEntry.Skills.length > 0){
						subDivB.innerHTML+=`
						<p class="stats"><strong>${labels.Skills}</strong>${parseSkills(subEntry.Skills).join(',  ')}</p>
						`;
					}
					if(subEntry.Talents.length > 0){
						subDivB.innerHTML+=`
						<p class="stats"><strong>${labels.Talents}</strong>${parseTalents(subEntry.Talents).join(',  ')}</p>
						`;
					}
					subDiv.appendChild(subDivB);
					div.appendChild(subDiv);
				}
			}
			mDiv.appendChild(div);
			container.appendChild(mDiv);	
		}
	}
}


function populateTrials() {
	clearContentDivs();
	
	const container = document.getElementById('tiles2');

	currentMenu = 7;
	
	var sortedArray = Object.entries(trials).filter(([key]) => 
		((lureTrials.hasOwnProperty(CharData.Lure)) ? lureTrials[CharData.Lure].includes(key) : true)).sort((a, b) => {
			return ((currentLanguage === 'de') 
				? a[1].NameDe.localeCompare(b[1].NameDe) 
				: a[1].Name.localeCompare(b[1].Name));});
	
	const labels = {
		"Skills":((currentLanguage === 'de')? "Fähigkeit: " : "Skill: "),
		"Talents":((currentLanguage === 'de')? "Talent: " : "Talent: ")
	}
	// Convert sorted array back to object
	var sorted = Object.fromEntries(sortedArray);
	
	// Loop through the object
	for (let key in sorted) {
		if (sorted.hasOwnProperty(key)) {
			const entry = sorted[key];
			
			const mDiv = document.createElement('div');
			mDiv.classList.add('originTiles');
			mDiv.classList.add(key);
			
			const hDiv = document.createElement('div');
			hDiv.classList.add('originHeaderTile');
			//hDiv.style.backgroundImage = `url(images/birthrights/${entry.image})`;
			hDiv.innerHTML = `
				<h2 class="tHead">${((currentLanguage === 'de') ? entry.NameDe : entry.Name)}</h2>
				<p class="pHead">${((currentLanguage === 'de') ? entry.DescDe : entry.Desc)}</p>
				<hr>
			`;
			
			mDiv.appendChild(hDiv);

			const div = document.createElement('div');
			div.classList.add('origTiles');
			div.classList.add('tr'+key);
					
			for (let subKey in entry.options) {
				if (entry.options.hasOwnProperty(subKey)) {
					const subEntry = entry.options[subKey];
					
					const subDiv = document.createElement('div');
					subDiv.classList.add('origtile');
					subDiv.classList.add('trial');
					if(CharData["TrialDetail"] === subKey){
						subDiv.classList.add('selected');
					}
					subDiv.dType="TrialDetail";
					subDiv.data=subKey;
					subDiv.pDType="Trial";
					subDiv.pData=key;
					
					subDiv.addEventListener("click", addTrial,false);
					subDiv.addEventListener("tr_sel",removeSelection,false);
					
					const subDivHead = document.createElement('div');
					subDivHead.classList.add('origtileHead');
					const subDivB = document.createElement('div');
					subDivB.classList.add('origtileBody');
					
					subDivHead.innerHTML = `
					<h2>${((currentLanguage === 'de') ? subEntry.NameDe : subEntry.Name)}</h2>
					`;

					subDiv.appendChild(subDivHead);
					
					subDivB.innerHTML = `
					<p class="stats">${((currentLanguage === 'de') ? subEntry.DescDe : subEntry.Desc)}</p>
					<hr>
					<p class="stats"><b>+${subEntry.Points} ${subEntry.PType}</b></p>
					`
					//<p class="stats"><b>+5 ${getTranslatedApts(subEntry.stat,currentLanguage).join('')}</b></p>
					if(subEntry.Skills.length > 0){
						subDivB.innerHTML+=`
						<p class="stats"><strong>${labels.Skills}</strong>${parseSkills(subEntry.Skills).join(',  ')}</p>
						`;
					}
					if(subEntry.Talents.length > 0){
						subDivB.innerHTML+=`
						<p class="stats"><strong>${labels.Talents}</strong>${parseTalents(subEntry.Talents).join(',  ')}</p>
						`;
					}
					subDivB.innerHTML+=`<hr>
						<h2 class="stats">${((currentLanguage === 'de') ? subEntry.ANameDe : subEntry.AName)}</h2>
						<p class="stats">${((currentLanguage === 'de') ? subEntry.ADescDe : subEntry.ADesc)}</p>
						`;
					subDiv.appendChild(subDivB);
					div.appendChild(subDiv);
				}
			}
			mDiv.appendChild(div);
			container.appendChild(mDiv);	
		}
	}
}

function populateMotivations() {
	clearContentDivs();
	
	const container = document.getElementById('tiles2');

	currentMenu = 8;
	
	var sortedArray = Object.entries(motivations).filter(([key]) => 
		((trialsMotivation.hasOwnProperty(CharData.Trial)) ? trialsMotivation[CharData.Trial].includes(key) : true)).sort((a, b) => {
			return ((currentLanguage === 'de') 
				? a[1].NameDe.localeCompare(b[1].NameDe) 
				: a[1].Name.localeCompare(b[1].Name));});
	
	const labels = {
		"Skills":((currentLanguage === 'de')? "Fähigkeit: " : "Skill: "),
		"Talents":((currentLanguage === 'de')? "Talent: " : "Talent: ")
	}
	// Convert sorted array back to object
	var sorted = Object.fromEntries(sortedArray);
	
	// Loop through the object
	for (let key in sorted) {
		if (sorted.hasOwnProperty(key)) {
			const entry = sorted[key];
			
			const mDiv = document.createElement('div');
			mDiv.classList.add('originTiles');
			mDiv.classList.add(key);
			
			const hDiv = document.createElement('div');
			hDiv.classList.add('originHeaderTile');
			//hDiv.style.backgroundImage = `url(images/birthrights/${entry.image})`;
			hDiv.innerHTML = `
				<h2 class="tHead">${((currentLanguage === 'de') ? entry.NameDe : entry.Name)}</h2>
				<p class="pHead">${((currentLanguage === 'de') ? entry.DescDe : entry.Desc)}</p>
				<hr>
			`;
			
			mDiv.appendChild(hDiv);

			const div = document.createElement('div');
			div.classList.add('origTiles');
			div.classList.add('mo_'+key);
					
			for (let subKey in entry.options) {
				if (entry.options.hasOwnProperty(subKey)) {
					const subEntry = entry.options[subKey];
					
					const subDiv = document.createElement('div');
					subDiv.classList.add('origtile');
					subDiv.classList.add('motivation');
					if(CharData["MotivationDetail"] === subKey){
						subDiv.classList.add('selected');
					}
					subDiv.dType="MotivationDetail";
					subDiv.data=subKey;
					subDiv.pDType="Motivation";
					subDiv.pData=key;
					
					subDiv.addEventListener("click", addMotivation,false);
					subDiv.addEventListener("mo_sel",removeSelection,false);
					
					const subDivHead = document.createElement('div');
					subDivHead.classList.add('origtileHead');
					const subDivB = document.createElement('div');
					subDivB.classList.add('origtileBody');
					
					subDivHead.innerHTML = `
					<h2>${((currentLanguage === 'de') ? subEntry.NameDe : subEntry.Name)}</h2>
					`;

					subDiv.appendChild(subDivHead);
					
					subDivB.innerHTML = `
					<p class="stats">${((currentLanguage === 'de') ? subEntry.DescDe : subEntry.Desc)}</p>
					<hr>
					<p class="stats"><b>+5 ${getTranslatedApts(subEntry.stat,currentLanguage).join('')}</b></p>
					<hr>
					<h2 class="stats">${((currentLanguage === 'de') ? subEntry.ANameDe : subEntry.AName)}</h2>
					<p class="stats">${((currentLanguage === 'de') ? subEntry.ADescDe : subEntry.ADesc)}</p>
					`;
					subDiv.appendChild(subDivB);
					div.appendChild(subDiv);
				}
			}
			mDiv.appendChild(div);
			container.appendChild(mDiv);	
		}
	}
}