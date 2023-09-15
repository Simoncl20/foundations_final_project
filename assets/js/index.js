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


async function main(){
    const products = JSON.parse(window.localStorage.getItem("products")) || await getProducts();
    console.log(products);
}


main()