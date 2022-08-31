import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Header.css";

function showMenu() {
  const menu_items = document.querySelectorAll("a.show_m_navigation");
  menu_items.forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  console.log(menu_items);
}

export function Header(props) {
  return (
    <div className="container mx-auto mb-0 xl:mb-4 flex justify-between items-center">
      <img
        src={require("../../assets/images/logo.png")}
        alt="Logo"
        className="w-48 mt-4"
      />
      {/* <h1 className="underline font-bold md:ml-14 text-5xl font-mono">{props.websitename}</h1> */}
      <nav className=" mt-2">
        <ul>
          <li className="inline-block mx-2">
            <Link to="/" className="hide_main_menu text-amber-200">
              HOME
            </Link>
          </li>
          <li className="inline-block mx-2">
            <Link to="/recipe-development" className="hide_main_menu text-amber-300">
              DEVELOPMENT
            </Link>
          </li>
          <li className="inline-block mx-2">
            <a href="#" className="hide_main_menu text-amber-400">
              CLASSES
            </a>
          </li>
          <li className="inline-block mx-2">
            <a href="#" className="hide_main_menu text-amber-500">
              GUIDANCE
            </a>
          </li>
          <li className="inline-block mx-2">
            <a href="#" className="hide_main_menu text-amber-600">
              RECIPES
            </a>
          </li>
          <li className="inline-block mx-2">
            <a href="#" className="hide_main_menu text-amber-700">
              ABOUT
            </a>
          </li>
          <li className="inline-block mx-2">
            <a href="#" className="hide_main_menu text-amber-800">
              CONTACT
            </a>
          </li>
        </ul>
        <a href="#" onClick={showMenu} className="burger_menu">
          <FontAwesomeIcon icon="fa-solid fa-bars" className="w-12 h-12" />
        </a>
        <ul className="absolute right-1 bg-amber-400">
          <li>
            <Link to="/" className="show_m_navigation p-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="show_m_navigation p-2">
              Development
            </Link>
          </li>
          <li>
            <a href="#" className="show_m_navigation p-2">
              Classes
            </a>
          </li>
          <li>
            <a href="#" className="show_m_navigation p-2">
              Guidance
            </a>
          </li>
          <li>
            <a href="#" className="show_m_navigation p-2">
              Recipes
            </a>
          </li>
          <li>
            <a href="#" className="show_m_navigation p-2">
              About
            </a>
          </li>
          <li>
            <a href="#" className="show_m_navigation p-2">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
