function createSnowfallEffect() {
    const imgURL = '/assets/images/hoadao-anonyviet.com.png';
    const colorSnow = '#fff';
    const snowDistance = 'windowheight'; // 'windowheight' hoặc 'pageheight'
    const hideSnowTime = 0; // Đặt thời gian ẩn tuyết, 0 để không ẩn

    let no = window.matchMedia('only screen and (max-width: 767px)').matches ? 10 : 20;
    let docWidth = 800;
    let docHeight = 600;

    // Kiểm tra tương thích trình duyệt
    const isIE = !!document.all;
    const isNS6 = document.getElementById && !document.all;

    const dx = [], xp = [], yp = [], am = [], stx = [], sty = [];

    // Xác định kích thước tài liệu
    function getDocSize() {
        if (isNS6) {
            docWidth = window.innerWidth - 10;
            docHeight = snowDistance === 'windowheight' ? window.innerHeight : document.body.offsetHeight;
        } else if (isIE) {
            const docElem = document.compatMode && document.compatMode !== 'BackCompat' ? document.documentElement : document.body;
            docWidth = docElem.clientWidth - 10;
            docHeight = snowDistance === 'windowheight' ? docElem.clientHeight : docElem.scrollHeight;
        }
    }

    // Tạo các bông tuyết
    for (let i = 0; i < no; i++) {
        dx[i] = 0;
        xp[i] = Math.random() * (docWidth - 50);
        yp[i] = Math.random() * docHeight;
        am[i] = Math.random() * 20;
        stx[i] = 0.02 + Math.random() / 10;
        sty[i] = 0.7 + Math.random();

        const snowDiv = document.createElement('div');
        snowDiv.id = 'dot' + i;
        snowDiv.style.position = 'fixed';
        snowDiv.style.zIndex = 99 + i;
        snowDiv.style.visibility = 'visible';
        snowDiv.style.pointerEvents = 'none';
        snowDiv.style.width = '15px';

        const snowImg = document.createElement('img');
        snowImg.src = imgURL;
        snowImg.alt = 'snowflake';
        snowImg.style.fontSize = '18px';
        snowImg.style.color = colorSnow;

        snowDiv.appendChild(snowImg);
        document.body.appendChild(snowDiv);
    }

    // Hiệu ứng rơi tuyết
    function snowFall() {
        getDocSize();
        for (let i = 0; i < no; i++) {
            yp[i] += sty[i];
            if (yp[i] > docHeight - 50) {
                xp[i] = Math.random() * (docWidth - am[i] - 30);
                yp[i] = 0;
                stx[i] = 0.02 + Math.random() / 10;
                sty[i] = 0.7 + Math.random();
            }
            dx[i] += stx[i];
            const snowDot = document.getElementById('dot' + i);
            snowDot.style.top = yp[i] + 'px';
            snowDot.style.left = xp[i] + am[i] * Math.sin(dx[i]) + 'px';
        }
        requestAnimationFrame(snowFall);
    }

    // Ẩn tuyết
    function hideSnow() {
        for (let i = 0; i < no; i++) {
            document.getElementById('dot' + i).style.visibility = 'hidden';
        }
    }

    // Bắt đầu hiệu ứng
    if (isIE || isNS6) {
        snowFall();
        if (hideSnowTime > 0) {
            setTimeout(hideSnow, hideSnowTime * 1000);
        }
    }
}

// Gọi hàm để tạo hiệu ứng
createSnowfallEffect();
