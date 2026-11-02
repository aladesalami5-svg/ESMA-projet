const recherche = document.querySelector(".search");
const formulaire= document.querySelector(".form")
console.log(recherche);

window.addEventListener('scroll', () => {
    if(window.scrollY > 120){
        recherche.style.top = 0;
    }else {
        recherche.style.top = "-80px";
    }
})
formulaire.addEventListener("submit", function(e) {
    e.preventDefault();
    const email= document.querySelector("input").value;
    const password= document.getElementById("password").value;
    const text= document.getElementById("text").value;
    
    if(email === ""){
        message.textContent = "veuillet entrer votre nom";
        return;
    }
})