// Mengarahkan ke halaman baru
function bukaSosmed(url) {
    window.open(url, '_blank');
}

// Alternatif: Membuka di tab baru
function bukaMenuBaru() {
    window.open("halaman-menu.html", "_blank");
}      
        const loader = document.getElementById('loading-screen');
        
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden-loader');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 800);
            }, 2000);
        });

        // 2. Mengatur teks yang muncul seperti sedang mengetik
        const textElement = document.querySelector('.typing-text');
        const words = ["Hello Im Ardani", "Front-End Dev", "Web Developer", "RPL Student"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50; 
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 150; 
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typeSpeed = 2000; 
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        document.addEventListener('DOMContentLoaded', typeEffect);

        // 3. Mengatur animasi bar skill saat halaman discroll
        const skillsSection = document.getElementById('skills');
        const progressBars = document.querySelectorAll('.progress-fill');
        let animated = false;

        const animateSkills = () => {
            const sectionPos = skillsSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if(sectionPos < screenPos && !animated) {
                progressBars.forEach(bar => {
                    const targetWidth = bar.getAttribute('data-width');
                    bar.style.width = targetWidth;
                });
                animated = true;
            }
        };

        window.addEventListener('scroll', animateSkills);

