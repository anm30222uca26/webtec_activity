"use strict";
const myData = {
    fullName: "Alex Rivera",
    level: "Undergraduate",
    skills: ["HTML", "CSS", "TypeScript", "SQL"],
    contact: ["alex.rivera@college.edu", "987-654-3210"]
};
// Function to calculate completion
const calcPerc = (s) => {
    let score = 0;
    if (s.fullName)
        score += 25;
    if (s.level)
        score += 25;
    if (s.skills.length > 0)
        score += 25;
    if (s.contact[0] && s.contact[1])
        score += 25;
    return score + "%";
};
// Populate the page
window.onload = () => {
    // Dynamic Welcome Message
    const hour = new Date().getHours();
    document.getElementById('welcome').innerText = hour < 12 ? "Good Morning!" : "Welcome!";
    // Display Data from TypeScript Object
    document.getElementById('name').innerText = myData.fullName;
    document.getElementById('major').innerText = myData.level;
    document.getElementById('email').innerText = myData.contact[0]; // From Tuple
    document.getElementById('phone').innerText = myData.contact[1]; // From Tuple
    document.getElementById('completion').innerText = calcPerc(myData);
    // Populate Skills List
    const list = document.getElementById('skill-list');
    myData.skills.forEach(skill => {
        let li = document.createElement('li');
        li.innerText = skill;
        list?.appendChild(li);
    });
};
// Part A: JavaScript Form Validation
const contactForm = document.getElementById('voterForm');
contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const vName = document.getElementById('vName').value;
    const vEmail = document.getElementById('vEmail').value;
    if (vName.length < 2) {
        alert("Please enter a valid name.");
    }
    else if (!vEmail.includes("@")) {
        alert("Please enter a valid email.");
    }
    else {
        alert(`Success! Message sent to ${myData.fullName}`);
    }
});
