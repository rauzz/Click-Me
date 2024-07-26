const btn: HTMLElement = document.querySelector(".button");

const moveBtn = function () {
	let posX: number;
	let posY: number;

	function randomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const randomX = randomInt(0, 650);
	const randomY = randomInt(0, 740);

	posX = randomX;
	posY = randomY;

	btn.style.left = posX + "px";
	btn.style.top = posY + "px";
};
