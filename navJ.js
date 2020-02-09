var menuToggle = document.getElementsByClassName("menu-toggle")[0];
var menu = document.getElementsByClassName("menu")[0];
var brandName = document.getElementsByClassName("brand-name")[0];

menuToggle.addEventListener("click", e => {

    if (menuToggle.classList.contains("active"))
    {
        menuToggle.classList.remove("active");
        menu.classList.remove("active");;
        brandName.classList.remove("active");
    }
    else 
    {
        menuToggle.classList.add("active");
        menu.classList.add("active");
        brandName.classList.add("active");
    }
    
})
















