document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    const getRectOfLastChar = (element) => { 
        const range = document.createRange();
        const textNode = element.firstChild; 
        if (textNode && textNode.nodeType === 3 && textNode.length > 0) { 
            range.setStart(textNode, textNode.length - 1);
            range.setEnd(textNode, textNode.length);
            return range.getBoundingClientRect();
        }
        
        return element.getBoundingClientRect();
    };

    const startTypingAnimation = () => {
        const fields = container.querySelectorAll(".field");

        const cursor = document.createElement("span");
        cursor.classList.add("cursor");
        cursor.textContent = "▌";
        cursor.style.fontSize = "20px"; 
        cursor.style.position = "absolute";
        document.body.appendChild(cursor);

        let delay = 0;

        fields.forEach(field => {
            const text = field.textContent.trim();
            field.textContent = "";

            const span = document.createElement("span");
            field.appendChild(span);

            const colonIndex = text.indexOf(":");

            [...text].forEach((char, i) => {
                setTimeout(() => {
                    if (i <= colonIndex) {
                        span.innerHTML += `<span class="label">${char}</span>`;
                    } else {
                        span.innerHTML += char;
                    }
                    
                    const rect = span.getBoundingClientRect(); 
                    
                    const lastCharRect = getRectOfLastChar(span); 

                    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                        const absoluteTop = lastCharRect.top + window.scrollY; 
                        cursor.style.left = (lastCharRect.right + 2) + "px"; 
                        cursor.style.top = absoluteTop + "px";
                    }
                    

                }, delay + i * 30);
            });

            setTimeout(() => {
                const rect = field.getBoundingClientRect();
                const lastCharRect = getRectOfLastChar(span);
                const absoluteTop = lastCharRect.top + window.scrollY;
                cursor.style.left = (lastCharRect.right + 2) + "px";
                cursor.style.top = absoluteTop + "px";
            }, delay + text.length * 30);


            delay += text.length * 30 + 200;
        });
    };

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startTypingAnimation();
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            rootMargin: '0px',
            threshold: 0.1
        }
    );

    if (container) {
        observer.observe(container);
    }
});
