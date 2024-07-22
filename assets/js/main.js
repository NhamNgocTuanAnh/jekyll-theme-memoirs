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
            let d = document.createElement("div");
            d.classList.add("elfsight-app-d15cd726-3619-4d26-9eeb-d7661922dbe1");
            d.setAttribute('data-elfsight-app-lazy', '');
            document.body.appendChild(d);
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
                handleChatButtonClick();
                chatButtonAuto = false;
            }
        }
    }
}
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
document.addEventListener("DOMContentLoaded", function() {
    // Lazy load images and set default alt attribute if not present
    document.querySelectorAll("img").forEach(function(img) {
        if (!img.getAttribute("loading")) {
            img.classList.add("lazyload");
            img.setAttribute("loading", "lazy");
        }
        if (!img.alt || img.alt.trim() === "") {
            img.alt = "anhhangxom.xyz";
        }
    });

    // Adjust image dimensions on load
    document.querySelectorAll("img").forEach(function(img) {
        img.addEventListener("load", function() {
            img.style.width = img.width + "px";
            img.style.height = img.height + "px";
        });
    });

    // Load ElfSight script if element is in view
    const loadTriggerLoadElfSightScript = true;
    const triggerLoadElfSightScript = document.getElementById("triggerLoadElfSightScript");

    function isScrolledIntoView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function choiseElauthor(metaTag) {
        if (metaTag) {
            return getRandomElement(["elfsight-app-4bab93fa-028b-4ab6-a095-3bdcecb91616", "elfsight-app-fae669a8-2109-47be-8003-7767f2c82a5a"]);
        } else {
            return getRandomElement([
                "elfsight-app-58eefcb9-7b01-4eda-a0ed-b18b31f127fc",
                "elfsight-app-5251747b-b6d4-4dd8-83b2-d4c39ed9caea",
                "elfsight-app-17b7491c-45aa-4619-a175-885d1747ec14",
                "elfsight-app-83c3bf06-1d94-48ba-88c4-e05887ca6f4f"
            ]);
        }
    }

    function loadElfSightScript() {
        const metaTagAu = document.querySelector('meta[name="author"][content="minh"]');
        const currentUrl = window.location.href;

        if (currentUrl.includes("localhost") || currentUrl.includes("127.0.0.1")) {
            console.log("Đang chạy localhost, không thêm lệnh script.");
        } else {
            const div = document.createElement("div");
            div.className = choiseElauthor(metaTagAu);
            div.setAttribute("data-elfsight-app-lazy", "");
            div.style.textAlign = "center";

            const instaShow2 = document.getElementById("instaShow2");
            if (instaShow2) {
                instaShow2.appendChild(div);
            } else {
                console.error('Không tìm thấy thẻ div có id "instaShow2".');
            }

            const script = document.createElement("script");
            script.src = "https://static.elfsight.com/platform/platform.js";
            console.log("Tải loadElfSightScript https://static.elfsight.com/platform/platform.js");
            script.setAttribute("data-use-service-core", "");
            script.defer = true;
            document.head.appendChild(script);
            loadTriggerLoadElfSightScript = false;
        }
    }

    window.addEventListener('scroll', function() {
        if (isScrolledIntoView(triggerLoadElfSightScript) && loadTriggerLoadElfSightScript) {
            loadElfSightScript();
        }
    });

    // Add external script asynchronously
    (function (d, s, src) {
        const script = d.createElement(s);
        const firstScript = d.getElementsByTagName(s)[0];
        script.async = true;
        script.src = src;
        firstScript.parentNode.insertBefore(script, firstScript);
    })(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/a439f78ba77fd2f9e892d4fa8/f37836a9f614fff78ac17eacf.js");

    // Add snowflake styles during specific months
    if ([11, 12].includes(new Date().getMonth() + 1)) {
        const style = document.createElement("style");
        style.type = "text/css";
        document.head.appendChild(style);
        style.innerHTML = `
        .snowflake {
            color: #fff;
            font-size: 1em;
            font-family: Arial, sans-serif;
            text-shadow: 0 0 5px #000;
            position: fixed;
            top: -10%;
            z-index: 9999;
            -webkit-user-select: none;
            user-select: none;
            cursor: default;
            animation-name: snowflakes-shake;
            animation-duration: 3s;
            animation-timing-function: ease-in-out;
        }
        .snowflake, .snowflake .inner {
            animation-iteration-count: infinite;
            animation-play-state: running;
        }
        @keyframes snowflakes-fall {
            0% { transform: translateY(0); }
            100% { transform: translateY(110vh); }
        }
        @keyframes snowflakes-shake {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(80px); }
        }
        .snowflake .inner {
            animation-duration: 10s;
            animation-name: snowflakes-fall;
            animation-timing-function: linear;
        }
        .snowflake:nth-of-type(0) { left: 1%; animation-delay: 0s; }
        .snowflake:nth-of-type(0) .inner { animation-delay: 0s; }
        .snowflake:first-of-type { left: 10%; animation-delay: 1s; }
        .snowflake:first-of-type .inner, .snowflake:nth-of-type(8) .inner { animation-delay: 1s; }
        .snowflake:nth-of-type(2) { left: 20%; animation-delay: .5s; }
        .snowflake:nth-of-type(2) .inner, .snowflake:nth-of-type(6) .inner { animation-delay: 6s; }
        .snowflake:nth-of-type(3) { left: 30%; animation-delay: 2s; }
        .snowflake:nth-of-type(11) .inner, .snowflake:nth-of-type(3) .inner { animation-delay: 4s; }
        .snowflake:nth-of-type(4) { left: 40%; animation-delay: 2s; }
        .snowflake:nth-of-type(10) .inner, .snowflake:nth-of-type(4) .inner { animation-delay: 2s; }
        .snowflake:nth-of-type(5) { left: 50%; animation-delay: 3s; }
        .snowflake:nth-of-type(5) .inner { animation-delay: 8s; }
        .snowflake:nth-of-type(6) { left: 60%; animation-delay: 2s; }
        .snowflake:nth-of-type(7) { left: 70%; animation-delay: 1s; }
        .snowflake:nth-of-type(7) .inner { animation-delay: 2.5s; }
        .snowflake:nth-of-type(8) { left: 80%; animation-delay: 0s; }
        .snowflake:nth-of-type(9) { left: 90%; animation-delay: 1.5s; }
        .snowflake:nth-of-type(9) .inner { animation-delay: 3s; }
        .snowflake:nth-of-type(10) { left: 25%; animation-delay: 0s; }
        .snowflake:nth-of-type(11) { left: 65%; animation-delay: 2.5s; }
        `;
    } else {
        document.getElementById("snowCall").style.display = "none";
    }

    // Show hidden div on scroll
    const triggerDiv = document.getElementById("triggerDiv");
    const hiddenDiv = document.getElementById("hiddenDiv");

    window.addEventListener("scroll", function handleScroll() {
        const rect = triggerDiv.getBoundingClientRect();
        if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
            hiddenDiv.style.display = "block";
            const footerElements = document.getElementsByClassName("footer");
            for (let i = 0; i < footerElements.length; i++) {
                footerElements[i].style.display = "none";
            }
        }
    });
});
