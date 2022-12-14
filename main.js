// Array of characters from which the password is generated
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

// Buttons
let generatePassBtn = document.getElementById('generate-p');
let passOne = document.getElementById('pass-one');
let passTwo = document.getElementById('pass-two');

// Slider range value
let sliderAmount;

// Check boxes on/off values
let getLower = document.getElementById('lower');
let getUpper = document.getElementById('upper');
let getNums = document.getElementById('nums');
let getSpecial = document.getElementById('special');

// Array data length
// let arrLen = characters.length - 1;
let filterArrLen = 0;

// Variables for random numbers
let randNum1 = 0;
let randNum2 = 0;

// Empty arrays to store random characters
let pass1 = [];
let pass2 = [];

// Regex section
const regexAZ = /[A-Z]/g;
const regexAZLower = /[a-z]/g;
const regexNums = /[0-9]/g;
const regexSpecial = /[\W]/g;
let filterAz;
let filterAzLower;
let filterNums;
let filterSpecial;

// Join array of chars
let joinArr = characters.join();

// New set of characters based on user input
let newCharacters = [];

// Calculate newCharacters length
let newCharactersLen;

// Flag to execute addEventListener
let flag = false;

// Function to generate a password from a length of characters choose by user
function generatePass() {
	filterChars();
	sliderAmount = parseInt(document.getElementById('range').value);

	pass1 = [];
	pass2 = [];
	passOne.textContent = '';
	passTwo.textContent = '';
	for (let i = 0; i < sliderAmount; i++) {
		randNum1 = Math.floor(Math.random() * newCharactersLen) + 1;
		randNum2 = Math.floor(Math.random() * newCharactersLen) + 1;
		pass1.push(newCharacters[randNum1]);
		pass2.push(newCharacters[randNum2]);
	}
}

// Function to update the buttons and display the generated passwords
function setPass() {
	if (
		getUpper.value === 'true' ||
		getLower.value === 'true' ||
		getNums.value === 'true' ||
		getSpecial.value === 'true'
	) {
		generatePass();
		for (let i = 0; i < sliderAmount; i++) {
			passOne.textContent += pass1[i];
			passTwo.textContent += pass2[i];
		}
	}
	flag = true;
}

// Function to filter characters selected by user
function filterChars() {
	if (getUpper.value === 'true') {
		newCharacters += joinArr.match(regexAZ);
	}
	if (getLower.value === 'true') {
		newCharacters += joinArr.match(regexAZLower);
	}
	if (getNums.value === 'true') {
		newCharacters += joinArr.match(regexNums);
	}
	if (getSpecial.value === 'true') {
		newCharacters += joinArr.match(regexSpecial);
	}
	newCharacters = newCharacters.replace(/,/g, '');
	newCharactersLen = newCharacters.length - 1;
}

// Add event listeners for the checkboxes
getLower.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		getLower.value = true;
	} else {
		getLower.value = false;
	}
});

getUpper.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		getUpper.value = true;
	} else {
		getUpper.value = false;
	}
});

getNums.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		getNums.value = true;
	} else {
		getNums.value = false;
	}
});

getSpecial.addEventListener('change', (event) => {
	if (event.currentTarget.checked) {
		getSpecial.value = true;
	} else {
		getSpecial.value = false;
	}
});

passOne.addEventListener('click', (event) => {
	if (flag === true) {
		navigator.clipboard.writeText(passOne.innerText);
		passOne.textContent = 'Copy to the clipboard';
	}
});

passTwo.addEventListener('click', (event) => {
	if (flag === true) {
		navigator.clipboard.writeText(passTwo.innerText);
		passTwo.textContent = 'Copy to the clipboard';
	}
});

function sliderVal(val) {
	document.getElementById('range').value = val;
}


// CSS Tr
const range = document.getElementById('range'),
	rangeV = document.getElementById('rangeV'),
	setValue = () => {
		const newValue = Number(
				((range.value - range.min) * 100) / (range.max - range.min)
			),
			newPosition = 10 - newValue * 0.2;
		rangeV.innerHTML = `<span>${range.value}</span>`;
		rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
	};
document.addEventListener('DOMContentLoaded', setValue);
range.addEventListener('input', setValue);
