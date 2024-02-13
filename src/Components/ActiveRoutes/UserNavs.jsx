import useUser from "../../hooks/useUser";
import UserActiveLink from "../ActiveLinks/UserActiveLink";
// import useCurrentUser from "../hooks/useCurrentUser";
// import UserActiveLink from "./ProfileLink";

const UserNavs = () => {
  const { user } = useUser();
  // console.log("currentUser -> ", currentUser);
  return (
    <nav className="bg-white px-8 py-5 rounded-lg">
      <ul className="flex items-center flex-wrap gap-x-10 gap-y-1">
        {/* only boat route */}
        {user?.role === "boat" && (
          <>
            <li>
              <UserActiveLink to="">CHARTER COMPANY</UserActiveLink>
            </li>
            <li>
              <UserActiveLink to="/vessel">Vessel</UserActiveLink>
            </li>
            <li>
              <UserActiveLink to="/location">Location</UserActiveLink>
            </li>
            <li>
              <UserActiveLink to="/contact">Contact details</UserActiveLink>
            </li>
            <li>
              <UserActiveLink to="/advertised">
                Advertised Position
              </UserActiveLink>
            </li>
            <li>
              <UserActiveLink to="/booking">Booking calendar</UserActiveLink>
            </li>
          </>
        )}

        {/* only crew route */}
        {user?.role === "crew" && (
          <>
            <li>
              <UserActiveLink to="/">Crew Establishment</UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/crew-location">Location</UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/crew-contact-details">
                Contact Details
              </UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/crew-service"> Service </UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/crew-advert"> Advert </UserActiveLink>
            </li>
          </>
        )}

        {/* only boat service route */}
        {user?.role === "boatServices" && (
          <>
            <li>
              <UserActiveLink to="/">
                Boat services establishment
              </UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/service-location">Location</UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/contact-details">
                Contact Details
              </UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/boat-service"> Service </UserActiveLink>
            </li>

            <li>
              <UserActiveLink to="/advert"> Advert </UserActiveLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default UserNavs;
