window.addEventListener("DOMContentLoaded",()=>productOperations.prepareProducts());
window.addEventListener("load",init);
function init(){
    printProducts();
}

const prepareImage=(photo)=>{
    var img= document.createElement("img");
    img.src=photo;
    return img;
}

const prepareP=(price)=>{
    var p = document.createElement("p");
    p.src=price;
    return p;
}

const addToCart=(id)=>{
    var button = document.createElement("button");
    button.innerText = "add to cart";
    button.setAttribute("data-id",id);
    button.addEventListener("click",addInCart);
    return button;
}

function addInCart(){
    var id = this.getAttribute("data-id");
    console.log("add in cart call",id);
    this.innerText= productOperations.toggle(id);
    productOperations.addition(id);
}

function printProducts(){
    for(let product of productOperations.getProducts()){
        let myDiv = document.createElement("div");
        myDiv.appendChild(prepareImage(product.photo));
        myDiv.appendChild(prepareP(product.price));
        myDiv.appendChild(addToCart(product.id));
        document.body.appendChild(myDiv);

        console.log(product.isAdded?"Already in Cart"+id:" ");
    }
}