import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function NavUser() {
  const { user, setUser } = useUser();
  console.log(user)
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.clear("authUser");
    setUser(null);
    window.location.reload();
  };

  return (
    <div className="relative group">
      <div className="py-2 pl-3 pr-5 rounded-[50px] cursor-pointer">
        <div className="h-[42px] w-[42px] overflow-hidden rounded-full shadow-lg flex items-center justify-center">
          {user?.photoURL?.length > 0 ? (
            <img
              className="w-full h-full object-cover object-center"
              src={user?.photoURL}
              alt={user?.name}
            />
          ) : (
            <h3 className="text-darkBlue text-xl font-semibold drop-shadow-xl uppercase">
              {user?.name?.slice(0, 2)}
            </h3>
          )}
        </div>
      </div>

      <div className="absolute top-28 right-0 pt-2.5 opacity-0 invisible group-hover:top-full group-hover:visible group-hover:opacity-100 transition-all duration-300">
        <div className="min-w-max bg-white px-4 shadow-lg p-2 rounded-lg flex flex-col gap-0.5 justify-start items-start">
          <div className="">
            <p className="text-blue text-md">Welcome</p>
            <h3 className="text-[#050F36] text-md">{user?.name}</h3>
          </div>

          <Link
            className="py-2 px-2 transition duration-300 hover:bg-blue hover:text-primary w-full text-left rounded-md"
            // to="/profile"
            onClick={() => toast.loading("Coming Soon...")}
          >
            Profile
          </Link>

          <button
            className="py-2 px-2 transition duration-300 hover:bg-blue hover:text-primary w-full text-left rounded-md"
            onClick={() => handleLogOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
