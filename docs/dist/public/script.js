// players for audio samples
const players = new Tone.Players({
	1: "https://austinfranklin.github.io/7746MediaRepo/samples/agua1.mp3",
	2: "https://austinfranklin.github.io/7746MediaRepo/samples/agua2.mp3",
	3: "https://austinfranklin.github.io/7746MediaRepo/samples/agua3.mp3",
	4: "https://austinfranklin.github.io/7746MediaRepo/samples/agua4.mp3",
	5: "https://austinfranklin.github.io/7746MediaRepo/samples/ambientFlurry.mp3",
	6: "https://austinfranklin.github.io/7746MediaRepo/samples/birds1.mp3",
	7: "https://austinfranklin.github.io/7746MediaRepo/samples/birds2.mp3",
	8: "https://austinfranklin.github.io/7746MediaRepo/samples/birds3.mp3",
	9: "https://austinfranklin.github.io/7746MediaRepo/samples/birds4.mp3",
	10: "https://austinfranklin.github.io/7746MediaRepo/samples/birds5.mp3",
	11: "https://austinfranklin.github.io/7746MediaRepo/samples/birds6.mp3",
	12: "https://austinfranklin.github.io/7746MediaRepo/samples/chord.mp3",
	13: "https://austinfranklin.github.io/7746MediaRepo/samples/highDrone1.mp3",
	14: "https://austinfranklin.github.io/7746MediaRepo/samples/highDrone2.mp3",
	15: "https://austinfranklin.github.io/7746MediaRepo/samples/highDrone3.mp3",
	16: "https://austinfranklin.github.io/7746MediaRepo/samples/lowDrone1.mp3",
	17: "https://austinfranklin.github.io/7746MediaRepo/samples/lowDrone2.mp3",
	18: "https://austinfranklin.github.io/7746MediaRepo/samples/lowDrone3.mp3",
	19: "https://austinfranklin.github.io/7746MediaRepo/samples/lowDrone4.mp3",
	20: "https://austinfranklin.github.io/7746MediaRepo/samples/lowDrone4.mp3",
	21: "https://austinfranklin.github.io/7746MediaRepo/samples/lowDrone5.mp3",
	22: "https://austinfranklin.github.io/7746MediaRepo/samples/lowDrone6.mp3",
	23: "https://austinfranklin.github.io/7746MediaRepo/samples/nature1.mp3",
	24: "https://austinfranklin.github.io/7746MediaRepo/samples/nature2.mp3",
	25: "https://austinfranklin.github.io/7746MediaRepo/samples/piano1.mp3",
	26: "https://austinfranklin.github.io/7746MediaRepo/samples/piano2.mp3",
	27: "https://austinfranklin.github.io/7746MediaRepo/samples/piano3.mp3",
	28: "https://austinfranklin.github.io/7746MediaRepo/samples/piano4.mp3",
	29: "https://austinfranklin.github.io/7746MediaRepo/samples/piano5.mp3",
	30: "https://austinfranklin.github.io/7746MediaRepo/samples/synth1.mp3",
	31: "https://austinfranklin.github.io/7746MediaRepo/samples/synth2.mp3",
	32: "https://austinfranklin.github.io/7746MediaRepo/samples/synth3.mp3",
	33: "https://austinfranklin.github.io/7746MediaRepo/samples/synth4.mp3",
	34: "https://austinfranklin.github.io/7746MediaRepo/samples/synth5.mp3",
	35: "https://austinfranklin.github.io/7746MediaRepo/samples/tremDrone.mp3",
	36: "https://austinfranklin.github.io/7746MediaRepo/samples/wind1.mp3",
	37: "https://austinfranklin.github.io/7746MediaRepo/samples/wind2.mp3",
	38: "https://austinfranklin.github.io/7746MediaRepo/samples/ambientPiano.mp3",
	39: "https://austinfranklin.github.io/7746MediaRepo/samples/bells.mp3",
	40: "https://austinfranklin.github.io/7746MediaRepo/samples/cans.mp3",
	41: "https://austinfranklin.github.io/7746MediaRepo/samples/echo1.mp3",
	42: "https://austinfranklin.github.io/7746MediaRepo/samples/echo2.mp3",
	43: "https://austinfranklin.github.io/7746MediaRepo/samples/echo3.mp3",
	44: "https://austinfranklin.github.io/7746MediaRepo/samples/echo4.mp3",
	45: "https://austinfranklin.github.io/7746MediaRepo/samples/echo5.mp3",
	46: "https://austinfranklin.github.io/7746MediaRepo/samples/forest1.mp3",
	47: "https://austinfranklin.github.io/7746MediaRepo/samples/glitch1.mp3",
	48: "https://austinfranklin.github.io/7746MediaRepo/samples/glitch2.mp3",
	49: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics1.mp3",
	50: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics2.mp3",
	51: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics3.mp3",
	52: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics4.mp3",
	53: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics5.mp3",
	54: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics6.mp3",
	55: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics9.mp3",
	56: "https://austinfranklin.github.io/7746MediaRepo/samples/harmonics10.mp3",
	57: "https://austinfranklin.github.io/7746MediaRepo/samples/nature3.mp3",
	58: "https://austinfranklin.github.io/7746MediaRepo/samples/nature4.mp3",
	59: "https://austinfranklin.github.io/7746MediaRepo/samples/perc1.mp3",
	60: "https://austinfranklin.github.io/7746MediaRepo/samples/perc2.mp3",
	61: "https://austinfranklin.github.io/7746MediaRepo/samples/perc3.mp3",
	62: "https://austinfranklin.github.io/7746MediaRepo/samples/scary.mp3",
	63: "https://austinfranklin.github.io/7746MediaRepo/samples/synthDrone.mp3",
	64: "https://austinfranklin.github.io/7746MediaRepo/samples/synthLoop1.mp3",
	65: "https://austinfranklin.github.io/7746MediaRepo/samples/synthLoop2.mp3",
	66: "https://austinfranklin.github.io/7746MediaRepo/samples/synthLoop3.mp3",
}).toDestination();

































// start Nexus Hub
const Hub = require("hub");
const hub = new Hub;

hub.init();

// code for pop-up window at beginning
const entireWindow = document.getElementById("entireWindow");
const main = document.getElementById("main");

// code for getting user name, geo, and Id
user = {
	name: "",
	geo: "",
	id: ""
};

// mouse pos variable
positions = {
	x: "",
	y: ""
};

// object for all users tone.players
let panners = {};
let gainNode = {};

// varible for user svg object
let entireBox = document.getElementById("svg");

// variable for sample playback... number of total samples
let samples = 66;

// variable for sample
let whichSample;




























document.getElementById("close").onclick = function () {
	entireWindow.classList.add("hide");
	main.classList.add("show");

	// sets color of fields on screen
	setColor();

	user.name = document.getElementById("name").value;
	user.geo = document.getElementById("geo").value;

	user.id = "";
	for (let i = 0; i < 8; i++) {
		user.id += [Math.floor(Math.random() * 16)];
	}
	//console.log(user.name);
	//console.log(user.geo);
	//console.log(user.id);

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

	// set 1 random sample
	whichSample = Math.floor(Math.random() * samples);

	// users effects
	const myGain = new Tone.Gain(0.25).toDestination();
	const myPan = new Tone.Panner(0).toDestination();

	panners[user.id] = myPan;
	gainNode[user.id] = myGain;

	players.player(whichSample).loop = true;
	players.player(whichSample).connect(myGain).connect(myPan).start();

	hub.user.name = user.name;
	hub.user.geo = user.geo;
	hub.user.userId = user.id;
	hub.register();
};


























// set random colo for divs
function setColor() {
	//color
	let string = "0123456789ABCDEF".split("");
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += string[Math.floor(Math.random() * 16)];
		let backdrop = (document.getElementById(
			`main`
		).style.backgroundColor = color);
	}
}

// mousestate variable for events
let mouseState = false;
let touchState = false;

// mouse down
entireBox.onmousedown = () => {
	console.log("down");
	mouseState = true;
};
// touch down
entireBox.touchstart = () => {
	console.log("down");
	touchState = true;
};

// scroll offset variable
let scrollXOffset = 0;
let scrollYOffset = 0;

// scrolling amount by which to offset svg
onscroll = () => {
	// horizontal scrolling amount
	scrollXOffset = window.pageXOffset;
	// vertical scrolling amount
	scrollYOffset = window.pageYOffset;
	//console.log("x: " + scrollXOffset + "y: " + scrollYOffset);
};

// drag box with mouse
onmousemove = (e) => {
	if (mouseState) {
		// get size in px of svg
		entireBox.style.boxSizing = "content-box";
		let myWidth = entireBox.getBoundingClientRect().width;
		let myHeight = entireBox.getBoundingClientRect().height;
		//console.log("width: " + myWidth + " height: " + myHeight);

		// mouse horizontal and vertical coordinates
		positions.x = e.clientX + scrollXOffset;
		positions.y = e.clientY + scrollYOffset;
		//console.log("posX: ", positions.x, "posY: ", positions.y);

		// use mouse pos and offset by 1/2 size of svg
		entireBox.style.left = `${positions.x - myWidth / 2}px`;
		entireBox.style.top = `${positions.y - myHeight / 2}px`;

		panners[user.id].pan.rampTo(scale(positions.x, 0, window.innerWidth, -1, 1), 0.1);
		gainNode[user.id].gain.rampTo(scale(positions.y, 0, window.innerHeight, 0, 2), 0.1);

		console.log("pan: " + scale(positions.x, 0, window.innerWidth, -1, 1));
		console.log("volume: " + scale(positions.y, 0, window.innerHeight, 0, 2));
	}
};

// drag box with finger
touchmove = (e) => {
	if (touchState) {
		// get size in px of svg
		entireBox.style.boxSizing = "content-box";
		let myWidth = entireBox.getBoundingClientRect().width;
		let myHeight = entireBox.getBoundingClientRect().height;
		console.log("width: " + myWidth + " height: " + myHeight);

		// mouse horizontal and vertical coordinates
		positions.x = e.clientX + scrollXOffset;
		positions.y = e.clientY + scrollYOffset;
		console.log("posX: ", positions.x, "posY: ", positions.y);

		// use mouse pos and offset by 1/2 size of svg
		entireBox.style.left = `${positions.x - myWidth / 2}px`;
		entireBox.style.top = `${positions.y - myHeight / 2}px`;
	}
};

// mouse up
entireBox.onmouseup = () => {
	console.log("up");
	mouseState = false;
};

// touch up
entireBox.touchend = () => {
	console.log("up");
	touchState = false;
};





























// Nexus-Hub stuff

// array for site users
let users = [];
// variable for users svg
let usersSquare;


hub.channel("logOff", null, null, function (data) {
	if(users.includes(data.userId)) {
		console.log(data);

		let square = document.getElementById(data.userId);
		square.remove();

		let div3 = document.createElement('div');
		div3.innerHTML = "<span>" + data.userName + "</span>, from <span>" + data.userGeo + "</span> has left!";
		div3.style.paddingTop = "5px";
		document.getElementById("allUsers").appendChild(div3);
	}
})

// channel
hub.channel("moveAndPlay", null, null, function (data) {
	//console.log('data: ', data);

	// checks to see if user exists
	// if no, then add user to array and create div to add to container
	// is yes, update position
    	if (!users.includes(data.user)) {
			users.push(data.user);
			let div = document.createElement('div');
			div.id = data.user;
			div.innerHTML = netArtBox;
			document.getElementById("container").appendChild(div);
			div.style.position = "absolute";
			div.style.width = "5%";
			div.style.height = "5%";

			let div2 = document.createElement('div');
			div2.innerHTML = "<span>" + data.name + "</span>, from <span>" + data.geo + "</span> has joined the group!";
			div2.style.paddingTop = "5px";
			document.getElementById("allUsers").appendChild(div2);

			let gain = new Tone.Gain(0.25).toDestination();
			let pan = new Tone.Panner(0).toDestination();
			panners[data.user] = pan;
			gainNode[data.user] = gain;

			players.player(data.sample).loop = true;
			players.player(data.sample).connect(gain).connect(pan).start();

		} else {
			usersSquare = document.getElementById(data.user);
			usersSquare.style.left = `${data.positionX}px`;
			usersSquare.style.top = `${data.positionY}px`;

			panners[data.user].pan.rampTo(scale(positions.x, 0, window.innerWidth, -1, 1), 0.5);
			gainNode[data.user].gain.rampTo(scale(positions.y, 0, window.innerHeight, 0, 10), 0.1);

			// console.log("GAIN: " + data.positionY/window.innerHeight);
			// console.log("PAN: " + data.positionX/window.innerWidth);

			//gain = Tone.Gain(normalize(data.positionY/window.innerHeight), 0, 1).toDestination();
			//pan = Tone.Panner(normalize(data.positionX/window.innerWidth), -1, 1).toDestination();
	}
});

// event send if entireBox moves or user triggers sound
entireBox.addEventListener("mousemove", function () {
		hub.send("moveAndPlay", {
			name: user.name,
			geo: user.geo,
			user: user.id,
			sample: whichSample,
			positionX: positions.x,
			positionY: positions.y
		});
});






























// functions

function scale(val, oldMin, oldMax, newMin, newMax) {
	return ((val - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}