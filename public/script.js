// players for audio samples
const players = new Tone.Players({
	1: "https://austinfranklin.github.io/NetArt/media/sample1.mp3",
	2: "https://austinfranklin.github.io/NetArt/media/sample2.mp3",
	3: "https://austinfranklin.github.io/NetArt/media/sample3.mp3",
	4: "https://austinfranklin.github.io/NetArt/media/sample4.mp3",
	5: "https://austinfranklin.github.io/NetArt/media/sample5.mp3",
	6: "https://austinfranklin.github.io/NetArt/media/sample6.mp3",
	7: "https://austinfranklin.github.io/NetArt/media/sample7.mp3",
	8: "https://austinfranklin.github.io/NetArt/media/sample8.mp3",
	9: "https://austinfranklin.github.io/NetArt/media/sample9.mp3",
	10: "https://austinfranklin.github.io/NetArt/media/sample10.mp3",
	11: "https://austinfranklin.github.io/NetArt/media/sample11.mp3",
	12: "https://austinfranklin.github.io/NetArt/media/sample12.mp3",
	13: "https://austinfranklin.github.io/NetArt/media/sample13.mp3",
	14: "https://austinfranklin.github.io/NetArt/media/sample14.mp3",
	15: "https://austinfranklin.github.io/NetArt/media/sample15.mp3",
	16: "https://austinfranklin.github.io/NetArt/media/sample16.mp3",
	17: "https://austinfranklin.github.io/NetArt/media/sample17.mp3",
	18: "https://austinfranklin.github.io/NetArt/media/sample18.mp3",
	19: "https://austinfranklin.github.io/NetArt/media/sample19.mp3",
	20: "https://austinfranklin.github.io/NetArt/media/sample20.mp3",
	21: "https://austinfranklin.github.io/NetArt/media/sample21.mp3",
	22: "https://austinfranklin.github.io/NetArt/media/sample22.mp3",
	23: "https://austinfranklin.github.io/NetArt/media/sample23.mp3",
	24: "https://austinfranklin.github.io/NetArt/media/sample24.mp3",
	25: "https://austinfranklin.github.io/NetArt/media/sample25.mp3",
	26: "https://austinfranklin.github.io/NetArt/media/sample26.mp3",
	27: "https://austinfranklin.github.io/NetArt/media/sample27.mp3",
	28: "https://austinfranklin.github.io/NetArt/media/sample28.mp3",
	29: "https://austinfranklin.github.io/NetArt/media/sample29.mp3",
	30: "https://austinfranklin.github.io/NetArt/media/sample30.mp3",
	31: "https://austinfranklin.github.io/NetArt/media/sample31.mp3",
	32: "https://austinfranklin.github.io/NetArt/media/sample32.mp3",
	33: "https://austinfranklin.github.io/NetArt/media/sample33.mp3",
	34: "https://austinfranklin.github.io/NetArt/media/sample34.mp3",
	35: "https://austinfranklin.github.io/NetArt/media/sample35.mp3",
	36: "https://austinfranklin.github.io/NetArt/media/sample36.mp3",
	37: "https://austinfranklin.github.io/NetArt/media/sample37.mp3",
	38: "https://austinfranklin.github.io/NetArt/media/sample38.mp3",
	39: "https://austinfranklin.github.io/NetArt/media/sample39.mp3",
	40: "https://austinfranklin.github.io/NetArt/media/sample40.mp3",
	41: "https://austinfranklin.github.io/NetArt/media/sample41.mp3",
	42: "https://austinfranklin.github.io/NetArt/media/sample42.mp3",
	43: "https://austinfranklin.github.io/NetArt/media/sample43.mp3",
	44: "https://austinfranklin.github.io/NetArt/media/sample44.mp3",
	45: "https://austinfranklin.github.io/NetArt/media/sample45.mp3",
	46: "https://austinfranklin.github.io/NetArt/media/sample46.mp3",
	47: "https://austinfranklin.github.io/NetArt/media/sample47.mp3",
	48: "https://austinfranklin.github.io/NetArt/media/sample48.mp3",
	49: "https://austinfranklin.github.io/NetArt/media/sample49.mp3",
	50: "https://austinfranklin.github.io/NetArt/media/sample50.mp3",
	51: "https://austinfranklin.github.io/NetArt/media/sample51.mp3",
	52: "https://austinfranklin.github.io/NetArt/media/sample52.mp3",
	53: "https://austinfranklin.github.io/NetArt/media/sample53.mp3",
	54: "https://austinfranklin.github.io/NetArt/media/sample54.mp3",
	55: "https://austinfranklin.github.io/NetArt/media/sample55.mp3",
	56: "https://austinfranklin.github.io/NetArt/media/sample56.mp3",
	57: "https://austinfranklin.github.io/NetArt/media/sample57.mp3",
	58: "https://austinfranklin.github.io/NetArt/media/sample58.mp3",
	59: "https://austinfranklin.github.io/NetArt/media/sample59.mp3",
	60: "https://austinfranklin.github.io/NetArt/media/sample60.mp3",
	61: "https://austinfranklin.github.io/NetArt/media/sample61.mp3",
	62: "https://austinfranklin.github.io/NetArt/media/sample62.mp3",
	63: "https://austinfranklin.github.io/NetArt/media/sample63.mp3",
	64: "https://austinfranklin.github.io/NetArt/media/sample64.mp3",
	65: "https://austinfranklin.github.io/NetArt/media/sample65.mp3",
	66: "https://austinfranklin.github.io/NetArt/media/sample66.mp3",
	67: "https://austinfranklin.github.io/NetArt/media/sample67.mp3",
	68: "https://austinfranklin.github.io/NetArt/media/sample68.mp3",
	69: "https://austinfranklin.github.io/NetArt/media/sample69.mp3",
	70: "https://austinfranklin.github.io/NetArt/media/sample70.mp3",
	71: "https://austinfranklin.github.io/NetArt/media/sample71.mp3",
	72: "https://austinfranklin.github.io/NetArt/media/sample72.mp3",
	73: "https://austinfranklin.github.io/NetArt/media/sample73.mp3",
	74: "https://austinfranklin.github.io/NetArt/media/sample74.mp3",
	75: "https://austinfranklin.github.io/NetArt/media/sample75.mp3",
	76: "https://austinfranklin.github.io/NetArt/media/sample76.mp3",
	77: "https://austinfranklin.github.io/NetArt/media/sample77.mp3",
	78: "https://austinfranklin.github.io/NetArt/media/sample78.mp3",
	79: "https://austinfranklin.github.io/NetArt/media/sample79.mp3",
	80: "https://austinfranklin.github.io/NetArt/media/sample80.mp3",
	81: "https://austinfranklin.github.io/NetArt/media/sample81.mp3",
	82: "https://austinfranklin.github.io/NetArt/media/sample82.mp3",
	83: "https://austinfranklin.github.io/NetArt/media/sample83.mp3",
	84: "https://austinfranklin.github.io/NetArt/media/sample84.mp3",
	85: "https://austinfranklin.github.io/NetArt/media/sample85.mp3",
	86: "https://austinfranklin.github.io/NetArt/media/sample86.mp3",
	87: "https://austinfranklin.github.io/NetArt/media/sample87.mp3",
	88: "https://austinfranklin.github.io/NetArt/media/sample88.mp3",
	89: "https://austinfranklin.github.io/NetArt/media/sample89.mp3",
	90: "https://austinfranklin.github.io/NetArt/media/sample90.mp3",
	91: "https://austinfranklin.github.io/NetArt/media/sample91.mp3",
	92: "https://austinfranklin.github.io/NetArt/media/sample92.mp3",
	93: "https://austinfranklin.github.io/NetArt/media/sample93.mp3",
	94: "https://austinfranklin.github.io/NetArt/media/sample94.mp3",
	95: "https://austinfranklin.github.io/NetArt/media/sample95.mp3",
	96: "https://austinfranklin.github.io/NetArt/media/sample96.mp3",
	97: "https://austinfranklin.github.io/NetArt/media/sample97.mp3",
	98: "https://austinfranklin.github.io/NetArt/media/sample98.mp3",
	99: "https://austinfranklin.github.io/NetArt/media/sample99.mp3",
	100: "https://austinfranklin.github.io/NetArt/media2/sample100.mp3",
	101: "https://austinfranklin.github.io/NetArt/media2/sample101.mp3",
	102: "https://austinfranklin.github.io/NetArt/media2/sample102.mp3",
	103: "https://austinfranklin.github.io/NetArt/media2/sample103.mp3",
	104: "https://austinfranklin.github.io/NetArt/media2/sample104.mp3",
	105: "https://austinfranklin.github.io/NetArt/media2/sample105.mp3",
	106: "https://austinfranklin.github.io/NetArt/media2/sample106.mp3",
	107: "https://austinfranklin.github.io/NetArt/media2/sample107.mp3",
	108: "https://austinfranklin.github.io/NetArt/media2/sample108.mp3",
	109: "https://austinfranklin.github.io/NetArt/media2/sample109.mp3",
	110: "https://austinfranklin.github.io/NetArt/media2/sample110.mp3",
	111: "https://austinfranklin.github.io/NetArt/media2/sample111.mp3",
	112: "https://austinfranklin.github.io/NetArt/media2/sample112.mp3",
	113: "https://austinfranklin.github.io/NetArt/media2/sample113.mp3",
	114: "https://austinfranklin.github.io/NetArt/media2/sample114.mp3",
	115: "https://austinfranklin.github.io/NetArt/media2/sample115.mp3",
	116: "https://austinfranklin.github.io/NetArt/media2/sample116.mp3",
	117: "https://austinfranklin.github.io/NetArt/media2/sample117.mp3",
	118: "https://austinfranklin.github.io/NetArt/media2/sample118.mp3",
	119: "https://austinfranklin.github.io/NetArt/media2/sample119.mp3",
	120: "https://austinfranklin.github.io/NetArt/media2/sample120.mp3",
	121: "https://austinfranklin.github.io/NetArt/media2/sample121.mp3",
	122: "https://austinfranklin.github.io/NetArt/media2/sample122.mp3",
	123: "https://austinfranklin.github.io/NetArt/media2/sample123.mp3",
	124: "https://austinfranklin.github.io/NetArt/media2/sample124.mp3",
	125: "https://austinfranklin.github.io/NetArt/media2/sample125.mp3",
	126: "https://austinfranklin.github.io/NetArt/media2/sample126.mp3",
	127: "https://austinfranklin.github.io/NetArt/media2/sample127.mp3",
	128: "https://austinfranklin.github.io/NetArt/media2/sample128.mp3",
	129: "https://austinfranklin.github.io/NetArt/media2/sample129.mp3",
	130: "https://austinfranklin.github.io/NetArt/media2/sample130.mp3",
	131: "https://austinfranklin.github.io/NetArt/media2/sample131.mp3",
	132: "https://austinfranklin.github.io/NetArt/media2/sample132.mp3",
	133: "https://austinfranklin.github.io/NetArt/media2/sample133.mp3",
	134: "https://austinfranklin.github.io/NetArt/media2/sample134.mp3",
	135: "https://austinfranklin.github.io/NetArt/media2/sample135.mp3",
	136: "https://austinfranklin.github.io/NetArt/media2/sample136.mp3",
	137: "https://austinfranklin.github.io/NetArt/media2/sample137.mp3",
	138: "https://austinfranklin.github.io/NetArt/media2/sample138.mp3",
	139: "https://austinfranklin.github.io/NetArt/media2/sample139.mp3",
	140: "https://austinfranklin.github.io/NetArt/media2/sample140.mp3",
	141: "https://austinfranklin.github.io/NetArt/media2/sample141.mp3",
	142: "https://austinfranklin.github.io/NetArt/media2/sample142.mp3",
	143: "https://austinfranklin.github.io/NetArt/media2/sample143.mp3",
	144: "https://austinfranklin.github.io/NetArt/media2/sample144.mp3",
	145: "https://austinfranklin.github.io/NetArt/media2/sample145.mp3",
	146: "https://austinfranklin.github.io/NetArt/media2/sample146.mp3",
	147: "https://austinfranklin.github.io/NetArt/media2/sample147.mp3",
	148: "https://austinfranklin.github.io/NetArt/media2/sample148.mp3",
	149: "https://austinfranklin.github.io/NetArt/media2/sample149.mp3",
	150: "https://austinfranklin.github.io/NetArt/media2/sample150.mp3",
	151: "https://austinfranklin.github.io/NetArt/media2/sample151.mp3",
	152: "https://austinfranklin.github.io/NetArt/media2/sample152.mp3",
	153: "https://austinfranklin.github.io/NetArt/media2/sample153.mp3",
	154: "https://austinfranklin.github.io/NetArt/media2/sample154.mp3",
	155: "https://austinfranklin.github.io/NetArt/media2/sample155.mp3",
	156: "https://austinfranklin.github.io/NetArt/media2/sample156.mp3",
	157: "https://austinfranklin.github.io/NetArt/media2/sample157.mp3",
	158: "https://austinfranklin.github.io/NetArt/media2/sample158.mp3"
});
















// resize for mobile devices... height didn't set properly with meta tag
let vh = window.innerHeight * 0.01;
let vh2 = window.innerWidth * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vh2', `${vh2}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	let vh2 = window.innerWidth * 0.01;
	document.documentElement.style.setProperty('--vh2', `${vh2}px`);
});















// Nexus-Hub

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

windowSize = {
	w: "",
	h: ""
}

// object for all users tone.players
let gainNode = {};
let lowPass = {};
let reverbs = {};
let panners = {};

// varible for user svg object
let entireBox = document.getElementById("svg");

// variable for sample playback... number of total samples
let samples = 158;

// variable for sample
let whichSample;

// array for all site users
let users = [];





















document.getElementById("close").onclick = function () {
	entireWindow.classList.add("hide");
	main.classList.add("show");

	// sets color of fields on screen
	//setColor();

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
	document.getElementById("svg").id = user.id;
	document.getElementById(`${user.id}`).innerHTML = setColor();
	document.getElementById(`${user.id}`).style.zIndex = 6;
	entireBox = document.getElementById(`${user.id}`);
	document.getElementById("container").appendChild(entireBox);
	entireBox.style.position = "absolute";
	entireBox.style.width = "12%";
	entireBox.style.height = "12%";
	entireBox.style.top = "50%";
	entireBox.style.left = "50%";

	windowSize.w = window.innerWidth;
	windowSize.h = window.innerHeight;

	// set 1 random sample
	whichSample = Math.floor(Math.random() * samples);

	// users effects
	const myGain = new Tone.Volume(-12);
	const myFilter = new Tone.BiquadFilter(4990, "lowpass");
	const myReverb = new Tone.JCReverb(0.5);
	const myPan = new Tone.Panner(0);

	gainNode[user.id] = myGain;
	lowPass[user.id] = myFilter;
	reverbs[user.id] = myReverb;
	panners[user.id] = myPan;

	players.player(whichSample).loop = true;
	players.player(whichSample).chain(myFilter, myReverb, myPan, myGain, Tone.Destination).start();

	//players.player(whichSample).start();


	hub.user.name = user.name;
	hub.user.geo = user.geo;
	hub.user.userId = user.id;
	hub.user.sample = whichSample;
	hub.register();
};

















// variable for events on computer and mobile
let mouseState = false;

// mouse down
entireBox.onmousedown = () => {
	console.log("down");
	mouseState = true;
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

		// get size of svg
		let myWidth = entireBox.getBoundingClientRect().width;
		let myHeight = entireBox.getBoundingClientRect().height;

		// get size in px of svg
		entireBox.style.boxSizing = "content-box";
		//console.log("width: " + myWidth + " height: " + myHeight);

		// mouse horizontal and vertical coordinates
		positions.x = e.clientX + scrollXOffset;
		positions.y = e.clientY + scrollYOffset;
		//console.log("posX: ", positions.x, "posY: ", positions.y);

		// use mouse pos and offset by 1/2 size of svg
		entireBox.style.left = `${(positions.x - (window.innerWidth / 4)) - (myWidth / 2)}px`;
		entireBox.style.top = `${positions.y - myHeight / 2}px`;

		// set gain
		if (scale(positions.y, 0, windowSize.h, -18, -6) < -18) {
			gainNode[user.id].volume.value = -18;
		} else if (scale(positions.y, 0, windowSize.h, -18, -6) > -6) {
			gainNode[user.id].volume.value = -6;
		} else {
			gainNode[user.id].volume.value = (scale(positions.y, 0, windowSize.h, -18, -6));
		}

		// set filter cutoff
		if (scale(positions.y, 0, windowSize.h, 20, 10000) < 20) {
			lowPass[user.id].frequency.value = 20;
		} else if (scale(positions.y, 0, windowSize.h, 20, 10000) > 10000) {
			lowPass[user.id].frequency.value = 10000;
		} else {
			lowPass[user.id].frequency.rampTo(scale(positions.y, 0, windowSize.h, 20, 10000), 2);
		}

		// set reverb
		if (scale((positions.x - (windowSize.w / 4)), 0, windowSize.w, 0, 1) < 0) {
			reverbs[user.id].roomSize.value = 0;
		} else if (scale((positions.x - (windowSize.w / 4)), 0, windowSize.w, 0, 1) > 1) {
			reverbs[user.id].roomSize.value = 1;
		} else {
			reverbs[user.id].roomSize.rampTo(scale((positions.x - (windowSize.w / 4)), 0, windowSize.w, 0, 1), 2);
		}

		// set pan
		if (scale((positions.x - (windowSize.w / 4)), 0, windowSize.w, -1, 1) < -1) {
			panners[user.id].pan.value = -1;
		} else if (scale((positions.x - (windowSize.w / 4)), 0, windowSize.w, -1, 1) > 1) {
			panners[user.id].pan.value = 1;
		} else {
			panners[user.id].pan.rampTo(scale((positions.x - (windowSize.w / 4)), 0, windowSize.w, -1, 1), 2);
		}

		console.log("volume: " + gainNode[user.id].volume.value);
		console.log("pan & reverb: " + panners[user.id].pan.value);
		console.log("cutoff: " + lowPass[user.id].frequency.value);

		// console.log(container.clientHeight);
		// console.log(container.clientWidth);

		hub.send("moveAndPlay", {
			name: user.name,
			geo: user.geo,
			user: user.id,
			sample: whichSample,
			width: windowSize.w,
			height: windowSize.h,
			positionX: positions.x,
			positionY: positions.y
		});
	}
};


entireBox.addEventListener('touchmove', function (e) {

	// get size of svg
	let myWidth = entireBox.getBoundingClientRect().width;
	let myHeight = entireBox.getBoundingClientRect().height;

	//grab the location of the touch
	var touchLocation = e.targetTouches[0];
	
	// get size in px of svg
	entireBox.style.boxSizing = "content-box";
	//console.log("width: " + myWidth + " height: " + myHeight);

	// horizontal scrolling amount
	scrollXOffset = window.pageXOffset;
	// vertical scrolling amount
	scrollYOffset = window.pageYOffset;
	//console.log("x: " + scrollXOffset + "y: " + scrollYOffset);

	// touch horizontal and vertical coordinates
	positions.x = touchLocation.pageX - (myWidth / 2);
	positions.y = touchLocation.pageY - (myHeight / 2);
	//console.log("posX: ", positions.x, "posY: ", positions.y);

	//assign new coordinates based on the touch
	// use touch pos and offset by 1/2 size of svg
	entireBox.style.left = `${(touchLocation.pageX - (windowSize.w / 4)) - myWidth / 2}px`;
	entireBox.style.top = `${touchLocation.pageY - myHeight / 2}px`;

	// set gain
	if (scale(touchLocation.pageY, 0, windowSize.h, -18, -6) < -18) {
		gainNode[user.id].volume.value = -18;
	} else if (scale(touchLocation.pageY, 0, windowSize.h, -18, -6) > -6) {
		gainNode[user.id].volume.value = -6;
	} else {
		gainNode[user.id].volume.value = (scale(touchLocation.pageY, 0, windowSize.h, -18, -6));
	}

		// set filter cutoff
	if (scale(touchLocation.pageY, 0, windowSize.h, 20, 10000) < 20) {
		lowPass[user.id].frequency.value = 20;
	} else if (scale(touchLocation.pageY, 0, windowSize.h, 20, 10000) > 10000) {
		lowPass[user.id].frequency.value = 10000;
	} else {
		lowPass[user.id].frequency.rampTo(scale(touchLocation.pageY, 0, windowSize.h, 20, 10000), 2);
	}

		// set reverb
	if (scale((touchLocation.pageX - (windowSize.w / 4)), 0, windowSize.w, 0, 1) < 0) {
		reverbs[user.id].roomSize.value = 0;
	} else if (scale((touchLocation.pageX - (windowSize.w / 4)), 0, windowSize.w, 0, 1) > 1) {
		reverbs[user.id].roomSize.value = 1;
	} else {
		reverbs[user.id].roomSize.rampTo(scale((touchLocation.pageX - (windowSize.w / 4)), 0, windowSize.w, 0, 1), 2);
	}

		// set pan
	if (scale((touchLocation.pageX - (windowSize.w / 4)), 0, windowSize.w, -1, 1) < -1) {
		panners[user.id].pan.value = -1;;
	} else if (scale((touchLocation.pageX - (windowSize.w / 4)), 0, windowSize.w, -1, 1) > 1) {
		panners[user.id].pan.value = 1;
	} else {
		panners[user.id].pan.rampTo(scale((touchLocation.pageX - (windowSize.w / 4)), 0, windowSize.w, -1, 1), 2);
	}

	console.log("volume: " + gainNode[user.id].volume.value);
	console.log("pan & reverb: " + panners[user.id].pan.value);
	console.log("cutoff: " + lowPass[user.id].frequency.value);

	// send positions through the hub
	hub.send("moveAndPlay", {
		name: user.name,
		geo: user.geo,
		user: user.id,
		sample: whichSample,
		width: windowSize.w,
		height: windowSize.h,
		positionX: positions.x,
		positionY: positions.y
	});
});


// mouse up
entireBox.onmouseup = () => {
	console.log("up");
	mouseState = false;
};
















// sending messages with the chat
document.getElementById('textArea').addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
		let text = document.createElement('div');
		let textId = "";
		for (let i = 0; i < 8; i++) {
			textId += [Math.floor(Math.random() * 16)];
		}
	
		text.id = textId;
		let message = `${user.name}: ${document.getElementById("textArea").value}`;

		text.innerHTML = message;
		text.style.borderBottom = "1px solid black";
		document.getElementById("textBox").prepend(text);
		document.getElementById("textArea").value = "";

		// send message
		hub.send("moveAndPlay", {
			user: user.id,
			textId: textId,
			message: message
		});
	}
});

















// random object size for each user... for offset on receiving side
let size = {};




// Nexus-Hub

// variable for users svg
let usersSquare;


hub.channel("logOff", null, null, function (data) {
	if(users.includes(data.userId)) {
		console.log(data);

		let square = document.getElementById(data.userId);
		square.remove();

		players.player(data.userSample).stop();

		let div3 = document.createElement('div');
		div3.innerHTML = "<span>" + data.userName + "</span>, from <span>" + data.userGeo + "</span> has left";
		div3.style.borderBottom = "1px solid black";
		document.getElementById("textBox").prepend(div3);
	}
})

// channel
hub.channel("moveAndPlay", null, null, function (data) {
	//console.log('data: ', data);

	// checks to see if user exists
	// if no, then add user to array and create div to add to container
	// is yes, update position
    	if (!users.includes(data.user)) {

			let rand = (Math.random() * 7) + 3;
			size[data.user] = rand;

			users.push(data.user);
			let div = document.createElement('div');
			div.id = data.user;
			div.innerHTML = setColor();
			document.getElementById("container").appendChild(div);
			div.style.position = "absolute";
			div.style.width = `${rand}%`;
			div.style.height = `${rand}%`;
			// div.style.top = "50%";
			// div.style.left = "50%";

			let div2 = document.createElement('div');
			div2.innerHTML = "<span>" + data.name + "</span>, from <span>" + data.geo + "</span> has joined";
			div2.style.borderBottom = "1px solid black";
			document.getElementById("textBox").prepend(div2);

			const gain = new Tone.Volume(-12);
			const filter = new Tone.BiquadFilter(4990, "lowpass");
			const reverb = new Tone.JCReverb(0.5);
			const pan = new Tone.Panner(0);
			
			gainNode[data.user] = gain;
			lowPass[data.user] = filter;
			reverbs[data.user] = reverb;
			panners[data.user] = pan;


			players.player(data.sample).loop = true;
			players.player(data.sample).chain(filter, reverb, pan, gain, Tone.Destination).start();

		} else if (data.textId) {
			// send messages
			let chat = document.createElement('div');
			chat.id = data.textId;
			chat.innerHTML = data.message;
			chat.style.borderBottom = "1px solid black";
			document.getElementById("textBox").prepend(chat);

		} else {
			usersSquare = document.getElementById(data.user);

			usersSquare.style.marginLeft = "-35%"

			// update position
			usersSquare.style.left = `${scale(data.positionX, 0, data.width, 0, document.body.clientWidth) - (size[data.user] * 2)}px`;
			usersSquare.style.top = `${scale(data.positionY, 0, data.height, 0, document.body.clientHeight) - (size[data.user] * 2)}px`;


			// set gain
			if (scale(data.positionY, 0, data.height, -18, -6) < -18) {
				gainNode[data.user].volume.value = -18;
			} else if (scale(data.positionY, 0, data.height, -18, -6) > -6) {
				gainNode[data.user].volume.value = -6;
			} else {
				gainNode[data.user].volume.value = (scale(data.positionY, 0, data.height, -18, -6));
			}

			// set filter cutoff
			if (scale(data.positionY, 0, data.height, 20, 10000) < 20) {
				lowPass[data.user].frequency.value = 20;
			} else if (scale(data.positionY, 0, data.height, 20, 10000) > 10000) {
				lowPass[data.user].frequency.value = 10000;
			} else {
				lowPass[data.user].frequency.rampTo(scale(data.positionY, 0, data.height, 20, 10000), 2);
			}

			// set reverb
			if (scale((data.positionX - (data.width / 4)), 0, data.width, 0, 1) < 0) {
				reverbs[data.user].roomSize.value = 0;
			} else if (scale((data.positionX - (data.width / 4)), 0, data.width, 0, 1) > 1) {
				reverbs[data.user].roomSize.value = 1;
			} else {
				reverbs[data.user].roomSize.rampTo(scale((data.positionX - (data.width / 4)), 0, data.width, 0, 1), 2);
			}

			// set pan
			if (scale((data.positionX - (data.width / 4)), 0, data.width, -1, 1) < -1) {
				panners[data.user].pan.value = -1;
			} else if (scale((data.positionX - (data.width / 4)), 0, data.width, -1, 1) > 1) {
				panners[data.user].pan.value = 1;
			} else {
				panners[data.user].pan.rampTo(scale((data.positionX - (data.width / 4)), 0, data.width, -1, 1), 2);
			}

			// set gain for mobile
			if (scale(data.positionY, 0, data.height, -18, -6) < -18) {
				gainNode[data.user].volume.value = -18;
			} else if (scale(data.positionY, 0, data.height, -18, -6) > -6) {
				gainNode[data.user].volume.value = -6;
			} else {
				gainNode[data.user].volume.value = (scale(data.positionY, 0, data.height, -18, -6));
			}

			// set filter cutoff for mobile
			if (scale(data.positionY, 0, data.height, 20, 10000) < 20) {
				lowPass[data.user].frequency.value = 20;
			} else if (scale(data.positionY, 0, data.height, 20, 10000) > 10000) {
				lowPass[data.user].frequency.value = 10000;
			} else {
				lowPass[data.user].frequency.rampTo(scale(data.positionY, 0, data.height, 20, 10000), 2);
			}

			// set reverb for mobile
			if (scale((data.positionX - (data.width / 4)), 0, data.width, 0, 1) < 0) {
				reverbs[data.user].roomSize.value = 0;
			} else if (scale((data.positionX - (data.width / 4)), 0, data.width, 0, 1) > 1) {
				reverbs[data.user].roomSize.value = 1;
			} else {
				reverbs[data.user].roomSize.rampTo(scale((data.positionX - (data.width / 4)), 0, data.width, 0, 1), 2);
			}

			// set pan for mobile
			if (scale((data.positionX - (data.width / 4)), 0, data.width, -1, 1) < -1) {
				panners[data.user].pan.value = -1;
			} else if (scale((data.positionX - (data.width / 4)), 0, data.width, -1, 1) > 1) {
				panners[data.user].pan.value = 1;
			} else {
				panners[data.user].pan.rampTo(scale((data.positionX - (data.width / 4)), 0, data.width, -1, 1), 2);
			}

			// console.log("volume: " + gainNode[data.user].gain.value);
			// console.log("pan + reverb: " + panners[data.user].pan.value);
			// console.log("cutoff: " + filter[data.user].frequency.value);
	}
});

// event send if entireBox moves or user triggers sound
// entireBox.addEventListener("mousemove", function () {
// 		hub.send("moveAndPlay", {
// 			name: user.name,
// 			geo: user.geo,
// 			user: user.id,
// 			sample: whichSample,
// 			width: windowSize.w,
// 			height: windowSize.h,
// 			positionX: positions.x,
// 			positionY: positions.y
// 		});
// });














// functions

function scale(val, oldMin, oldMax, newMin, newMax) {
	return ((val - oldMin) / (oldMax - oldMin)) * (newMax - newMin) + newMin;
}

// set random color
function setColor() {
	let r = (Math.random() * 100) + 55;
	let g = (Math.random() * 100) + 55;
	let b = (Math.random() * 100) + 55;

	return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 250 250" width="100%" height="100%" id="svg" transform="translate(0,0)">
	<defs>
	</defs>
	<g clip-path="url(#_clipPath_LSpHi2bqIWqMMeHYsNd6Lt2geyDjS5Z6)">
		<circle id="circy" cx="125" cy="125" width="100%" height="100%" r="125" fill="rgb(${r},${g},${b})" />	
	</g>
</svg>`
}