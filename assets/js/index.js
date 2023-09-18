async function getProducts() {
    try {
        const data = await fetch(
            "https://ecommercebackend.fundamentos-29.repl.co/"
        );
        const products = await data.json();

        window.localStorage.setItem("products", JSON.stringify(products));

        return products;
        
    } catch (error) {
        console.log(error);
    }
}

function printProducts(db) {
    const $products = document.querySelector(".products");

    let html = "";

    for (const product of db.products) {
        html += `
            <div class="product">
                <div class="product_img">
                    <img src="${product.image}" alt="imagen">
                </div>

                <div class="product_info">
                    <h4>${product.name} | <span> <b>Stock</b>: ${product.quantity} </span></h4>
                    <h5>
                        $${product.price}
                        <i class="bx bx-plus" id='${product.id}'></i>
                    </h5>
                </div>
                
            </div>
        `;
    }

    $products.innerHTML = html;
}

function handleShowCart() {
    const $iconCart = document.querySelector(".bx-cart");
    const $cart = document.querySelector(".cart");

    $iconCart.addEventListener("click", () => {
        $cart.classList.toggle("cart_show");
    })

}

async function main() {
    const db = {
        products:
            JSON.parse(window.localStorage.getItem("products")) ||
            (await getProducts()),
        cart: {},
    };

    printProducts(db);
    handleShowCart();

    const $products = document.querySelector(".products");

    $products.addEventListener("click", (e) => {
        if (e.target.classList.contains("bx-plus")) {
            
            const id = Number(e.target.id);

            const productFind = db.products.find((product) => product.id === id);
            
            if (db.cart[productFind.id]) {
                db.cart[productFind.id].amount ++;
            }else{
                db.cart[productFind.id] = {...productFind, amount: 1};
            }
            
            console.log(db.cart);
        };
    });

}

main();
