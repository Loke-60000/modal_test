let openCookieModal = document.querySelector(".icon_cookies")
let openNewsModal = document.querySelector(".icon_newsletter")
let openLoginModal = document.querySelector(".icon_login")

let exitCookieModal = document.querySelector(".exitCookie")
let exitNewsModal = document.querySelector(".exitNews")
let exitLoginModal = document.querySelector(".exitlogin")




/* 
==================================================
======- cookies -
==================================================
*/

openCookieModal.addEventListener("click", function(event) {
    document.querySelector(".cookieModal").setAttribute("style", "")
    document.querySelector("body").setAttribute("style", `background-color: #656565`)
    document.querySelector("footer").setAttribute("style", "opacity: 0;")
})

exitCookieModal.addEventListener("click", function(event) {
    document.querySelector(".cookieModal").setAttribute("style", "visibility: hidden;")
    document.querySelector("body").setAttribute("style", `background-color: white`)
    document.querySelector("footer").setAttribute("style", "opacity: 1;")
})


/* 
==================================================
======- news -
==================================================
*/


openNewsModal.addEventListener("click", function(event) {
    document.querySelector(".newsModal").setAttribute("style", "")
    document.querySelector("body").setAttribute("style", `background-color: #656565`)
    document.querySelector("footer").setAttribute("style", "opacity: 0;")
})

exitNewsModal.addEventListener("click", function(event) {
    document.querySelector(".newsModal").setAttribute("style", "visibility: hidden;")
    document.querySelector("body").setAttribute("style", `background-color: white`)
    document.querySelector("footer").setAttribute("style", "opacity: 1;")
})

/* 
==================================================
======- login -
==================================================
*/


openLoginModal.addEventListener("click", function(event) {
    document.querySelector(".loginModal").setAttribute("style", "")
    document.querySelector("body").setAttribute("style", `background-color: #656565`)
    document.querySelector("footer").setAttribute("style", "opacity: 0;")
})

exitLoginModal.addEventListener("click", function(event) {
    document.querySelector(".loginModal").setAttribute("style", "visibility: hidden;")
    document.querySelector("body").setAttribute("style", `background-color: white`)
    document.querySelector("footer").setAttribute("style", "opacity: 1;")
})
