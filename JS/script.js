let bars = document.querySelector(".bars");
let links = document.querySelector(".link-cont")
console.log(bars)
bars.addEventListener("click",()=>{
    links.classList.toggle("open")
})