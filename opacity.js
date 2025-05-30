const main = document.querySelector("#card");
main.addEventListener("mouseover", function(e){
  main.style.opacity = (parseFloat(main.style.opacity) || 0) + 0.2;
  main.style.backgroundColor = "orange";
  main.style.transition = "0.3s";

})