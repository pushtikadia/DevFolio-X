const body = document.body
const themeToggle = document.getElementById("themeToggle")
const roleText = document.getElementById("roleText")
const modal = document.getElementById("modal")
const modalTitle = document.getElementById("modalTitle")
const modalDesc = document.getElementById("modalDesc")
const statusText = document.getElementById("status")
const contactForm = document.getElementById("contactForm")

const roles = [
    "Frontend Developer",
    "UI Engineer",
    "JavaScript Enthusiast",
    "Web Application Developer"
]

let roleIndex = 0

function rotateRoles() {
    roleText.textContent = roles[roleIndex]
    roleIndex = (roleIndex + 1) % roles.length
}

setInterval(rotateRoles, 2000)
rotateRoles()

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light")
    themeToggle.textContent = body.classList.contains("light") ? "🌞" : "🌙"
})

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
}

const revealElements = document.querySelectorAll(".reveal")

function handleScrollReveal() {
    revealElements.forEach(el => {
        const position = el.getBoundingClientRect().top
        if (position < window.innerHeight - 120) {
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
        }
    })
}

revealElements.forEach(el => {
    el.style.opacity = "0"
    el.style.transform = "translateY(40px)"
    el.style.transition = "all 0.8s ease"
})

window.addEventListener("scroll", handleScrollReveal)
handleScrollReveal()

const skillBars = document.querySelectorAll(".bar span")

function animateSkills() {
    skillBars.forEach(bar => {
        const level = bar.getAttribute("data-level")
        bar.style.width = level + "%"
    })
}

window.addEventListener("scroll", animateSkills)
animateSkills()

function openProject(title, description) {
    modalTitle.textContent = title
    modalDesc.textContent = description
    modal.style.display = "block"
}

function closeProject() {
    modal.style.display = "none"
}

window.addEventListener("click", e => {
    if (e.target === modal) {
        closeProject()
    }
})

contactForm.addEventListener("submit", e => {
    e.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    if (!name || !email || !message) {
        statusText.textContent = "Please fill in all fields."
        return
    }

    statusText.textContent = "Message sent successfully!"
    contactForm.reset()
})
