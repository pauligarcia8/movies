import logo from "../../public/popcorn.png";
import sun from "../../public/sun.png";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 mx-auto px-4 font-medium text-sm">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div>
            <img className="size-12" src={logo} />
          </div>
          <div className="ml-4">
            <a className="px-4 py-3 rounded-md hover:bg-gray-700" href="">Movies 1</a>
            <a className="px-4 py-3 rounded-md hover:bg-gray-700" href="">Movies 2</a>
            <a className="px-4 py-3 rounded-md hover:bg-gray-700" href="">Movies 3</a>
          </div>
        </div>
        <div>
          <button className="px-4 py-3">
            <img className="size-6" src={sun}/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
