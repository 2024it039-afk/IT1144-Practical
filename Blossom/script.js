const dots = document.querySelectorAll(".dots span");
let current = 0;
setInterval(() => {
    dots[current].classList.remove("active");
        current = (current+1)% dots.length;
        dots[current].classList.add("active");
}, 3000);
function addToCart() {
    alert("Custom Flower Bunch Added to Cart!");
}