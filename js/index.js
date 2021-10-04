const womanText = document.getElementById('firstWomanText')
const womanText2 = document.getElementById('firstWomanText2')
const greatKnitwear = document.getElementById('firstGreatKnitwear')

const secondWomanText = document.getElementById('secondWomanText')
const secondWomanText2 = document.getElementById('secondWomanText2') 
const secondGreatKnitwear = document.getElementById('secondGreatKnitwear')
const secondGreatKnitwear2 = document.getElementById('secondGreatKnitwear2')

const stateHolder = {
	womanText: true,
	womanText2: true,
	greatKnitwear: true,
	secondWomanText: true,
	secondWomanText2: true,
	secondGreatKnitwear: true,
	secondGreatKnitwear2: true
}

function removeListener(){

	if( window.scrollY > 7500 ){
		document.removeEventListener('scroll', removeListener)
	}

	if( window.scrollY >= 7150 ){
		document.removeEventListener('scroll', removeListener)
	}
}

const addOrRemoveHiddenClass = (arr, action) => {
	if(action === 'remove'){
		arr.forEach(element => {
			element.classList.remove('hidden')
		});
	}
	else if(action === 'add'){
		arr.forEach(element => {
			element.classList.add('hidden')
		});
	}
}

const updateState = (stringArr, value) => {
	stringArr.forEach(element => {
		stateHolder[element] = value
	});
}

document.addEventListener('scroll', () => {

	if(window.scrollY > 60 && stateHolder.womanText === true){
		addOrRemoveHiddenClass([womanText, womanText2], 'remove')
		updateState(['womanText', 'womanText2'], false)
	}

	if(window.scrollY > 89 && stateHolder.greatKnitwear === true){
		addOrRemoveHiddenClass([greatKnitwear], 'remove')
		updateState(['greatKnitwear'], false)
	}

	if(window.scrollY > 150 && stateHolder.greatKnitwear === false){
		addOrRemoveHiddenClass([womanText, womanText2, greatKnitwear], 'add')
		updateState(['womanText', 'womanText2','greatKnitwear'], false)

	}

	if(window.innerWidth < 1000){
	
		if(window.scrollY > 6750 && stateHolder.secondWomanText === true){
			addOrRemoveHiddenClass([secondWomanText, secondWomanText2], 'remove')
			updateState(['secondWomanText', 'secondWomanText2'], false)
		}
	
		if(window.scrollY > 7000 && stateHolder.secondGreatKnitwear === true){
			addOrRemoveHiddenClass([secondGreatKnitwear, secondGreatKnitwear2], 'remove')
			updateState(['secondGreatKnitwear', 'secondGreatKnitwear2'], false)
		}
	
		if(window.scrollY > 7150 && stateHolder.secondGreatKnitwear === false){
			addOrRemoveHiddenClass([secondWomanText, secondWomanText2, secondGreatKnitwear], 'add')
			updateState(['secondGreatKnitwear'], false)
		}
	}
	else{	
	
		if(window.scrollY > 7250 && stateHolder.secondWomanText === true){
			addOrRemoveHiddenClass([secondWomanText, secondWomanText2], 'remove')
			updateState(['secondWomanText', 'secondWomanText2'], false)
		}
	
		if(window.scrollY > 7433 && stateHolder.secondGreatKnitwear === true){
			addOrRemoveHiddenClass([secondGreatKnitwear, secondGreatKnitwear2], 'remove')
			updateState(['secondGreatKnitwear', 'secondGreatKnitwear2'], false)
		}
	
		if(window.scrollY > 7500 && stateHolder.secondGreatKnitwear === false){
			addOrRemoveHiddenClass([secondWomanText, secondWomanText2, secondGreatKnitwear], 'add')
			updateState(['secondGreatKnitwear'], false)
		}
	}
})

document.addEventListener('scroll', removeListener)

