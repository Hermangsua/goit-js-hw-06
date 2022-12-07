const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryUlElement = document.querySelector(".gallery");
console.log(galleryUlElement);
const galleryWithImgMarkUp = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></img></li>`)
  .join("");

console.log(galleryWithImgMarkUp);
galleryUlElement.insertAdjacentHTML("afterbegin", galleryWithImgMarkUp);
galleryUlElement.style.display = "flex";
galleryUlElement.style.listStyle = "none";
galleryUlElement.style.backGroundColor = "darkgray";
galleryUlElement.style.gap = "100px";
// galleryUlElement.style.border = "dashed 2px tomato";
galleryUlElement.style.margin = "0";
galleryUlElement.style.padding = "0";
