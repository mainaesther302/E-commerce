"use strict";
//************************************************Display products*********************** */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const image = document.getElementById("productImage");
const prodname = document.getElementById("productName");
const price = document.getElementById("productPrice");
const btn = document.getElementById("btn");
const productDisplay = document.getElementById("displayProducts");
const cartDisplay = document.getElementById("cart");
// Fetch data from the JSON file
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('path/to/your/json/file.json');
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error('Error fetching products:', error);
            return [];
        }
    });
}
// Usage example
(() => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield fetchProducts();
    console.log('Fetched products:', products);
}))();
//***************DISPLAY PRODUCTS*********************************/
class Cart {
    constructor() {
        this.items = [];
    }
    addToCart(product) {
        this.items.push(product);
        console.log(`Added ${product.productname} to the cart.`);
        // Dynamically generate the HTML for the cart item
        const cartItemHTML = `
      <div class="product-item">
        <img src="${product.productImage}" alt="Product 1" id="productImage">
        <h3 id="productName">${product.productname}</h3>
        <p id="productPrice">${product.productprice}</p>
        <button id="btn">Add to Cart</button>
      </div>
    `;
        // Append the cart item HTML to the cart display
        cartDisplay.innerHTML += cartItemHTML;
    }
    getCartItems() {
        return this.items;
    }
}
