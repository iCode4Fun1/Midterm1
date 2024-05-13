function showAddProduct() {
  document.getElementById('content').innerHTML = `
    <div class="form-container" id="addProductForm">
      <h2>Add Product</h2>
      <input type="text" id="productName" placeholder="Product Name">
      <textarea id="productDescription" placeholder="Product Description"></textarea>
      <button onclick="addProduct()">Add</button>
      <p id="errorMessage" style="color: red;"></p>
    </div>
  `;
}
function showProductList() {
  document.getElementById('content').innerHTML = `
    <div>
      <h2>Product List</h2>
      <ul id="productList"></ul>
    </div>
  `;
  displayProducts();
}

let products = [];

function addProduct() {
  const productName = document.getElementById('productName').value;
  const productDescription = document.getElementById('productDescription').value;

  if (!productName || !productDescription) {
    document.getElementById('errorMessage').innerText = "Product fields are required";
    return;
  }

  products.push({ name: productName, description: productDescription });
  document.getElementById('productName').value = '';
  document.getElementById('productDescription').value = '';
  document.getElementById('errorMessage').innerText = '';
  displayProducts();
}

function displayProducts() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  products.forEach(product => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = product.name;
    link.onclick = () => showProductDetail(product);
    listItem.appendChild(link);
    productList.appendChild(listItem);
  });
}
function showProductDetail(product) {
  document.getElementById('content').innerHTML = `
    <div>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
    </div>
  `;
}
