let currentLanguage = 'en';
let currentMenu = 0;
	  
function setLanguage(language) {
	currentLanguage = language;
	document.querySelector('h1').innerText = currentLanguage === 'en' 
	  ? 'Warhammer 40k Character Builder' 
	  : 'Warhammer 40k Charaktergenerator';

	refresh();

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

    // If no dropdowns exist, return true
    if (dropdowns.length === 0) {
        return true;
    }

    // Check that every dropdown has a non-empty value
    return Array.from(dropdowns).every(dropdown => dropdown.value !== "");
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
	
	div.innerHTML = `${((currentLanguage==='de') ? aptitudesTexts.InfoTextDe : aptitudesTexts.InfoText)}`;
	container.appendChild(div);
	
	div = document.createElement('div');
		
	div.classList.add('dataCard');
	
	const tab = document.createElement('table');
	const tbody = document.createElement('tbody'); // Create the tbody

	for (let i = 0; i < choices.Aptitudes.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		const apts = choices.Aptitudes[i].split('|');
		const aptFiltered = apts.filter(key => !CharData.Aptitudes.some(obj => obj.value === key));
		
		if(aptFiltered.length === 0){
			aptFiltered = Object.keys(Apts).filter(
					key => !(CharData.Aptitudes.some(obj => obj.value === key) && key.length <= 3)
				);
		}
		if(aptFiltered.length === 1){
			td.textContent = getTranslatedApts(aptFiltered[0]);
		}else{
			var dropDown = document.createElement('select');
			dropDown.id = 'selApt'+i.toString();
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
			  if(validateSelections()){
				showNextBt();
			  }
			});
			
			td.appendChild(dropDown);
		}

		tr.appendChild(td);
		tbody.appendChild(tr);
	}
	for (let i = 0; i < CharData.Aptitudes.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.textContent = getTranslatedApts(CharData.Aptitudes[i].value,currentLanguage);
		
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
	console.log('ToDo');
}

function getTranslatedSkills(input) {
	const result = [];
	const base = splitInputWithOptions(input);

	for(let i = 0; i < base.length; i++){
		let resString = ((currentLanguage === 'de') ? (skills[base[i][0]].NameDe) : (skills[base[i][0]].Name));
		if(base[i][1] !== "")
		{
			if(base[i][1] in skills[base[i][0]].SkillGroups){
				const currGrp = skills[base[i][0]].SkillGroups[base[i][1]];
				currGrp.forEach(item => {
					const res = resString+"("+((currentLanguage === 'de') ? (groups[item].NameDe) : (groups[item].Name))+")";
					result.push(res);
				});
			}
			else{
					resString+="("+((currentLanguage === 'de') ? (groups[base[i][1]].NameDe) : (groups[base[i][1]].Name))+")";
					result.push(resString);
			}
			
		}else {
		result.push(resString);
		}
	}
	return result;
}

function getTranslatedGear(input) {
	const result = [];
	const base = splitInputWithOptions([input[0],input[1]]);

	for(let i = 0; i < base.length; i++){
		let resString = ((currentLanguage === 'de') ? (Gear[base[i][0]].NameDe) : (Gear[base[i][0]].Name));
		if(base[i][1] !== "")
		{
			resString+=((currentLanguage === 'de') ? (GearGroups[base[i][1]].NameDe) : (GearGroups[base[i][1]].Name));
			result.push(resString);
		}
		else {
		result.push(resString);
		}
	}
	return result;
}

function getTranslatedImplants(input) {
	const result = [];

	const filteredItems = Object.values(implants).filter(item => item.Type === input[0]);
	
	filteredItems.forEach(item => {
		result.push(((currentLanguage === 'de') ? (item.NameDe) : (item.Name)));
	});
	
	return result;
}

function getTranslatedTalents(input) {
	const result = [];
	const base = splitInputWithOptions(input);

	for(let i = 0; i < base.length; i++){
		let resString = ((currentLanguage === 'de') ? (talents[base[i][0]].NameDe) : (talents[base[i][0]].Name));
		if(base[i][1] !== "")
		{
			if(base[i][1] in talents[base[i][0]].TalentGroups){
				const currGrp = talents[base[i][0]].TalentGroups[base[i][1]];
				currGrp.forEach(item => {
					const res = resString+"("+((currentLanguage === 'de') ? (groups[item].NameDe) : (groups[item].Name))+")";
					result.push(res);
				});
			}
			else{
					resString+="("+((currentLanguage === 'de') ? (groups[base[i][1]].NameDe) : (groups[base[i][1]].Name))+")";
					result.push(resString);
			}
			
		}else {
		result.push(resString);
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
		if (!secondParts.includes("@@")) {
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
				CharData.Talents.push(["ERROR"])
			}
			
			if(currSkills.length > 1)
			{
				choices.Skills.push(currSkills);
			}
			else{
				const existingEntry = CharData.Skills.find(entry => entry.value === currSkills[0]);
				if (existingEntry) {
					existingEntry.amount += 1;
				} else {
					CharData.Skills.push({ value: currSkills[0], amount: 1 });
				}
				
			}
			
        });
    });
}

function updateMutations(data)
{
	console.log(data);
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
				console.log(value);
				console.log("Error");
				CharData.Implants.push(["ERROR"])
			}
			
			if(currimpl.length > 1)
			{
				console.log(currimpl);
				choices.Implants.push({ value: currimpl, qualitiy: value[1] });
			}
			else{
				CharData.Implants.push({ value: currimpl[0], qualitiy: value[1] });
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
				const existingEntry = CharData.Talents.find(entry => entry.value === currTalents[0]);
				if (existingEntry) {
					existingEntry.amount += 1;
				} else {
					CharData.Talents.push({ value: currTalents[0], amount: 1 });
				}
				
			}
			
        });
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
	
	div.innerHTML = `${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table
	const tHead = document.createElement('tHead'); // Create the header
	const htr = document.createElement('tr');
	var th = document.createElement('th');
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
		
		td.classList.add('tdStat');
		
		const filteredChoices = currChoices[i];
		
		if(filteredChoices.length === 1){
			td.textContent = filteredChoices[0];
		}else{
			var dropDown = document.createElement('select');
			dropDown.id = 'selTal'+i.toString();
			const placeholder = document.createElement('option');
			placeholder.textContent = '---';
			placeholder.value = "";
			placeholder.disabled = true;
			placeholder.selected = true;
			dropDown.appendChild(placeholder);
			
			filteredChoices.forEach(tal => {
			const option = document.createElement('option');
			option.value = tal;
			option.textContent = tal;
			dropDown.appendChild(option);
			});
			
			dropDown.addEventListener("change", (event) => {
			  if(validateSelections()){
				showNextBt();
			  }
			});
			
			td.appendChild(dropDown);
		}
		
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
		tr.appendChild(td);
		
		
		tbody.appendChild(tr);
	}
	
	const selTalents = CharData.Talents;
	for (let i = 0; i < selTalents.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdStat');
		
		const filteredChoices = selTalents[i];
		
		td.textContent = filteredChoices.value;
		
		tr.appendChild(td);
		td = document.createElement('td');
		
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
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
		  chooseSkills();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
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
	
	div.innerHTML = `${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table
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
		
		td.classList.add('tdStat');
		
		const filteredChoices = currChoices[i];
		
		if(filteredChoices.length === 1){
			td.textContent = filteredChoices[0];
		}else{
			var dropDown = document.createElement('select');
			dropDown.id = 'selSkill'+i.toString();
			const placeholder = document.createElement('option');
			placeholder.textContent = '---';
			placeholder.value = "";
			placeholder.disabled = true;
			placeholder.selected = true;
			dropDown.appendChild(placeholder);
			
			filteredChoices.forEach(skill => {
			const option = document.createElement('option');
			option.value = skill;
			option.textContent = skill;
			dropDown.appendChild(option);
			});
			
			dropDown.addEventListener("change", (event) => {
			  if(validateSelections()){
				showNextBt();
			  }
			});
			
			td.appendChild(dropDown);
		}
		
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
		tr.appendChild(td);
		
		
		tbody.appendChild(tr);
	}
	
	const selSkills = CharData.Skills;
	for (let i = 0; i < selSkills.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdStat');
		
		const filteredChoices = selSkills[i];
		
		td.textContent = filteredChoices.value;
		
		tr.appendChild(td);
		td = document.createElement('td');
		
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
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
		  chooseGear();
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
}

function chooseImplantsAndMutations(){
	
	clearContentDivs();
	CharData.Implants = [];
	choices.Mutations = [];
	
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
			(("Cybernetics" in trT)? trT.Cybernetics : [])
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
	
	const container = document.getElementById('charChoice');
	
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}`;
	container.appendChild(div);
	

	div = document.createElement('div');
	
	if(choices.Implants.length > 0 || CharData.Implants.length > 0)
	{
	
		const table = document.createElement('table'); // Create the table
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
			console.log(filteredChoices);
			if(filteredChoices.length === 1){
				td.textContent = filteredChoices[0];
			}else{
				var dropDown = document.createElement('select');
				dropDown.id = 'selImpl'+i.toString();
				const placeholder = document.createElement('option');
				placeholder.textContent = '---';
				placeholder.value = "";
				placeholder.disabled = true;
				placeholder.selected = true;
				dropDown.appendChild(placeholder);
				
				filteredChoices.forEach(implant => {
				const option = document.createElement('option');
				option.value = implant;
				option.textContent = implant;
				dropDown.appendChild(option);
				});
				
				dropDown.addEventListener("change", (event) => {
				  if(validateSelections()){
					showNextBt();
				  }
				});
				
				td.appendChild(dropDown);
			}
			
			tr.appendChild(td);
			
			td = document.createElement('td');
			td.classList.add('tdDesc');
			td.textContent = 'ToDo: here are short descriptions';
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
			
			td.classList.add('tdDesc');
			td.textContent = 'ToDo: here are short descriptions';
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
				
		
		const table = document.createElement('table'); // Create the table
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
			
			tr.appendChild(td);
			td = document.createElement('td');
			
			td.classList.add('tdDesc');
			td.id = "tdMutatDesc"+x.toString();
			td.textContent = 'ToDo: here are short descriptions';
			tr.appendChild(td);
			
			tbody.appendChild(tr);
			
			el = document.createElement("button");
			el.classList.add("btRollBig");
			el.id = "btMutations"+x.toString(); 
			el.MutaRoll = choices.Mutations[x];
			el.textContent = ((currentLanguage==='de')? "Rolle " : "roll ") + choices.Mutations[x];
			el.MainTD = "tdMutations"+x.toString();
			el.DecTD = "tdMutatDesc"+x.toString();
			
			el.addEventListener("click", (event) => {
				  rollNewMutation(event.target.MainTD, event.target.DecTD, event.target.MutaRoll);
				  if(CharData.Mutations.length == choices.Mutations.length){
					  showNextBt();
				  }
				}, /*{ once: true }*/);
				
			ptsDiv.appendChild(el);
			ptsDiv.appendChild(document.createElement('br'));
			ptsDiv.appendChild(document.createElement('br'));

		}
		
		table.appendChild(tbody);
		ptsDiv.appendChild(table);
		div.appendChild(ptsDiv);
	}
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardNext");
	
	
	const btNxt = document.createElement("button");
	btNxt.classList.add("btNext","hidden");
	btNxt.textContent = ((currentLanguage==='de')? "Weiter" : "next");
	btNxt.addEventListener("click", (event) => {
		  console.log('ToDo');
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
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
	
	div.innerHTML = `${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table
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
			td.textContent = filteredChoices[0];
		}else{
			var dropDown = document.createElement('select');
			dropDown.id = 'selGear'+i.toString();
			const placeholder = document.createElement('option');
			placeholder.textContent = '---';
			placeholder.value = "";
			placeholder.disabled = true;
			placeholder.selected = true;
			dropDown.appendChild(placeholder);
			
			filteredChoices.forEach(gear => {
			const option = document.createElement('option');
			option.value = gear;
			option.textContent = gear;
			dropDown.appendChild(option);
			});
			
			dropDown.addEventListener("change", (event) => {
			  if(validateSelections()){
				showNextBt();
			  }
			});
			
			td.appendChild(dropDown);
		}
		
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
		tr.appendChild(td);
		
		
		tbody.appendChild(tr);
	}
	
	const selGear = CharData.Gear;
	for (let i = 0; i < selGear.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdStat');
		
		const filteredChoices = selGear[i];
		
		td.textContent = filteredChoices.value;
		
		tr.appendChild(td);
		td = document.createElement('td');
		
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
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
		  console.log('ToDo');
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
}

function chooseHealthAndFate(){
	clearContentDivs();
	CharData.Fate = 0;
	CharData.HP = 0;
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardPtsSelect");
	
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
	el.classList.add("btRollBig");
	el.id = "btWounds"; 
	el.textContent = ((currentLanguage==='de')? "Rolle 1W5 Bonus-Wunden" : "roll 1d5 bonus-wounds");
	el.addEventListener("click", (event) => {
		  updateWounds();
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
	el.classList.add("btRollBig");
	el.id = "btFate"; 
	el.textContent = ((currentLanguage==='de')? "Rolle 1W10. +1 Shicksal Wenn >= " : "roll 1d10. +1 Fate on >=")+homeworlds[CharData.Homeworld].Fate[1].toString();
	el.addEventListener("click", (event) => {
		  updateFate();
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
		  console.log('ToDo');
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	
	container.appendChild(div);
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
		console.log(diceString);
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
	} while (i < 50 && !CharData.Mutations.includes(result));
	
	CharData.Mutations.push(result);
	document.getElementById(mainTd).textContent = ((currentLanguage==='de')? Mutations[result].NameDe : Mutations[result].Name);
	document.getElementById(descTd).textContent = ((currentLanguage==='de')? Mutations[result].EffectDe : Mutations[result].Effect);
	
}

function getMutationKeyByRoll(roll) {
    let resultKey = null;
    let lowestMinRoll = Infinity;
    let highestMaxRoll = -Infinity;
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

function updatePoints(data,rollDaa){
	console.log();
	data.forEach(dataArray => {
		if(Array.isArray(dataArray) && dataArray.length === 2)
		{
			if(dataArray[1] === 'IP'){
				console.log()
				CharData.Insanity = CharData.Insanity + dataArray[0];
			}else if(dataArray[1] ==='CP'){
				CharData.Corruption = CharData.Corruption + dataArray[0];
			}
		}
    });
}

function chooseInsanityAndCorruption(){
	
	clearContentDivs();
	CharData.Insanity = 0;
	CharData.Corruption= 0;
	CharData.Malignancies= [];
	
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
	/*
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	var nextDiv = document.createElement('div');
	nextDiv.classList.add("dataCardPtsSelect");
	
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
	el.classList.add("btRollBig");
	el.id = "btWounds"; 
	el.textContent = ((currentLanguage==='de')? "Rolle 1W5 Bonus-Wunden" : "roll 1d5 bonus-wounds");
	el.addEventListener("click", (event) => {
		  updateWounds();
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
	el.classList.add("btRollBig");
	el.id = "btFate"; 
	el.textContent = ((currentLanguage==='de')? "Rolle 1W10. +1 Shicksal Wenn >= " : "roll 1d10. +1 Fate on >=")+homeworlds[CharData.Homeworld].Fate[1].toString();
	el.addEventListener("click", (event) => {
		  updateFate();
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
		  console.log('ToDo');
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	*/
}


function chooseMutationsAndImplants(){
	clearContentDivs();
	CharData.Gear = [];
	choices.Gear = [];
	
	const bgT = backgrounds[CharData.Background];

	
	updateGear([(("Gear" in bgT)? bgT.Gear : [])
		]);
	
	
	
	const container = document.getElementById('charChoice');
	
	var div = document.createElement('div');
	div.classList.add('infoCard');
	
	div.innerHTML = `${((currentLanguage==='de') ? talentsTexts.InfoTextDe : talentsTexts.InfoText)}`;
	container.appendChild(div);
	
	div = document.createElement('div');
	
	const table = document.createElement('table'); // Create the table
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
			td.textContent = filteredChoices[0];
		}else{
			var dropDown = document.createElement('select');
			dropDown.id = 'selGear'+i.toString();
			const placeholder = document.createElement('option');
			placeholder.textContent = '---';
			placeholder.value = "";
			placeholder.disabled = true;
			placeholder.selected = true;
			dropDown.appendChild(placeholder);
			
			filteredChoices.forEach(gear => {
			const option = document.createElement('option');
			option.value = gear;
			option.textContent = gear;
			dropDown.appendChild(option);
			});
			
			dropDown.addEventListener("change", (event) => {
			  if(validateSelections()){
				showNextBt();
			  }
			});
			
			td.appendChild(dropDown);
		}
		
		tr.appendChild(td);
		
		td = document.createElement('td');
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
		tr.appendChild(td);
		
		
		tbody.appendChild(tr);
	}
	
	const selGear = CharData.Gear;
	for (let i = 0; i < selGear.length; i++) {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		
		td.classList.add('tdStat');
		
		const filteredChoices = selGear[i];
		
		td.textContent = filteredChoices.value;
		
		tr.appendChild(td);
		td = document.createElement('td');
		
		td.classList.add('tdDesc');
		td.textContent = 'ToDo: here are short descriptions';
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
		  console.log('ToDo');
		});
	
	nextDiv.appendChild(btNxt);

	div.appendChild(nextDiv);
	
		
	div.classList.add('dataCard');
	container.appendChild(div);
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
	
	div.innerHTML = `
		${((currentLanguage==='de') ? characteristicsTexts.InfoTextDe : characteristicsTexts.InfoText)}
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
	
	const table = document.createElement('table'); // Create the table
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
	th.textContent = ((currentLanguage==='de') ? 'Increase' : 'Vergabe');
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