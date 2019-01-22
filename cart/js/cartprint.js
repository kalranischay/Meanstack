window.addEventListener("load",init)

function init(){

    function printProducts(){
        for(let product of productOperations.getProducts()){
            console.log(product.isAdded?"Already in Cart"+id:" ");
        }
    }
}