const navLinks = document.querySelector(".nav-links")
const toggleBtn = document.querySelector(".toggle-btn")

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("toggle-nav")
    toggleBtn.classList.toggle("toggle")
})

