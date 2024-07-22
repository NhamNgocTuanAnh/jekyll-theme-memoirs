const isLocalhost="localhost"===window.location.hostname;if(!isLocalhost){let t=document.createElement("script");t.src="https://static.elfsight.com/platform/platform.js",t.defer=!0,document.body.appendChild(t);let e=document.getElementById("searchBox");e&&(e.style.display="block")};function checkDevice(){return!!(window.innerWidth<768)||void 0!==window.orientation};const navMenu=document.getElementById("nav-menu");checkDevice()||isMobileDevice()||(navMenu.style.display="none");      function consentGrantedAdStorage() {
    gtag('consent', 'update', {
      'ad_storage': 'granted'
    });
  };      window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date());
  gtag('config', 'TAG_ID');    // Define dataLayer and the gtag function.
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Set default consent to 'denied' as a placeholder
  // Determine actual values based on your own requirements
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });var chatButtonAuto=!0;function checkScrollAndClick(){if(chatButtonAuto){let t=document.getElementById("replace-day"),c=document.getElementById("chat-button");if(t&&c){let e=t.getBoundingClientRect();e.top<=window.innerHeight&&(c.click(),chatButtonAuto=!1)}}}checkScrollAndClick(),setTimeout(()=>{checkScrollAndClick()},1e4),window.addEventListener("scroll",checkScrollAndClick);function loadFacebookSDK(){window.fbAsyncInit=function(){FB.init({xfbml:!0,version:"v3.2"})};var e,o=document.getElementsByTagName("script")[0];document.getElementById("facebook-jssdk")||((e=document.createElement("script")).id="facebook-jssdk",e.src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",o.parentNode.insertBefore(e,o))}function loadFacebookSDKLoad(){var e=document.createElement("script");e.async=!0,e.defer=!0,e.crossorigin="anonymous",e.src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v16.0&appId=2086804534891096&autoLogAppEvents=1",e.nonce="y8xxA5Uo",document.head.appendChild(e)}function handleChatButtonClick(){var chatButton = document.getElementById("chat-button");
    if (chatButton) {
        chatButton.style.display = "none"; function runRandomCode(){if(.5>Math.random()){var e=document.createElement("script");e.async=!0,e.defer=!0,e.crossorigin="anonymous",e.src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0",e.nonce="JekfmCeX",document.body.appendChild(e),setTimeout(loadFacebookSDKLoad,2e3)}else{let d=document.createElement("div");d.classList.add("elfsight-app-d15cd726-3619-4d26-9eeb-d7661922dbe1"),d.dataset.elfsightAppLazy="",document.body.appendChild(d)}}
