import { Link } from "react-router-dom";

export function FrontPageRecipes(props) {
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

  return (
    // style={{backgroundColor: "#2C1A2B"}}
    <div className="container mx-auto pb-6 mb-6 italic font-serif justify-between ">
      <div className="mx-4 sm:mx-12 lg:mx-0">
        <h2 className="mx-auto pt-6 text-4xl mt-4 mb-16">RECIPES</h2>
        <h3 className="text-xl">FAVORITE</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto lg:mx-12">
          {props.recipes.filter(recipe => recipe.category === "Favorite").map((recipe) => {
            return (
              <div key={recipe.id} className="mt-20">
                <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                  <img
                    src={require(`../../../assets/images/recipes/${recipe.img}`)}
                    alt={recipe.title}
                    className="h-full md:h-full lg:h-64 w-full lg:object-cover object-cover  reduce-image-size-hover"
                  />
                  <h3 className="text-xl my-2">{recipe.title}</h3>
                </Link>
              </div>
            );
          }).splice(0, 4)}
        </div>

        <h3 className="text-xl mt-28">VEGETABLES</h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-auto lg:mx-12">
          {props.recipes.filter(recipe => recipe.category === "Vegetables").map((recipe) => {
            return (
              <div key={recipe.id} className="h-80 mt-20">
                <Link to={`/recipes/${recipe.id}`} key={recipe.id} className="text-white">
                  <img
                    src={require(`../../../assets/images/recipes/${recipe.img}`)}
                    alt={recipe.title}
                    className="h-full md:h-full lg:h-64 w-full lg:object-cover object-cover"
                  />
                  <h3 className="text-xl my-2">{recipe.title.toUpperCase( )}</h3>
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
