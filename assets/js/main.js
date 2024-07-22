function loadScript(){var t=function(){var t,a,e,n,c="script";t=window,a=document,t.ym=t.ym||function(){(t.ym.a=t.ym.a||[]).push(arguments)},t.ym.l=1*new Date,e=a.createElement(c),n=a.getElementsByTagName(c)[0],e.async=1,e.src="https://mc.yandex.ru/metrika/tag.js",n.parentNode.insertBefore(e,n),ym(95513605,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})};window.addEventListener?window.addEventListener("load",t,!1):window.attachEvent&&window.attachEvent("onload",t)}loadScript();            function isTetDate(){let t=new Date,e=new Intl.DateTimeFormat("vi-u-ca-lunar").format(t);return/(1|2|3|4)\/(1|13)$/.test(e)}
function myFunctionOpenTopNav(){var a=document.getElementById("myTopnav");"topnav"===a.className?a.className+=" responsive":a.className="topnav"}hideDivOnSmallScreens()&&isRelative&&isMobileDevice()&&(document.querySelector(".topnav").style.display="block");
    isMobileDevice()&&document.getElementById("url-album").setAttribute("href","https://www.instagram.com/anhhangxom.daily/");    function isSlowCPU(){let e=localStorage.getItem("interfaceState");if(!e||e&&"savemode"==e){var t=new Date().getTime();window.onload=function(){var e;document.querySelector(".featured-image").addEventListener("load",function(){var e=document.getElementById("ctn-preloader");e&&e.classList.contains("loaded")&&document.getElementById("ctn-preloader").queue(function(){this.remove()})});return new Date().getTime()-t>8e3}}};
    const currentState = localStorage.getItem('interfaceState');
        function isHomePage(){return"/"===window.location.pathname}if(isMobileDevice()&&isHomePage()){const b=localStorage.getItem("interfaceState");(isSlowCPU()||!b||b&&"savemode"==b)&&(localStorage.setItem("interfaceState","savemode"))}else isMobileDevice()||localStorage.setItem("interfaceState","nomalmode");
        const interfaceState=localStorage.getItem("interfaceState");function preLoader(){var e=function(){$("#ctn-preloader").addClass("loaded"),$("#ctn-preloader").hasClass("loaded")&&$("#preloader").queue(function(){$(this).remove()})};$(window).on("load",e),setTimeout(e,1e3)}preLoader();

        const isLocalhost = "localhost" === window.location.hostname;
if (!isLocalhost) {
    let t = document.createElement("script");
    t.src = "https://static.elfsight.com/platform/platform.js";
    t.defer = true;
    document.body.appendChild(t);
    let e = document.getElementById("searchBox");
    if (e) {
        e.style.display = "block";
    }
}

function checkDevice() {
    return window.innerWidth < 768 || typeof window.orientation !== "undefined";
}

const navMenu = document.getElementById("nav-menu");
if (!checkDevice() && !isMobileDevice()) {
    navMenu.style.display = "none";
}

function consentGrantedAdStorage() {
    gtag('consent', 'update', {
        'ad_storage': 'granted'
    });
}

window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'TAG_ID');

// Set default consent to 'denied'
gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
});

var chatButtonAuto = true;
function checkScrollAndClick() {
    if (chatButtonAuto) {
        let t = document.getElementById("replace-day"),
            c = document.getElementById("chat-button");
        if (t && c) {
            let e = t.getBoundingClientRect();
            if (e.top <= window.innerHeight) {
                c.click();
                chatButtonAuto = false;
            }
        }
    }
}
checkScrollAndClick();
setTimeout(() => {
    checkScrollAndClick();
}, 10000);
window.addEventListener("scroll", checkScrollAndClick);

function loadFacebookSDK() {
    window.fbAsyncInit = function () {
        FB.init({
            xfbml: true,
            version: "v3.2"
        });
    };
    var e, o = document.getElementsByTagName("script")[0];
    if (!document.getElementById("facebook-jssdk")) {
        e = document.createElement("script");
        e.id = "facebook-jssdk";
        e.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        o.parentNode.insertBefore(e, o);
    }
}

function loadFacebookSDKLoad() {
    var e = document.createElement("script");
    e.async = true;
    e.defer = true;
    e.crossOrigin = "anonymous";
    e.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0&appId=2086804534891096&autoLogAppEvents=1";
    e.nonce = "y8xxA5Uo";
    document.head.appendChild(e);
}

function handleChatButtonClick() {
    var chatButton = document.getElementById("chat-button");
    if (chatButton) {
        chatButton.style.display = "none";
        function runRandomCode() {
            if (Math.random() < 0.5) {
                var e = document.createElement("script");
                e.async = true;
                e.defer = true;
                e.crossOrigin = "anonymous";
                e.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0";
                e.nonce = "JekfmCeX";
                document.body.appendChild(e);
                setTimeout(loadFacebookSDKLoad, 2000);
            } else {
                let d = document.createElement("div");
                d.classList.add("elfsight-app-d15cd726-3619-4d26-9eeb-d7661922dbe1");
                d.dataset.elfsightAppLazy = "";
                document.body.appendChild(d);
            }
        }
    }
}

$(window).on("scroll", function () {
    if (window.scrollY > window.outerHeight) {
        $("#scrollToTop").addClass("active");
        document.getElementById('next-post-active').onclick = function () {
            window.location.replace(g || "{{ site.baseurl }}");
        };
        document.getElementById("scrollToTop").style.display = "block";
        if (!hideDivOnSmallScreens() && !isRelative && isMobileDevice()) {
            document.querySelector('.topnav').style.display = 'block';
        } else {
            document.querySelector('.topnav').style.display = 'none';
        }
    } else {
        $("#scrollToTop").removeClass("active");
        document.getElementById("scrollToTop").style.display = "none";
        document.querySelector('.topnav').style.display = 'none';
    }
    $.each($("img"), function () {
        if ($(this).attr("data-src") && $(this).offset().top < $(window).scrollTop() + $(window).height() + 100) {
            var t = $(this).data("src");
            $(this).attr("src", t);
            $(this).removeAttr("data-src");
        }
    });
});

$("#scrollToTopButton").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
});

const pageProgressBar = document.querySelector(".progress-bar"),
    scrollContainer = () => document.documentElement || document.body;
document.addEventListener("scroll", () => {
    let e = scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight) * 100;
    pageProgressBar.style.width = `${e}%`;
});

$(document).ready(function () {
    $("img[loading='lazy']").each(function () {
        if (!$(this).hasClass("img-thumb") && !$(this).hasClass("author-thumb")) {
            var a = $(this).parent("a");
            if (a.length && !a.attr("data-fancybox")) {
                $(this).wrap("<a href='" + $(this).attr("src") + "' data-fancybox='gallery' data-caption='source: imgur.com'></a>");
            }
        }
    });
    $("a[data-fancybox='gallery']").fancybox({});
});

var sidebar = document.createElement("div");
sidebar.className = "sidebar";
var navIcon = document.createElement("div");
navIcon.className = "nav-icon";
var hamburgerBar = document.createElement("div");
hamburgerBar.className = "hamburger-bar";
navIcon.appendChild(hamburgerBar);
var blackoverNav = document.createElement("div");
blackoverNav.id = "blackover-nav";
blackoverNav.className = "blackover";
var menu = document.createElement("nav");
menu.id = "menu";
var ul = document.createElement("ul");
var h3 = document.createElement("h3");
h3.textContent = "Mục lục";
var menuItems = [
    { text: "Trang chủ", iconClass: "fa fa-home", link: "{{ site.baseurl }}/" },
    { text: "Tìm kiếm", iconClass: "fa fa-search-plus", link: "{{ site.baseurl }}/categories" },
    { text: "My ảnh", iconClass: "fa fa-camera-retro", link: "https://www.instagram.com/anhhangxom.daily/" },
    { text: "Viết bài", iconClass: "fa fa-bullhorn", link: "{{ site.baseurl }}/them-bai-viet" },
    { text: "About me", iconClass: "fa fa-address-book", link: "{{ site.baseurl }}/about-me" }
];
for (var i = 0; i < menuItems.length; i++) {
    var e = document.createElement("li");
    var a = document.createElement("a");
    var r = document.createElement("i");
    r.id = "icon-dark";
    r.className = menuItems[i].iconClass;
    a.href = menuItems[i].link;
    a.appendChild(r);
    a.innerHTML += "<span>|| " + menuItems[i].text + "</span>";
    e.appendChild(a);
    ul.appendChild(e);
}
menu.appendChild(h3);
menu.appendChild(ul);

var idsidebarcreater = document.getElementById("sidebarcreater");
if (idsidebarcreater) {
    idsidebarcreater.appendChild(sidebar);
    idsidebarcreater.appendChild(navIcon);
    idsidebarcreater.appendChild(blackoverNav);
    idsidebarcreater.appendChild(menu);
}

const version = Math.floor(1e6 * Math.random());
const head = document.querySelector("head");
const currentUrl = new URL(window.location.href);
currentUrl.searchParams.set("v", version);
const linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.type = "text/css";
linkElement.href = currentUrl.toString();
head.appendChild(linkElement);
