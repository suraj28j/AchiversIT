let cartData = [];
function displayCartItems(){
    cartData = JSON.parse(sessionStorage.getItem('products'))

    console.log(cartData);
    // cartData.forEach((element,index) => {
    //     let div8 = document.createElement('div')
    //     div8.setAttribute('class','col-md-9')
    //     let div4 = document.createElement('div')
    //     div4.setAttribute('class','col-md-3 d-flex justify-content-center')
    //     div4.innerHTML = `
    //     <img src = ${element.image} alt = 'img' class = ''>
    //     `
    //     div8.innerHTML = `
    //     <h4>${element.title}</h4>
    //     <p>${element.price}</p>
    //     `
    //     cartItems.appendChild(div4)
    //     cartItems.appendChild(div8)
    // });


    
    const showCartItem = document.getElementById('showCartItem')
    cartData.forEach((item) => {
        let row = document.createElement('div')
        row.setAttribute('class','row border m-1');
        row.innerHTML = `
            <div class='col-md-3 d-flex justify-content-center align-items-center'>
                <img src=${item.image} alt=${item.title} class='w-75 h-75'>
            </div>
            <div class='col-md-6'>
                <h4 class='mt-4'>${item.title}</h4>
            </div>
            <div class='col-md-3'>
                <div class='d-flex justify-content-between mt-4'>
                    <button class='ms-1 ps-2 pe-2 pb-1' style="border: 0px"
                    >-</button>
                    <p>${item.quantity}</p>
                    <button class='pb-1' style="border: 0px"
                    >+</button>
                </div>
                <div class='d-flex justify-content-center mt-4'>
                    <h6>${item.quantity} * ${item.price}</h6>
                </div>
            </div>
        `
        showCartItem.appendChild(row)
    })
}

displayCartItems()


