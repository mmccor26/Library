let myLibrary = [
    {Title: "Frankenstein", Pages: 202, Author: "Mary Shelley"},
    {Title: "A Game of Thrones", Pages: 800,Author:"GRRM"}
];




function Book(){
    
}

function addBookToLibrary(book){
  console.log("Working");
  var x = document.getElementById(book);
  
  if(x.style.visibility == "hidden"){
    x.style.visibility= "visible";
  }
  else{
    x.style.visibility= "hidden";
  }
 
   // myLibrary.append(book);
}

function render(){
  
}
function generateTableHead(table,data) {
    let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
let table = document.querySelector("table");
let data = Object.keys(myLibrary[0]);
generateTable(table,myLibrary);
generateTableHead(table,data);

let addBook = document.getElementById("addBook");
let formDiv = document.getElementById("formDiv");
addBook.addEventListener('click',(e)=>{
  addBookToLibrary("formDiv");

});

