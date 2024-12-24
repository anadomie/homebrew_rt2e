let currentLanguage = 'en';
let currentMenu = '';
	  
function setLanguage(language) {
	currentLanguage = language;
	document.querySelector('h1').innerText = currentLanguage === 'en' 
	  ? 'Warhammer 40k Character Builder' 
	  : 'Warhammer 40k Charaktergenerator';

	const navLinks = document.querySelectorAll('.navbar a');
	navLinks[0].innerText = currentLanguage === 'en' ? 'Class' : 'Klasse';
	navLinks[1].innerText = currentLanguage === 'en' ? 'Homeworld' : 'Heimatwelt';
	navLinks[2].innerText = currentLanguage === 'en' ? 'Background' : 'Hintergrund';
	
	refresh();

}

function refresh(){
	if(currentMenu === 'hw')
	{
		populateHomeworlds();
	}else if(currentMenu === 'cr')
	{
		populateCareers();
	}else if(currentMenu === 'bg')
	{
		populateBackgrounds()
	}else if(currentMenu === 'rl')
	{
		populateRoles();
	}else if(currentMenu === 'br')
	{
		populateBirthrights();
	}else if(currentMenu === 'lr')
	{
		populateLures();
	}else if(currentMenu === 'tr')
	{
		populateTrials()
	}else if(currentMenu === 'mo')
	{
		populateMotivations()
	}else{
		clearContentDivs();
	}
}

function clearContentDivs(){
	document.getElementById('tiles').innerHTML = '';
	document.getElementById('tiles2').innerHTML = '';
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
			const res = splitAndTranslateSkills(item[0],item[1]);
			result.push(res.join(' or '));
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
			const res = splitAndTranslateTalents(item[0],item[1]);
			result.push(res.join(' or '));
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
        const apt = Apts[key];
        if (!apt) {
            return `Unknown key: ${key}`;
        }
        return language === "de" ? apt.LabelDe : apt.Label;
    });
}

function addHomeworld(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("hw_sel");
	document.querySelectorAll(".homeworld.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
	
}

function addCareer(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("cr_sel");
	document.querySelectorAll(".career.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
	
}

function addBackground(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("bg_sel");
	document.querySelectorAll(".background.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
	
}

function addRole(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("rl_sel");
	document.querySelectorAll(".role.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
	
}

function addBirthright(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("br_sel");
	console.log(event.currentTarget);
	document.querySelectorAll(".birthright.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
}

function addLure(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("lr_sel");
	document.querySelectorAll(".lure.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
}
function addTrial(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("tr_sel");
	document.querySelectorAll(".trial.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
}
function addMotivation(){
	const sel = event.currentTarget.classList.contains('selected');
	const ev = new Event("mo_sel");
	document.querySelectorAll(".motivation.selected").forEach(div => div.dispatchEvent(ev));
	if(!sel){
		CharData[event.currentTarget.dType] = event.currentTarget.data;
		event.currentTarget.classList.add('selected');
	}else{
		CharData[event.currentTarget.dType] = "";
	}
}


function removeSelection(){
	event.currentTarget.classList.remove('selected');
}


function populateHomeworlds() {
	
	clearContentDivs();
	
	const container = document.getElementById('tiles');
	
	currentMenu = 'hw';
	
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


function populateCareers() {
	const container = document.getElementById('tiles');
	clearContentDivs();
	currentMenu = 'cr';
	
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
				<p class="stats"><strong>${labels.Skills}</strong></br></br>${Ability.Skills.join(',  ')}</p>
				<hr>
				<p class="stats"><strong>${labels.Talents}</strong></br></br>${Ability.Talents.join(',  ')}</p>
				<hr>
				<p class="stats"><strong>${Ability.Name}</strong></br> ${Ability.Effect}</p>
			`;
			container.appendChild(div);
		}
	}
}

function populateBackgrounds() {
	const container = document.getElementById('tiles');
	clearContentDivs();
	currentMenu = 'bg';
	
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
				"Gear":((currentLanguage === 'de')? "Gear" : "Ausrüstung")
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
				<p class="stats"><strong>${labels.Aptitude}: </strong>${getTranslatedApts(bg.Apts,currentLanguage).join(' or ')}</p>
				<hr>
				<p class="stats"><strong>${labels.Skills}</strong></br></br>${parseSkills(bg.Skills).join(',  ')}</p>
				<hr>
				<p class="stats"><strong>${labels.Talents}</strong></br></br>${parseTalents(bg.Talents).join(',  ')}</p>
				<hr>
				<p class="stats"><strong>${labels.Gear}</strong></br></br></p>
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
	currentMenu = 'rl';
	
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

	currentMenu = 'br';
	
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
			console.log(key);
			
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

	currentMenu = 'lr';
	
	var sortedArray = Object.entries(lure).sort((a, b) => {
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
			console.log(key);
			
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

	currentMenu = 'tr';
	
	var sortedArray = Object.entries(trials).sort((a, b) => {
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
			console.log(key);
			
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

	currentMenu = 'mo';
	
	var sortedArray = Object.entries(motivations).sort((a, b) => {
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
			console.log(key);
			
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