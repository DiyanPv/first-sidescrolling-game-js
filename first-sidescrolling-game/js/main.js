gameScreen.classList.add(`hidden`)
startButton.addEventListener(`click`, (e) => {
    e.target.classList.add(`hidden`);
    backGroundScreen.style.display = `none`;
    gameScreen.classList.remove(`hidden`)
})
//set movement speed
let movementSpeed = 15;
function movedown() {
    spaceship.style.top = parseInt(spaceship.style.top) + movementSpeed + `px`;
}
function moveup() {
    spaceship.style.top = parseInt(spaceship.style.top) - movementSpeed + `px`;
}
function moveleft() {

    spaceship.style.left = parseInt(spaceship.style.left) - movementSpeed + `px`;
}
function moveright() {
    spaceship.style.left = parseInt(spaceship.style.left) + movementSpeed + `px`;
}

//add event listener to window
//initialise allowed movement keys
let allowedKeys = [`KeyA`, `KeyD`, `KeyW`, `KeyS`]
window.addEventListener(`load`, () => {
    spaceship.style.left = 0;
    spaceship.style.top = 0;
})
window.addEventListener(`keydown`, (e) => {
    if (allowedKeys.includes(e.code)) {
        if (e.code === `KeyA`) {
            moveleft()
        }
        if (e.code === `KeyD`) {
            moveright()
        }
        if (e.code === `KeyW`) {
            moveup()
        }
        if (e.code === `KeyS`) {
            movedown()
        }
    }
})