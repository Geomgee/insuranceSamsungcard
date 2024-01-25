/* nav *******************/
let menuBtn = $(".navR .btn-menu");
let closeBtn = $(".navR .btn-close");
let searchBtn = $(".navR .btn-search");
let main_menu = $(".main");
let nav_menu = $(".nav-menu");
let search_menu = $(".nav-search");
let shadow = $(".shadowWrap");

/*초기 기본 작동*/
search_menu.hide();
nav_menu.hide();
closeBtn.hide();
shadow.hide();


/*Menu버튼을 눌렀을 때의 화면*/
function showMenu() {
    nav_menu.show();
    search_menu.hide();
    main_menu.hide();
    menuBtn.hide();
    searchBtn.show();
    closeBtn.eq(0).show();
    shadow.show();
    mobileNavList.show();
    openMobileNav();
}

/*Search버튼을 눌렀을 때의 화면*/
function showSearchMenu() {
    nav_menu.hide();
    search_menu.show();
    searchBtn.show();
    main_menu.hide();
    menuBtn.show();
    searchBtn.hide();
    closeBtn.eq(0).show();
    closeBtn.eq(1).hide();
    shadow.show();

}

/* 닫기 버튼을 눌렀을 때 */
function closeMenu() {
    nav_menu.hide();
    search_menu.hide();
    main_menu.show();
    menuBtn.show();
    searchBtn.show();
    closeBtn.hide();
    shadow.hide();
    closeMobileNav();
}

menuBtn.click(showMenu);
searchBtn.click(showSearchMenu);
closeBtn.click(closeMenu);


/* mobile nav */
let mobileNavList = $(".mobileNavList");
let mobileNavListUl = $(".mobileNavList ul");
let mobileNavBtn = $(".mobileNav .hamburger");
let mobileNavCloseBtn = $(".mobileNav .btn-close");
let menuHidden = $(".menu-hidden");
let productNav = $(".productNav.mobileVer");

mobileNavList.hide();
mobileNavCloseBtn.hide();
menuHidden.hide();

function openMobileNav() {
    mobileNavList.show();
    mobileNavBtn.hide();
    mobileNavCloseBtn.show();
    productNav.hide();
    $(".fixedSectionNavM").addClass("back-none");
    $(".mobileNav").addClass("back-none");
    shadow.show();
    showMenu();
}

function closeMobileNav() {
    mobileNavList.hide();
    mobileNavBtn.show();
    mobileNavCloseBtn.hide();
    productNav.show();
    $(".fixedSectionNavM").removeClass("back-none");
    $(".mobileNav").removeClass("back-none");
    shadow.hide();
    closeMenu();
}

/* mobile nav - toggle */
mobileNavListUl.click(function () {
    let tg = $(this);
    let i = tg.index();

    mobileNavListUl.eq(i - 1).find(menuHidden).toggle();
    mobileNavListUl.eq(i - 1).find($(".arrow-down")).toggleClass("arrow-active");

})

mobileNavBtn.click(openMobileNav);
mobileNavCloseBtn.click(closeMobileNav);

/* footer *******************/
/* withNeedINmobileBtn */
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
/*-------------------------------------------------------------*/


/* login *********************/
/* login 모달 열고 닫기 */
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
loginBtn.click(function () {
    loginModal.show();
    loginBox.addClass("animate__animated animate__fadeInDown");
    loginBox.show();
    signUpBox.hide();
    $('body').css('overflow', 'hidden');
});

/* 회원가입 모달 열기 */
signUpBtn.click(function () {
    loginModal.show();
    loginBox.hide();
    signUpBox.addClass("animate__animated animate__fadeIn");
    signUpBox.show();
    $('body').css('overflow', 'hidden');
});

logincloseBtn.click(function () {
    loginModal.hide();
    $('body').css('overflow', 'auto');
});

signUpcloseBtn.click(function () {
    signUpBox.addClass("animate__animated animate__fadeInDown");
    signUpBox.hide();
    loginModal.hide();
    $('body').css('overflow', 'auto');
});
/*-------------------------------------------------------------*/


/* validation **********************/
function checkLogin() {
    var form = document.loginForm;
    let pw = form.pw.value;

    /* 아이디 section */
    if (!form.id.value) {
        alert("아이디를 입력해주세요");
        form.id.focus();
        return false;
    }

    if (!form.pw.value) {
        alert("패스워드를 입력해주세요");
        form.id.focus();
        return false;
    }

    form.submit();

}
