import { useParams } from "react-router-dom";
import { getRecipes } from "../../../recipes";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export function Recipe() {
  let params = useParams();
  let recipes = getRecipes();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      
    ]
  };
  return (
    <div className="container mx-auto">
      <div className="">
        <Slider {...settings} className="w-full md:mx-auto bg-stone-500 py-4 text-white">
          {recipes.map((recipe) => {
            return (
              <div>
                <h3 className="">{recipe.title}</h3>
                <img
                  src={require(`../../../assets/images/recipes/${recipe.img}`)}
                  alt={recipes.title}
                  className="object-cover w-20 h-20 mx-auto"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      <button className="float-left border-solid border-2 border-slate-400 p-2 m-4 mt-20">
        <Link to="/recipes">Go Back</Link>
      </button>
      <h2 className="text-4xl mb-2 mx-auto clear-left">{recipes[params.recipe - 1].title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg_grid_cols_3 clear-left bg-stone-500 text-white mt-12 px-2 pt-6 pb-8">
        <div>
          <h2 className="text-2xl my-6">{recipes[params.recipe - 1].title}</h2>
          <img
            className="mx-auto px-2 lg:px-6"
            src={require(`../../../assets/images/recipes/${
              recipes[params.recipe - 1].img
            }`)}
            alt={recipes[params.recipe - 1].title}
          />
        </div>
        <div className="self-center text-xl increase_text_size_2xlscreen m-4 ml-8 text-left">
          <h3 className="font-bold text-center">Instructions</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            accusamus sint rem optio, qui blanditiis et harum hic sed ex?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Expedita vel
            perspiciatis reiciendis excepturi exercitationem incidunt hic ab
            neque modi aliquam?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illum adipisci, minima placeat molestias neque in
            at suscipit hic laudantium. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ea deserunt voluptates deleniti expedita nam
            possimus id! Veniam delectus pariatur esse!
          </p>
        </div>
        <div>
          <ul className="text-lg ml-4 mx-auto text-center mt-10">
            <li>
              <strong>Ingredients:</strong>
            </li>
            <li>Quinoa</li>
            <li>Mushroom</li>
            <li>Walnust</li>
            <li>
              <strong>Preparation time: ??</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
