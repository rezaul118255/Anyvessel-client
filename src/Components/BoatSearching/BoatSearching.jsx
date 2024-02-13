import { useEffect, useState } from "react";

// react icons
import { BsSearch } from "react-icons/bs";

// images
import AngleDown from "../../assets/images/angle-down.png";
import useUser from "../../hooks/useUser";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import RangeSlider from "../Inputs/RangeSlider";

const BoatSearching = () => {
  const [length, setLength] = useState(0);
  const [price, setPrice] = useState(0);
  const { user } = useUser();
  const [inputData, setInputData] = useState({
    boatType: "",
    boatLocation: "",
    crewType: "",
    priceRange: "",
    lengthRange: "",
  });

  // console.log("inputData ", inputData);

  const handleChanges = (e) => {
    const name = e.target?.name;
    setInputData({
      ...inputData,
      [e.target?.name]: e.target?.value,
    });
  };

  useEffect(() => {
    setInputData({
      ...inputData,
      lengthRange: length,
      priceRange: price,
    });
  }, [price, length]);

  // handle submit data
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("data searching ", inputData);
  };

  return (
    <section
      className={`${
        user ? "relative  md:mt-0" : "relative sm:-mt-48 md:-mt-28"
      }`}
    >
      <div className="container">
        <form
          //  onSubmit={handleSubmit(onSubmit)}
          onSubmit={onSubmit}
          className="flex flex-col gap-[45px] p-10 rounded-[10px] bg-white shadow-3xl"
        >
          {/* boat type select */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="relative w-full">
              <select
                //  {...register("boatType")}
                onChange={handleChanges}
                name="boatType"
                className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
              >
                <option value="">Boat Type</option>
                <option value="1">Boat Type 1</option>
                <option value="2">Boat Type 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr -3">
                <img src={AngleDown} alt="Custom Arrow" className="w-5" />
              </div>
            </div>

            {/* boat location select */}
            <div className="relative w-full">
              <select
                //  {...register("boatLocation")}
                onChange={handleChanges}
                name="boatLocation"
                className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
              >
                <option value="">Boat Location</option>
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <img src={AngleDown} alt="Custom Arrow" className="w-5" />
              </div>
            </div>

            {/* Crew select */}
            <div className="relative w-full">
              <select
                //  {...register("crew")}
                onChange={handleChanges}
                name="crewType"
                className="w-full text-darkBlue p-[10px] border border-b-midBlue border-transparent appearance-none leading-tight focus:outline-none focus:border focus:border-blue focus:rounded-md"
              >
                <option value="">#Crew</option>
                <option value="1">#Crew 1</option>
                <option value="2">#Crew 2</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <img src={AngleDown} alt="Custom Arrow" className="w-5" />
              </div>
            </div>
          </div>

          {/* length & price range */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* length range */}
            <div className="w-full flex flex-col text-darkBlue leading-6 gap-[10px]">
              <div className="flex items-center justify-between px-[10px]">
                <h4>Length</h4>
                <p>{length} - 100 M</p>
              </div>

              <RangeSlider maxValue="100" value={length} setValue={setLength} />
            </div>

            {/* price range */}
            <div className="w-full flex flex-col text-darkBlue leading-6 gap-[10px]">
              <div className="flex items-center justify-between px-[10px] rounded-full">
                <h4>Price</h4>
                <p>{price} - $ 4000 K</p>
              </div>

              <RangeSlider maxValue="4000" value={price} setValue={setPrice} />
            </div>

            {/* search button */}
            <div className="w-full">
              <ButtonPrimary type="submit" style="!rounded-full !w-full">
                <p className="flex justify-end items-center gap-4">
                  <BsSearch size="20" /> <span className="flex-1">Search</span>
                </p>
              </ButtonPrimary>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BoatSearching;
