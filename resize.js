const img = document.querySelector("#editor-mobile_desktop");
const laptop = document.querySelector("#laptop");


const onResize = () => {
    //Fix menu bug where if the user clicked on the mobile menu button and switched to a higher resolution the links won't appear
    const mediaQuery = window.matchMedia("(min-width: 1000px)");
    const mediaMaxQuery = window.matchMedia("(max-width: 999px)");
    if (mediaQuery.matches) {
        img.src = "./images/illustration-editor-desktop.svg";
        laptop.src = "./images/illustration-laptop-desktop.svg"

      
    }
    else if (mediaMaxQuery.matches) {
        img.src = "./images/illustration-editor-mobile.svg";
        laptop.src = "./images/illustration-laptop-mobile.svg"
    }


}
window.addEventListener('DOMContentLoaded', onResize);
window.addEventListener('resize', onResize);

