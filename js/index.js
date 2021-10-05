const womanText = document.getElementById('firstWomanText')
const womanText2 = document.getElementById('firstWomanText2')
const greatKnitwear = document.getElementById('firstGreatKnitwear')
const greatKnitwear2 = document.getElementById('firstGreatKnitwear2')


const secondWomanText = document.getElementById('secondWomanText') 
const secondWomanText2 = document.getElementById('secondWomanText2') 
const secondGreatKnitwear = document.getElementById('secondGreatKnitwear')
const secondGreatKnitwear2 = document.getElementById('secondGreatKnitwear2')

// Element's height

const stateHolder = {
	womanText: true,
	womanText2: true,
	greatKnitwear: true,
	greatKnitwear2: true,
	secondWomanText: true,
	secondWomanText2: true,
	secondGreatKnitwear: true,
	secondGreatKnitwear2: true
}



function removeListener(){

	const bottomOfWindow = window.scrollY + window.innerHeight
	const offsetBottomSecondGreatKnitwear2 = secondGreatKnitwear2.offsetTop + secondGreatKnitwear2.height
	const SecondGreatKnitwear2AppearOnScreen = offsetBottomSecondGreatKnitwear2 - bottomOfWindow

	if( SecondGreatKnitwear2AppearOnScreen <=-40 ){
		console.log('removed')
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
	const bottomOfWindow = window.scrollY + window.innerHeight

	const offsetBottomSecondWomanText = secondWomanText.offsetTop + secondWomanText.height
	const secondWomanTextAppearOnScreen = offsetBottomSecondWomanText - bottomOfWindow // neg val -> on screen

	const offsetBottomSecondGreatKnitwear2 = secondGreatKnitwear2.offsetTop + secondGreatKnitwear2.height
	const SecondGreatKnitwear2AppearOnScreen = offsetBottomSecondGreatKnitwear2 - bottomOfWindow

	const offsetBottomGreatKnitwear2 = greatKnitwear2.offsetTop + greatKnitwear2.height
	const greatKnitwear2AppearOnScreen = offsetBottomGreatKnitwear2 - bottomOfWindow

	console.log(SecondGreatKnitwear2AppearOnScreen)

	if(window.scrollY > 60 && stateHolder.womanText === true){
		addOrRemoveHiddenClass([womanText, womanText2], 'remove')
		updateState(['womanText', 'womanText2'], false)
	}

	if(greatKnitwear2AppearOnScreen < 0 && stateHolder.greatKnitwear2 === true){
		addOrRemoveHiddenClass([greatKnitwear, greatKnitwear2], 'remove')
		updateState(['greatKnitwear', 'greatKnitwear2'], false)
	}

	if(greatKnitwear2AppearOnScreen < -60 && stateHolder.greatKnitwear === false){
		addOrRemoveHiddenClass([womanText, womanText2, greatKnitwear], 'add')
		updateState(['womanText', 'womanText2','greatKnitwear'], false)

	}

	if(secondWomanTextAppearOnScreen <= 0 && stateHolder.secondWomanText === true){
		addOrRemoveHiddenClass([secondWomanText, secondWomanText2], 'remove')
		updateState(['secondWomanText', 'secondWomanText2'], false)
	}

	if(SecondGreatKnitwear2AppearOnScreen <= 0 && stateHolder.secondGreatKnitwear === true){
		addOrRemoveHiddenClass([secondGreatKnitwear, secondGreatKnitwear2], 'remove')
		updateState(['secondGreatKnitwear', 'secondGreatKnitwear2'], false)
	}

	if(SecondGreatKnitwear2AppearOnScreen <=-30 && stateHolder.secondGreatKnitwear === false){
		addOrRemoveHiddenClass([secondWomanText, secondWomanText2, secondGreatKnitwear], 'add')
		updateState(['secondGreatKnitwear'], false)
	}
})

document.addEventListener('scroll', removeListener)