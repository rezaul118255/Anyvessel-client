import { Outlet, useNavigate } from "react-router-dom";
import UserNavs from "../Components/ActiveRoutes/UserNavs";
import BannerBg from "../assets/images/hero-bg.png";
import useUser from "../hooks/useUser";

const UserLt = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user?.email)
    return navigate("/login", { replace: true, state: "/vessel" });

  return (
    <>
      <section
        style={{ backgroundImage: `url(${BannerBg})` }}
        className="relative min-h-[500px] md:min-h-[730px] bg-cover bg-center py-14"
      >
        <div className="container grid grid-cols-11 gap-8">
          <div className="col-span-11 rounded-lg lg:h-[870px]">
            {/* Sidebar */}
            <UserNavs />

            {/* Outlet */}
            <main
              title="Scroll Now"
              className="max-h-[700px] overflow-x-auto no-scrollbar bg-white p-8 mt-6 rounded-lg"
            >
              <Outlet />
            </main>
          </div>

          {/* <div className="col-span-3 bg-white rounded-lg text-center">Chat</div> */}
        </div>
      </section>
    </>
  );
};

export default UserLt;
