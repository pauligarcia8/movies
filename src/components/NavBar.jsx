import { NavLink } from "react-router";
import logo from "/popcorn.png";
import sun from "/sun.png";
import { useContext } from "react";
import { MoviesContext } from "../store/movies-context";

const NavBar = () => {
  const { setCategories } = useContext(MoviesContext);
  return (
    <nav className="bg-gray-900 text-gray-100 mx-auto px-4 font-medium text-sm">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div>
            <img className="size-12" src={logo} />
          </div>
          <div className="ml-4">
            <NavLink
              to="/"
              onClick={() => {
                setCategories("popular");
              }}
              className="px-4 py-3 rounded-md hover:bg-gray-700"
              href=""
            >
              Popular
            </NavLink>

            <NavLink
              to="/top-rated"
              onClick={() => {
                setCategories("top_rated");
              }}
              className="px-4 py-3 rounded-md hover:bg-gray-700"
              href=""
            >
              Top Rated
            </NavLink>
            <NavLink
              to="/upcoming"
              onClick={() => {
                setCategories("upcoming");
              }}
              className="px-4 py-3 rounded-md hover:bg-gray-700"
              href=""
            >
              Upcoming
            </NavLink>
            <NavLink
              to="/favorites"
              onClick={() => {
                setCategories("favorites");
              }}
              className="px-4 py-3 rounded-md hover:bg-gray-700"
              href=""
            >
              Favorites
            </NavLink>
          </div>
        </div>
        <div>
          <button className="px-4 py-3">
            <img className="size-6" src={sun} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
