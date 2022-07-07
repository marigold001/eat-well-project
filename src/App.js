import "./App.css";

// REACT COMPONENTS
import { Header } from "./components/Header";
import { FrontPage } from './components/pages/FrontPage';
import { About } from './components/pages/About';
import { Recipes } from './components/pages/Recipes'; 
import { Recipe } from './components/pages/recipe/Recipe';

// DATA
import { getRecipes } from "./recipes";

// ROUTER
import { Routes, Route } from 'react-router-dom';

// BLUEPRINT UI COMPONENTS
import { Button } from "@blueprintjs/core";
// Removes the border around focused elements only shows them when elements is selected with tab
import { FocusStyleManager } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();
let recipes = getRecipes();

function App() {
  return (
    <div className="App">
      <Header websitename="Healthy Eating" />
      <Routes>
        <Route path="/" element={<FrontPage data={recipes}/>} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes">
          <Route path=":recipe" element={<Recipe />}/>
        </Route>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
