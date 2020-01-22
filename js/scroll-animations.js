let revealOnScreen = document.querySelector('#reveal-on-screen');

const sectionOneOptions = {
    root: null,
    threshold: .7,
    delay: '0',
    rootMargin: "0px",
}; 

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver
) {
entries.forEach(entry => {
    if(!entry.isIntersecting){
        revealOnScreen.style.transform = 'translateY(80px)';
        revealOnScreen.style.opacity = '0';
        revealOnScreen.style.transitionTimingFunction = 'ease-in-out';
        revealOnScreen.style.transition = 'all 600ms';
    } else {
        revealOnScreen.style.transform = 'translateY(0px)';
        revealOnScreen.style.opacity = '1';
        revealOnScreen.style.transitionTimingFunction = 'ease-in-out';
        revealOnScreen.style.transition = 'all 600ms';
        sectionOneObserver.unobserve(entry.target);
    }
})

}, 
sectionOneOptions);

sectionOneObserver.observe(revealOnScreen);