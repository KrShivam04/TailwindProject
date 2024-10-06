
const navdialog = document.getElementById("nav-dialog");
function handleMenu () {
        navdialog.classList.toggle('hidden')
}

const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

function setupIntersectionObserver(elements, isLTR, speed) {
        const intersectionCallback = (entries) => {
            const entry = entries[0];
            const isIntersecting = entry.isIntersecting;
            console.log(entry.target, isIntersecting); 
    
            if (isIntersecting) {
                document.addEventListener('scroll', scrollHandler);
            } else {
                document.removeEventListener('scroll', scrollHandler);
            }
        };
    
        const intersectionObserver = new IntersectionObserver(intersectionCallback);
    
        if (elements.length) {
            elements.forEach(element => {
                intersectionObserver.observe(element);
            });
        } else {
            intersectionObserver.observe(elements);
        }
    
        function scrollHandler() {
            const translateX = (window.innerHeight - elements.getBoundingClientRect().top) * speed;
            let totalTranslate = 0;
            if (isLTR) {
                totalTranslate = translateX + initialTranslateLTR;
            }
            else {
                totalTranslate = -(translateX + initialTranslateRTL);
            }
            elements.style.transform = `translateX(${totalTranslate}px)`;
        }
    }
    

const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.18);



const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})
