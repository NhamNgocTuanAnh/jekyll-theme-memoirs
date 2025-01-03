const colors = ["#FF0000", "#006400", "#FFFFFF", "#FFD700", "#D2691E"], snowflakes = document.querySelectorAll(".snowflake"); function applyRandomStyles(e) { getRandomBoolean() && (e.style.color = getRandomColor()), getRandomBoolean() && (e.style.fontSize = getRandomFontSize()) } function getRandomColor() { let e = Math.floor(Math.random() * colors.length); return colors[e] } function getRandomFontSize() { return `${1.5 * Math.random() + 1}rem` } function getRandomBoolean() { return .5 > Math.random() } function loadSnowEffect() { var e = document.createElement("link"); e.rel = "stylesheet", e.type = "text/css", e.href = "../../assets/css/snow.css", document.head.appendChild(e); var n = createSnowContainer(), t = document.getElementById("snowCall"); t ? t.innerHTML = n.outerHTML : document.body.appendChild(n) } function createSnowContainer() { var e = document.createElement("div"); e.className = "snowflakes", e.setAttribute("aria-hidden", "true"); for (var n = 0; n < 12; n++) { var t = createSnowflake(); e.appendChild(t) } return e } function createSnowflake() { var e = document.createElement("div"); e.className = "snowflake"; var n = document.createElement("div"); return n.className = "inner", n.textContent = "❅", n.style.color = getRandomColor(), n.style.fontSize = getRandomFontSize(), e.appendChild(n), e } document.addEventListener("DOMContentLoaded", function () { var e = new Date().getMonth(); (11 === e || 10 === e) && (loadSnowEffect()) });
let isScriptEnabled=!0;const triggerElement=document.getElementById("triggerLoadElfSightScript");const getRandomElement=(arr)=>arr[Math.floor(Math.random()*arr.length)];const isElementInViewport=(el)=>{if(!el)return!0;const rect=el.getBoundingClientRect();return rect.top<window.innerHeight&&rect.bottom>=0};const insertDiv=(targetId,divId)=>{const paragraphs=document.querySelectorAll("#articlePost section p");if(paragraphs.length===0){console.error("Không tìm thấy thẻ <p> nào trong section");return}
  const randomParagraph=paragraphs[Math.floor(Math.random()*paragraphs.length)];const newDiv=document.createElement("div");newDiv.id=divId;const instaShowDiv=document.createElement("div");instaShowDiv.id="instaShow2";randomParagraph.after(newDiv,instaShowDiv)};insertDiv("main-content-content","triggerLoadElfSightScript");const instaShowDiv=document.getElementById("instaShow2");if(instaShowDiv){if(isElementInViewport(triggerElement)&&isScriptEnabled){const authorMeta=document.querySelector('meta[name="author"][content="minh"]');const locationUrl=window.location.href;if(!locationUrl.includes("localhost")&&!locationUrl.includes("127.0.0.1")){const appIds=authorMeta?["elfsight-app-4bab93fa-028b-4ab6-a095-3bdcecb91616","elfsight-app-fae669a8-2109-47be-8003-7767f2c82a5a"]:["elfsight-app-58eefcb9-7b01-4eda-a0ed-b18b31f127fc","elfsight-app-5251747b-b6d4-4dd8-83b2-d4c39ed9caea"];const randomAppId=getRandomElement(appIds);const newDiv=document.createElement("div");newDiv.className=randomAppId;newDiv.setAttribute("data-elfsight-app-lazy","");newDiv.style.textAlign="center";instaShowDiv.appendChild(newDiv)}else{console.log("Đang chạy localhost, không thêm lệnh script.")}}}else{console.error('Không tìm thấy thẻ div có id "instaShow2".')}(()=>{const script=document.createElement("script");script.src="https://static.elfsight.com/platform/platform.js";script.setAttribute("data-use-service-core","");script.defer=!0;document.head.appendChild(script);console.log("Tải loadElfSightScript https://static.elfsight.com/platform/platform.js")})();const bottomOverlay=document.getElementById("bottom-overlay");const closeBtn=document.getElementById("read-more-btn-hell");closeBtn.addEventListener("click",()=>{bottomOverlay.style.display="none"});  function handleClickReadMoreBtn(){const readMoreBtn=document.getElementById("read-more-btn-hell");if(readMoreBtn){readMoreBtn.style.display="none"}
  for(;;){const overlays=document.querySelectorAll(".content-overlay");if(overlays){if(overlays.length>0){for(const overlay of overlays){overlay.style.maxHeight="none"}};window.scrollTo({top:456,behavior:"smooth"});break}}
  if (typeof ga === "function") {
    ga("send", "event", "read-new", "read-more", "{{ page.url }}", 10);
}

document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.getElementById("read-more-btn-hell");
    if (readMoreBtn) {
        readMoreBtn.addEventListener("click", () => {
            readMoreBtn.style.display = "none";
            const overlays = document.querySelectorAll(".content-overlay");
            overlays.forEach(overlay => {
                overlay.style.maxHeight = "none";
            });
            window.scrollTo({ top: 456, behavior: "smooth" });

            if (typeof ga === "function") {
                ga("send", "event", "read-new", "read-more", "{{ page.url }}", 10);
            }
        });
    }
});
