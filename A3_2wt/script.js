// Function for Welcome Message
function updateWelcome() {
    const hour = new Date().getHours();
    const msg = document.getElementById("welcome-msg");
    if (hour < 12) msg.innerText = "Good Morning, Student!";
    else if (hour < 18) msg.innerText = "Good Afternoon, Student!";
    else msg.innerText = "Good Evening, Student!";
}

// Form Validation Logic
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;
    const phone = document.getElementById("form-phone").value;

    // Control Statements
    if (name.length < 2) {
        alert("Error: Please enter a valid name.");
        return;
    }

    if (!email.includes("@")) {
        alert("Error: Invalid email address.");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Error: Phone number must be 10 digits.");
        return;
    }

    alert("Success! Form validated for " + name);
});

// Initialize
updateWelcome();