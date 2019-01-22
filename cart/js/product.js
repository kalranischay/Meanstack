class product{
    constructor(id, name, price, desc, photo="", qt=0){
        this.id=id;
        this.name=name;
        this.price=price || 0;
        desc=desc|| "";
        this.desc=desc;
        this.photo=photo;
        this.qt=qt;
        this.isAdded=false;

    }
    toggle(){
        this.isAdded = !this.isAdded;
    }
}