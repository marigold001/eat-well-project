import "./Services.css";

export function Services() {
  return (
    <div className="container mx-auto mb-20 relative">
      <h3 className="m-0 mt-10 pt-4 font-normal">SERVICES</h3>
      <div className="w-12 border-b border-amber-300 mx-auto mb-12"></div>
      <div>
        <img
          className="absolute position-small-circle xl:block hidden"
          src={require("./../../assets/images/small-circle.png")}
          alt="Small circle"
        />
        <img
          className="absolute position-middle-circle xl:block hidden"
          src={require("./../../assets/images/middle-circle.png")}
          alt="Middle circle"
        />
        <img
          className="absolute position-bigger-circle xl:block hidden"
          src={require("./../../assets/images/bigger-circle.png")}
          alt="Bigger circle"
        />
      </div>

      <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3">
        <div className="w-4/5 mx-auto">
          <h4 className="mb-4 ">RECIPE DEVELOPMENT</h4>
          <img
            src={require("./../../assets/images/isolated-tomato.jpg")}
            alt="Recipe Development"
            className="2xl:max-w-sm animation"
          />
          <p className=" mt-4">
            Becoming a professional in nutrition and diets and having made more
            than 200 healthy tested <a href="">recipes</a>. Katherine has proven
            experience in <a href="/">recipe development</a>.
          </p>
        </div>

        <div className="w-4/5 mx-auto">
          <h4 className="mb-4">COOKING CLASSES</h4>
          <img
            src={require("./../../assets/images/isolated-broccoli.jpg")}
            alt="Cooking Classes"
            className="2xl:max-w-sm animation" 
          />
          <p className=" mt-4">
            On the classes you will learn about food nutrition, cooking
            techniques, serving and decorating, and make food combinations you
            don’t expect.
          </p>
        </div>

        <div className="w-4/5 mx-auto">
          <h4 className="mb-4">HEALTHY EATING</h4>
          <img
            src={require("./../../assets/images/isolated-pomegranate.jpg")}
            alt="Healthy Eating"
            className="2xl:max-w-sm animation"
          />
          <p className="mt-4 testing">
            Get life lasting experience and learn everything about Nutrient
            Density, Diversity, Macronutrients, and Food Basics.
          </p>
        </div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
}
