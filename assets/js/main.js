function isTetDate() {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("vi-u-ca-lunar").format(date);
    return /^(1|2|3|4)\/(1|13)$/.test(formattedDate);
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function toggleTopNav() {
    const topNav = document.getElementById("myTopnav");
    topNav.className = topNav.className === "topnav" ? "topnav responsive" : "topnav";
  }

  function shouldHideDivOnSmallScreens() {
    return window.innerWidth < 600;
  }

  function isRelative() {
    return true;
  }

  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  function isHomePage() {
    return window.location.pathname === "/";
  }

  if (window.location.hostname !== "localhost") {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    const searchBox = document.getElementById("searchBox");
    if (searchBox) {
      searchBox.style.display = "block";
    }
  }

  function checkDevice() {
    return window.innerWidth < 768 || window.orientation !== undefined;
  }

  const navMenu = document.getElementById("nav-menu");

  function consentGrantedAdStorage() {
    gtag("consent", "update", { ad_storage: "granted" });
  }

  function loadFacebookSDK() {
    window.fbAsyncInit = function() {
      FB.init({ xfbml: true, version: "v3.2" });
    };
    const script = document.createElement("script");
    script.id = "facebook-jssdk";
    script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
    document.getElementsByTagName("script")[0].parentNode.insertBefore(script, null);
  }

  function loadFacebookSDKLoad() {
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0&appId=2086804534891096&autoLogAppEvents=1";
    script.nonce = "y8xxA5Uo";
    document.head.appendChild(script);
  }

  function handleChatButtonClick() {
    const chatButton = document.getElementById("chat-button");
    if (chatButton) {
      chatButton.style.display = "none";
      const elfsightDiv = document.createElement("div");
      elfsightDiv.classList.add("elfsight-app-d15cd726-3619-4d26-9eeb-d7661922dbe1");
      elfsightDiv.setAttribute("data-elfsight-app-lazy", "");
      document.body.appendChild(elfsightDiv);
    }
  }


  let chatButtonAuto = true;

  function checkScrollAndClick() {
    if (chatButtonAuto) {
      const replaceDay = document.getElementById("replace-day");
      const chatButton = document.getElementById("chat-button");
      if (replaceDay && chatButton && replaceDay.getBoundingClientRect().top <= window.innerHeight) {
        chatButton.click();
        handleChatButtonClick();
        chatButtonAuto = false;
      }
    }
  }

  const pageProgressBar = document.querySelector(".progress-bar");
  const scrollContainer = () => document.documentElement || document.body;

  function gtag() {
    dataLayer.push(arguments);
  }

  document.addEventListener("scroll", () => {
    const scrollTop = scrollContainer().scrollTop;
    const scrollHeight = scrollContainer().scrollHeight;
    const clientHeight = scrollContainer().clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    pageProgressBar.style.width = `${scrollPercentage}%`;
    checkScrollAndClick();
  });

  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());
  gtag("config", "TAG_ID");
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied"
  });

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(function(img) {
      if (!img.getAttribute("loading")) {
        img.classList.add("lazyload");
        img.setAttribute("loading", "lazy");
      }
      if (!img.alt || img.alt.trim() === "") {
        img.alt = "anhhangxom.xyz";
      }
      img.addEventListener("load", function() {
        img.style.width = `${img.width}px`;
        img.style.height = `${img.height}px`;
      });
    });
    (function(d, t, a) {
      const script = d.createElement(t);
      const firstScript = d.getElementsByTagName(t)[0];
      script.async = true;
      script.src = a;
      firstScript.parentNode.insertBefore(script, firstScript);
    })(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/a439f78ba77fd2f9e892d4fa8/f37836a9f614fff78ac17eacf.js");
  });
  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});
