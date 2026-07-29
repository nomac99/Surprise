// =============================
// Background Music
// =============================

const music = document.getElementById("bgMusic");

// =============================
// Photo List (12 Photos)
// =============================

const photos = [
    "images/photo1.jpeg",
    "images/photo2.jpeg",
    "images/photo3.jpeg",
    "images/photo4.jpeg",
    "images/photo5.jpeg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpeg",
    "images/photo9.jpeg",
    "images/photo10.jpeg",
    "images/photo11.jpeg"
   
];

let currentPhoto = 0;
let slideInterval;

// =============================
// Start Surprise
// =============================

function startSurprise() {

    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("question1").classList.remove("hidden");

    if (music) {
        music.play().catch(function(){});
    }

}

// =============================
// Next Question
// =============================

function nextQuestion() {

    document.getElementById("question1").classList.add("hidden");
    document.getElementById("question2").classList.remove("hidden");

}

// =============================
// Moving No Button
// =============================

function moveButton(button) {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";

}

// =============================
// Show Slideshow
// =============================

function showSlideshow() {

    document.getElementById("question2").classList.add("hidden");
    document.getElementById("slideshow").classList.remove("hidden");

    startSlideshow();

}
// =============================
// Start Slideshow
// =============================

function startSlideshow() {

    const img = document.getElementById("photo");

    currentPhoto = 0;
    img.src = photos[currentPhoto];

    slideInterval = setInterval(function () {

        currentPhoto++;

        if (currentPhoto >= photos.length) {

            clearInterval(slideInterval);

            document.getElementById("slideshow").classList.add("hidden");
            document.getElementById("finalPage").classList.remove("hidden");

            return;
        }

        img.src = photos[currentPhoto];

    }, 10500);

}

// =============================
// Heart Rain
// =============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 5000);

}

setInterval(createHeart, 300);

// =============================
// Restart
// =============================

function restartSurprise() {
    location.reload();
}
// =============================
// Fireworks Effect
// =============================

const canvas = document.getElementById("fireworks");

if (canvas) {

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const fireworks = [];

    function createFirework() {

        fireworks.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height / 2),
            radius: 2,
            alpha: 1
        });

    }

    function animateFireworks() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = fireworks.length - 1; i >= 0; i--) {

            const f = fireworks[i];

            ctx.beginPath();
            ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255," + f.alpha + ")";
            ctx.fill();

            f.radius += 2;
            f.alpha -= 0.02;

            if (f.alpha <= 0) {
                fireworks.splice(i, 1);
            }
        }

        requestAnimationFrame(animateFireworks);
    }

    setInterval(createFirework, 500);

    animateFireworks();
}