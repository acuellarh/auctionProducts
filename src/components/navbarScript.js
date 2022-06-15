((d)=>{
  const $btnMenu = d.querySelector(".navbar__buttonmenu");
  const $menu= d.querySelector(".navbar__menu");

  $btnMenu.addEventListener("click",(e)=>{
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active")
  });

  d.addEventListener("click", (e)=>{
    if(!e.target.matches(".navbar__link")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active")
  });
  
})(document)