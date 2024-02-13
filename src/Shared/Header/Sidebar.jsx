import { useState } from "react";
import { crossIcons } from "../../Utils/all-icons-svg";
import Identity from "./Identity";
import NavItems from "./NavItems";

const SideNav = ({ isOpen, toggle }) => {
  const [route, setRoute] = useState(false);

  return (
    <>
      <aside
        className={`lg:hidden fixed top-0 bg-white w-full min-w-72 max-w-[350px] h-screen p-5 z-50 duration-300 ease-in ${
          isOpen ? "right-0 visible" : "-right-full invisible"
        }`}
      >
        <div className="flex items-center justify-between border-b border-blue/60 pb-2">
          {/* logo */}
          <Identity />

          {/* close button */}
          <button
            onClick={toggle}
            className="p-3 bg-primary text-white rounded-full"
          >
            {crossIcons}
          </button>
        </div>

        {/* nav items */}
        <ul className="lg:hidden flex flex-col mt-4">
          <NavItems toRoute={route} />
        </ul>
      </aside>
      {/* overlay */}
      <div
        onClick={toggle}
        className={`fixed lg:hidden w-full h-screen top-0 left-0 z-30 bg-dark bg-opacity-30 duration-300 ease-in ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

export default SideNav;
