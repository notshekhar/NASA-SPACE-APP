$(".menu li").click(() => {
    $(".navbar .menu").toggleClass("active")
    $(".menu-btn i").toggleClass("active")
})

// typing text animation script
// var typed = new Typed(".typing", {
//     strings: ["Scientists", "Developer", "Blogger", "Designer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
// })
// var typed = new Typed(".typing-2", {
//     strings: ["Scientists", "Developer", "Blogger", "Designer", "Freelancer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
// })

$(".earth_article").click(function () {
    $(".earthScience").addClass("article_show")
})
$(".future_article").click(function () {
    $(".futureEarth").addClass("article_show")
})

let video = document.querySelector("section .max-width video")

window.onscroll = () => {
    let scrolY = window.scrollY
    if ((scrolY >= 2400) & (scrolY <= 3400)) {
        video.play()
    } else {
        video.pause()
    }
}

let home_bg = document.querySelector(".home")

let image_buffer = [
    "./images/Slideshow%20images/1.jpg",
    "./images/Slideshow%20images/3.jpeg",
    "./images/Slideshow%20images/4.jpg",
    "./images/Background-imag.png",
    "./images/Slideshow%20images/5.jpg",
]

let count = 0

setInterval(() => {
    // console.log(count)
    home_bg.style.backgroundImage = `url(${image_buffer[count]})`
    count++
    if (count == image_buffer.length) count = 0
}, 2000)
