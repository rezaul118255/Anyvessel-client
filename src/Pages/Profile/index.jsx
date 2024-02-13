import useUser from "../../hooks/useUser";
import BoatProfile from "./BoatProfile/BoatProfile";
import BoatService from "./BoatService/BoatService";
import CrewProfile from "./CrewProfile/CrewProfile";

// Profile
const index = () => {
  const { user } = useUser();

  return (
    <>
      <div>
        {user?.role === "boat" ? (
          <BoatProfile />
        ) : user?.role === "crew" ? (
          <CrewProfile />
        ) : user?.role === "boat_service" ? (
          <BoatService />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default index;
