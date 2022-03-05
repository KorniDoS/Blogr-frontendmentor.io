const connect_link = document.querySelector("#connect_link");
const connect_menu = document.querySelector("#connect_menu");
const arrow = document.querySelector("#arrow");
connect_link.addEventListener("click", connectMenu);


function connectMenu(){
    if (connect_menu.style.display === "flex"){
        connect_menu.style.display = "none";
        arrow.style = "transform: none";
    } else {
        connect_menu.style.display = "flex";
        arrow.style = "transform: scaleY(-1);"
      
        
    }
   

}