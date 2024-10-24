const products = [
    {
        id: 1,
        productName: "Women Suit Set",
        price: 400,
        imgUrl: './assets/images/product1.jpg'
    },
    {
        id: 2,
        productName: "Women Kurta",
        price: 250,
        imgUrl: './assets/images/product2.jpg'
    },
    {
        id: 3,
        productName: "Women Frock",
        price: 500,
        imgUrl: './assets/images/product3.jpg'
    },
    {
        id: 4,
        productName: "Women Formal Dress",
        price: 380,
        imgUrl: './assets/images/product4.jpg'
    }
]

let product = []; // product added in cart


function displayAllItem() {
    let allItem = document.getElementById("allItem");
    products.forEach((item) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <img src = '${item.imgUrl}'  alt="casual">
        <h2>${item.productName}</h2>
        <h3>₹ ${item.price}</h3>
        <button onclick="addToCart('${item.imgUrl}','${item.productName}',${item.price})">Add to cart</button>
        `
        allItem.appendChild(div)
    })
}
displayAllItem();

function displayCartItem() {
    let count_items = document.getElementById("count_items");
    let selected_item = document.getElementById("selected_item");
    let price = document.getElementById('price');

    selected_item.innerHTML = ''
    product.forEach((item, index) => {
        let div = document.createElement('div');
        div.setAttribute('id', 'box');
        div.innerHTML = `
             <img src ='${item.imgUrl}' alt = 'img1'>
             <h4> ${item.productName}</h4>
             <h4>₹ ${item.price}</h4>
             <i class="bi bi-trash3" onclick='deleteToCart(${index})'></i>
            `
        selected_item.appendChild(div);
    })
    count_items.innerText = product.length;
    price.innerText = product.reduce((acc, curr) => (acc + curr.price), 0)
}

function addToCart(imgUrl, productName, price) {
    let data = { imgUrl, productName, price }
    product.push(data)
    console.log(product);
    displayCartItem();
}

function deleteToCart(index) {
    product.splice(index, 1)
    displayCartItem();
}
