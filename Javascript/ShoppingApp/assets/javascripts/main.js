window.addEventListener("load", initEvent);

function initEvent() {
    showProducts();
}

function showProducts() {
    var parent_div = document.querySelector("#products_list");
    products.forEach(function(obj) {
        var childDiv = document.createElement("div");
        childDiv.className = "col-md-3 product";
        var img = document.createElement("img");
        img.src = obj.p_img;
        img.className = 'w-100';
        var title = document.createElement("h5");
        title.innerHTML = obj.p_name;
        var price = document.createElement("span");
        price.innerHTML = obj.p_price + " Rs";
        var btn = document.createElement("button");
        btn.innerHTML = "Add to Cart";
        btn.className = "btn btn-primary d-block w-100";
        btn.title = obj.p_id;

        childDiv.appendChild(img);
        childDiv.appendChild(title);
        childDiv.appendChild(price);
        childDiv.appendChild(btn);
        btn.addEventListener("click", addItem);

        parent_div.appendChild(childDiv);
    })
}

function addItem() {
    var p_id = event.srcElement.title;
    products.forEach(function(x) {
        if (x.p_id == p_id) {
            object.addToCart(x.p_id, x.p_name, x.p_brand, x.p_category, x.p_price, x.p_img);
        }
    })
}