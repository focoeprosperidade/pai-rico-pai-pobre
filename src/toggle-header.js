window.addEventListener('scroll', function () {
    let header = this.document.querySelector('#header');
    header.classList.toggle('scroll-header', this.window.scrollY > 0);
});