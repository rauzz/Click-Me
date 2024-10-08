import { phrases } from "./strings.js";
const btn = document.querySelector(".button");
let lastIndex = -1;
function getRandomIndex(max) {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * max);
    } while (newIndex === lastIndex);
    lastIndex = newIndex;
    return newIndex;
}
const moveBtn = function () {
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomX = randomInt(0, 650);
    const randomY = randomInt(0, 740);
    const posX = randomX;
    const posY = randomY;
    btn.style.left = posX + "px";
    btn.style.top = posY + "px";
    btn.innerText = phrases[getRandomIndex(phrases.length)];
};
btn.addEventListener("mouseover", moveBtn);
