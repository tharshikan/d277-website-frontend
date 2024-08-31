document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;

        if (email !== confirmEmail) {
            e.preventDefault();

            alert('Email do not match. Please verify your email addresses.');
        }
    });
});
