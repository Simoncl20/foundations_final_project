async function getProducts(){
    try {
        const data = await fetch("https://ecommercebackend.fundamentos-29.repl.co");
        const products = await data.json();

        console.log(products);

        
    } catch (error) {
        console.log(error);
    }
}