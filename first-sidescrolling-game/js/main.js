gameScreen.classList.add(`hidden`)
startButton.addEventListener(`click`, (e) => {
    e.target.classList.add(`hidden`);
    backGroundScreen.style.display = `none`;
    gameScreen.classList.remove(`hidden`)
})
//set movement speed
let movementSpeed = 15;

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
            console.log(spaceship.style.left);
            spaceship.style.left = parseInt(spaceship.style.left) - movementSpeed + `px`;
        }
        if (e.code === `KeyD`) {
            spaceship.style.left = parseInt(spaceship.style.left) + movementSpeed + `px`;
            console.log(e.code);
        }
        if (e.code === `KeyW`) {
            spaceship.style.top = parseInt(spaceship.style.top) - movementSpeed + `px`;
        }
        if (e.code === `KeyS`) {
            spaceship.style.top = parseInt(spaceship.style.top) + movementSpeed + `px`;
        }
    }
})