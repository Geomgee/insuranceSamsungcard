ScrollOut();

/*-------------------------------------------------------------*/

/* 캐러셀 일시정지 & 동작 */
let pauseBtn = $(".pauseBtn");
let playBtn = $("#carousel .material-symbols-outlined");

$('.carousel').carousel({
    interval: 2000
})
pauseBtn.click(function () {
    $('#carouselExampleIndicators').carousel('pause');
    pauseBtn.hide();
    playBtn.show();
});
playBtn.click(function () {
    $('#carouselExampleIndicators').carousel('cycle');
    pauseBtn.show();
    playBtn.hide();
});

/*-------------------------------------------------------------*/


/*slick*/
$('.responsive').slick({
    rows: 1,
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 720,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        }
    ]
});
