import BoatSearching from "../../Components/BoatSearching/BoatSearching";
import UserLt from "../../Layouts/UserLt";
import useUser from "../../hooks/useUser";
import AboutAnyVessel from "./AboutAnyVessel/AboutAnyVessel";
import BgWallpaper from "./BgWallpaper/BgWallpaper";
import BoatSelling from "./BoatSelling/BoatSelling";
import FeaturedBoat from "./FeaturedBoat/FeaturedBoat";
import HeroBanner from "./HeroBanner/HeroBanner";
import MeetCrew from "./MeetCrew/MeetCrew";
import Reviews from "./Reviews/Reviews";

// Home Page
export default function index() {
  const { user } = useUser();
  return (
    <>
      {user?.email ? <UserLt /> : <HeroBanner />}
      <BoatSearching />
      <AboutAnyVessel />
      <FeaturedBoat />
      <BgWallpaper />
      <MeetCrew />
      <Reviews />
      <BoatSelling />
    </>
  );
}
