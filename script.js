document.addEventListener("DOMContentLoaded", function() {
    const texts = ["JAVA DEVELOPER","TECH HOARDER","TECH ENTHUSIAST"];
    const heading = document.getElementById("animated-heading");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const pauseBetweenWords = 2000;

    function type() {
        if (charIndex < texts[textIndex].length && !isDeleting) {
            heading.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else if (charIndex > 0 && isDeleting) {
            heading.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, typingSpeed);
        } else if (!isDeleting) {
            isDeleting = true;
            setTimeout(type, pauseBetweenWords);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});

