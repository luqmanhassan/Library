let myLibrary = [];
let mainDiv = document.getElementById("cardSection");
let innerDiv = mainDiv.getElementsByTagName("div");
let title_btn = document.getElementById("title");
let author_btn = document.getElementById("author");
let pages_btn = document.getElementById("pages");
let read_btn = document.getElementById("read");
let submit_btn = document.getElementById("submit");

addBook_btn.addEventListener("click", addBookCard);
submit_btn.addEventListener("click", addBookToLibrary);
submit_btn.addEventListener("click", displayBook);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
    }
}

function addBookCard() {
    document.getElementById("addBook").style.display = "block";

}

let x = title_btn.value;
let y = author_btn.value;
let z = pages_btn.value;
let s = read_btn.value;

function addBookToLibrary() {
    const bookObj = new Book(x, y, z, s);
    myLibrary.push(bookObj);
}

function displayBook() {
    console.log(myLibrary.length);
    /*
        if (myLibrary.length != 1 && myLibrary.length != 0) {
            for (let j = 0; j < myLibrary.length; j++) {
                document.getElementById("DivElement").remove();
            }
            myLibrary.forEach(bookloop);
        } else {
            myLibrary.forEach(bookloop);
        }
        console.log(myLibrary.length);
    */
    myLibrary.forEach(bookloop);
    for (let j = 0; j < innerDiv.length; j++) {
        innerDiv[j].remove();
    }


}

function bookloop(val) {

    let divE = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let btn = document.createElement("button");

    mainDiv.appendChild(divE);
    divE.appendChild(p1);
    divE.appendChild(p2);
    divE.appendChild(p3);
    divE.appendChild(p4);
    divE.appendChild(btn);

    let p1Child = document.createTextNode("" + val.title);
    let p2Child = document.createTextNode("" + val.author);
    let p3Child = document.createTextNode("" + val.pages);
    let p4Child = document.createTextNode("" + val.read);
    let removeChild = document.createTextNode("Remove");

    p1.appendChild(p1Child);
    p2.appendChild(p2Child);
    p3.appendChild(p3Child);
    p4.appendChild(p4Child);
    btn.appendChild(removeChild);


    divE.id = "DivElement";
    btn.addEventListener("click", removeBTN);

    function removeBTN() {
        divE.remove();
        // delete myLibrary[this];
    }

}