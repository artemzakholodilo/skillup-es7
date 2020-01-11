import { Product } from './src/product.mjs';

$('document').ready((e) => {
    let product = new Product("MacBook", 32300.99),
        productNameWrapper = $('span.product-name'),
        productPriceWrapper = $('span.product-price');

    productNameWrapper.text(product.getName());
    productPriceWrapper.text(product.getPrice());
}
);
