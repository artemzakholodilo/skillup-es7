export class Product
{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setPrice(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}