const form = document.getElementById("productForm");
const grid = document.getElementById("productGrid");

let products = JSON.parse(localStorage.getItem("products")) || [];

function renderProducts() {
  grid.innerHTML = "";

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    if (p.image) {
      card.innerHTML += `<img src="${p.image}" style="width:100%;border-radius:8px">`;
    } else {
      card.innerHTML += `<div style="height:120px;background:#ddd;border-radius:8px"></div>`;
    }

    card.innerHTML += `
      <strong>${p.name}</strong><br>
      ₦${p.price}<br>
      Qty: ${p.qty}
    `;

    grid.appendChild(card);
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const qty = document.getElementById("productQty").value;
  const imgInput = document.getElementById("productImage");

  if (imgInput.files[0]) {
    const reader = new FileReader();
    reader.onload = () => saveProduct(reader.result);
    reader.readAsDataURL(imgInput.files[0]);
  } else {
    saveProduct(null);
  }

  function saveProduct(image) {
    products.push({ name, price, qty, image });
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    form.reset();
  }
});

renderProducts();
</script> 