import { Link } from "react-router-dom";

export function RecipesAndBlog(props) {
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

  function showFiveResults(array) {
    return array.length <= 5;
  }
  console.log(RECIPES.filter(recipe => recipe.category == "Favorite"));
  return (
    // style={{backgroundColor: "#2C1A2B"}}
    <div className="container mx-auto pb-6 mb-6 text-white bg-stone-700 italic font-serif justify-between ">
      <div>
        <h2 className="mx-auto pt-6 text-3xl mt-4 mb-16">RECIPES</h2>
        <h3 className="text-xl">Favorite</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-2/3 mx-auto">
          {props.recipes.filter(recipe => recipe.category === "Favorite").map((recipe) => {
            return (
              <div key={recipe.id}>
                <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="text-white">
                  <h3 className="text-xl my-2">{recipe.title.toUpperCase( )}</h3>
                  <img
                    src={require(`../../../assets/images/recipes/${recipe.img}`)}
                    alt={recipe.title}
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <Link to="/recipes">
          <button className="border-black border-2 p-4 m-4 bg-white text-black mt-24">
            All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
