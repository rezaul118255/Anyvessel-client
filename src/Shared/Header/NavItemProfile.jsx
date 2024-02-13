import { Link } from "react-router-dom";
import ButtonPrimary from "../../Components/Buttons/ButtonPrimary";
import useUser from "../../hooks/useUser";
// import useAuth from "../hooks/useAuth";

const NavItemProfile = () => {
  const { user, logOut } = useUser();

  // logOut
  console.log("user ", user);


  return (
    <>
      {user?.email ? (
        <>
          <li className="relative group">
            <div className="flex items-center gap-4 py-2 pl-3 pr-5 rounded-[50px] border-2 border-blue">
              <div className="h-[42px] w-[42px] overflow-hidden rounded-full shadow-lg flex items-center justify-center">
                {user?.picture?.length > 0 ? (
                  <img
                    className="w-full h-full object-cover object-center"
                    src={user?.picture}
                    alt={user?.fullName}
                  />
                ) : (
                  <h3 className="text-darkBlue text-xl font-semibold drop-shadow-xl uppercase">
                    {user?.fullName?.slice(0, 2)}
                  </h3>
                )}
              </div>
              <div>
                <p className="text-blue text-sm">Welcome</p>
                <h3 className="text-[#050F36] text-sm">
                  {user?.fullName?.split(" ", 2).join(" ")}
                </h3>
              </div>
            </div>

            <div className="absolute top-28 right-0 pt-2.5 opacity-0 invisible group-hover:top-full group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <div className="min-w-max bg-white  shadow-lg p-2 rounded-lg flex flex-col gap-0.5 justify-start items-start">
                <div className="">
                  <p className="text-blue text-md">Welcome</p>
                  <h3 className="text-[#050F36] text-md">{user?.fullName}</h3>
                </div>

                <Link
                  className="py-2 px-2 transition duration-300 hover:bg-blue hover:text-white w-full text-left rounded-md"
                  to="/profile"
                >
                  Profile
                </Link>

                <button
                  className="py-2 px-2 transition duration-300 hover:bg-blue hover:text-white w-full text-left rounded-md"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </div>
            </div>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <ButtonPrimary style="!rounded-full">Login</ButtonPrimary>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <ButtonPrimary style="!rounded-full" styleReverse={true}>
                Sign Up
              </ButtonPrimary>
            </Link>
          </li>
        </>
      )}
    </>
  );
};

export default NavItemProfile;
