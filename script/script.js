let titre = document.querySelectorAll(".titre");

for(let i = 0; i <titre.length; i++){
  titre[i].addEventListener("click", function(){
    let result = this.nextElementSibling;
    result.classList.toggle("active");
    
    if(this.firstElementChild.innerText === "(Cliquez pour étendre)"){
      this.firstElementChild.innerText = "(Cliquez pour replier)"
      }
    else{
     this.firstElementChild.innerText = "(Cliquez pour étendre)"
   }
  })
}