let cartData = [];
let products;
let productsByCategory;

async function getProducts() {
    const getData = await fetch(`https://fakestoreapi.com/products`);
    products = await getData.json();
    // console.log(products);
    productsByCategory = products;
    displayData()
}
getProducts();


function displayData() {
    const productsContiner = document.getElementById('productsContainer');
    productsContiner.innerHTML = '';
    productsByCategory.forEach((item, index) => {
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

function filterData(category) {
    if (category === 'all') {
        productsByCategory = products
    } else {
        productsByCategory = products.filter((item) => {
            return item.category === category
        })
    }
    displayData();
}



// Add to cart
function addToCart(id) {
    let prvData = [];

    let getItem = products.find((item) => {
        return item.id === id;
    })

    cartData.push(JSON.parse(sessionStorage.getItem('products')));

    if (cartData == []) {
        cartData.push(getItem);
        let jsonData = JSON.stringify(prvData)
        sessionStorage.setItem(`products`, `${jsonData}`)
    }
}
console.log(cartData);

    // if(prvData){
    //     let checkItem = prvData.find((item) => {
    //         return item.id === getItem.id
    //     })
    //     if (checkItem) {
    //         checkItem.quantity = checkItem.quantity + 1;
    //         // let jsonData = JSON.stringify(prvData)
    //         // sessionStorage.setItem(`products`,`${jsonData}`)
    //     } else {
    //         getItem.quantity = 1;
    //         prvData.push(getItem)
        //     let jsonData = JSON.stringify(prvData)
        //     sessionStorage.setItem(`products`,`${jsonData}`)
        // }
    // }else{
    //     let jsonData = JSON.stringify(getItem)
    //         sessionStorage.setItem(`products`,`${jsonData}`)
    // }
// }

