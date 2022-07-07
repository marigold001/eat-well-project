export function Services() {
  return (
    <div className="container mx-auto mb-20 italic font-serif">
      <h2 className="m-0 mt-10 mb-12 pt-4 text-4xl font-normal">SERVICES</h2>
      {/* <div className="w-1/6 border-b-2 border-amber-900 mx-auto mb-12"></div> */}
      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3">
        <div className="w-4/5 mx-auto">
          <h2 className="mb-4 text-2xl">RECIPE DEVELOPMENT</h2>
          <img
            src={require("../../../assets/images/front_page_recipe_development.jpg")}
            alt="Recipe Development"
          />
          <p className="text-xl mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            explicabo id natus vero fugiat ex, repellat omnis asperiores? Cum,
            non.
          </p>
        </div>

        <div className="w-4/5 mx-auto">
          <h2 className="mb-4 text-2xl">COOKING CLASSES</h2>
          <img
            src={require("../../../assets/images/front_page_cooking_classes.jpg")}
            alt="Cooking Classes"
          />
          <p className="text-xl mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            explicabo id natus vero fugiat ex, repellat omnis asperiores? Cum,
            non.
          </p>
        </div>

        <div className="w-4/5 mx-auto">
          <h2 className="mb-4 text-2xl">HEALTHY EATING</h2>
          <img
            src={require("../../../assets/images/front_page_healthy_eating.jpg")}
            alt="Healthy Eating"
          />
          <p className="text-xl mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            explicabo id natus vero fugiat ex, repellat omnis asperiores? Cum,
            non.
          </p>
        </div>
      </div>
    </div>
  );
}
