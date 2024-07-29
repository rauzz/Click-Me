import { phrases } from "./strings.js";

const btn: HTMLElement = document.querySelector(".button");

const moveBtn = function () {
   
	function randomInt(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1) + min);
	}
   
	const randomX = randomInt(0, 650);
	const randomY = randomInt(0, 740);

   const posX: number= randomX;
   const posY: number= randomY;

	btn.style.left = posX + "px";
	btn.style.top = posY + "px";

   btn.innerText = phrases[randomInt(0, 13)];
};

btn.addEventListener("mouseover", moveBtn);