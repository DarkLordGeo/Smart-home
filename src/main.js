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




window.addEventListener("load", () => {
    let loadAnimation = document.querySelectorAll(".number-digit");
    let loadAnimationParent = document.querySelector(".numbers-row");
    let interval = 100;

    function checkInView() {
        let rect = loadAnimationParent.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= window.innerHeight) {
            // console.log(window.innerHeight);
            loadAnimation.forEach((loadAnimation) => {
                let startValue = 0;
                let endvalue = parseInt(loadAnimation.getAttribute("data-val"));
                let duration = Math.floor((interval / endvalue));

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




// window.addEventListener("scroll", () =>{

//     function triggerScroll(){
//         let navbar = document.getElementsByTagName("nav")[0]
//         navbar.style.position = "absolute"
//         let navbarStyles = `
//             background:red;
//             position:sticky;
//             top:0px;
//         `
//         let navrect = navbar.getBoundingClientRect();
//         console.log(navrect);
//         if(navrect => 0 && navrect.top <= window.innerHeight){
//             navbar.style.cssText = navbarStyles
//         }
//     }
//     triggerScroll()
// })



// window.addEventListener("scroll", () => {
//     let navbar = document.getElementsByTagName("nav")[0]

//     if (window.scrollY > 50) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled"); 
//     }
// });


    let navbar = document.getElementsByTagName("nav")[0]

    let rect = navbar.getBoundingClientRect()

    window.addEventListener('scroll', () =>{
        if(window.scrollY >  rect.top){
            navbar.classList.add("slide-down")
        }else[
            navbar.classList.remove("slide-down")
        ]
    })



// loadAnimation.forEach((loadAnimation) => {
//     let startValue = 0

//     let endvalue = parseInt(loadAnimation.getAttribute("data-val"))
    
//     let duration = Math.floor((interval/endvalue))

//     let counter = setInterval(() => {
//         startValue += 1
//         loadAnimation.textContent = startValue
//         if(startValue === endvalue){
//             clearInterval(counter)
//         }
//     }, duration);

// })





