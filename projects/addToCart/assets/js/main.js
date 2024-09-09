let itemAry = [
    // {imgUrl:'',itemName:'',itemPrice:0}
];

function display() {
    let count_items = document.getElementById("count_items");
    let selected_item = document.getElementById("selected_item");
    let price = document.getElementById('price');

    selected_item.innerHTML = ''
    itemAry.forEach((item, index) => {
        let div = document.createElement('div');
        div.setAttribute('id', 'box');
        div.innerHTML = `
             <img src ='${item.imgUrl}' alt = 'img1'>
             <h4> ${item.itemName}</h4>
             <h4>₹ ${item.itemPrice}</h4>
             <i class="bi bi-trash3" onclick='deleteToCart(${index})'></i>
            `
        selected_item.appendChild(div);
    })
    count_items.innerText = itemAry.length;
    price.innerText = itemAry.reduce((acc, curr) => (acc + curr.itemPrice), 0)
}
// display();

function addToCart(imgUrl, itemName, itemPrice) {
    let data = { imgUrl, itemName, itemPrice }
    itemAry.push(data)
    //    console.log(itemAry);
    display();
}

function deleteToCart(index) {
    itemAry.splice(index, 1)
    display();
}
