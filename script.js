// Random Quote Generator – Lavender pastel themed app with categories, favorites, and background music

const quotes = {
motivation: [
"Small progress is still progress.",
"Keep going — you’ve got this.",
"Your future self will thank you."
],
school: [
"Study now, shine later.",
"Every mistake is a lesson.",
"Hard work beats excuses."
],
selflove: [
"Be gentle with yourself.",
"You are enough.",
"Rest is productive too."
],
friendship: [
"Good friends feel like sunshine.",
"Choose people who choose you.",
"Laugh often, together."
],
dreams: [
"Dream big, start small.",
"Your dreams are valid.",
"Don’t be afraid to begin."
],
faith: [
"Trust the process.",
"Hope is stronger than fear.",
"Everything happens for a reason."
]
};

let currentQuote = "";
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
const music = document.getElementById("bgMusic");

function generateQuote() {
const category = document.getElementById("category").value;
const categoryQuotes = quotes[category];
const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
currentQuote = categoryQuotes[randomIndex];
document.getElementById("quote").textContent = currentQuote;
}

function saveFavorite() {
if (!currentQuote || favorites.includes(currentQuote)) return;
favorites.push(currentQuote);
localStorage.setItem("favorites", JSON.stringify(favorites));
displayFavorites();
}

function removeFavorite(index) {
favorites.splice(index, 1);
localStorage.setItem("favorites", JSON.stringify(favorites));
displayFavorites();
}

function clearFavorites() {
favorites = [];
localStorage.removeItem("favorites");
displayFavorites();
}

function displayFavorites() {
const list = document.getElementById("favoritesList");
list.innerHTML = "";
favorites.forEach((quote, index) => {
list.innerHTML += `
<div class="favorite-item">
<span>💜 ${quote}</span>
<button class="remove-btn" onclick="removeFavorite(${index})">X</button>
</div>
`;
});
}

function toggleMusic() {
if (music.paused) {
music.play();
} else {
music.pause();
}
}

displayFavorites()

