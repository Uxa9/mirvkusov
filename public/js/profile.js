let
    a = document.querySelector('.face'),
    b = a.querySelectorAll('span'),
    c = document.querySelector('.fiz'),
    d = document.querySelector('.ur'),
    arr = [c, d];

b.forEach((item, i) => {
    item.onclick = function() {
        item.classList.add('active');
        a.children[(i+1) % 2].classList.remove('active');
        arr[i].style.display = "block";
        arr[(i+1) % 2].style.display = "none";
    }
});
