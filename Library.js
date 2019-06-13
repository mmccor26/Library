let myLibrary = [
    {Title: "Frankenstein", Pages: 202, Author: "Mary Shelley"},
    {Title: "A Game of Thrones", Pages: 800,Author:"GRRM"}
];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
   
  }
}

function AddBookToLibrary(event){
  console.log(myLibrary);
  const title = document.getElementById("Title").value;
  const author = document.getElementById("Author").value;
  const pages = document.getElementById("Pages").value;
  myLibrary.push({Title: title,Pages: pages,Author: author});

  render();

  event.preventDefault();
}

function showForm(book){
  console.log("Working");
  var x = document.getElementById(book);
  
  if(x.style.visibility == "hidden"){
    x.style.visibility= "visible";
  }
  else{
    x.style.visibility= "hidden";
  }
}
function generateTableHead(table,data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
}}
function render(){ 
  const tableBody = document.querySelector("tbody");

  if (tableBody.children.length > 0) {
    while (tableBody.children.length !== 0) {
      tableBody.removeChild(tableBody.lastChild);
    }
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const tableRow = document.createElement("tr");
    
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const readBtn = document.createElement("button")
    const deleteBtn = document.createElement("button");
    deleteBtn.style.width = '50px';
    deleteBtn.style.width = '80px';
    deleteBtn.innerHTML = "Delete";
    readBtn.innerHTML = "Unread";

    tableBody.appendChild(tableRow);
    
    tableRow.appendChild(title);
    tableRow.appendChild(author);
    tableRow.appendChild(pages);
    tableRow.appendChild(readBtn);
    tableRow.appendChild(deleteBtn);

    
    title.innerHTML = `${myLibrary[i].Title}`;
    author.innerHTML = `${myLibrary[i].Author}`;
    pages.innerHTML = `${myLibrary[i].Pages}`;
    
    deleteBtn.addEventListener('click',(e)=>{
      deleteBook(i);
    
    });
    readBtn.addEventListener('click',(e)=>{
      if(readBtn.innerHTML == "Unread"){
        readBtn.innerHTML = "Read";
      }
      else{
        readBtn.innerHTML = "Unread";
      }
    
    });
  }

}
function deleteBook(index){

  myLibrary.splice(index,1);
  render();
}


let formDiv = document.getElementById("formDiv");
let submit = document.getElementById("submit");
let submitBtn = document.getElementById("submitBtn");
submit.addEventListener('submit',AddBookToLibrary);

addBook.addEventListener('click',(e)=>{
  showForm("formDiv");

});

render();



