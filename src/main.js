// import './style.scss'



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
                let duration = Math.floor((interval / endvalue, 1));

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





    let navbar = document.getElementsByTagName("nav")[0]
    console.log(navbar);

    let rect = navbar.getBoundingClientRect()

    window.addEventListener('scroll', () =>{
        if(window.scrollY >  rect.top){
            navbar.classList.add("slide-down")
        }else[
            navbar.classList.remove("slide-down")
        ]
    })


let burgerOverlay = document.querySelector(".burger-overlay")

let openOverlay = document.querySelector(".burger-menu")

let closeOverlay = document.querySelector(".close-button")



openOverlay.addEventListener("click", () =>{
    burgerOverlay.style.display = "block"
    burgerOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
})


closeOverlay.addEventListener("click", () =>{
    burgerOverlay.style.display = "none"
    burgerOverlay.classList.remove("active")
    document.body.style.overflow = ""


})

let navContainer = document.querySelector(".nav-container")

let panelContainer = document.querySelector(".panel-container")


let parentPanel = panelContainer.children

const includesNavContainer = Array.from(parentPanel).includes(document.querySelector('.nav-container'));

if(window.innerWidth > 1000){
    burgerOverlay.style.display = "none"
}
if(navContainer){

}
 
let features = document.querySelector(".features-hover")
let subMenu = document.querySelector(".sub-menu")



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
