var no = 20;
if (matchMedia('only screen and (max-width: 767px)').matches) {
    no = 10        }
let img_url = '/assets/images/hoadao-anonyviet.com.png';
var hidesnowtime = 0;
var color_snow  = '#fff';
var snowdistance = 'windowheight'; // windowheight or pageheight;
var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById && !document.all) ? 1 : 0;
function iecompattest() {
    return (document.compatMode && document.compatMode != 'BackCompat') ? document.documentElement : document.body
}
var dx, xp, yp;
var am, stx, sty;
var i, doc_width = 800, doc_height = 600;
if (ns6up) {
    doc_width = self.innerWidth;
    doc_height = self.innerHeight
} else if (ie4up) {
    doc_width = iecompattest().clientWidth;
    doc_height = iecompattest().clientHeight
}
dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();
for (i = 0; i < no; ++i) {
    dx[i] = 0;
    xp[i] = Math.random() * (doc_width - 50);
    yp[i] = Math.random() * doc_height;
    am[i] = Math.random() * 20;
    stx[i] = 0.02 + Math.random() / 10;
    sty[i] = 0.7 + Math.random();
    if (ie4up || ns6up) {
        if(document.getElementById('content')){
            document.getElementById('content').innerHTML =('<div id="dot'+i+'" style="POSITION:fixed;Z-INDEX:'+(99+i)+';VISIBILITY:visible;TOP:15px;LEFT:15px;pointer-events: none;width:15px"><span style="font-size:18px;color:'+color_snow+'"><img src="'+img_url+'" alt=""></span></div>');
        }
    }
}
function snowIE_NS6() {
    doc_width = ns6up ? window.innerWidth - 10 : iecompattest().clientWidth - 10;
    doc_height = (window.innerHeight && snowdistance == 'windowheight') ? window.innerHeight : (ie4up && snowdistance == 'windowheight') ? iecompattest().clientHeight : (ie4up && !window.opera && snowdistance == 'pageheight') ? iecompattest().scrollHeight : iecompattest().offsetHeight;
    for (i = 0; i < no; ++i) {
        yp[i] += sty[i];
        if (yp[i] > doc_height - 50) {
            xp[i] = Math.random() * (doc_width - am[i] - 30);
            yp[i] = 0;
            stx[i] = 0.02 + Math.random() / 10;
            sty[i] = 0.7 + Math.random()
        }
        dx[i] += stx[i];
        if( document.getElementById('dot' + i)){
        document.getElementById('dot' + i).style.top = yp[i] + 'px';
        document.getElementById('dot' + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + 'px'
        }
    }
    snowtimer = setTimeout('snowIE_NS6()', 10)
}
function hidesnow() {
    if (window.snowtimer) {
        clearTimeout(snowtimer)
    }
    for (i = 0; i < no; i++){
        if(document.getElementById('dot' + i)){
document.getElementById('dot' + i).style.visibility = 'hidden'
        }
    }

}
if (ie4up || ns6up) {
    snowIE_NS6();
    if (hidesnowtime > 0) setTimeout('hidesnow()', hidesnowtime * 1000)
}
window.addEventListener("load", function() {
    function getValidatedUrl(url) {
        const index = url.indexOf("https://");
        return index !== -1 ? url.slice(index) : url;
    }

    const imageUrl = getValidatedUrl("{{ site.baseurl }}/{{ page.image }}");

    const entryHeader = document.querySelector('.entry-header');
    if (entryHeader) {
        entryHeader.style.display = "block";
    }

    const featuredImageContainer = document.getElementById("idFeaturedImage");
    if (featuredImageContainer) {
        const originalImage = document.querySelector("img.original-image-selector"); // Adjust the selector as needed
        const img = document.createElement("img");
        img.setAttribute("class", "featured-image lazyimg");
        img.setAttribute("src", imageUrl);

        if (originalImage && originalImage.hasAttribute("alt")) {
            img.setAttribute("alt", originalImage.getAttribute("alt"));
        }

        img.onload = function() {
            if (img.hasAttribute("loaded")) {
                img.removeAttribute("loaded");
            }
        };

        featuredImageContainer.appendChild(img);
    }

    // Add Tet elements to the head
    const head = document.head;

    const tetLeft = document.createElement("div");
    tetLeft.setAttribute("class", "tet_left");
    tetLeft.innerHTML = '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb3PBtYvcb0AwzJvp5rDfHAOlC_0BsSevp3we6JTICzZAbrhaLcMtlnOAvCb_6A_LuZfnDSCYUVp5M6a_SSq1tQ825ioZ3H1mkboSV8OA7y-cqo723yZJVuniaCibs715peZlIoVfENoBVvigVfJJDffiAoij6tWFv4Jx3RWIVUcQDN5zeMWweAuCuCw/s16000/left-1.png" alt="AnonyViet-Tet"/>';

    const tetRight = document.createElement("div");
    tetRight.setAttribute("class", "tet_right");
    tetRight.innerHTML = '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmE7w44KuUqFCci75HHT6fo4Snv-s9j8NpP9ERbJhtT9WOasSnDeiDGruspoNUbHQBENce0laVEZZaQc0C-V5pZBPhNgX2ktJprmXpW96EgMHVBBDdbO2UugIYyNY-nXST_nKFcDwDXDiBqM7LZktNIrkgDqQEtdnvYxtt5ZCoV82VNKgSYUIxT1OzYg/s16000/right-1.png" alt="AnonyViet-Tet"/>';

    const tetBottom = document.createElement("div");
    tetBottom.setAttribute("class", "tet_bottom");
    tetBottom.innerHTML = '<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwruFlhClo3FUKNBQtDvqWYiDVOoi-IT7Jy4R11OU5HaOFR2N7CcX5sH4FWQI_GRoVrx4Hd5pVQREJ_QsAjvSA41v25TW0LEGW2jb8s3J2QwCrXp4qsMqdvxUZz9lglGyxL4YQxIbbf17zyqd99Rr28rDzx-foaXJRQ13kQUAblMtlt4U1rKMYbHkn5w/s16000/bottom-1.png" alt="AnonyViet-Tet"/>';

    head.appendChild(tetLeft);
    head.appendChild(tetRight);
    head.appendChild(tetBottom);
});
