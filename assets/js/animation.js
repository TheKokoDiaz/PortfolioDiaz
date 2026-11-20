//+ VARIABLES
const spritesheet_width = 128;
const spritesheet_height = 64;

let frameX = 0;
let frameY = 0;
let isInfinite = false;
let animationLimit = 5;

const canvas = document.getElementById('karmaSprite');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width = spritesheet_width;
const canvasHeight = canvas.height = spritesheet_height;

const canvasSprite = new Image();
canvasSprite.src = 'assets/sprites/Karma.png';
const spriteWidth = spritesheet_width;
const spriteHeight = spritesheet_height;

let lastTime = 0;
let frame = 0;
let straggerFrames = 0;
let speedAnimation = 1/6;

//+ FUNCTIONS
function playerDeltaTime(playerCurrentTime) {
    let deltaTime = (playerCurrentTime - lastTime) / 1000;
    lastTime = playerCurrentTime;

    playerAnimation(deltaTime);
    requestAnimationFrame(playerDeltaTime);
}

function playerAnimation(deltaTime) {
    // Canva Properties
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(canvasSprite, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight,  0, 0, canvasWidth, canvasHeight);

    // Animation
    straggerFrames += deltaTime;
    if (straggerFrames >= speedAnimation) {
        if(frameX < (animationLimit - 1)){
            frameX++;
        } else {
            // Cycling animations
            if(isInfinite == true){
                frameX = 0;
            } else {
                frameX = 0;
            }
        }

        straggerFrames = 0;
    }
}

// Call the function
requestAnimationFrame(playerDeltaTime);