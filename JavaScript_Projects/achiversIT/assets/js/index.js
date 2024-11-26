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


// Slider
let flag = 0;

function slideshow(num) {
    // console.log(num);
    let slides = document.querySelectorAll(".slide");

    if (num == slides.length) {
        num = 0;
        flag = 0
    } 
    
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[num].style.display = "block";
}

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");


next.addEventListener('click', () => {
    flag++;
    slideshow(flag)
})
prev.addEventListener('click', () => {
    if (flag > 0) {
        flag--;
    }
    slideshow(flag);
})
slideshow(flag)
