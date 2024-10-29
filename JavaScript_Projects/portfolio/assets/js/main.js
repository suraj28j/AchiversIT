let icon = document.getElementById("icon");
let ul = document.getElementById("ul");
let count = true;
icon.addEventListener('click', function () {
    if (count === true) {
        ul.style.display = 'block';
        count = false;
    } else {
        ul.style.display = 'none';
        count = true;

    }
})

function contact(){
    window.scrollTo(0,1200)
}