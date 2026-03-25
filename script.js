let cart = [];

function addToCart(item, price) {
  cart.push({item, price});
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach((c, index) => {
    total += c.price;

    cartItems.innerHTML += `
      <li>
        ${c.item} - ₹${c.price}
        <button onclick="removeItem(${index})">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function placeOrder() {
  if(cart.length === 0){
    alert("Cart is empty!");
    return;
  }

  let message = "Hello, I want to order:%0A";

  cart.forEach(c => {
    message += `${c.item} - ₹${c.price}%0A`;
  });

  let total = document.getElementById("total").innerText;
  message += `%0ATotal: ₹${total}`;

  window.open(`https://wa.me/918779378979?text=${message}`, "_blank");
}

function checkStatus() {
  let now = new Date();
  let hour = now.getHours();

  let status = document.getElementById("status");

  if(hour >= 11 && hour <= 23){
    status.innerText = "🟢 Open Now";
    status.style.color = "green";
  } else {
    status.innerText = "🔴 Closed";
    status.style.color = "red";
  }
}

checkStatus();
window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".review-card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 300);
  });
});
function submitReview() {
    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    let stars = "⭐".repeat(rating);

    let reviewHTML = `
      <div class="review-card visible">
        ${stars} "${message}" – ${name}
      </div>
    `;

    document.querySelector(".reviews").innerHTML += reviewHTML;

    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}
