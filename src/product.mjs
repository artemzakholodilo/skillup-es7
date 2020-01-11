export class Product
{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}