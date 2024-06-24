// for header ul
// for media 768px
let count = 0;
function listShow() {
    let ul = document.getElementById("ful");
    if (count % 2 == 0) {
        ul.style.display = 'block';
        count++;
    } else {
        ul.style.display = 'none';
        count--;
    }
}
