    /*nav 영역*/
    let menuBtn = $(".navR .btn-menu");
    let closeBtn = $(".navR .btn-close");
    let searchBtn = $(".navR .btn-search");
    let main_menu = $(".main");
    let nav_menu = $(".nav-menu");
    let search_menu = $(".nav-search");
    let shadow = $(".shadowWrap");

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
        nav_menu.hide();
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

    /*withNeedINmobileBtn*/
    let withNeedINmobileBtn = $(".withNeedINmobileBtn");
    let withNeedINmobileArrow = $(".arrow-down");
    let withNeedINmobileList = $(".withNeedINmobileList");

    withNeedINmobileList.hide();

    withNeedINmobileBtn.click(function () {
        withNeedINmobileList.toggle();
        withNeedINmobileArrow.toggleClass("arrow-active");
    });

    /* up btn */
    let upBtn = $(".width #upBtn");

    upBtn.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 200)
        return false;
    });


    /* ---------- login 모달 열고 닫기 --------- */
    let loginBtn = $(".loginBtn");
    let loginModal = $(".loginModal");
    let loginBox = $("#login.loginBox");
    let logincloseBtn = $("#login.loginBox .btn-close");
    let signUpBtn = $(".signUpBtn");
    let signUpBox = $("#signUp.loginBox");
    let signUpcloseBtn = $("#signUp.loginBox .btn-close");

    loginModal.hide();
    signUpBox.hide();

    /* 로그인 모달 열기 */
    loginBtn.click(function(){
        loginModal.show();
        loginBox.addClass("animate__animated animate__fadeInDown");
        loginBox.show();
        signUpBox.hide();
        $('body').css('overflow', 'hidden');
    });

    /* 회원가입 모달 열기 */
    signUpBtn.click(function(){
        loginBox.hide();
        signUpBox.addClass("animate__animated animate__fadeIn");
        signUpBox.show();
        $('body').css('overflow', 'hidden');
    });
    /* 로그인 모달 닫기 */
    // $(document).mouseup(function(e){
    //     if(!loginBox.is(e.target) && !signUpBtn.is(e.target) && loginBox.has(e.target).length === 0 ){
    //         loginModal.hide();
    //         $('body').css('overflow', 'auto');
    //     }
    // });

    logincloseBtn.click(function(){
        loginModal.hide();
        $('body').css('overflow', 'auto');
    });

    signUpcloseBtn.click(function(){
        signUpBox.addClass("animate__animated animate__slideInDown");
        signUpBox.hide();
        loginModal.hide();
        $('body').css('overflow', 'auto');
    });



    function checkLogin(){
        var form = document.loginForm;
        let pw = form.pw.value;

        /* 아이디 section */
        if(!form.id.value){
            alert("아이디를 입력해주세요");
            form.id.focus();
            return false;
        }

        if(!form.pw.value){
            alert("패스워드를 입력해주세요");
            form.id.focus();
            return false;
        }

        form.submit();
    }
