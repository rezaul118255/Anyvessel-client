import { Link } from "react-router-dom";
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
import BoatCards from "../../../Components/Cart/VesselCart/VesselCart";
import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import useAllBoatSailingPost from "../../../hooks/useAllBoatSailingPost";

const FeaturedBoat = () => {
  const { boatSellPost } = useAllBoatSailingPost();
  const boatList = boatSellPost?.slice(0, 3) || [];
  // console.log("boatList ", boatList);

  return (
    <>
      {boatSellPost?.length ? (
        <PageSection>
          <SectionTitle title="Featured Boats to work in" />

          <div className="py-4 sm:py-6 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
              {boatList?.map((boat, idx) => (
                <BoatCards key={idx} boat={boat} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/boat-search">
              <ButtonPrimary>
                <span>View more</span>
              </ButtonPrimary>
            </Link>
          </div>
        </PageSection>
      ) : (
        ""
      )}
    </>
  );
};

export default FeaturedBoat;
