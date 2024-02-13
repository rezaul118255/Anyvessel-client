import { useState } from "react";

// images
import toast from "react-hot-toast";
import { validateInputData } from "../../../../Utils/validateInputData";
import uploadImg from "../../../../assets/images/upload-ico.png";
import useAxios from "../../../../hooks/useAxios";
import useUser from "../../../../hooks/useUser";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";
import Input from "../../../Inputs/Input";
import InputToggle from "../../../Inputs/InputToggle";
import SelectOption from "../../../Inputs/SelectOption";
import UploadImage from "../../../Uploads/UploadImage";

const AddVessel = () => {
  const { user } = useUser();
  const { Axios } = useAxios();
  const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState({
    registry: "",
    vesselImg: "",
    owner_photo: "",
    category: "",
    sailing_boats: "",
    // inputs field
    manufacturer: "",
    vessel_length: "",
    vessel_area: "",
    vessel_price: "",
    number_crew: "",
    vessel_contact_number: "",
    vessel_contact_email: "",
    vessel_description: "",
    boatForSale: "",
    forCharter: "",
  });
  const handleChange = (e) => {
    // console.log("e ", e?.type);

    if (e?.type === "checkbox") {
      return setInputData({
        ...inputData,
        [e?.name]: e?.checked,
      });
    }
    return setInputData({
      ...inputData,
      [e?.name]: e?.value,
    });
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  console.log("inputData ", inputData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit inputData ", inputData);

    // error handle
    setErrors(null);
    const errorArr = validateInputData(inputData);
    console.log("errorArr ", errorArr);
    console.log("errors ", errors);
    if (errorArr?.length) return setErrors(errorArr);

    const newData = {
      userId: user?._id,
      postDate: formattedDate,
      postId: Math.floor(1000000000 + Math.random() * 900000),
      vessel: {
        registry: inputData?.registry,
        number_crew: inputData?.number_crew,
        vesselImg: inputData?.vesselImg,
        ownerImage: inputData?.ownerImage,
        category: inputData?.category,
        sailing_boats: inputData?.sailing_boats,
        boatForSale: inputData?.boatForSale,
        forCharter: inputData?.forCharter,
        manufacturer: inputData?.manufacturer,
        vessel_length: inputData?.vessel_length,
        vessel_area: inputData?.vessel_area,
        vesselName: inputData?.vesselName,
        vessel_price: inputData?.vessel_price,
        vessel_description: inputData?.vessel_description,
        vessel_weight: inputData?.vessel_weight,
        vessel_contact_email: inputData?.vessel_contact_email,
        vessel_contact_number: inputData?.vessel_contact_number,
      },
    };
    console.log("newData ", newData);

    Axios.post("/boatSailing", newData)
      .then((res) => {
        if (res?.data) {
          toast.success("Vessel Added Successfully!");
        }
      })
      .catch((err) => {
        toast.error("Something Wrong!");
        console.log(err);
      });
  };

  return (
    <>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-midBlue pb-8 mb-6 gap-5">
          <div className="w-full flex items-center justify-between gap-5 lg:gap-16">
            {/* Upload vessel Photos */}
            <div>
              <UploadImage
                id="vessel"
                name="vesselImg"
                handle={handleChange}
                uploadBtn={false}
              >
                <div>
                  <p className="font-light mb-2 text-sm md:text-base">
                    Upload vessel Photos
                  </p>
                  <label
                    htmlFor="vessel"
                    className="w-full h-32 mdx:h-44 p-2 lg:p-4 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                  >
                    <img src={uploadImg} alt="upload img" />
                    <p className="text-center text-sm text-darkBlue font-light mt-1">
                      Click to upload image
                    </p>
                  </label>
                </div>
              </UploadImage>
            </div>

            {/* Upload vessel Photos */}
            <div>
              <UploadImage
                id="owner_photo"
                name="owner_photo"
                uploadBtn={false}
                handle={handleChange}
              >
                <div>
                  <p className="font-light mb-2 text-sm md:text-base">
                    Upload Owner Photo
                  </p>
                  <label
                    htmlFor="owner_photo"
                    className="w-full h-32 mdx:h-44 p-4 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
                  >
                    <img src={uploadImg} alt="upload img" />
                    <p className="text-center text-sm text-darkBlue font-light mt-1">
                      Click to upload image
                    </p>
                  </label>
                </div>
              </UploadImage>
            </div>
          </div>

          {/* Vessel Category or port */}
          <div className="w-full md:mt-14 lg:mt-8 flex flex-col justify-between gap-4">
            <div>
              {/* Sailing Boats */}
              <SelectOption
                defaultOption="Home Port of Registry"
                handle={handleChange}
                name="registry"
                items={homeRegistry}
              />
            </div>
            <div>
              {/* Vessel Category */}
              <SelectOption
                defaultOption="Vessel Category"
                handle={handleChange}
                name="category"
                items={category}
              />
            </div>
            <div>
              {/* Sailing Boats */}
              <SelectOption
                defaultOption="Sailing Boats"
                handle={handleChange}
                name="sailing_boats"
                items={boatSailing}
              />
            </div>
          </div>
        </div>

        <div className="md:grid grid-cols-1 md:grid-cols-2 mt-3 gap-x-12 gap-y-5 px-5">
          {/* VESSEL Manufacturer/ MODEL */}
          <Input
            id="manufacturer"
            name="manufacturer"
            labelText="VESSEL Manufacturer/ MODEL"
            placeholder="VESSEL Manufacturer/ MODEL"
            handle={handleChange}
            valid={errors}
          />

          {/* Vessel Name */}
          <Input
            id="vesselName"
            name="vesselName"
            labelText="Vessel Name"
            placeholder="Vessel Name"
            handle={handleChange}
            valid={errors}
          />

          {/* VESSEL Length */}
          <Input
            id="vessel_length"
            name="vessel_length"
            labelText="VESSEL Length"
            placeholder="VESSEL Length"
            handle={handleChange}
            valid={errors}
          />

          {/* Vessel Weight */}
          <Input
            id="vessel_weight"
            name="vessel_weight"
            labelText="Vessel weight"
            placeholder="Vessel weight"
            handle={handleChange}
            valid={errors}
          />

          {/* VESSEL Area */}
          <Input
            id="vessel_area"
            name="vessel_area"
            labelText="VESSEL AREA"
            placeholder="VESSEL AREA"
            handle={handleChange}
            valid={errors}
          />

          {/* Vessel Price */}
          <Input
            id="vessel_price"
            name="vessel_price"
            labelText="Vessel Price ($)"
            placeholder="Vessel Price ($)"
            handle={handleChange}
            valid={errors}
          />

          {/* Number of crew on board ? */}
          <Input
            id="number_crew"
            name="number_crew"
            labelText="Number of crew on board ?"
            placeholder="Number of crew on board ?"
            handle={handleChange}
            valid={errors}
          />

          {/* vessel contact number */}
          <Input
            id="vessel_contact_number"
            name="vessel_contact_number"
            labelText="vessel contact number"
            placeholder="vessel contact number"
            type="number"
            handle={handleChange}
            valid={errors}
          />

          {/* vessel contact email*/}
          <Input
            id="vessel_contact_email"
            name="vessel_contact_email"
            labelText="vessel contact email"
            placeholder="vessel contact email"
            type="email"
            handle={handleChange}
            valid={errors}
          />

          {/* Vessel Description */}
          <Input
            id="vessel_description"
            name="vessel_description"
            labelText="Vessel Description"
            placeholder="Vessel Description"
            handle={handleChange}
            valid={errors}
          />

          {/* Boat For Sale */}
          <InputToggle
            id="boatForSale"
            name="boatForSale"
            labelText="Boat For Sale"
            handle={handleChange}
            valid={errors}
          />

          {/* Boat For Sale */}
          <InputToggle
            id="forCharter"
            name="forCharter"
            labelText="For Charter"
            handle={handleChange}
            valid={errors}
          />
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <ButtonPrimary type="submit">
            <span> Add new Vessel </span>
          </ButtonPrimary>

          <ButtonPrimary type="submit" styleReverse={true}>
            <span> Cancel </span>
          </ButtonPrimary>
        </div>
      </form>
    </>
  );
};

export default AddVessel;

// Sailing Boats options
var homeRegistry = [
  { text: 2000, value: 2000 },
  { text: 2001, value: 2001 },
  { text: 2002, value: 2002 },
  { text: 2003, value: 2003 },
];

// Vessel Category options
var category = [
  { text: "Cruise Ships", value: "Cruise Ships" },
  { text: "Ferries", value: "Ferries" },
  { text: "Yachts", value: "Yachts" },
  { text: "Catamarans", value: "Catamarans" },
  { text: "Submarines", value: "Submarines" },
  { text: "Frigates", value: "Frigates" },
  { text: "Coast Guard Cutters", value: "Coast Guard Cutters" },
  { text: "Patrol Boats", value: "Patrol Boats" },
  { text: "Submersibles", value: "Submersibles" },
  { text: "Battleships", value: "Battleships" },
  { text: "Icebreakers", value: "Icebreakers" },
  { text: "Destroyers", value: "Destroyers" },
  { text: "Fireboats", value: "Fireboats" },
  { text: "Aircraft Carriers", value: "Aircraft Carriers" },
];

// Sailing Boats options
var boatSailing = [
  { text: 2000, value: 2000 },
  { text: 2001, value: 2001 },
  { text: 2002, value: 2002 },
  { text: 2003, value: 2003 },
];

// function SelectOption({ name, handle, items = [], defaultOption }) {
//   return (
//     <>
//       <select
//         name={name}
//         onChange={(e) => handle(e.target)}
//         className="text-darkBlue w-full border border-midBlue rounded-[10px] outline-none focus:border-blue p-2 sm:pr-3"
//       >
//         <option value=""> {defaultOption} </option>
//         {items?.length
//           ? items?.map(({ text, value }, idx) => (
//               <option key={idx} value={value}>
//                 {text}
//               </option>
//             ))
//           : null}
//       </select>
//     </>
//   );
// }
