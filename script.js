let menu=document.getElementById("menu");
let cross=document.getElementById("cross");
let tog=document.getElementById("navbar");

// Actions 
menu.addEventListener("click",()=>{
    menu.style.display="none";
    cross.style.display="block";
    tog.classList.toggle("l-t-r");

});
cross.addEventListener("click",()=>{
    cross.style.display="none";
    menu.style.display="block";
    tog.classList.toggle("l-t-r");
});