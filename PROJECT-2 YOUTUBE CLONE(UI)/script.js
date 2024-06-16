let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".side-bar");
let container = document.querySelector(".container")
menuIcon.onclick = function () {
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}