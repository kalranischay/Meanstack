const productOperations = {
    products : [],
    inCart:[],
    getCount(){
        return this.inCart.length;
    },
    search(id){
        return this.products.find(product=>product.id==id);
    },
    toggle(id){
        var product = this.search(id);
        product.toggle();
        return product.isAdded?"Already in cart":"add to cart";
    },


    getProducts(){
        return this.products;
    },
    
    addition(id)
     {
        this.inCart.push(id); //add in cart
       
    },

    prepareProducts(){
        var onion = new product(10,"Onion",20,"Onion","https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg");
        var apple = new product(11,"Apple",120,"Apple","https://www.bigbasket.com/media/uploads/p/s/1203781_1-fresho-apple-washington-regualr.jpg");
        var mango = new product(12,"Mango",220,"Mango","https://www.bigbasket.com/media/uploads/p/s/40001001_11-maaza-juice-mango.jpg");
    
    
    this.products.push(onion);
    this.products.push(apple);
    this.products.push(mango);
    console.log("Products are ",this.products);
    //this.printProducts()
    }

}