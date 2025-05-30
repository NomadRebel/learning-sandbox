const list = document.getElementById("table");
const div = document.getElementById("list");
const field = document.getElementById("todo");
const button = document.getElementById("addTask");
button.addEventListener("click",()=>{
  const input = document.getElementById("todo").value;
  console.log(input);
  field.value = "";
  console.log(input);
  let element = document.createElement("li");
  
  let task = document.createElement("span");
  task.textContent = input;
  let check = document.createElement("input");
  check.type = "checkbox";
  check.id = "checkjs";
  let label = document.createElement("label");
  label.id = "id";
  label.htmlFor = "checkjs";
  label.textContent = task.textContent;
  let labelContent = label.textContent;
  
  check.addEventListener("click",()=>{
    if(check.checked){
      label.style.textDecoration= "line-through";
      label.style.color = "grey";
    }
    else {
      label.style.textDecoration = "none";
      label.style.color = "black";
    }
    
  })

  element.appendChild(check);
  element.appendChild(label);
  list.appendChild(element);
});