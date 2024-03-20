const products = [
  { id: 1, price: "300", image: "image-1" },
  { id: 2, price: "420", image: "image-2" },
  { id: 3, price: "240", image: "image-3" },
  { id: 4, price: "560", image: "image-4" },
  { id: 5, price: "1150", image: "image-5" },
];

const cartList = [];

const mainSection = document.querySelector("main");
mainSection.classList.add("animate__animated", "animate__zoomIn");

function renderProducts(data) {
  mainSection.innerHTML = "";

  // create cart section
  createCartSection();

  // create clothes section
  const clothesSection = document.createElement("section");
  clothesSection.className = "clothes";
  mainSection.append(clothesSection);

  data.forEach((item) => {
    const productCard = document.createElement("article");
    productCard.className = "products";
    productCard.id = `product-${item.id}`;

    const productImage = document.createElement("img");
    productImage.src = `./assets/images/${item.image}.webp`;
    productImage.alt = `Product ${item.id}`;

    const orderBtn = document.createElement("button");
    orderBtn.innerText = "Order now!";
    orderBtn.addEventListener("click", (e) => {
      addToCartList(+e.target.closest(".products").id.split("-")[1]);
    });

    const priceTag = document.createElement("span");
    priceTag.className = "price";
    priceTag.innerText = item.price + "$";

    // append them to page
    productCard.append(productImage, orderBtn, priceTag);
    clothesSection.append(productCard);
  });
}

function createCartSection() {
  const shoppingCart = document.createElement("section");
  shoppingCart.className = "shopping-cart";
  shoppingCart.id = "shopping-cart";

  //create cart counter
  const cartCounter = document.createElement("span");
  cartCounter.className = "cartItemCounter";
  cartCounter.innerText = "0";
  // create cart icon
  const cartIcon = document.createElement("img");
  cartIcon.className = "cart-icon";
  cartIcon.src = "./assets/images/cart.svg";
  cartIcon.alt = "Cart Icon";
  cartIcon.addEventListener("click", () => {
    showCart();
  });

  shoppingCart.append(cartCounter, cartIcon);
  mainSection.append(shoppingCart);
}

function showCart() {
  // open cart modal
  const cartModalOverlay = document.querySelector(".cart-modal-overlay");

  if (cartModalOverlay.style.transform === "translateX(-200%)") {
    cartModalOverlay.style.transform = "translateX(0)";
  } else {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }

  changeTotalPrice();

  // end of open cart modal

  // close cart modal
  const closeBtn = document.querySelector("#close-btn");

  closeBtn.addEventListener("click", () => {
    cartModalOverlay.style.transform = "translateX(-200%)";
  });

  cartModalOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-modal-overlay")) {
      cartModalOverlay.style.transform = "translateX(-200%)";
    }
  });
  // end of close cart modal
}
