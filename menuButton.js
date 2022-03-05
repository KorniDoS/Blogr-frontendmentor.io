const icon = document.querySelector(".icon");


icon.addEventListener("click", menuButton);




function menuButton() {
    const svg = document.querySelector("#svg");
    const links = document.querySelector("#links");



    if (links.style.display === "flex") {
        links.style.display = "none";
        svg.src = "./images/icon-hamburger.svg";
       

    } else {
        links.style.display = "flex";
        svg.src = "./images/icon-close.svg";
       
        

    }
}