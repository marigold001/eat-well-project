export function RecipeDevelopment() {
  return (
    <div className="container ml-auto flex">
      <div className="w-1/2">
        <h2>Recipe Development</h2>
        <p>
          Recipe development that is focused on seasonal, trending, and
          on-demand recipes paired with excellent food styling. As a recipe
          developer I make recipes that are healthy and meet client
          specifications. They range from low-fat dishes to vegetarian,
          Mediterranean, and gluten-free. Or their focus can be that they are
          simply heart-healthy and can be made to meet USDA / Canada / NIN or
          any other guidelines. In some cases they are focused on nutrient-dense
          food or highlighting some specific ingredient.
        </p>
        <p>
          I am specialized in culinary nutrition and have many years of
          experience in developing recipes. By using my nutrition knowledge
          together with creativity I have been able to make 200 amazing recipes.
          Focused on seasonal products I make recipes that are balanced on a
          nutritional level and full of flavors and textures.
        </p>
        <ol className="list-decimal text-left">
          The Recipe Development Process:
          <li>I first conceptualize the recipe from your core idea.</li>
          <li>Then I develop and test the recipe.</li>
          <li>
            After the recipe is tested I style it, photograph, and edit it.
          </li>
          <li>Then send to you for approval.</li>
        </ol>
      </div>
      <div className="">
        <h5 className="mb-4">MY RECIPES ARE</h5>
        <h5>
          <ul className="grid grid-cols-2 gap-5">
            <div>
              <li>SEASONAL</li>
              <img
                className="w-48 h-32"
                src={require("../assets/images/recipe-development/seasonal.jpg")}
                alt="Seasonal Recipe Development"
              />
            </div>
            <div>
              <li>FRESH</li>
              <img
                className="w-48 h-32 object-cover"
                src={require("../assets/images/recipe-development/fresh.jpg")}
                alt="Fresh Recipe Development"
              />
            </div>

            <div>
              <li>TRENDING</li>
              <img
                className="w-48 h-32 object-cover"
                src={require("../assets/images/recipe-development/trending.jpg")}
                alt="Trending Recipe Development"
              />
            </div>

            <div>
              <li>ON-DEMAND</li>
              <img
                className="w-48 h-32 object-cover"
                src={require("../assets/images/recipe-development/on-demand.jpg")}
                alt="On-demand Recipe Development"
              />
            </div>

            <div>
              <li>HEALTHY</li>
              <img
                className="w-48 h-32 object-cover"
                src={require("../assets/images/recipe-development/healthy.jpg")}
                alt="Healthy Recipe Development"
              />
            </div>

            <div>
              <li>AND TASTY</li>
              <img
                className="w-48 h-32 object-cover"
                src={require("../assets/images/recipe-development/tasty.jpg")}
                alt="Tasty Recipe Development"
              />
            </div>
          </ul>
        </h5>
      </div>
      <h5 className="self-center rotate-90 text-2xl tracking-[0.3em]">RECIPES</h5>
    </div>
  );
}
