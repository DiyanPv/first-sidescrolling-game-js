gameScreen.classList.add(`hidden`)

startButton.addEventListener(`click`, (e) => {
    e.target.classList.add(`hidden`);
    backGroundScreen.style.display = `none`;
    gameScreen.classList.remove(`hidden`)
})
//set movement speed
let movementSpeed = 25;
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
let allowedKeys = [`KeyA`, `KeyD`, `KeyW`, `KeyS`, `Space`]
window.addEventListener(`load`, () => {
    spaceship.style.left = 0;
    spaceship.style.top = 0;
})
window.addEventListener(`keydown`, (e) => {
    console.log(e.code);
    //dynamically get both gamescreen's height and width;
    let gameScreenHeight = gameScreen.offsetHeight;
    let gameScreenWidth = gameScreen.offsetWidth;

    if (allowedKeys.includes(e.code)) {
        let leftPixelsParsed = spaceship.style.left
        leftPixelsSpaceship = parseInt(leftPixelsParsed, 10)
        let topPixelsParsed = spaceship.style.top
        topPixelsSpaceship = parseInt(topPixelsParsed, 10)
        if (e.code === `KeyA`) {
            if (leftPixelsSpaceship > 0) {
                moveleft()
            }

        }
        if (e.code === `KeyD`) {
            if (leftPixelsSpaceship < gameScreenWidth - spaceship.offsetWidth) {

                moveright()
            }
        }
        if (e.code === `KeyW`) {

            if (topPixelsSpaceship > 0) {
                moveup()
            }
        }
        if (e.code === `KeyS`) {
            console.log(topPixelsSpaceship);
            console.log();
            if (topPixelsSpaceship < gameScreenHeight - spaceship.offsetHeight)
                movedown()

        }
    }

}
)