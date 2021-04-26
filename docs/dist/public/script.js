// let netArtBox = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 250 250" width="100%" height="100%" id="svg" transform="translate(0,0)">
// 	<defs>
// 		<clipPath id="boxPath">
// 			<rect width="5%" height="3%" />
// 		</clipPath>
// 	</defs>
// 	<g clip-path="url(#_clipPath_LSpHi2bqIWqMMeHYsNd6Lt2geyDjS5Z6)">
// 		<rect id="box" x="15" y="59.286" width="70%" height="70%" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)" />
// 		<line x1="11" y1="11" x2="240" y2="11" />
// 		<line x1="11" y1="11" x2="240" y2="11" vector-effect="non-scaling-stroke" stroke-width="3%" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
// 		<line x1="18.453" y1="241" x2="240" y2="241" vector-effect="non-scaling-stroke" stroke-width="3%" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
// 		<line x1="11" y1="11" x2="11" y2="241" vector-effect="non-scaling-stroke" stroke-width="3%" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
// 		<line x1="240" y1="21.411" x2="240" y2="241" vector-effect="non-scaling-stroke" stroke-width="3%" stroke="rgb(0,0,0)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3" />
// 	</g>
// </svg>`

// code for pop-up window at beginning
const entireWindow = document.getElementById("entireWindow");
const open = document.getElementById("open");
const popUp = document.getElementById("popUp");
const close = document.getElementById("close");

// this is really clunky but works
entireWindow.classList.add("show");

open.addEventListener("click", () => {
	popUp.classList.add("show");
});

close.addEventListener("click", () => {
	popUp.classList.remove("show");
	entireWindow.classList.remove("show");
});

// code for getting user name, geo, and Id
user = {
	name: "",
	geo: "",
	id: ""
};

// varible for user svg object
let entireBox = document.getElementById("svg");

document.getElementById("close").onclick = function () {
	user.name = document.getElementById("name").value;
	user.geo = document.getElementById("geo").value;

	user.id = "";
	for (let i = 0; i < 8; i++) {
		user.id += [Math.floor(Math.random() * 16)];
	}
	console.log(user.name);
	console.log(user.geo);
	console.log(user.id);

	document.getElementById("outputName").innerText = user.name;
	document.getElementById("outputLocation").innerText = user.geo;

	// give user a unique box and store that in container div
	// how can I access id from inside script file? I need this to set color and other svg properties
	document.getElementById("svg").id = user.id;
	document.getElementById(`${user.id}`).innerHTML = netArtBox;
	entireBox = document.getElementById(`${user.id}`);
	document.getElementById("container").appendChild(entireBox);
	entireBox.style.position = "absolute";
	entireBox.style.width = "10%";
	entireBox.style.height = "10%";
};

// then fill in values throughout and make sure it works
// finally, format JSON to send key/values through Nexus Hub (code at bottom)

// stop page from scrolling when spacebar is pressed
window.onkeydown = (e) => {
	return !(e.keyCode == 32);
};

// set random color for divs
function setColor(imageNumb) {
	//color
	let string = "0123456789ABCDEF".split("");
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += string[Math.floor(Math.random() * 16)];
		let backdrop = (document.querySelector(
			`#image${imageNumb}`
		).style.backgroundColor = color);
	}
}

// sets color of fields on screen
setColor(1);
//setColor(2);
// setColor(3);
// setColor(4);
// setColor(5);

// just the colored box variable
// how can I set color when loading from script?
//let myBox = document.querySelector("#box");

// randomize box color on start
let r = Math.random() * 50 + 25;
let g = Math.random() * 50 + 25;
let b = Math.random() * 50 + 25;

// color string
color = `rgb(${r}%,${g}%,${b}%)`;
//myBox.style.fill = color;

// mousestate variable for events
let mouseState = false;

// mouse down
entireBox.onmousedown = () => {
	console.log("down");
	mouseState = true;
// 	myBox.style.fill = "#bbb";
};

// mouse pos variable
position = {
	x: "",
	y: ""
};

// scroll offset variable
let scrollXOffset;
let scrollYOffset;

// scrolling amount by which to offset svg
onscroll = () => {
	// horizontal scrolling amount
	scrollXOffset = window.pageXOffset;

	// vertical scrolling amount
	scrollYOffset = window.pageYOffset;

	//console.log("x: " + scrollXOffset + "y: " + scrollYOffset);
};

// drag box
onmousemove = (e) => {
	if (mouseState) {
		// get size in px of svg
		entireBox.style.boxSizing = "content-box";
		let myWidth = entireBox.getBoundingClientRect().width;
		let myHeight = entireBox.getBoundingClientRect().height;
		console.log("width: " + myWidth + " height: " + myHeight);

		// mouse horizontal and vertical coordinates
		position.x = e.clientX + scrollXOffset;
		position.y = e.clientY + scrollYOffset;
		console.log("posX: ", position.x, "posY: ", position.y);

		// use mouse pos and offset by 1/2 size of svg
		entireBox.style.left = `${position.x - myWidth / 2}px`;
		entireBox.style.top = `${position.y - myHeight / 2}px`;
	}
};

// mouse up
entireBox.onmouseup = () => {
	console.log("up");
	//myBox.style.fill = color;
	mouseState = false;
};

// spacebar to trigger synth and animation
let playNote = false;
let triggerUp = (document.body.onkeydown = function (e) {
	if (e.keyCode == 32) {
		// animation here - color change for now
		//myBox.style.fill = "#000";
		playNote = true;
	}
});

// define scales to quantize
let scale1 = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

// space bar trigger note
let triggerDown = (document.body.onkeyup = function (e) {
	if (e.keyCode == 32) {
		// invert y pos to get low-high frequncy
		//let frequency = window.innerHeight - y;

		// can I use an array instead?
		let frequency = "C4";

		if (window.innerHeight - position.y < 50) {
			frequency = "C4";
		} else if (window.innerHeight - position.y < 100) {
			frequency = "D4";
		} else if (window.innerHeight - position.y < 150) {
			frequency = "E4";
		} else if (window.innerHeight - position.y < 200) {
			frequency = "F4";
		} else if (window.innerHeight - position.y < 250) {
			frequency = "G4";
		} else if (window.innerHeight - position.y < 300) {
			frequency = "A4";
		} else if (window.innerHeight - position.y < 350) {
			frequency = "B4";
		} else {
			frequency = "C5";
		}

		// get frequency based on mouse pos
		Tone.start();
		synth.triggerAttackRelease(frequency, "8n").connect(feedbackDelay);
		console.log(frequency);
	}
});

// sets color if mouse up or down when trigger is trigged
// 		if (mouseState) {
// 			myBox.style.fill = "#bbb";
// 		} else {
// 			myBox.style.fill = color;
// 		}
// 	}
// });



// feedback delay
const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();

// synth
const synth = new Tone.Synth().toDestination();
synth.volume.value = -12;

// Nexus-Hub stuff

// array for site users
let users = [];
// variable for users svg
let usersSquare;

const Hub = require("../js/hub");
const hub = new Hub;

// channel
hub.channel("moveAndPlay", null, null, function (data) {
	console.log('data: ', data);

	// checks to see if user exists
	// if no, then add user to array and create div to add to container
	// is yes, update position
	for (let i = 0; i < users.length; i++) {
    	if (users[i] !== data.user) {
			users.push(data.user);
			var div = document.createElement('div');
			div.id = data.user;
			div.innerHTML = netArtBox;
			document.getElementById("container").appendChild(div);
			div.style.position = "absolute";
			} else if (users[i] == data.user) {
				usersSquare = document.getElementById(`${data.user}`);
				usersSquare.style.top = data.positionY;
				usersSquare.style.top = data.positionX;
		}
	}
});

// event send when people first enter their name and geo

// event send if entireBox moves or user triggers sound
entireBox.on("change", function () {
	if (entireBox.clicked) {
		hub.send("moveAndPlay", {
			user: user.id,
			positionX: position.x,
			positionY: position.y
		});
	} else if (playNote == true) {
		hub.send("moveAndPlay", {
			user: user.id,
			note: true,
			positionX: position.x,
			positionY: position.y
		});
	} else {
		hub.send("moveAndPlay", {
			note: false,
			user: user.id
		});
	}
});