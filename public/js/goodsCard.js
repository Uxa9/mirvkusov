let
    columns = document.querySelector(".details-columns"),
    param = columns.querySelectorAll("p");

param.forEach((item, i) => {
    let
        width = item.querySelector(".bf"),
        childrenWidth = item.children[0].offsetWidth;
    width.children[1].style.width = width.offsetWidth - width.children[0].offsetWidth + "px";
});
