const d =  document;

const hamburguerIcon = d.querySelector(".icon-hamburguer");
const hamburguerIconClose = d.querySelector(".icon-hamburguer-close");
const $menu = d.querySelector(".menu");

document.addEventListener("click", (e) =>{
   if(e.target.matches("img.icon-hamburguer") || e.target.matches("img.icon-hamburguer-close")){
       $menu.classList.toggle("menu-off");
       $menu.classList.toggle("menu-on");
       hamburguerIconClose.classList.toggle("visible");

   }
})
