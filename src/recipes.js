const RECIPES = [
  {
    id: 1,
    title: "Quinoa Salad",
    img: "mediterranean_quinoa_salad.jpg",
    category: "Vegetarian"
  },
  {
    id: 2,
    title: "Green Beans",
    img: "roasted_green_beans.jpg",
    category: "Vegetarian"
  },
  {
    id: 3,
    title: "Frittata",
    img: "frittata.jpg",
    category: "Vegetarian"
  },
  {
    id: 4,
    title: "Black rice",
    img: "black_rice.jpg",
    category: "Vegetarian"
  },
  {
    id: 5,
    title: "Mushrooms",
    img: "mushrooms.jpg",
    category: "Favorite"
  },
  {
    id: 6,
    title: "Zucchini",
    img: "zucchini.jpg",
    category: "Favorite"
  },
];

export function getRecipes() {
    return RECIPES;
}