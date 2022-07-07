import { useParams } from "react-router-dom";
import { getRecipes } from "../../../recipes";

import { Link } from "react-router-dom";

export function Recipe() {
  let params = useParams();
  let recipes = getRecipes();
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl mb-2 mx-auto clear-left">Recipe Page</h2>
      <button className="float-left border-solid border-2 border-slate-400 p-2 m-4"><Link to="/recipes">Go Back</Link></button>
      <div className="grid grid-cols-1 md:grid-cols-1 lg_grid_cols_3 clear-left bg-slate-600 text-white mt-20 px-2 pt-6 pb-8">
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
        <div className="self-center text-xl increase_text_size_2xlscreen m-4 mt-14 ml-8 text-left">
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
