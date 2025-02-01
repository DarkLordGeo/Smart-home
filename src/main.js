import './style.scss'





// window.addEventListener("load", () => {
    
//     let loadAnimation =  document.querySelectorAll(".number-digit")

//     let loadAnimationParent = document.querySelector(".numbers-row")


//     let interval = 2000;

//     let rect = loadAnimationParent.getBoundingClientRect()
//     if(scrollY > rect.top){
//         loadAnimation.forEach((loadAnimation) => {
//             let startValue = 0
        
//             let endvalue = parseInt(loadAnimation.getAttribute("data-val"))
            
//             let duration = Math.floor((interval/endvalue))
        
//             let counter = setInterval(() => {
//                 startValue += 1
//                 loadAnimation.textContent = startValue
//                 if(startValue === endvalue){
//                     clearInterval(counter)
//                 }
//             }, duration);
        
//         })
        
//     }
//     else{
//         console.log("not working");
//     }
// })




// window.addEventListener("load", () => {
//     let loadAnimation = document.querySelectorAll(".number-digit");
//     let loadAnimationParent = document.querySelector(".numbers-row");
//     let interval = 1;

//     function checkInView() {
//         let rect = loadAnimationParent.getBoundingClientRect();

//         if (rect.top >= 0 && rect.top <= window.innerHeight) {
//             loadAnimation.forEach((loadAnimation) => {
//                 let startValue = 0;
//                 let endvalue = parseInt(loadAnimation.getAttribute("data-val"));
//                 let duration = Math.floor((interval / endvalue, 1));

//                 let counter = setInterval(() => {
//                     startValue += 1;
//                     loadAnimation.textContent = startValue;
//                     if (startValue === endvalue) {
//                         clearInterval(counter);
//                     }
//                 }, duration);
//             });
//         }
//     }

//     checkInView();

//     window.addEventListener("scroll", checkInView);
// });





    let navbar = document.getElementsByTagName("nav")[0]

    // let navbarWrapper = document.querySelector(".nav-wrapper")

    // let navbarWrapperRect = navbarWrapper.getBoundingClientRect();

    let rect = navbar.getBoundingClientRect()

    window.addEventListener('scroll', () =>{
        if(window.scrollY >  rect.top){
            navbar.classList.add("slide-down")
        }else[
            navbar.classList.remove("slide-down")
        ]
    })



 