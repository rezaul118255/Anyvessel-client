import { useEffect, useState } from "react";
import { barsIcon } from "../../Utils/all-icons-svg";
import useUser from "../../hooks/useUser";
import Identity from "./Identity";
import NavItems from "./NavItems";
import SideNav from "./Sidebar";

const Header = () => {
  const { user, logOut } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [navState, setNavState] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onNavScroll = () => {
    if (window.scrollY > 300) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
  }, []);

  return (
    <div className="mx-auto relative container">
      <nav
        className={`px-8 fixed max-w-7xl left-1/2 -translate-x-1/2 mx-auto h-20 w-full duration-300 ease-in-out ${
          navState
            ? "backdrop-blur-md bg-white/60 shadow-green/10"
            : "bg-white backdrop-blur-md"
        } z-50`}
      >
        <div className="relative flex items-center justify-end h-full">
          <div
            style={{ width: "clamp(1.5rem, 100%, 9rem)" }}
            className="absolute left-0 top-0 h-36 w-44 bg-white !p-5 rounded-b-lg shadow-xl"
          >
            <Identity style="h-full" />
          </div>

          <ul className="hidden lg:flex items-center justify-end gap-5">
            <NavItems />
          </ul>

          {/* toggle button */}
          <button onClick={toggle} className="lg:hidden text-blue py-5 px-3">
            <span className="text-3xl">{barsIcon}</span>
          </button>

          {/* side navbar */}
          <SideNav isOpen={isOpen} toggle={toggle} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
