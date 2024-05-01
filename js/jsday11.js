const display = document.querySelector('.all_products');
let staticProducts;
const getAllProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  return response.json();
};

getAllProducts()
  .then((data) => {
    // console.table(data);
    // Array Methods
    staticProducts = data;
    const displayItems = data.map((product) => {
      return `
            <div class="product_item">
                <img src="${product.image}" alt="">
                <h5> ${product.title} </h5>
                <h5>$${product.price}</h5>
                <h6 class="category"> ${product.category} </h6>
                <button onclick="viewSingleProduct(${product.id})"> 
                    View Product 
                </button>
            </div>
        `;
    });

    display.innerHTML = displayItems.join('');
  })
  .catch((error) => {
    alert("Something went wrong");
    console.error(error);
  });



function viewSingleProduct(id)
{
   const displayItems = staticProducts.filter(product => {
        return product.id == id;
   });

   let product = displayItems[0];

   display.style.gridTemplateColumns = "repeat(2, 1fr)";
   display.innerHTML = `
    <div> 
        <button onclick="displayAllProducts()"> Show All products </button>
        <img src="${product.image}" style="width: 100%;" />
        <p>${product.rating.rate} Stars </p>
        <h1> ${product.title} </h1>
        <h3>$${product.price}</h3>

        <p>
            ${product.description}
        </p>
    </div>
   `;
}

function displayAllProducts() {
    display.style.gridTemplateColumns = "repeat(4, 1fr)";
    const displayItems = staticProducts.map((product) => {
        return `
              <div class="product_item">
                  <img src="${product.image}" alt="">
                  <h5> ${product.title} </h5>
                  <h5>$${product.price}</h5>
                  <h6 class="category"> ${product.category} </h6>
                  <button onclick="viewSingleProduct(${product.id})"> 
                      View Product 
                  </button>
              </div>
          `;
      });
  
      display.innerHTML = displayItems.join('');
}


const people = [
  'john',
  'jude',
  'jack'
];

export default people;