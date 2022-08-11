import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./FrontPageRecipes.css";

export function FrontPageRecipes(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      
    ]
  };
  document.title = "Katherine a nutritionist and recipe developer";
  return (
    // style={{backgroundColor: "#2C1A2B"}}
    <div className="container mx-auto pb-6 mb-6">
      <div className="mx-4 sm:mx-12 lg:mx-0">
        <h3 className="mx-auto pt-6 mt-4">RECIPES</h3>
        <div className="w-12 border-b border-amber-300 mx-auto mb-16"></div>
        <Slider {...settings} className="w-full flex">
          {props.recipes
            .filter((recipe) => recipe.category === "Favorite")
            .map((recipe) => {
              return (
                <div key={recipe.id} className="animateImage w-3/4">
                  <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
                    <img
                      src={require(`./../../assets/images/recipes/${recipe.img}`)}
                      alt={recipe.title}
                      className="h-96 lg:h-64 w-3/4 mx-auto object-cover"
                    />
                    <h5 className=" my-2">{recipe.title}</h5>
                  </Link>
                </div>
              );
            })}
        </Slider>
        <Link to="/recipes">
          <button className="p-4 m-4 bg-amber-200 text-black mt-8">
            All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
}
