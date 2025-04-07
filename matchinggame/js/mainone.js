/*const eachSection = ['🚕','🚕','🗽','🗽','🌃','🌃','🍕','🍕','🍎','🍎']
const randomEachSection = []

function eachSectionReturn() {
	//while (eachSection.length <=0)
	for (let i = 0; i < 10;i++)
		{
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theCards = eachSection.splice(randomNumber,1)[0];
	randomEachSection.push(theCards)
}
return randomEachSection
}
document.querySelectorAll('.one').forEach((section, i) => section.addEventListener('click', (e)=> theGame(e,i)))//note to self: i is for index, ()=>, allows you pass additional arguements to fx
 function theGame(e, i) {
 
 console.log(i);
 
	let theSquares = eachSectionReturn()
	e.target.innerText = theSquares[i]

 }

 function theMatch() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText
	let ten = document.querySelector('#nine').innerText

	if (one === two || one === two || one === three || one === four || one === five || one === six|| one === seven || one === eight|| one === nine || one === ten || one !== '' ||
		two === three || two === four ||  two === five || two === six|| two === seven || two === eight|| two === nine || two === ten || two !== '' ||
		three === four ||  three === five || three === six|| three === seven || three === eight|| three === nine || three === ten || three !== '' ||
		four === five || four === six|| four === seven || four === eight|| four === nine || four === ten || four !== '' ||
		five === six|| five === seven || five=== eight|| five === nine || five=== ten || five !== '' ||
		six === seven || six== eight|| six === nine || six === ten || six !== '' ||
		seven == eight|| seven === nine || seven === ten || seven !== '' ||
		 eight === nine || eight === ten || eight !== '' || nine  === ten || nine !== '')
	
		
		
		
		{
		displayWinningResultsTwo()

	}
	else {
	  displayLosingResults()
	}

}

function displayLosingResults() {
document.querySelector('#results').innerText = ('TRY AGAIN!')
}
function displayWinningResultsOne() {
	document.querySelector('#results').innerText = ("PLAYER ONE WINS! ✖️ ✖️ ✖️ ")
	
}





 /*function theMatch() {
	let one = document.querySelector('#one').innerText
	let two = document.querySelector('#two').innerText
	let three = document.querySelector('#three').innerText
	let four = document.querySelector('#four').innerText
	let five = document.querySelector('#five').innerText
	let six = document.querySelector('#six').innerText
	let seven = document.querySelector('#seven').innerText
	let eight = document.querySelector('#eight').innerText
	let nine = document.querySelector('#nine').innerText
	let ten = document.querySelector('#nine').innerText

	if (one === two || one === two || one === three || one === four || one === five || one === six|| one === seven || one === eight|| one === nine || one === ten || one !== '' ||
		two === three || two === four ||  two === five || two === six|| two === seven || two === eight|| two === nine || two === ten || two !== '' ||
		three === four ||  three === five || three === six|| three === seven || three === eight|| three === nine || three === ten || three !== '' ||
		four === five || four === six|| four === seven || four === eight|| four === nine || four === ten || four !== '' ||
		five === six|| five === seven || five=== eight|| five === nine || five=== ten || five !== '' ||
		six === seven || six== eight|| six === nine || six === ten || six !== '' ||
		seven == eight|| seven === nine || seven === ten || seven !== '' ||
		 eight === nine || eight === ten || eight !== '' || nine  === ten || nine !== '')
	
		
		//&& one !== '' || four === five && five === six && four !== '' || seven === eight && eight === nine && seven !== '' || one === four && four === seven && one !== '' || two === five && five === eight && two !== '' || three === six && six === nine && three !== '' || one === five && five === nine && one !== '' || seven === five && five === three && seven !== '') 
		
		{
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













//Note to self on how to make a matching card game 
/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
 console.log(theFlipSide);
 //const eachSection = Object.values(theFlipSide)
 console.log(eachSection);
 
 let theIndex = [0,1,2,3,4]

 
 eachSectionReturn()
 function eachSectionReturn() {
 
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');
 
	//index length is > 0 , for it to keep running
	//for (let i = theIndex.length ; i > 4;i++)
		//{
 
 
 
		if (theIndex.find((e) => e == randomNumber) != undefined){
			randomEachSection.push(eachSection[randomNumber] )
			//theIndex = theIndex.filter((e) => e != randomNumber)
 console.log(theIndex,'filtered');
 console.log(randomNumber, 'w/n if');
 
 
 
 }
 theIndex = theIndex.filter((e) => e != randomNumber)
	}
	
	//return eachSection[Math.floor(Math.random() * eachSection.length )]
 
	// allow that item to be outputted twice and then remove it from list
 
 //const map = eachSection.map((x) => x * 2);
 //console.log(map);
 
 
 document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
 function theGame(e) {
 
 
	let theSquares = eachSectionReturn()
	e.target.innerText = (theSquares)
 }

/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);
const eachSection = Object.values(theFlipSide)
console.log(eachSection);
eachSectionReturn()


function eachSectionReturn(){
	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');

}

if (theIndex.find((e) => e == randomNumber) != undefined)
	{
	randomEachSection.push(eachSection[randomNumber] )
	
	console.log(theIndex,'filtered');
	console.log(randomNumber, 'w/n if');
}
document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
    e.target.innerText = (theSquares)

}


//draft 3
/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
function matchGame (){
	const itemsUsed = {}
}*/


//draft 2
/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}


function eachSectionReturn (){

console.log(theFlipSide);
const theCard = (theFlipSide) => {
	theFlipSide.sort(_ => Math.random() - 0.5);
	return theCard
}

}
document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
    e.target.innerText = (theSquares)

}

/*const theFlipSide = {
	cardOne: "🚕",
	cardTwo: "🗽",
	cardThree: "🌃",
	cardFour: "🍕",
	cardFive: "🍎"

}
console.log(theFlipSide);
const eachSection = Object.values(theFlipSide)
console.log(eachSection);
eachSectionReturn()

function eachSectionReturn() {
	let items = {
		0 : 0,
		1 : 0,
		2 : 0,
		3 : 0,
		4 : 0
	}
	let usedNumber =  (Object.keys(_, [index])

	



	let randomNumber = Math.floor(Math.random() * eachSection.length )
	let theIndex = [0,1,2,3,4]
	let randomEachSection = []
	console.log(randomNumber, 'Random number');
	console.log(theIndex, 'The index');
	console.log(randomEachSection, 'random each section');
	
		{
	
	
		
		if (theIndex.find((e) => e == randomNumber) != undefined){
			randomEachSection.push(eachSection[randomNumber] )
			theIndex = theIndex.filter((e) => e != randomNumber) 
console.log(theIndex,'filtered');
console.log(randomNumber, 'w/n if');
		
	
	

	//return eachSection[Math.floor(Math.random() * eachSection.length)]
	// allow that item to be outputted twice and then remove it from list 
	//_ => Math.random() - 0.5);
}
		}


document.querySelectorAll('.one').forEach(section => section.addEventListener('click', theGame))
function theGame(e) {
	

	let theSquares = eachSectionReturn()
    e.target.innerText = (theSquares)

}
}

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
