// Show Scrool Top
function scrollTop(){
    const scrollT0p = document.getElementById('.scroll-top')

    if(this.scrollY >= 560) scrollT0p.classList.add('show-scroll');
    else scrollT0p.classList.remove('show-scroll')
};
console.log(scrollTop);