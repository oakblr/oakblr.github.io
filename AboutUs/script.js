document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("terminalText");
    const text = el.textContent;
    el.textContent = "";

    let idx = 0;
    let skipping = false;

    // Skip typing on click
    el.addEventListener("click", () => {
        skipping = true;
        el.textContent = text;
    });

    function getDelay(char, nextChars) {
        if (skipping) return 0;
        if (nextChars.startsWith("...")) return 250;
        if (nextChars.trim().startsWith("Done!")) return 180;
        return 20 + Math.random() * 40;
    }

    function type() {
        if (idx < text.length && !skipping) {
            const nextSlice = text.slice(idx, idx + 10); // look ahead for patterns
            el.textContent += text[idx];

            const delay = getDelay(text[idx], nextSlice);

            idx++;
            setTimeout(type, delay);
        }
    }

    type();
    const scrollSpeed = 1;
    let scrollInterval;

    function setupCarousels(containerSelector, direction = 1) {
        const containers = document.querySelectorAll(containerSelector);
        return Array.from(containers).map(container => {
        const carousel = container.querySelector('.carousel');
        carousel.innerHTML += carousel.innerHTML;
        const halfWidth = carousel.scrollWidth / 2;
        if (direction === -1) {
            container.scrollLeft = halfWidth;
        }
        return { container, halfWidth, direction };
        });
    }

    function startAutoScroll() {
        const rightCarousels = setupCarousels('.lazy-scrolling-container.right', 1);
        const leftCarousels  = setupCarousels('.lazy-scrolling-container.left', -1);

        scrollInterval = setInterval(() => {
        rightCarousels.forEach(c => {
            c.container.scrollLeft += scrollSpeed;
            if (c.container.scrollLeft >= c.halfWidth) {
            c.container.scrollLeft = 0;
            }
        });
        leftCarousels.forEach(c => {
            c.container.scrollLeft -= scrollSpeed;
            if (c.container.scrollLeft <= 0) {
            c.container.scrollLeft = c.halfWidth;
            }
        });
        }, 16);
    }
    startAutoScroll();

    const circle1 = document.getElementById('bubble-1');
    const circle2 = document.getElementById('bubble-2');
    const circle3 = document.getElementById('bubble-3');
    const initialTop1 = parseFloat(getComputedStyle(circle1).top);
    const initialTop2 = parseFloat(getComputedStyle(circle2).top);
    const initialTop3 = parseFloat(getComputedStyle(circle3).top);
    let angle1 = 0;
    let angle2 = 0;
    let angle3 = 0;
    let delay = 0;
    function animate() {
        const bobAmount = 10;
        const bobSpeed = 0.040;

        const offsetY1 = Math.sin(angle1) * bobAmount;
        circle1.style.top = `${initialTop1 + offsetY1}px`;
        angle1 += bobSpeed;
        if (delay >= 0.3) {
            const offsetY2 = Math.sin(angle2) * bobAmount;
            circle2.style.top = `${initialTop2 + offsetY2}px`;
            angle2 += bobSpeed;
        }
        if (delay >= 0.6) {
            const offsetY3 = Math.sin(angle3) * bobAmount;
            circle3.style.top = `${initialTop3 + offsetY3}px`;
            angle3 += bobSpeed;
        }
        delay += bobSpeed;
        requestAnimationFrame(animate);
    }

    animate();

});
