var menuToggle = document.getElementsByClassName("menu-toggle")[0];


menuToggle.addEventListener("click", e => {

    if (menuToggle.classList.contains("active"))
    {
        menuToggle.classList.remove("active");
    }
    else 
    {
        menuToggle.classList.add("active");
    }
    
})
















