$(function () {
    /*nav 영역*/
    let menuBtn = $(".navR .btn-menu");
    let closeBtn = $(".navR .btn-close");
    let searchBtn = $(".navR .btn-search");
    let main_menu = $(".main");
    let nav_menu = $(".nav-menu");
    let search_menu = $(".nav-search");
    let shadow = $(".shadow");

    nav_menu.hide();
    search_menu.hide();
    closeBtn.eq(0).hide();
    closeBtn.eq(1).hide();
    shadow.hide();

    menuBtn.click(function () {
        nav_menu.show();
        search_menu.hide();
        main_menu.hide();
        menuBtn.hide();
        searchBtn.show();
        closeBtn.eq(0).show();
        shadow.show();
    })

    searchBtn.click(function () {
        search_menu.show();
        searchBtn.show();
        main_menu.hide();
        menuBtn.show();
        searchBtn.hide();
        closeBtn.eq(0).show();
        closeBtn.eq(1).hide();
        shadow.show();
    })

    closeBtn.click(function () {
        nav_menu.hide();
        search_menu.hide();
        main_menu.show();
        menuBtn.show();
        searchBtn.show();
        closeBtn.hide();
        shadow.hide();
    })

    /*캐러셀 일시정지 & 동작*/
    let pauseBtn = $(".pauseBtn");
    let playBtn = $("#carousel .material-symbols-outlined");

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


    /*slick*/
    $('.responsive').slick({
        rows: 1,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 9,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});
