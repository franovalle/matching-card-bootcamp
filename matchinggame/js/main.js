/*  pseudo code 
1. something to populate the cards - board needs to be set 
2. 


const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);




/*
const eachSection = Object.values(theFlipSide)
console.log(eachSection);


//let theIndex = [0,1,2,3,4]

eachSectionReturn()
function eachSectionReturn() {
	
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');
	
	//index length is > 0 , for it to keep running
	//for (let i = theIndex.length ; i > 4;)
		{
	
	
		
		if (theIndex.find((e) => e == randomNumber) != undefined){
			randomEachSection.push(eachSection[randomNumber] )
			//theIndex = theIndex.filter((e) => e != randomNumber) 
console.log(theIndex,'filtered');
console.log(randomNumber, 'w/n if');

		
	
}
	}
	theIndex = theIndex.filter((e) => e != randomNumber) 
	//return eachSection[Math.floor(Math.random() * eachSection.length )]

	// allow that item to be outputted twice and then remove it from list 
}
//const map = eachSection.map((x) => x * 2);
//console.log(map);



document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
	e.target.innerText = (theSquares)

}








//notes from stackoverflow
//if (theIndex.length >= 0)
/*let array = [1,2,3,4,5]
function duplicateArray (){
for ()// the goal is another array all of pair in random order

}

/*function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
console.log */
/*function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
console.log */




/*let cards = ["🚕","🗽", "🌃","🍕", "🍎" ]

for (let i = Array.length -1; i > 0 ; i -- ){

}

function eachSectionReturn(cards) {
	for (let i = cards.length -1; i > 0 ; i -- ){

	}


}*/

	
	/*return eachSection[Math.floor(Math.random() * eachSection.length)]
	// allow that item to be outputted twice and then remove it from list 
}*/



/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);
const eachSection = Object.values(theFlipSide)




function eachSectionReturn() {
	
	return eachSection[Math.floor(Math.random() * eachSection.length)]
	// allow that item to be outputted twice and then remove it from list 
}
document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
	e.target.innerText = (theSquares)




}*/








/*function checkMatch() {
	//if the random is = to the array 
	/*let taxi = eachSection[0]
	let ladyLiberty = eachSection[1]
	let skyLine = eachSection[2]
	let pizza = eachSection[3]
	let bigApple = eachSection[4]*/
	/*if (theSquares === eachSection) {
		//keep it flip 
		document.querySelector('h2').innerText = "It's a match"
	}
	else {
		//flip it back over => .toggle or display none 
		document.querySelector('h2').innerText = "Try Again"
	}


}





/*note to self: thought process
let cards = ["🚕","🗽", "🌃","🍕", "🍎" ]
for (let i = 0; i < movies.length; i++)
/* notes to self: use async/await ?

pseudo code notes;
1. make board (index/css)-done
2. 10 cards shuffled in each slot-done
3. use .toggle to hide, display: none
*/
//2. 10 cards shuffled in each slot-*/
/*document.querySelector('#two').addEventListener('click', squareTwo)
function squareTwo() {
	
		let two = eachSectionReturn()
		document.querySelector('#two').innerText = (two)
		//threeInARowPlayerOne()
	

}
document.querySelector('#three').addEventListener('click', squareThree)
function squareThree() {
	
		let three = eachSectionReturn()
		document.querySelector('#three').innerText = (three)
		//threeInARowPlayerOne()
	

}
document.querySelector('#four').addEventListener('click', squareFour)
function squareFour() {
	
		let four = eachSectionReturn()
		document.querySelector('#four').innerText = (four)
		//threeInARowPlayerOne()
	

}
document.querySelector('#five').addEventListener('click', squareFive)
function squareFive() {
	
		let five = eachSectionReturn()
		document.querySelector('#five').innerText = (five)
		//threeInARowPlayerOne()
	

}
document.querySelector('#six').addEventListener('click', squareSix)
function squareSix() {
	
		let six = eachSectionReturn()
		document.querySelector('#six').innerText = (six)
		//threeInARowPlayerOne()
	

}
document.querySelector('#seven').addEventListener('click', squareSeven)
function squareSeven() {
	
		let one = eachSectionReturn()
		document.querySelector('#seven').innerText = (seven)
		//threeInARowPlayerOne()
	

}
document.querySelector('#eight').addEventListener('click', squareEight)
function squareEight() {
	
		let eight = eachSectionReturn()
		document.querySelector('#eight').innerText = (eight)
		//threeInARowPlayerOne()
	

}
document.querySelector('#nine').addEventListener('click', squareNine)
function squareNine() {
	
		let nine = eachSectionReturn()
		document.querySelector('#nine').innerText = (nine)
		//threeInARowPlayerOne()
	

}
document.querySelector('#ten').addEventListener('click', squareTen)
function squareTen() {
	
		let ten = eachSectionReturn()
		document.querySelector('#ten').innerText = (ten)
		//threeInARowPlayerOne()
	

}*/







/*const slotMachine = {
	cherry: "🍒",
	lemon: "🍋",
	watermelon: "🍉",
	star: "⭐",
	orange: "🍊",
	bell: "🔔"
	

}
console.log(slotMachine)
const slots = Object.values(slotMachine)
console.log(slots)
function slotReturn() {
	return slots[Math.random() * slots.length]
}
	document.querySelector('#spin').addEventListener('click', playSlots)
function playSlots() {
	let slotone = slotReturn()
	let slottwo = slotReturn()
	let slotthree = slotReturn()
	document.querySelector('#slotone').textContent = (slotone)
	document.querySelector('#slottwo').textContent = (slottwo)
	document.querySelector('#slotthree').textContent = (slotthree)

	if (slotone === slottwo && slottwo === slotthree) {
		document.querySelector('#results').textContent = 'WINNER!'

	}
	else {
		document.querySelector('#results').textContent = 'TRY AGAIN!'
	}
}

/* Note to self: example code for reference 
//Trying to make it OOP
//set players and shapes 
//Trying to make it OOP
//set players and shapes 


const players = {
	playerOne: '✖️',
	playerTwo: '⭕',
	whoseTurn: 0


}
console.log(players)
const thePlayers = Object.values(players)
console.log(thePlayers)


function theFirstPlayer() {
	return thePlayers[0]

}
function theSecondPlayer() {
	return thePlayers[1]

}

document.querySelector('#one').addEventListener('click', playGameOne)
function playGameOne() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let one = theFirstPlayer()
		document.querySelector('#one').innerText = (one)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let one =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#one').innerText = (one)
		threeInARowPlayerTwo()
	}

	


}

document.querySelector('#two').addEventListener('click', playGameTwo)
function playGameTwo() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let two = theFirstPlayer()
		document.querySelector('#two').innerText = (two)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let two =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#two').innerText = (two)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#three').addEventListener('click', playGameThree)
function playGameThree() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let three = theFirstPlayer()
		document.querySelector('#three').innerText = (three)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let three =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#three').innerText = (three)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#four').addEventListener('click', playGameFour)
function playGameFour() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let four = theFirstPlayer()
		document.querySelector('#four').innerText = (four)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let four =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#four').innerText = (four)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#five').addEventListener('click', playGameFive)
function playGameFive() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let five = theFirstPlayer()
		document.querySelector('#five').innerText = (five)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let five =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#five').innerText = (five)
		threeInARowPlayerTwo()
	}
	
	
}

document.querySelector('#six').addEventListener('click', playGameSix)
function playGameSix() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let six = theFirstPlayer()
		document.querySelector('#six').innerText = (six)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let six =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#six').innerText = (six)
		threeInARowPlayerTwo()
	}
	
	

}

document.querySelector('#seven').addEventListener('click', playGameSeven)
function playGameSeven() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let seven = theFirstPlayer()
		document.querySelector('#seven').innerText = (seven)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let seven =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#seven').innerText = (seven)
		threeInARowPlayerTwo()
	}
	

}

document.querySelector('#eight').addEventListener('click', playGameEight)
function playGameEight() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let eight = theFirstPlayer()
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let eight =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#eight').innerText = (eight)
		threeInARowPlayerTwo()
	}
	
	
}

document.querySelector('#nine').addEventListener('click', playGameNine)
function playGameNine() {
	players.whoseTurn++
	if (players.whoseTurn === 1) {
		let nine = theFirstPlayer()
		document.querySelector('#nine').innerText = (nine)
		threeInARowPlayerOne()
	}
	else if (players.whoseTurn === 2){
		let nine =  theSecondPlayer()
		players.whoseTurn = 0 
		document.querySelector('#nine').innerText = (nine)
		threeInARowPlayerTwo()
	}
	
	
}

function threeInARowPlayerOne() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResultsOne()

	}
	else {
		//displayLosingResults()
	}

}
function threeInARowPlayerTwo() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText

	if (one === two && two === three && one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') {
		displayWinningResultsTwo()

	}
	else {
		//displayLosingResults()
	}

}

//function displayLosingResults() {
//document.querySelector('#results').innerText = ('TRY AGAIN!')
//}
function displayWinningResultsOne() {
	document.querySelector('#results').innerText = ("PLAYER ONE WINS! ✖️ ✖️ ✖️ ")
	
}
function displayWinningResultsTwo() {
	document.querySelector('#results').innerText = ("PLAYER TWO WINS! ⭕ ⭕ ⭕ ")
*/
