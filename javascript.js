
let hideEnlaces_btn = document.getElementById("hideEnlaces_btn")

let hideEnlaces = document.getElementById("hideEnlaces")

hideEnlaces_btn.addEventListener("click", toggleText);

function toggleText(){
    hideEnlaces.classList.toggle("show"); 

    if(hideEnlaces.classList.contains("show")){
        hideEnlaces_btn.innerHTML = "Ocultar"
    } else {
        hideEnlaces_btn.innerHTML = "Redes Sociales"
    }

}