// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation on the contact form
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.querySelector('input[placeholder="Your Name"]').value;
    let email = document.querySelector('input[placeholder="Your Email"]').value;
    let phone = document.querySelector('input[placeholder="Your Phone"]').value;
    let message = document.querySelector('textarea[placeholder="Message"]').value;

    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // This is a placeholder for form submission logic.
    alert("Thank you! Your message has been sent.");
    document.querySelector('.contact-form').reset();
});
