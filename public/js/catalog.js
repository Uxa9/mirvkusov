let
    layout = document.getElementById('layout'),
    layoutStyle = document.querySelectorAll(".viewStyle"),
    goods = document.querySelectorAll(".goods"),
    weightSelector = document.querySelectorAll(".sel");


weightSelector.forEach((item, i) => {
    item.onclick = function() {
        if(!item.classList.contains('active')) {
            let
                p = item.parentNode,
                sels = p.querySelectorAll(".sel");
            sels.forEach((sel, i) => {
                sel.classList.remove('active');
            });
            item.classList.add('active');
        }
    }
});


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
        if (layout.classList.contains('flex')) {
            buttons = layout.querySelectorAll(".to-cart-buttons"),
            buttons.forEach((item, i) => {
                item.style.display = 'flex';
            });
        }
    };
});

function fadeIn(element, time) {
    element.style.display = "flex";
    let
        op = 0.1,
        timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, time);
}

goods.forEach(function(item, index) {
    let
        backGoods = item.cloneNode(true),
        buttons = item.querySelector(".to-cart-buttons"),
        price = item.querySelector(".price"),
        coords = backGoods.getBoundingClientRect();

    item.onmouseenter = function() {
        if (layout.classList.contains("grid")){
            layout.insertBefore(backGoods, goods[index]);
            item.classList.add("expand-goods");
            item.style.top = backGoods.offsetTop - 15 + 'px';
            item.style.left = backGoods.offsetLeft + 'px';
            item.style.paddingBottom = '40px';
            price.style.paddingBottom = "30px";
            buttons.style.display = 'flex';
            buttons.style.marginTop = '20px';
            layout.appendChild(backGoods);
        }
    }

    item.onmouseleave = function() {
        if (layout.classList.contains("grid")){
            backGoods.remove();
            item.classList.remove("expand-goods");
            buttons.style.display = 'none';
            item.style.paddingBottom = '0px';
        }
    }
});
