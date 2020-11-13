let
    layout = document.getElementById('layout'),
    layoutStyle = document.querySelectorAll(".viewStyle");

layoutStyle.forEach((item, i) => {
    item.onclick = function() {
        if (!item.classList.contains("active")) {
            item.classList.add("active");
            layoutStyle[(i+1) % 2].classList.remove("active");
            if ((i+1) % 2 == 0) {
                layout.classList.remove("flex");
                layout.classList.add("grid");
            }
            else {
                layout.classList.remove("grid");
                layout.classList.add("flex");
            }
        }
    };
});
