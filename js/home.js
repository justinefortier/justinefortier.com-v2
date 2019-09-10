let canvas;
let width = window.innerWidth;
let height;

let x1 = width / 7,
	x2 = width / 1.6,
	x3 = width / 1.7,
	x4 = width / 3.2;
let xSpeed = 0.4;
let x1Direction = 1,
	x3Direction = 1;


function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.class('backgroundsketch');
	canvas.parent("home")
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
}

function draw() {
	background(18, 27, 53);

	fill(0, 36, 69);
	noStroke();

	height = windowHeight;
	width = windowWidth;

	let y1 = y2 = 0,
		y3 = y4 = height;

	quad(x1, y1, x2, y2, x3, y3, x4, y4);

	quadMove()
}

function quadMove() {
	let x1InitialPosition = width / 7,
		x3InitialPosition = width / 1.7;

	x1 = x1 + x1Direction * xSpeed;
	if (x1 > x1InitialPosition + 180) {
		x1Direction = -1;
	} else if (x1 < x1InitialPosition - 40) {
		x1Direction = 1;
	};

	x3 = x3 + x3Direction * xSpeed;
	if (x3 > x3InitialPosition + 40) {
		x3Direction = -1;
	} else if (x3 < x3InitialPosition - 80) {
		x3Direction = 1;
	};
}

function windowResized() {
	console.log('window is resized');
	resizeCanvas(windowWidth, windowHeight);
	x1 = width / 7;
	x2 = width / 1.6;
	x3 = width / 1.7;
	x4 = width / 3.2;
}