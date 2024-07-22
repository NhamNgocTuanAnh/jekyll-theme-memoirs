function loadScript() {
    var t = function() {
        var t, a, e, n, c = "script";
        t = window, a = document;
        t.ym = t.ym || function() {
            (t.ym.a = t.ym.a || []).push(arguments)
        };
        t.ym.l = 1 * new Date();
        e = a.createElement(c);
        n = a.getElementsByTagName(c)[0];
        e.async = 1;
        e.src = "https://mc.yandex.ru/metrika/tag.js";
        n.parentNode.insertBefore(e, n);
        ym(95513605, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
        });
    };
    if (window.addEventListener) {
        window.addEventListener("load", t, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", t);
    }
}

loadScript();

function isTetDate() {
    let t = new Date();
    let e = new Intl.DateTimeFormat("vi-u-ca-lunar").format(t);
    return /(1|2|3|4)\/(1|13)$/.test(e);
}

function myFunctionOpenTopNav() {
    var a = document.getElementById("myTopnav");
    if (a.className === "topnav") {
        a.className += " responsive";
    } else {
        a.className = "topnav";
    }
}

function hideDivOnSmallScreens() {
    return window.innerWidth < 600; // Example condition for small screens
}

function isRelative() {
    // Example condition for 'isRelative'
    return true;
}

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (hideDivOnSmallScreens() && isRelative() && isMobileDevice()) {
    document.querySelector(".topnav").style.display = "block";
}

if (isMobileDevice()) {
    document.getElementById("url-album").setAttribute("href", "https://www.instagram.com/anhhangxom.daily/");
}

function isSlowCPU() {
    let e = localStorage.getItem("interfaceState");
    if (!e || e === "savemode") {
        var t = new Date().getTime();
        window.onload = function() {
            var e = document.querySelector(".featured-image");
            if (e) {
                e.addEventListener("load", function() {
                    var preloader = document.getElementById("ctn-preloader");
                    if (preloader && preloader.classList.contains("loaded")) {
                        preloader.queue(function() {
                            this.remove();
                        });
                    }
                });
            }
            return new Date().getTime() - t > 8000;
        };
    }
}

const currentState = localStorage.getItem('interfaceState');

function isHomePage() {
    return window.location.pathname === "/";
}

if (isMobileDevice() && isHomePage()) {
    const b = localStorage.getItem("interfaceState");
    if (isSlowCPU() || !b || b === "savemode") {
        localStorage.setItem("interfaceState", "savemode");
    }
} else {
    if (!isMobileDevice()) {
        localStorage.setItem("interfaceState", "normalmode");
    }
}

const interfaceState = localStorage.getItem("interfaceState");

function preLoader() {
    var e = function() {
        $("#ctn-preloader").addClass("loaded");
        if ($("#ctn-preloader").hasClass("loaded")) {
            $("#preloader").queue(function() {
                $(this).remove();
            });
        }
    };
    $(window).on("load", e);
    setTimeout(e, 1000);
}

preLoader();

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
const pageProgressBar = document.querySelector(".progress-bar"),
    scrollContainer = () => document.documentElement || document.body;
document.addEventListener("scroll", () => {
    let e = scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight) * 100;
    pageProgressBar.style.width = `${e}%`;
    checkScrollAndClick();
});


// window.addEventListener("scroll", checkScrollAndClick);


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
