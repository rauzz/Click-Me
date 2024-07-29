import { phrases } from "./strings.js";

const btn: HTMLElement = document.querySelector(".button")!;

let lastIndex: number = -1;

function getRandomIndex(max: number): number {
	let newIndex: number;
	do {
		newIndex = Math.floor(Math.random() * max);
	} while (newIndex === lastIndex);
	lastIndex = newIndex;
	return newIndex;
}

const moveBtn = function (): void {
	function randomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const randomX: number = randomInt(0, 650);
	const randomY: number = randomInt(0, 740);

	const posX: number = randomX;
	const posY: number = randomY;

	btn.style.left = posX + "px";
	btn.style.top = posY + "px";

	btn.innerText = phrases[getRandomIndex(phrases.length)];
};

btn.addEventListener("mouseover", moveBtn);