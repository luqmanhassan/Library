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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.item = 0;
    this.info = () => {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
    }
    this.createCard = () => {

        let divE = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let btn1 = document.createElement("button");
        let btn2 = document.createElement("button");

        mainDiv.appendChild(divE);
        divE.appendChild(p1);
        divE.appendChild(p2);
        divE.appendChild(p3);
        divE.appendChild(btn1);
        divE.appendChild(btn2);

        let p1Child = document.createTextNode("" + this.title);
        let p2Child = document.createTextNode("" + this.author);
        let p3Child = document.createTextNode("" + this.pages);
        let readChild = document.createTextNode("" + this.read);
        let removeChild = document.createTextNode("Remove");

        p1.appendChild(p1Child);
        p2.appendChild(p2Child);
        p3.appendChild(p3Child);
        btn1.appendChild(readChild);
        btn2.appendChild(removeChild);

        divE.className = "divElement";
        btn1.className = "btnElement";
        this.item = myLibrary.length - 1;


        btn1.addEventListener("click", this.editRead);
        btn2.addEventListener("click", this.removeBTN);
    }

    this.editRead = () => {
        let btn1 = document.getElementsByClassName("btnElement");

        if (btn1[this.item].innerHTML == "Read") {
            btn1[this.item].innerHTML = "Not Read";
            this.read = "Not Read";
        } else {
            btn1[this.item].innerHTML = "Read";
            this.read = "Read";
        }
    }

    this.removeBTN = () => {
        let divE = document.getElementsByClassName("divElement");
        myLibrary.splice(this.item, 1);
        divE[this.item].remove();

    }
}


function addBookCard() {
    document.getElementById("addBook").style.display = "block";

}


function addBookToLibrary() {
    let x = title_btn.value;
    let y = author_btn.value;
    let z = pages_btn.value;
    let s = read_btn.value;
    let bookObj = new Book(x, y, z, s);
    myLibrary.push(bookObj);
    bookObj.createCard();
}