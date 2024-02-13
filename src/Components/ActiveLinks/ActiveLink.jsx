import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "inline-block py-1.5 lg:inline text-[17px] border-b-2 px-2 duration-300 text-dark font-medium border-dark "
          : "inline-block py-1.5 lg:inline text-[17px] border-b-2 px-2 duration-300 text-gray hover:text-dark border-transparent hover:border-dark"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
