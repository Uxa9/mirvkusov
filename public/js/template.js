let
    searchBar = document.getElementById('searchWindow'),
    searchButton = document.querySelectorAll('.search'),
    crossClose = document.getElementById('crossClose');

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
