document.getElementById("inventoryBody").addEventListener("submit", function(e))
e.preventDefault()
const item= {
    name:
    document.getElementById("productName"). value
    quantity:
    document.getElementById("quantity"). value
    date:new
    Date().toLocaleDateString()
};
let inventoryBody=
JSON.parse(localStorage.getItem("inventoryBody")) || [];
inventory.push(item);
localStorage.setItem("inventoryBody", JSON.stringify(inventory));
window.location.href=
"index.html";
});
