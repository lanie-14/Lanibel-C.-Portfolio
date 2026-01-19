const socialLinks = {
    facebook: "https://www.facebook.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://www.instagram.com/yourusername"
};

document.querySelectorAll(".social a").forEach((icon, index) => {
    const platforms = ["facebook", "linkedin", "twitter", "instagram"];

    icon.addEventListener("click", (e) => {
        e.preventDefault();
        const platform = platforms[index];
        window.open(socialLinks[platform], "_blank");
    });
});


const navMap = {
    "Portfolio": ".home",
    "Services": ".home",
    "Experience": ".about",
    "Projects": ".about",
    "Education": ".about"
};

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = navMap[link.textContent.trim()];
        if (target) {
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

document.querySelector(".contact").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".contact-form").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelectorAll(".btn-2").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".about").scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelectorAll(".btn-1").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".contact-form").scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelectorAll(".footer ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`${link.textContent} page coming soon!`);
    });
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            valid = false;
            input.style.border = "2px solid red";
        } else {
            input.style.border = "none";
        }
    });

    if (valid) {
        alert("Message sent successfully! (Demo only)");
        form.reset();
    } else {
        alert("Please fill out all fields.");
    }
});
