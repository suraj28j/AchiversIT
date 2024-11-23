let cartData = [];
let allProducts = [];
// let productsByCategory;

// async function getProducts() {
//     try {
//         const getData = await fetch(`https://fakestoreapi.com/products`);
//         products = await getData.json();
//         // console.log(products);
//         productsByCategory = products;
//     } catch (error) {
//         console.log("ERROR : ", error);
//         // console.log("products : ", products);
//     }
//     displayData();
// }
async function getProducts() {
    try {
        const getData = await fetch(`https://fakestoreapi.com/products`);
        let products = await getData.json();
        // console.log(products);
        allProducts = products;
        displayData(allProducts);
    } catch (error) {
        console.log("ERROR : ", error);
    }

}
getProducts();


// function displayData() {
//     const productsContiner = document.getElementById('productsContainer');
//     if (products !== undefined) {
//         productsContiner.innerHTML = '';
//         productsByCategory.forEach((item, index) => {
//             const col = document.createElement('div');
//             col.setAttribute('class', 'col-md-4');
//             col.innerHTML = `
//         <div class='card g-2'>
//             <div class = 'card-body'>
//                 <div class='d-flex justify-content-center mt-2'>
//                     <img src = ${item.image} alt = 'item.id'>
//                 </div>
//                 <div class = 'card-title text-center mt-2'>
//                     <h3>${item.title}</h3>
//                 </div>
//                 <div class = 'card-subtitle text-center mt-2'>
//                     <p>${item.description}</p>
//                 </div>
//                 <div class = 'text-center mt-2'>
//                     <p>$ ${item.price}</p>
//                 <div>
//                 <div class='d-flex justify-content-center'>
//                     <button class = "btn btn-dark" onclick = "setDeatils(${item.id})">Details</button>
//                     <button class = "btn btn-dark ms-2" onclick = "addToCart(${item.id})">Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//         `
//             productsContiner.appendChild(col);
//         })
//     }else{
//         productsContiner.innerHTML = `<h3 id = 'errormsg'>Can't Fetch Data</h3>`
//     }
// }

function displayData(products) {
    const productsContiner = document.getElementById('productsContainer');
    if (products !== undefined) {
        productsContiner.innerHTML = '';
        products.forEach((item, index) => {
            const col = document.createElement('div');
            col.setAttribute('class', 'col-md-4');
            col.innerHTML = `
        <div class='card g-2'>
            <div class = 'card-body'>
                <div class='d-flex justify-content-center mt-2'>
                    <img src = ${item.image} alt = '${item.id}'>
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
                    <button class = "btn btn-dark" onclick = "setDeatils(${item.id})">Details</button>
                    <button class = "btn btn-dark ms-2" onclick = "addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
        `
            productsContiner.appendChild(col);
        })
    } else {
        productsContiner.innerHTML = `<h3 id = 'errormsg'>Can't Fetch Data</h3>`
    }
}

function filterData(category) {
    let products;
    if (category === 'all') {
        products = allProducts
    } else {
        products = allProducts.filter((item) => {
            return item.category === category
        })
    }
    displayData(products);
}



// Add to cart
// function addToCart(id) {
//     let prvData = sessionStorage.getItem("products") 
//     let getItem = allProducts.find((item) => {
//         return item.id === id;
//     })
//     if (prvData !== null) {
//         cartData = [...JSON.parse(prvData)];
//         let existProduct = cartData.find((item) => {
//             return item.id === getItem.id
//         })
//         if (existProduct) {
//             existProduct.quantity = existProduct.quantity + 1;
//         } else {
//             getItem.quantity = 1;
//             cartData.push(getItem)
//         }
//     } else {
//         getItem.quantity = 1;
//         cartData.push(getItem);
//     }
//     sessionStorage.setItem("products", JSON.stringify(cartData));
// }
function addToCart(id) {
    let prvData = JSON.parse(sessionStorage.getItem("products")) || [];
    let getItem = allProducts.find((item) => {
        return item.id === id;
    })
    let existProduct = prvData.find((item) => {
        return item.id === getItem.id
    })
    if (existProduct) {
        existProduct.quantity = existProduct.quantity + 1;
    } else {
        getItem.quantity = 1;
        prvData.push(getItem)
    }
    alert(`${getItem.title} add successfully`);
    sessionStorage.setItem("products", JSON.stringify(prvData));
}

function setDeatils(id) {
    sessionStorage.removeItem("product")
    let product = allProducts.find((item) => {
        return item.id === id
    })
    console.log(product);
    sessionStorage.setItem("product", JSON.stringify(product));
    window.location.href = './assets/html/singleProduct.html'
}




