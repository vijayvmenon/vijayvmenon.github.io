/** Below JS changes the h1 HTML elements text to "Hello World" **/
/**
var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
**/

var myImage = document.querySelector('img');
myImage.onclick = function() {
var mySrc = myImage.getAttribute('src');
if (mySrc === 'images/Web_designer_India.jpg')
{
myImage.setAttribute('src','images/PHP-Web-Developers.png');
}
else
{
myImage.setAttribute('src','images/Web_designer_India.jpg');
}
} 

var myButton=document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter name');
	localStorage.setItem('name',myName);
	myHeading.innerHTML='My Webpage,' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
}
else {
	var storedName=localStorage.getItem('name');
	myHeading.innerHTML='My Webpage,' + name;
}

myButton.onclick=function() {
	setUserName();
}