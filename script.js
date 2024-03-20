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
