let library = [
    { title: 'title 1', author: 'author 1' },
    { title: 'title 2', author: 'author 2' },
];

function displayBooks() {
    let itemList = document.getElementById('itemList');
    itemList.innerHTML = '';

    library.forEach((book, index) => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
            <button class = "btn btn-primary" onclick = "editBook(${index})">Edit</button>
            <button class = "btn btn-danger" onclick = "deleteBook(${index})">Delete</button>
        </td>`;
        itemList.appendChild(row);
    })
}

function addBook() {
    let title = prompt("Enter Book Title : ");
    let author = prompt("Enter Book Author : ");
    if (title && author) {
        let newBook = { title, author };
        library.push(newBook);
    } else {
        alert("Please Enter a valid information");
    }
    displayBooks();
}

function editBook(index) {
    let title = prompt("Enter Book Title : ", library[index].title);
    let author = prompt("Enter Book Author : ", library[index].author);
    if (title && author) {
        library[index] = { title, author };
        displayBooks();
    } else {
        alert("Please Enter a valid information")
    }
}

function deleteBook(index) {
    let confirmDelete = confirm('Are you sure want to delete this book ?');
    if(confirmDelete){
        library.splice(index,1);
        displayBooks();
    }
}

displayBooks();