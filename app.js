(function () 
{






const menulinks = document.querySelectorAll ('.menu a[href^="#"]') ;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.menu a[href="#${id}]`)

        if (entry.isIntersecting) {
            menuLink.classList.add("selected")
        } else {
            menuLink.classList.remove("selected");
        }
    })
})

menulinks.forEach(menuLink => 
    {menuLink.addEventListener("click" , function() 
    {menuLink.classList.remove("menu_opened") ; 
})
const hash = menuLink.getAttribute("href");
const target = document.querySelector(hash);
if(target) {observer.observe(target);}
})

menulinks.forEach(menuLink => {
        menuLink.addEventListener("click", function() {
            menuLink.classList.remove("menu_opened");
        })
})





})
 