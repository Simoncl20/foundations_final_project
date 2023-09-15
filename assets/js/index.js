async function getProducts(){
    try {
        const data = await fetch("https://ecommercebackend.fundamentos-29.repl.co/");
        const products = await data.json();

        window.localStorage.setItem("products", JSON.stringify(products));

        return products;

        
    } catch (error) {
        console.log(error);
    }
}


function printProducts(db){
    const $products = document.querySelector(".products");

    let html = "";

    for (const product of db.products) {
        html += `
            <div class="product">
                <p>${product.name}</p>
            </div>
        `;
    }

    $products.innerHTML = html;

}


async function main(){
    const db = {
        products: JSON.parse(window.localStorage.getItem("products")) || await getProducts(),
        cart: {},
    }
    
    printProducts(db);

}


main()