let container = document.getElementById('container');
let now = new Date();

function addNote(){
    let input = document.getElementsByTagName('input');

    let div = document.createElement('div');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.border = '1px solid';
    div.style.margin = '5px';
    div.style.overflow = 'auto';
    div.style.backgroundColor = 'antiquewhite';

    div.innerHTML = `
    <h3>${input[0].value}</h3>
    <hr>
    <p>${input[1].value}</p>
    <hr>
    <h5>${now.toDateString()}</h5>`
    container.appendChild(div);

    input[0].value = "";
    input[1].value = "";
} 