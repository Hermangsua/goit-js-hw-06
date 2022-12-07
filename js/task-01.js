const elementUl = document.querySelector("#categories");
console.log(elementUl);
const firstChildElementUl = elementUl.querySelectorAll(".item");
console.log(firstChildElementUl);
console.log(`Number of categories: ${firstChildElementUl.length}`);
const categoriesArray = [...firstChildElementUl];
console.log(categoriesArray);
const categoryOfElements = categoriesArray
  .map(
    (item) =>
      `Category: ${item.firstElementChild.textContent} - Elements: ${item.children[1].children.length}`
  )
  .join("; ");
// const categoryOfElements = (categories) => {
//   return categories
//     .map(
//       (item) =>
//         `Category: ${item.firstElementChild.textContent} - Elements: ${item.children[1].children.length}`
//     )
//     .join("; ");
// };
console.log(categoryOfElements);

// const firstChildOfElementUl = elementUl.firstElementChild;
// console.log(firstChildOfElementUl);
// const firstChildOfElementLi = firstChildOfElementUl.firstElementChild;
// console.log(firstChildOfElementLi);
// const textOfFirstChild = firstChildOfElementLi.textContent;
// console.log(textOfFirstChild);
// const numberOfElements = firstChildOfElementUl.querySelectorAll("li");
// console.log(numberOfElements.length);
// const categoryOfelements = (elem) => {};
// console.log(elementUl[1]);
