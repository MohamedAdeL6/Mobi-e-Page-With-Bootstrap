// Main Image
let image = document.querySelector(".img-box img");

// Group Of Image use it to change the main image
let boxImage = document.querySelectorAll("#btn-img img");

// Background-Color Of Section Main
let BgMain = document.querySelector(".main");
let btnImage = document.getElementById("btn-img");
let footer = document.querySelector(".footer")

console.log(BgMain)

// Change The Image Function
boxImage.forEach(el => {
    el.onclick = function() {
        image.src =   el.src;

        console.log(el.dataset.color)
        BgMain.style.backgroundColor = el.dataset.color
        btnImage.style.backgroundColor = el.dataset.color
        footer.style.backgroundColor = el.dataset.color

    }
})

// Zoom In image Function
image.addEventListener("mousemove", (e) => {

    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop;

    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(2)";

})

// Zoom out image Function
image.addEventListener("mouseleave", (e) => {

    image.style.transformOrigin = `center`;
    image.style.transform = "scale(1)";

})