// Part B: TypeScript Implementation
type StudentStatus = "Undergraduate" | "Postgraduate";

interface StudentProfile {
    name: string;
    level: StudentStatus;
    skills: string[];
    contact: [string, string]; // Tuple: [Email, Phone]
}

const myProfile: StudentProfile = {
    name: "Alex Rivera",
    level: "Undergraduate",
    skills: ["HTML5", "CSS3", "TypeScript", "React"],
    contact: ["alex.rivera@college.edu", "9876543210"]
};

// Function to calculate completion
function getCompletion(s: StudentProfile): number {
    let score = 0;
    if (s.name) score += 25;
    if (s.level) score += 25;
    if (s.skills.length > 0) score += 25;
    if (s.contact[0] && s.contact[1]) score += 25;
    return score;
}

// Page Initialization
window.onload = () => {
    // Dynamic Welcome Message (Part A)
    const hour = new Date().getHours();
    const msg = hour < 12 ? "Good Morning!" : "Welcome back!";
    document.getElementById('welcome-msg')!.innerText = msg;

    // Display Data from TS Object
    document.getElementById('st-name')!.innerText = myProfile.name;
    document.getElementById('st-status')!.innerText = myProfile.level;
    document.getElementById('st-email')!.innerText = myProfile.contact[0];
    document.getElementById('st-phone')!.innerText = myProfile.contact[1];
    document.getElementById('st-completion')!.innerText = getCompletion(myProfile) + "%";

    // Populate Skill List (Part B - Arrays)
    const skillList = document.getElementById('skills-list')!;
    myProfile.skills.forEach(skill => {
        const li = document.createElement('li');
        li.innerText = skill;
        skillList.appendChild(li);
    });
};

// Part A: Form Validation & Events
const form = document.getElementById('contactForm');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('form-name') as HTMLInputElement).value;
    const email = (document.getElementById('form-email') as HTMLInputElement).value;
    const phone = (document.getElementById('form-phone') as HTMLInputElement).value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (name.length < 2) {
        alert("Please enter a valid name.");
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
    } else if (!phonePattern.test(phone)) {
        alert("Phone number must be 10 digits.");
    } else {
        alert(`Message successfully sent to ${myProfile.name}!`);
    }
});