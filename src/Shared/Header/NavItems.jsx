import { useLocation } from "react-router-dom";
import ActiveLink from "../../Components/ActiveLinks/ActiveLink";
import useUser from "../../hooks/useUser";
import NavItemProfile from "./NavItemProfile";

const NavItems = () => {
  const location = useLocation();
  const { user } = useUser();
  // console.log("user ", user);

  const navbarData = [
    {
      label: "Home",
      route: "/",
      name: "home",
      id: "home",
      icons: null,
    },
    {
      label: "About Us",
      route: "/about-us",
      name: "about_us",
      id: "about_us",
      icons: null,
    },
    {
      label: "Crew Search",
      route: "/crew-search",
      name: "crew_search",
      id: "crew_search",
      icons: null,
    },
    {
      label: "Boat Search",
      route: "/boat-search",
      name: "boat_search",
      id: "boat_search",
      icons: null,
    },
    {
      label: "Boat for sale",
      route: "/boat-for-sale",
      name: "boat_sale",
      id: "boat_sale",
      icons: null,
    },
    {
      label: "Boat services",
      route: "/boat-services",
      name: "boat_services",
      id: "boat_services",
      icons: null,
    },
  ];

  return (
    <>
      {/* <ul className="flex flex-col md:flex-row justify-end items-center gap-3"> */}
      {navbarData &&
        navbarData.map((item, idx) => (
          <li key={idx}>
            <ActiveLink children={item?.label} to={item?.route} />
          </li>
        ))}

      <div className="hidden lg:flex flex-col md:flex-row justify-end items-center gap-3 ">
        <NavItemProfile />
      </div>

      {/* </ul> */}
    </>
  );
};

export default NavItems;
