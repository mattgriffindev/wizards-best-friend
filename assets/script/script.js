// code adapted from css-tricks (https://css-tricks.com/playing-with-particles-using-the-web-animations-api)
let man = document.getElementById("man");
let dog = document.getElementById("dog");

if (document.body.animate) {
    document.getElementById("frame").onclick = function () {
        routine()
    };
}

function popMan() {
    let boxMan = document.querySelector('#man-container').getBoundingClientRect();
    let x = boxMan.left + boxMan.width / 2;
    let y = boxMan.top + boxMan.height / 1.1;
    for (let i = 0; i < 600; i++) {
        createParticle(x, y);
    }
}

function appearMan() {
    man.style.visibility = "visible";
}

function popDog() {
    let boxDog = document.querySelector('#dog-container').getBoundingClientRect();
    let x = boxDog.left + boxDog.width / 2;
    let y = boxDog.top + boxDog.height / 1.1;
    for (let i = 0; i < 200; i++) {
        createParticle(x, y);
    }
}

function appearDog() {
    dog.style.visibility = "visible";
}

function createParticle(x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    // Calculate a random sizex
    const size = Math.floor(Math.random() * 20 + 5);
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    // Generate a random x & y destination
    const destinationX = x + (Math.random() - 0.5) * 3 * 100;
    const destinationY = y + (Math.random() - 1) * 4 * 100;
    // Store the animation in a variable as we will need it later
    const animation = particle.animate([{
            // Set the origin position of the particle
            // Offset the particle with half its size to center it around the mouse
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            opacity: 1
        },
        {
            // Define the final coordinates as the second keyframe
            transform: `translate(${destinationX}px, ${destinationY}px)`,
            opacity: 0
        }
    ], {
        // Set a duration
        duration: 7500,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        // Delay every particle with a random value of 200ms
        delay: Math.random() * 100
    });
    // When the animation is complete, remove the element from the DOM
    animation.onfinish = () => {
        particle.remove();
    };
}

function routine() {
    setTimeout(popMan, 500);
    setTimeout(appearMan, 1300);
    setTimeout(popDog, 2500);
    setTimeout(appearDog, 3000);
}