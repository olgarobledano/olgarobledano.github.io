document.addEventListener("DOMContentLoaded", () => {
   
    const words = ["mar", "océano", "poeta", "amor"];
    const dynamicWordElement = document.getElementById("palabra-dinamica");

    let wordIndex = 0;
    setInterval(() => {
        if (dynamicWordElement) {
            dynamicWordElement.textContent = words[wordIndex];
            wordIndex = (wordIndex + 1) % words.length;
        }
    }, 1500);

    
    const elementsToAnimate = document.querySelectorAll(
        ".contenedor-cita, .contenedor-img, .contenedor-gif img, .contenedor-cita2, .contenedor-vid, .line1, .line2, .line3, .efecto1, .efecto2, .efecto3, .efecto4, .efecto5, .efecto6, .efecto7, .efecto8, .efecto9, .efecto10, .contenedor-pp, .contenedor-p, .efecto-gif"
    );

    
    const isElementVisible = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

   
    const handleScroll = () => {
        elementsToAnimate.forEach((el) => {
            if (isElementVisible(el)) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
            }
        });
    };

   
    window.addEventListener("scroll", handleScroll);

    
    handleScroll();
});