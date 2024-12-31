document.addEventListener("DOMContentLoaded", function() {
    // Function to create a firework
    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1500); // Remove firework after 1.5 seconds
    }

    // Function to launch fireworks randomly across the screen
    function launchFireworks() {
        const height = window.innerHeight;
        const width = window.innerWidth;

        // Launch fireworks in random positions
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const x = Math.random() * width;
                const y = Math.random() * height;
                createFirework(x, y);
            }, i * 200);
        }
    }

    // Function to launch fireworks at the center of the screen
    function launchFireworksAtCenter() {
        const height = window.innerHeight;
        const width = window.innerWidth;

        // Launch fireworks in a cylindrical shape
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const angle = Math.random() * 2 * Math.PI;
                const radius = Math.random() * 100;
                const x = width / 2 + radius * Math.cos(angle);
                const y = height / 2 + radius * Math.sin(angle);
                createFirework(x, y);
            }, i * 200);
        }
    }

    // Add CSS for fireworks
    const style = document.createElement('style');
    style.innerHTML = `
        .firework {
            position: absolute;
            width: 5px;
            height: 5px;
            background-color: red;
            border-radius: 50%;
            box-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
            animation: explode 1s ease-out forwards;
        }

        @keyframes explode {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(10);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Launch fireworks continuously
    setInterval(() => {
        launchFireworks();
        launchFireworksAtCenter();
    }, 2000); // Adjust the interval as needed
});
