let myLibrary = [
    {Title: "Frankenstein", Pages: 202, Author: "Mary Shelley"},
    {Title: "A Game of Thrones", Pages: 800,Author:"GRRM"}
];




function Book(){
    
}

function addBookToLibrary(book){
    myLibrary.append(book);
}

function render(){
    
    myLibrary.forEach(book =>{

    });
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
let table = document.querySelector("table");
let data = Object.keys(myLibrary[0]);
generateTableHead(table,data);
