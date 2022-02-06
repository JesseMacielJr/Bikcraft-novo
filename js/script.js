const links = document.querySelectorAll(".header-menu a");

links.forEach((link) => {
    if (location.href.includes(link.href)) {
        link.classList.add("ativo");
    }
})