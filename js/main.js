// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Scientists", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})
var typed = new Typed(".typing-2", {
    strings: ["Scientists", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})
//shekhar

document.querySelector(".article").onscroll = function () {
    if (this.scrollTop > 500) {
        $(".scroll-up-btn-a").addClass("show")
    } else {
        $(".scroll-up-btn-a").removeClass("show")
    }
}
$(".scroll-up-btn-a").click(function () {
    $(".article").animate({ scrollTop: 0 })
    // removing smooth scroll on slide-up button click
    $(".article").css("scrollBehavior", "auto")
})
$(".earth_article").click(function () {
    $(".earthScience").addClass("article_show")
})
$(".future_article").click(function () {
    $(".futureEarth").addClass("article_show")
})
