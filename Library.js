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
  console.log(title);


  
  myLibrary.push({Title: title,Pages: pages,Author: author});


  console.log(myLibrary);
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
function generateTableHead(){
  const table = document.querySelector("table");
  tHead = table.createTHead();
  

}
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

    tableBody.appendChild(tableRow);
    
    tableRow.appendChild(title);
    tableRow.appendChild(author);
    tableRow.appendChild(pages);
    
    title.innerHTML = `${myLibrary[i].Title}`;
    author.innerHTML = `${myLibrary[i].Author}`;
    pages.innerHTML = `${myLibrary[i].Pages}`;
  }

}


let formDiv = document.getElementById("formDiv");
let submit = document.getElementById("submit");
let submitBtn = document.getElementById("submitBtn");
submit.addEventListener('submit',AddBookToLibrary);

addBook.addEventListener('click',(e)=>{
  showForm("formDiv");

});
render();



