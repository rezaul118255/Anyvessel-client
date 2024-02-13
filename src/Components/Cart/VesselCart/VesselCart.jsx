import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

// internal files
import Area from "../../../assets/images/area.png";
import Seat from "../../../assets/images/seat.png";
import User from "../../../assets/images/user.png";
import ButtonYellow from "../../Buttons/ButtonYellow";

const BoatCards = ({ boat }) => {
  const { _id, vessel, contact, location } = boat || {};
  // console.log(vessel);
  return (
    <>
      {/* single card */}
      <div className="shadow-sm bg-white rounded-lg overflow-hidden">
        {/* img */}
        <div className="h-[215px]">
          <img
            className="w-full h-full object-cover object-center"
            src={vessel.vesselImage}
            alt=""
          />
        </div>
        {/* details */}
        <div className="flex justify-between p-4">
          <h6 className="text-xl font-medium">{vessel.manufacturer}</h6>
          <p className="text-darkBlue flex items-center gap-3">
            <span className="text-base">
              <HiOutlineLocationMarker />
            </span>
            {location?.boarding_city}
          </p>
        </div>
        <div className="px-4 py-2">
          <p className=" text-lightBlue text-sm font-light line-clamp-3">
            {vessel.vessel_description}
          </p>
        </div>

        <div className="text-center border-t mt-3 border-blue">
          {/* boat bottom area */}
          <div className="py-3">
            <div className="lg:px-4 flex items-center justify-between gap-3 md:gap-2 font-light">
              {numberAreaUser(Area, `${vessel.vessel_area} M`)}
              {numberAreaUser(User, `${vessel.vessel_area} M`)}
              {numberAreaUser(Seat, `${vessel.number_crew} M`)}
            </div>

            <div className="px-5 mt-6 mb-2 grid grid-cols-12 items-center justify-between">
              <div className="col-span-9">
                <div className="text-center flex flex-wrap gap-3">
                  <Link to={`/boat_details/${_id}`}>
                    <ButtonYellow>See More</ButtonYellow>
                  </Link>
                </div>
              </div>

              <p className="text-xl font-semibold col-span-3">
                ${vessel.vessel_price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoatCards;

// reuseable function
function numberAreaUser(imgSource, numberArea) {
  return (
    <p className="flex items-center gap-3">
      <figure className="w-5 h-6 flex items-center justify-center">
        <img className="w-full h-auto" src={imgSource} alt="" />
      </figure>
      {numberArea}
    </p>
  );
}
