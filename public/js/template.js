let
    searchBar = document.getElementById('searchWindow'),
    searchButton = document.querySelectorAll('.search'),
    crossClose = document.getElementById('crossClose'),
    mobileMenu = document.querySelector('.mobile-menu'),
    burger = mobileMenu.querySelector('.menu'),
    nav = mobileMenu.querySelector('.navigation');

searchButton.forEach((item, i) => {
    item.onclick = function() {
        searchBar.style.display = "block";
        document.body.classList.add('stop-scrolling');
    }
});

crossClose.onclick = function() {
    searchBar.style.display = 'none';
    document.body.classList.remove('stop-scrolling');
}

burger.onclick = function() {
    if (!burger.classList.contains('open')) {
        burger.classList.add('open');
        document.body.classList.add('stop-scrolling');
        nav.style.transform = "translate(0px, calc(0vh + 150px))";
    }
    else {
        burger.classList.remove('open');
        document.body.classList.remove('stop-scrolling');
        document.body.classList.remove('stop-scrolling');
        nav.style.transform = "translate(0px, 100vh)";
    }
}
