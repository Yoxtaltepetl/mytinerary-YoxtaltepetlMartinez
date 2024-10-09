import logo from "../assets/logo.png";
import acceso from "../assets/acceso.png";
import menu from "../assets/menu.png";

export default function Header() {
  function openMenu() {
    let menu = document.getElementById("menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  }

  return (
    <header className="sticky top-0 left-0 z-10 w-full">
      <nav className="bg-gray-800 relative ">
        <div className="mx-auto flex px-4 xl:px-0 h-12 justify-between">
          <div className="flex flex-grow items-center h-8 w-8 mt-2 sm:ml-5 ">
            <img className="h-8 hover:cursor-pointer" src={logo} alt=""></img>
            <h4 className="text-white ml-4 text-xl hover:cursor-pointer ">MyTinerary</h4>
          </div>

          <div
            id="menu"
            className="md:flex hidden flex-grow justify-between absolute mt-2 md:relative md:top-0 top-8 left-0 bg-gray-800 w-full md:w-auto items-center h-auto"
          >
            <div className="flex flex-col md:flex-row justify-center items-center">
              <a href="#hero" className="text-white md:mr-7 mb-3">
                Home
              </a>
              <a href="#cities" className="text-white md:mr-7 mb-3">
                Cities
              </a>
              <a href="#carousel" className="text-white md:mr-7 mb-3">
                Popular Mytineraries
              </a>
            </div>
          </div>

          <div className="flex sm:mr-1 md:mr-0 mt-2">
            <img className="h-8 w-8 mr-3 sm:mr-4" src={acceso} alt="" />
            <img
              className="flex md:hidden h-8 w-8"
              src={menu}
              alt=""
              onClick={() => openMenu()}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
