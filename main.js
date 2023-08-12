const ham = document.querySelector(".ham")
const navMenu = document.querySelector(".nav-menu")

ham.addEventListener("click", () => {
    console.log("hello")
    navMenu.classList.remove("hide")
})