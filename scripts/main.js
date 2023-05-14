let stockCount = 0;
let purchaseCount = 0;
function calculate() {
    const totalStock = parseInt(document.getElementById("total-stock").value);
    const amount = parseInt(document.getElementById("amount").value);
    const result = totalStock * amount;
    document.getElementById("result").innerHTML = `Result: $${result}`;
}



// Function to add a new product
function addProduct() {
  // Get the product name and price from the input fields
  const productName = document.getElementById("product-name").value;
  const productPrice = document.getElementById("product-price").value;
  
  // Create a new HTML element to display the product information
  const newProduct = document.createElement("div");
  //newProduct.innerHTML = `<p>${productName}: $${productPrice}</p>`;
  
  // Add the new product element to the stock area
  const stockArea = document.querySelector(".stock-area");
  stockArea.appendChild(newProduct);
  
  // Update the stock count
 // purchaseCount++;
  stockCount++;
  const stockCountElement = document.getElementById("stock-count");
  stockCountElement.textContent = stockCount;

  const purchaseCount = stockCount * parseFloat(productPrice); // or Number(productPrice)
  const purchaseCountElement = document.getElementById("purchase-count");
  
  purchaseCountElement.textContent = purchaseCount;
}
