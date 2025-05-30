// //query selector selected the container div
// const container = document.querySelector('#container');
// // then we created a new div     
// const content = document.createElement("div");//
// // the new div is stored in content variable    
// content.classList.add("content");
// // then we added content in the content div
// content.textContent = `This is the glorious text-content!`;
// //then append child is used to make it the last children(means position itself in the end) of the container div    
// container.appendChild(content);


// // adding a paragraph with red text

// const paragraph = document.createElement("p");
// paragraph.textContent = `Hey I'm red!`;
// container.appendChild(paragraph);
// paragraph.style.color = "red";


// // adding an h3 heading with blue text
// const headingt = document.createElement("h3");
// headingt.textContent = `I'm a blue h3!`;
// headingt.style.color = "blue";
// container.appendChild(headingt);

// //creating a new div 
// const newdiv = document.createElement("div");
// //adding border to it
// newdiv.style.border = "black thick solid";
// //adding background color
// newdiv.style.backgroundColor = "pink";
// container.appendChild(newdiv);

// //creating a heading in newdiv
// const headingnew = document.createElement("h1");
// headingnew.textContent = `I'm in a div`;
// newdiv.appendChild(headingnew);

// //creating a new paragraph
// const paragraphnew = document.createElement("p");
// paragraphnew.textContent = "ME TOO!";
// newdiv.appendChild(paragraphnew);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("hello world");

// const btnn = document.querySelector("#btnn");
// btnn.addEventListener("click", ()=>{
//   alert("hello world...");
// });

// function nikhil(){
//   alert("nikhil");
// }

// const nik = document.querySelector("#nik");
// nik.onclick = alertFunction;

// btn.addEventListener("click", function(e){
//   console.log(e);
// })
// btn.addEventListener("click",function(e){
//   e.target.style.background = "blue";
// })
const input = document.getElementById("myInput");
const inputValue = input.value;
console.log(inputValue);