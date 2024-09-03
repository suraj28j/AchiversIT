let cartData = [];
let products;
let products_Store;
const productsContiner = document.getElementById('productsContainer');


async function getProducts() {
    const getData = await fetch(`https://fakestoreapi.com/products`);
    products = await getData.json();
    // console.log(products);
    // products_Store = products;
}
getProducts();

function displayData() {
    products_Store.forEach((item, index) => {
        const col = document.createElement('div');
        col.setAttribute('class', 'col-md-4');
        col.innerHTML = `
        <div class='card g-2'>
            <div class = 'card-body'>
                <div class='d-flex justify-content-center mt-2'>
                    <img src = ${item.image} alt = 'item.id'>
                </div>
                <div class = 'card-title text-center mt-2'>
                    <h3>${item.title}</h3>
                </div>
                <div class = 'card-subtitle text-center mt-2'>
                    <p>${item.description}</p>
                </div>
                <div class = 'text-center mt-2'>
                    <p>$ ${item.price}</p>
                <div>
                <div class='d-flex justify-content-center'>
                    <button class = "btn btn-dark">Details</button>
                    <button class = "btn btn-dark ms-2" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
        `
        productsContiner.appendChild(col);
    })
}

function allCollection() {
    productsContiner.innerHTML = '';
    products_Store = products;
    displayData()
}

function menCollection() {
    productsContiner.innerHTML = '';
    const getData = products.filter((item) => {
        return item.category === "men's clothing"
    })
    // console.log(getData);
    products_Store = getData;
    displayData();
}

function womenCollection() {
    productsContiner.innerHTML = '';
    const getData = products.filter((item) => {
        return item.category === "women's clothing"
    })
    // console.log(getData);
    products_Store = getData;
    displayData();
}
function JeweleryCollection() {
    productsContiner.innerHTML = '';
    const getData = products.filter((item) => {
        return item.category === "jewelery"
    })
    // console.log(getData);
    products_Store = getData;
    displayData();
}
function electronicsCollection() {
    productsContiner.innerHTML = '';
    const getData = products.filter((item) => {
        return item.category === "electronics"
    })
    // console.log(getData);
    products_Store = getData;
    displayData();
};



// Add to cart
function addToCart(id) {
    // console.log(id);
    let getItem = products.find((item) => {
        return item.id === id;
    })
    // console.log(getItem);
    let checkItem = cartData.find((item) => {
        return item.id === getItem.id
    })
    if (checkItem) {
        checkItem.quantity = checkItem.quantity + 1;
    } else {
        getItem.quantity = 1;
        cartData.push(getItem);
    }
    console.log(cartData);

    // const showCartItem = document.getElementById('showCartItem')
    // cartData.forEach((item) => {
    //     let row = document.createElement('div')
    //     row.setAttribute('class','row');
    //     row.innerHTML = `
    //         <div class='col-md-3 d-flex justify-content-center align-items-center'>
    //             <img src=${item.image} alt=${item.title} class='w-75 h-75'>
    //         </div>
    //         <div class='col-md-6'>
    //             <h4 class='mt-4'>${item.title}</h4>
    //         </div>
    //         <div class='col-md-3'>
    //             <div class='d-flex justify-content-between mt-4'>
    //                 <button class='ms-1 ps-2 pe-2 pb-1' style="border: 0px"
    //                 >-</button>
    //                 <p>${item.quantity}</p>
    //                 <button class='pb-1' style="border: 0px"
    //                 >+</button>
    //             </div>
    //             <div class='d-flex justify-content-center mt-4'>
    //                 <h6>${item.quantity} * ${item.price}</h6>
    //             </div>
    //         </div>
    //     `
    //     showCartItem.appendChild(row)
    // })
}


