const welcomeScreen =
    document.getElementById("welcomeScreen");

const mainWebsite =
    document.getElementById("mainWebsite");

const openBtn =
    document.getElementById("openBtn");


/* OPEN WEBSITE */

openBtn.addEventListener("click", function () {

    welcomeScreen.style.display = "none";

    mainWebsite.style.display = "block";

    createConfetti(200);

});


/* MUSIC */

const musicBtn =
    document.getElementById("musicBtn");

const music =
    document.getElementById("birthdayMusic");

let musicPlaying = false;


musicBtn.addEventListener("click", function () {

    if (!musicPlaying) {

        music.play();

        musicBtn.innerHTML =
            "⏸ Pause Birthday Music";

        musicPlaying = true;

    } else {

        music.pause();

        musicBtn.innerHTML =
            "🎵 Play Birthday Music";

        musicPlaying = false;

    }

});


/* TYPING EFFECT */

const typingText =
    "Wishing You Endless Happiness, Success & Beautiful Memories! ❤️🎉";

let typingIndex = 0;


function typeText() {

    if (typingIndex < typingText.length) {

        document.getElementById("typingText").innerHTML +=
            typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText, 50);

    }

}


/* START TYPING */

openBtn.addEventListener(
    "click",
    typeText
);


/* CAKE CUTTING */

const cutCakeBtn =
    document.getElementById("cutCakeBtn");

const flames =
    document.getElementById("flames");

const cakeMessage =
    document.getElementById("cakeMessage");

const realCake =
    document.getElementById("realCake");


cutCakeBtn.addEventListener("click", function () {

    // Cake thoda shake karega
    realCake.classList.add("shake");

    setTimeout(function () {

        // Cake 2 pieces me cut hoga
        realCake.classList.remove("shake");

        realCake.classList.add("cut");

        // Candles blow out
        flames.innerHTML = "💨 💨 💨";

        // Message
        cakeMessage.innerHTML =
            "🎉  Happy Birthday Bhaiya 🎂❤️";

        // Confetti
        createConfetti(250);

        // Button text
        cutCakeBtn.innerHTML =
            "🎉 Cake Cut Ho Gaya!";

        cutCakeBtn.disabled = true;

    }, 500);

});


/* PHOTO SLIDESHOW */

const photos = [

    "photo1.jpeg",
    "photo2.jpeg",
    "photo3.jpeg",
    "photo4.jpeg",
    "photo5.jpeg",
    "photo6.jpeg"

];


let currentPhoto = 0;


const slideImage =
    document.getElementById("slideImage");


setInterval(function () {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    slideImage.style.opacity = 0;


    setTimeout(function () {

        slideImage.src =
            photos[currentPhoto];

        slideImage.style.opacity = 1;

    }, 300);


}, 3000);


/* SURPRISE */

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseBox =
    document.getElementById("surpriseBox");


surpriseBtn.addEventListener("click", function () {

    surpriseBox.classList.add("show");

    surpriseBtn.innerHTML =
        "🎉 Surprise Opened! 🎉";

    createConfetti(350);

    startFireworks();

});


/* CONFETTI */

const confettiCanvas =
    document.getElementById("confetti");

const confettiCtx =
    confettiCanvas.getContext("2d");


confettiCanvas.width =
    window.innerWidth;

confettiCanvas.height =
    window.innerHeight;


let confetti = [];


function createConfetti(amount) {

    for (let i = 0; i < amount; i++) {

        confetti.push({

            x:
                Math.random() *
                confettiCanvas.width,

            y:
                -20,

            size:
                Math.random() * 8 + 4,

            speed:
                Math.random() * 5 + 2,

            color:
                randomColor()

        });

    }

}


function randomColor() {

    const colors = [

        "#ff4b7d",
        "#ffd166",
        "#06d6a0",
        "#118ab2",
        "#8338ec",
        "#ffffff"

    ];

    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];

}


function animateConfetti() {

    confettiCtx.clearRect(

        0,
        0,

        confettiCanvas.width,

        confettiCanvas.height

    );


    confetti.forEach(function (piece) {

        piece.y += piece.speed;


        confettiCtx.fillStyle =
            piece.color;


        confettiCtx.fillRect(

            piece.x,

            piece.y,

            piece.size,

            piece.size

        );

    });


    confetti = confetti.filter(function (piece) {

        return piece.y <
            confettiCanvas.height;

    });


    requestAnimationFrame(
        animateConfetti
    );

}


animateConfetti();


/* FIREWORKS */

const fireCanvas =
    document.getElementById("fireworks");

const fireCtx =
    fireCanvas.getContext("2d");


fireCanvas.width =
    window.innerWidth;

fireCanvas.height =
    window.innerHeight;


let fireworksRunning = false;


function startFireworks() {

    if (fireworksRunning) return;

    fireworksRunning = true;


    let particles = [];


    function createFirework() {

        const x =
            Math.random() *
            fireCanvas.width;

        const y =
            Math.random() *
            fireCanvas.height /
            2;


        for (let i = 0; i < 80; i++) {

            particles.push({

                x: x,

                y: y,

                speedX:
                    (Math.random() - 0.5) * 10,

                speedY:
                    (Math.random() - 0.5) * 10,

                life: 100,

                color:
                    randomColor()

            });

        }

    }


    setInterval(
        createFirework,
        1200
    );


    function animateFireworks() {

        fireCtx.clearRect(

            0,
            0,

            fireCanvas.width,

            fireCanvas.height

        );


        particles.forEach(function (p) {

            p.x += p.speedX;

            p.y += p.speedY;

            p.life--;


            fireCtx.fillStyle =
                p.color;


            fireCtx.fillRect(

                p.x,

                p.y,

                4,

                4

            );

        });


        particles =
            particles.filter(function (p) {

                return p.life > 0;

            });


        requestAnimationFrame(
            animateFireworks
        );

    }


    createFirework();

    animateFireworks();

}


/* RESIZE */

window.addEventListener(
    "resize",
    function () {

        confettiCanvas.width =
            window.innerWidth;

        confettiCanvas.height =
            window.innerHeight;


        fireCanvas.width =
            window.innerWidth;

        fireCanvas.height =
            window.innerHeight;

    }
);