// Show Scrool Top
function scrollTop() {
    const scrollT0p = document.getElementById('scrollTop');

    if (window.scrollY >= 10) {
        scrollT0p.classList.add('show-scroll');
    } else {
        scrollT0p.classList.remove('show-scroll');
    }
}

// Tambahkan event listener untuk memanggil fungsi scrollTop saat scroll
window.addEventListener('scroll', scrollTop);

console.log(scrollTop); // Ini akan mencetak definisi fungsi scrollTop, bukan memanggilnya
