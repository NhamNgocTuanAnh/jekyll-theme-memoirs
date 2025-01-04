// Lấy canvas và ngữ cảnh vẽ
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

// Khởi tạo kích thước canvas
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
initCanvas();
window.addEventListener("resize", initCanvas);

// Lớp hạt pháo hoa
class Particle {
    constructor(x, y, color) {
        this.reset(x, y, color);
    }

    reset(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color || colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.life = Math.random() * 30 + 50;
        this.active = true;
    }

    update() {
        if (this.life > 0 && this.size > 0.1) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.size *= 0.96;
            this.life--;
        } else {
            this.active = false;
        }
    }

    draw() {
        if (this.active) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
}

// Biến và danh sách pháo hoa
const particlesPool = [];
const activeParticles = [];
const colors = ["#ff5733", "#33ff57", "#5733ff", "#f4ff33", "#ff33e3"];

// Hàm tạo pháo hoa
function createFireworks(x, y) {
    for (let i = 0; i < 50; i++) {
        let particle = particlesPool.pop();
        if (!particle) {
            particle = new Particle(x, y);
        } else {
            particle.reset(x, y);
        }
        activeParticles.push(particle);
    }
}

// Hàm hoạt hình
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    activeParticles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    // Lọc và đưa các hạt không còn hoạt động về danh sách tái sử dụng
    for (let i = activeParticles.length - 1; i >= 0; i--) {
        if (!activeParticles[i].active) {
            particlesPool.push(activeParticles[i]);
            activeParticles.splice(i, 1);
        }
    }

    requestAnimationFrame(animate);
}

// Gắn sự kiện tạo pháo hoa khi di chuột
document.addEventListener("mousemove", (e) => {
    createFireworks(e.clientX, e.clientY);
});

// Bắt đầu hoạt hình
animate();
