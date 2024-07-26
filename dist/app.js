const btn = document.querySelector(".button");
const moveBtn = function () {
    let posX;
    let posY;
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomX = randomInt(0, 650);
    const randomY = randomInt(0, 740);
    posX = randomX;
    posY = randomY;
    btn.style.left = posX + "px";
    btn.style.top = posY + "px";
};
