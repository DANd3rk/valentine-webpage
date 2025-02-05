
function sayYes() {
    document.getElementById("message").innerHTML = "Yay! I love you so much baby! ❤️🥰";
    window.location.href = "https://youtu.be/AiIBKcd4m5Q?si=Q6IsYp2PAXLbSvWi&t=90";
}

function moveNo() {
    let btn = document.getElementById("noBtn");
    let card = document.querySelector(".card");
    let rect = card.getBoundingClientRect();
    let maxX = Math.min(rect.left + 120, window.innerWidth - btn.offsetWidth);
    let maxY = Math.min(rect.top + 120, window.innerHeight - btn.offsetHeight);
    let minX = Math.max(rect.left - 120, 0);
    let minY = Math.max(rect.top - 120, 0);

    let x, y;
    do {
        x = Math.random() * (maxX - minX) + minX;
        y = Math.random() * (maxY - minY) + minY;
    } while (
        x + btn.offsetWidth > rect.left && x < rect.right &&
        y + btn.offsetHeight > rect.top && y < rect.bottom
    );

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.querySelector(".heart-container").appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    setTimeout(() => { heart.remove(); }, 4000);
}
setInterval(createHeart, 500);