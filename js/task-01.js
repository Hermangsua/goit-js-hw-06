const elementUl = document.querySelector("#categories");
const firstChildElementUl = elementUl.querySelectorAll(".item");
console.log(`Number of categories: ${firstChildElementUl.length}`);
const categoriesArray = [...firstChildElementUl];
const categoryOfElements = categoriesArray.map((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.children[1].children.length}`);
});
