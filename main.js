'use strict';

const topBtn = document.querySelector(".top-btn");
const opacity = "top-btn-opacity";
document.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        topBtn.classList.remove(opacity)
    }else {
        topBtn.classList.add(opacity)
    }
})

topBtn.addEventListener("click",()=> window.scrollTo(0,0))