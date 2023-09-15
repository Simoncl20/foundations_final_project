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

                <div className="product_info">
                    <h3>${product.name} <span> <b>Stock</b>: ${product.quantity} </span></h3>
                    <h4>
                        $${product.price}
                        <i class="bx bx-plus" id='${product.id}'></i>
                    </h4>
                </div>
                
            </div>
        `;
    }

    $products.innerHTML = html;
}

async function main() {
    const db = {
        products:
            JSON.parse(window.localStorage.getItem("products")) ||
            (await getProducts()),
        cart: {},
    };

    printProducts(db);
}

main();
