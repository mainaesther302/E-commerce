




//************************************************Display products*********************** */

const image = document.getElementById("productImage") as HTMLInputElement;
const prodname = document.getElementById("productName") as HTMLInputElement
const price = document.getElementById("productPrice") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLInputElement;

const productDisplay = document.getElementById("displayProducts")! as HTMLElement
const cartDisplay = document.getElementById("cart")! as HTMLElement
// for (let product of allProducts) {
//     // console.log(product);
//     productDisplay.innerHTML += `
//     <div class="product-item">
//         <img src="${product.productImage}" alt="Product 1" id="productImage">
//         <h3 id="productName">${product.productname}</h3>
//         <p id="productPrice">${product.productprice}</p>
//         <button id="btn">Add to Cart</button>
//     </div>
   
// `
// }




//*******************************add to cart************************************* */




// btn.addEventListener('click', () =>
//     {
//         cartDisplay.innerHTML += `
//         <div class="product-item">
//             <img src="${cart.productImage}" alt="Product 1" id="productImage">
//             <h3 id="productName">${cart.productname}</h3>
//             <p id="productPrice">${cart.productprice}</p>
//             <button id="btn">Add to Cart</button>
//         </div>
       
//     `
//     })
// Define a Cart class

//**************************FETCH DATA FROM JSON FILE***************** */

// Define an interface to represent the structure of the JSON data
interface Product {
  productImage: string;
  productname: string;
  productprice: number;
  id: number;
}

// Fetch data from the JSON file
async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('path/to/your/json/file.json');
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// Usage example
(async () => {
  const products = await fetchProducts();
  console.log('Fetched products:', products);
})();


//***************DISPLAY PRODUCTS*********************************/
class Cart {
  private items: Product[] = [];

  addToCart(product: Product): void {
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

  getCartItems(): Product[] {
    return this.items;
  }
}




