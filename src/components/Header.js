import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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
    <div className="text-stone-900 container mx-auto mb-10 mt-10">
      <img
        src={require("../assets/images/logo.png")}
        alt="Logo"
        className="w-36 h-36 mx-auto"
      />
      {/* <h1 className="underline font-bold md:ml-14 text-5xl font-mono">{props.websitename}</h1> */}
      <nav className="md:flex items-center justify-center mt-2">
        <ul className="md:text-lg lg:text-2xl text-2xl italic font-serif">
          <li className="lg:mx-6 md:mx-4 md:inline-block ">
            <Link
              to="/"
              className="hide_main_menu text-stone-500/75 hover:text-stone-700"
            >
              HOME
            </Link>
          </li>
          <li className="lg:mx-6 md:mx-4 md:inline-block ">
            <Link
              to="/recipes"
              className="hide_main_menu text-stone-500/75 hover:text-stone-700"
            >
              RECIPES
            </Link>
          </li>
          <li className="lg:mx-6 md:mx-4 md:inline-block ">
            <a
              href="#"
              className="hide_main_menu text-stone-500/75 hover:text-stone-700"
            >
              CLASSES
            </a>
          </li>
          <li className="lg:mx-6 md:mx-4 md:inline-block ">
            <a
              href="#"
              className="hide_main_menu text-stone-500/75 hover:text-stone-700"
            >
              DEVELOPMENT
            </a>
          </li>
          <li className="lg:mx-6 md:mx-4 md:inline-block ">
            <a
              href="#"
              className="hide_main_menu text-stone-500/75 hover:text-stone-700"
            >
              CONTACT
            </a>
          </li>
          <li className="lg:mx-6 md:mx-4 md:inline-block ">
            <a href="#" onClick={showMenu} className="burger_menu">
              <FontAwesomeIcon icon="fa-solid fa-bars" className="w-12 h-12" />
            </a>
          </li>
          <li>
            <Link to="/" className="show_m_navigation">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="show_m_navigation">
              Recipes
            </Link>
          </li>
          <li>
            <a href="#" className="show_m_navigation">
              Classes
            </a>
          </li>
          <li>
            <a href="#" className="show_m_navigation">
              Development
            </a>
          </li>
          <li>
            <a href="#" className="show_m_navigation">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
