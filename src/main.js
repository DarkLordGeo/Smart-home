// import './style.scss'

// Dark/Light mode handling

const themeToggle = document.querySelector('.switch');
const night = document.querySelector("#night");
const day = document.querySelector("#day");

if (themeToggle) {
    // Set the initial theme based on localStorage
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Handle initial visibility of icons by toggling the .show class
    if (currentTheme === 'dark') {
        night.classList.add('show');
        day.classList.remove('show');
    } else {
        night.classList.remove('show');
        day.classList.add('show');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Toggle .show class to trigger CSS transitions
        if (newTheme === 'dark') {
            night.classList.add('show');
            day.classList.remove('show');
        } else {
            night.classList.remove('show');
            day.classList.add('show');
        }
    });
}


// Navbar scroll handling
let navbar = document.querySelector("nav");
if (navbar) {
    let rect = navbar.getBoundingClientRect();
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        if(window.scrollY > rect.top) {
            navbar.classList.add("slide-down")
        } else {
            navbar.classList.remove("slide-down")
        }
        
        lastScroll = window.scrollY;
    });
}

window.addEventListener("load", () => {
    let loadAnimation = document.querySelectorAll(".number-digit");
    let loadAnimationParent = document.querySelector(".numbers-row");
    let interval = 1;

    function checkInView() {
        let rect = loadAnimationParent.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            loadAnimation.forEach((loadAnimation) => {
                let startValue = 0;
                let endvalue = parseInt(loadAnimation.getAttribute("data-val"));
                let duration = Math.floor(interval / endvalue);

                let counter = setInterval(() => {
                    startValue += 1;
                    loadAnimation.textContent = startValue;
                    if (startValue === endvalue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        }
    }

    checkInView();
    window.addEventListener("scroll", checkInView);
});

// Hamburger menu handling
let burgerOverlay = document.querySelector(".burger-overlay");
let openOverlay = document.querySelector(".burger-menu");
let closeOverlay = document.querySelector(".close-button");

if (openOverlay && burgerOverlay) {
    openOverlay.addEventListener("click", () => {
        burgerOverlay.style.display = "block";
        setTimeout(() => {
            burgerOverlay.classList.add("active");
            openOverlay.classList.add("active");
        }, 10);
        document.body.style.overflow = "hidden";
    });
}

if (closeOverlay && burgerOverlay) {
    closeOverlay.addEventListener("click", () => {
        burgerOverlay.classList.remove("active");
        openOverlay.classList.remove("active");
        setTimeout(() => {
            burgerOverlay.style.display = "none";
            document.body.style.overflow = "";
        }, 300);
    });
}

// Close burger menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) {
        burgerOverlay.classList.remove("active");
        openOverlay.classList.remove("active");
        burgerOverlay.style.display = "none";
        document.body.style.overflow = "";
    }
});

let navContainer = document.querySelector(".nav-container")
let panelContainer = document.querySelector(".panel-container")

if (panelContainer) {
    let parentPanel = panelContainer.children
    const includesNavContainer = Array.from(parentPanel).includes(document.querySelector('.nav-container'));
}

let features = document.querySelector(".features-hover")
let subMenu = document.querySelector(".sub-menu")

if (features && subMenu) {
    features.addEventListener("mouseover", () => {
        subMenu.classList.add("visible"); 
    });

    features.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if (!subMenu.matches(":hover")) {
                subMenu.classList.remove("visible");
            }
        }, 100); 
    });

    subMenu.addEventListener("mouseleave", () => {
        subMenu.classList.remove("visible"); 
    });

    features.addEventListener("click", ()=>{
        window.location.href = "/Smart-home/features.html"
    })
}
