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

  data.forEach((item) => {});
}
