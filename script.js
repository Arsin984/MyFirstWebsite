// ===============================
// arsin984 Music
// script.js
// Part 1
// ===============================

document.addEventListener("DOMContentLoaded", () => {

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

backToTop.style.display = "flex";

} else {

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave", () => {

card.style.transform = "translateY(0px) scale(1)";

});

});

const artistCards = document.querySelectorAll(".artist");

artistCards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.boxShadow = "0 20px 50px rgba(37,99,235,.25)";

});

card.addEventListener("mouseleave", () => {

card.style.boxShadow = "none";

});

});

});
// ===============================
// arsin984 Music
// script.js
// Part 2
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const playButtons = document.querySelectorAll(
        ".play, .play-main, .album-btn, .play-btn, .recommended-card button"
    );

    playButtons.forEach(button => {

        button.addEventListener("click", () => {

            const icon = button.querySelector("i");

            if (!icon) return;

            const isPlaying = icon.classList.contains("fa-pause");

            playButtons.forEach(otherButton => {

                const otherIcon = otherButton.querySelector("i");

                if (otherIcon) {
                    otherIcon.classList.remove("fa-pause");
                    otherIcon.classList.add("fa-play");
                }

            });

            if (!isPlaying) {
                icon.classList.remove("fa-play");
                icon.classList.add("fa-pause");
            }

        });

    });


    const progressBar = document.querySelector(".progress-bar");

    if (progressBar) {

        progressBar.addEventListener("click", (event) => {

            const rect = progressBar.parentElement.getBoundingClientRect();

            const percentage =
                ((event.clientX - rect.left) / rect.width) * 100;

            progressBar.style.width =
                Math.max(0, Math.min(100, percentage)) + "%";

        });

    }


    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {

        category.addEventListener("click", () => {

            const text = category.textContent.trim();

            if (text.includes("Music")) {
                window.location.href = "music.html";
            }

            if (text.includes("Discover")) {
                document.querySelector("#discover")?.scrollIntoView({
                    behavior: "smooth"
                });
            }

            if (text.includes("Artists")) {
                document.querySelector("#artists")?.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});
// ===============================
// arsin984 Music
// script.js
// Part 3
// ===============================

document.addEventListener("DOMContentLoaded", () => {

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

searchInput.addEventListener("input", (e) => {

const value = e.target.value.toLowerCase();

document.querySelectorAll("h3").forEach(item => {

const card = item.closest(".card,.artist,.album,.playlist-card,.trend-card,.recommended-card");

if (!card) return;

if (item.textContent.toLowerCase().includes(value)) {

card.style.display = "";

} else {

card.style.display = "none";

}

});

});

}

const newsletterBtn = document.querySelector(".newsletter-box button");

if (newsletterBtn) {

newsletterBtn.addEventListener("click", () => {

const email = document.querySelector(".newsletter-box input").value.trim();

if (email === "") {

alert("Please enter your email.");

} else {

alert("Thanks for subscribing!");

}

});

}

});
