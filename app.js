const makeRandColor = () => {
	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
	button.addEventListener("click", colorize, { once: true });
	button.addEventListener("click", textDel, { once: true });
}

function colorize() {
	this.style.backgroundColor = makeRandColor();
}

function textDel() {
	this.innerHTML = "\u2060";
}
