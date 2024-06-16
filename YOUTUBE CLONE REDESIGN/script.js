// MAKING SIDE BAR TOOGLE
let menuIcon = document.querySelector(".menu");
let sideBar = document.querySelector(".side-bar");
let container = document.querySelector(".container")
let topic = document.querySelector(".topics");
menuIcon.onclick = function () {
    sideBar.classList.toggle("change-sideBar");
    container.classList.toggle("large-container");
    topic.classList.toggle("change-topic");
}

