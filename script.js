const button = document.getElementById("helloBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Welcome to my portfolio! 🚀";
});
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
function showProject() {
    document.getElementById("projectMessage").textContent =
        "This is my personal portfolio project! 🚀";
}
const contactForm = document.querySelector("form");

