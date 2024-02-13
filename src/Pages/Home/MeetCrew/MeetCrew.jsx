import { Link } from "react-router-dom";
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
import PageSection from "../../../Components/PageSection";
import SectionTitle from "../../../Components/SectionTitle";
import useAllCrew from "../../../hooks/useAllCrew";
// import CrewCart from "../../../Components/Cart/CrewCart/CrewCart";

const MeetCrew = () => {
  const { allCrewData } = useAllCrew();
  // console.log("allCrewData ", allCrewData);

  const CrewList = allCrewData?.crews?.slice(0, 3) || [];
  // console.log("CrewList ", CrewList);

  return (
    <>
      {allCrewData?.crews?.length ? (
        <PageSection>
          <SectionTitle title="Meet Your Crew" />

          <div className="py-4 sm:py-6 md:py-10 lg:py-12">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
              {CrewList?.map((crew, idx) => (
                <CrewCart key={idx} crew={crew} />
              ))}
            </div> */}

            <h1 className="text-3xl text-darkBlue"> Coming soon ... </h1>
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

export default MeetCrew;
