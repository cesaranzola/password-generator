const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

// Generate to random pass of 15 chars long
// Ability to set password length
// copy-on-click > hover effect
// toggle symbols and numbers on/off

let generatePassBtn = document.getElementById('generate-p');
let passOne = document.getElementById('pass-one');
let passTwo = document.getElementById('pass-two');
let firstSpan = document.getElementById('first-span');
let secondSpan = document.getElementById('sd-span');
let sliderAmount = parseInt(document.getElementById('slider-amount').value);
let getLower = document.getElementById('lower').value;

let arrLen = characters.length - 1;
let randNum1 = 0;
let randNum2 = 0;
let pass1 = [];
let pass2 = [];

function generatePass() {
	console.log(typeof getLower) ;

	pass1 = [];
	pass2 = [];
	passOne.textContent = '';
	passTwo.textContent = '';
	for (let i = 0; i < sliderAmount; i++) {
		randNum1 = Math.floor(Math.random() * arrLen) + 1;
		randNum2 = Math.floor(Math.random() * arrLen) + 1;
		pass1.push(characters[randNum1]);
		pass2.push(characters[randNum2]);
	}
}

function setPass() {
	generatePass();
	for (let i = 0; i < sliderAmount; i++) {
		passOne.textContent += pass1[i];
		passTwo.textContent += pass2[i];
	}
}
