import { getRecipes } from "../../recipes";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Recipes() {
  let RECIPES = getRecipes();

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const handleButtonClick = (event) => {
    setCategory(event.currentTarget.innerHTML);
  };

  const handleSearch = (event) => {
    setSearch(event.currentTarget.value);
  };

  function showCategoryFilter() {
    const categoryFilterMenu = document.querySelector("div.showCategoryFilter");
    if (categoryFilterMenu.style.display == "none") {
      categoryFilterMenu.style.display = "flex";
    } else {
      categoryFilterMenu.style.display = "none";
    }
    console.log(categoryFilterMenu);
  }

  return (
    <div className="container mx-auto">
      <h1 className="bg-stone-700 text-white p-8">
        The problem is fixed. To register a dynamic URL without loading the
        parents UI register the parent Route without the element attribute. To
        still register the parent on the specified URL register another Route
        with the element you want to render.
      </h1>
      <h3 className="text-3xl">
        We appreciate food. For the way it tastes and the feeling it gives us.
        Eating healthy does NOT have to be something hard, it mostly depends on
        your habbits. If you are used to eating sweets and have strong memories
        connected to processed food, ofcourse it's hard to ditch them. I can't
        make it easier for you. What I am here to do is show you what kind of
        recipes I enjoy and how to prepare them.
      </h3>
      <div>
        <img src="" alt="" />
      </div>

      <div className="flex justify-center">
        <div>
          <h3 className="text-2xl mt-6">Recipes: {category}</h3>

          <div className="float-left">
            <label htmlFor="search" className="text-xl font-bold">
              Search:{" "}
            </label>
            <input
              type="text"
              placeholder="Search"
              id="search"
              className="border border-black px-2 py-4 mt-2 ml-4 mb-6"
              onChange={handleSearch}
            />
          </div>
          <div className="clear-both lg:hidden">
            <button onClick={showCategoryFilter}>
              <FontAwesomeIcon icon="fa-solid fa-bars" className="w-12 h-12" />
            </button>
          </div>
          <div className="relative">
            <div className="absolute top-80 left-1/2 transform-centering hide-on-lg">
              <div className="flex flex-col showCategoryFilter">
                <div className="p-4 rounded-none border-2 border-solid bg-stone-900 text-white text-xl">
                  Categories
                </div>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  All
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Vegetarian
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Dinner
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Meat
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Vegetables
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Sides
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Medditeranean
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Keto
                </button>
                <button
                  onClick={handleButtonClick}
                  className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
                >
                  Plant-Based
                </button>
              </div>
            </div>
            <div className="grid auto-cols-min grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-4 gap-12 clear-left">
              {RECIPES.filter(
                (recipe) =>
                  (recipe.category == category || category == "All") &&
                  recipe.title.includes(search)
              ).map((recipe, id) => {
                return (
                  <div key={recipe.id} className="h-80">
                    <Link to={`${recipe.id}`}>
                      <img
                        src={require(`./../../assets/images/recipes/${recipe.img}`)}
                        alt={recipe.title}
                        className="object-cover w-full h-full"
                      />
                      <h2>{recipe.title}</h2>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="lg:flex flex-col hidden">
            <h3 className="text-xl font-bold mt-24">Categories</h3>

            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              All
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Vegetarian
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Dinner
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Meat
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Vegetables
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Sides
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Medditeranean
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Keto
            </button>
            <button
              onClick={handleButtonClick}
              className="p-4 rounded-none border-2 border-solid bg-stone-700 hover:bg-stone-500 text-white text-xl"
            >
              Plant-Based
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
