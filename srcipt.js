
const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {
    alert("Thanks for visiting DAUD! Contact details will be available soon.");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
