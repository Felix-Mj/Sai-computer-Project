const btn = document.querySelector("#hamburger");
const nav = document.querySelector("#navbar")

btn.addEventListener("click", function(){
    nav.classList.toggle("show");
})