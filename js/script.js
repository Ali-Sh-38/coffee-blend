window.addEventListener("load",()=>{
    let body = document.querySelector("body");
    // fixed header
    let headerFix = document.getElementById("headerFix");

    window.addEventListener("scroll",()=>{
        if (window.scrollY > 100) {
        headerFix.classList.remove("opacity-0", "-translate-y-full", "pointer-events-none");
        
    } else {
        headerFix.classList.add("opacity-0", "-translate-y-full", "pointer-events-none");
    }
    })


    // menu
    let menuDiv = document.getElementById("menuDiv");
    let menuBtn = document.getElementById("menuBtn");

    menuBtn.addEventListener("click",()=>{
        menuDiv.classList.toggle("-translate-y-full")
    })
})