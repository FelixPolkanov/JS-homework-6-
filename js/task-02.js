const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(function (ingredient,index) {
  const ingredientsList = document.createElement("li");
  ingredientsList.classList.add('item');
  ingredientsList.textContent = ingredients[index];
 
  const addIngredientsList = document.querySelector('ul');
  addIngredientsList.appendChild(ingredientsList);

}
)
