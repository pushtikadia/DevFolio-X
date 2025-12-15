# DevFolio X 💎

This project documents the development of **DevFolio X**, an advanced, interactive developer portfolio. It demonstrates modern web development practices, focusing on creating a visually rich, responsive, and user-friendly interface without relying on heavy frameworks.

## 📂 Repository Structure

The code is organized into three main core files, each handling a specific aspect of the web application:

### 1. Structure & Layout (`index.html`)
* **Semantic Structure:** Uses HTML5 semantic tags (`header`, `section`, `footer`) for better accessibility and SEO.
* **Section Breakdown:** Organized into clear sections: Home, About, Skills, Projects, Experience, and Contact.
* **Modal Components:** Includes hidden modal structures that are dynamically displayed when viewing project details.

### 2. Styling & Design (`style.css`)
* **Glassmorphism UI:** Implements modern design trends using `backdrop-filter`, semi-transparent backgrounds, and soft gradients.
* **Responsive Design:** Utilizes media queries (`@media`) to ensure the layout adapts seamlessly to mobile devices and tablets.
* **Theming Engine:** Uses CSS Variables (`:root`) to manage colors, enabling a smooth Dark/Light mode transition.
* **Animations:** Includes transitions for hover effects, scroll reveals, and skill bar loading.

### 3. Interactivity & Logic (`app.js`)
* **Dynamic Text Effect:** Implements a rotating text animation for the "Role" section (e.g., Frontend Developer, UI Engineer).
* **Theme Toggle:** Logic to switch between Light and Dark modes, updating the icon (🌞/🌙) and body class dynamically.
* **Scroll Animations:** Uses `IntersectionObserver` or scroll event listeners to reveal elements as the user scrolls down.
* **Form Validation:** Client-side validation for the contact form to ensure all fields (Name, Email, Message) are filled before submission.
* **Modal Handling:** Functions to open and close project detail popups (`openProject`, `closeProject`).

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser to view this project. No additional installations are required.

### How to Run
You can run the portfolio locally by simply opening the `index.html` file in your browser:

1.  Clone or download the repository.
2.  Double-click `index.html` or drag it into your browser window.

## 🛠 Tools Used

* **HTML5:** Structural markup.
* **CSS3:** Advanced styling and animations.
* **JavaScript (ES6):** Logic and DOM manipulation.
* **Git:** Version control.

*Created by [Pushti Kadia](https://github.com/pushtikadia)*





