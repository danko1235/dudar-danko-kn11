const myImage = document.querySelector('img');
myImage.onclick = () => {
	const mySrc = myImage.getAttribute('src');
	if (mySrc === 'Images/Firefox_logo,_2017.png') {
		myImage.setAttribute('src','Images/unnamed.png');
	} else {
		myImage.serAttribute('src','Images/Firefox_logo,_2017.png');
	}
}
let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h1');
function setUserName () {
	const myName = prompt('Please enter your name.');
	if (!myName) {
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = `Mozilla is cool, ${myName}`;
}

}
myButton.onclick = () => {
	setUserName();
}
	
