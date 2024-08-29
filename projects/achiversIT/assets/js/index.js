// for header ul
// for media 768px
let count = false;
function listShow() {
    let ul = document.getElementById("ful");
    if (count == false) {
        ul.style.display = 'block';
        count = true;
    } else {
        ul.style.display = 'none';
        count = false
    }
}
