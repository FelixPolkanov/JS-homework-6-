const category = document.querySelector("#categories");
const numberOfCategories = category.querySelectorAll("li.item");
console.log("Number of categories:", numberOfCategories.length);


numberOfCategories.forEach(function (numberCategory) {
    const elementHeadingOfCategory = numberCategory.querySelector('h2');
    console.log("Category:", elementHeadingOfCategory.textContent);
    const elementsInCategorySum = numberCategory.querySelectorAll('li');
    console.log("Elements:", elementsInCategorySum.length);
}
)








