import calculateAge from "../../../../Utils/calculateAge";
import useProfileData from "../../../../hooks/useProfileData";
import BoatOwnerPost from "./Blogs/BoatOwnerPost";
import BoatOwnerImgGallery from "./BoatOwnerImgGallery";

const Charter = () => {
  const { profileData } = useProfileData();
  console.log("profileData ", profileData);

  return (
    <section>
      {!profileData && isUserLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <div className="flex gap-8 py-5">
            {/* profile image */}
            <div className="relative shrink-0">
              <figure>
                <img
                  className="w-28 h-28 object-cover rounded-full"
                  src={profileData?.picture}
                  alt=""
                />
              </figure>
              <figure className="w-[52px] h-[52px] object-cover rounded-full absolute -bottom-1 sm:-bottom-5 -right-1 border-[3px] border-white overflow-hidden">
                <img
                  className="w-full h-full"
                  src={profileData?.nationality?.flags?.svg}
                  alt={profileData?.nationality?.flags?.alt}
                />
              </figure>
            </div>

            {/* company info */}
            <div className="w-[750px]">
              <div className="mb-3">
                <h2 className="text-xl text-[#050F36] font-medium">
                  {profileData?.fullName}
                  <span className="text-lightBlue text-xs sm:text-base block sm:inline ml-3">
                    ({calculateAge(profileData?.birthday)} years old)
                  </span>
                </h2>

                <p className="text-blue font-light">Boat Owner</p>
              </div>
              <p className="line-clamp-2 font-light text-black">
                {profileData?.description}
              </p>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-8 pb-5 border-b border-blue">
            <BoatOwnerImgGallery />
          </div>

          <BoatOwnerPost />
        </>
      )}
    </section>
  );
};

export default Charter;
