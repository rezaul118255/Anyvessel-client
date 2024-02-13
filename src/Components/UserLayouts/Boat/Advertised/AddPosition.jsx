import { useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import useUser from "../../../../hooks/useUser";
import Input from "../../../Inputs/Input";
import InputDate from "../../../Inputs/InputDate";
import InputRadioBox from "../../../Inputs/InputRadioBox";
import SelectOption from "../../../Inputs/SelectOption";
import Textarea from "../../../Inputs/Textarea";
import toast from "react-hot-toast";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";

const AddPosition = () => {
  const { Axios } = useAxios();
  const { user } = useUser();
  const [radioValue, setRadioValue] = useState({
    expertise_level: null,
    payroll_status: null,
    experience: null,
  });
  const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState({
    registry: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("Coming Soon...");

    // const newData = {
    //   ownerUserId: user?._id,
    //   ownerUserEmail: user?.email,
    //   expertise_level: radioValue?.expertise_level,
    //   payroll_status: radioValue?.payroll_status,
    //   experience: radioValue?.experience,
    //   advertised_Position: data.advertised_Position,
    //   wage: data.wage,
    //   gender: data.gender,
    //   certificate: data.certificate,
    //   collaborative: data.collaborative,
    //   jobAdvert: data.jobAdvert,
    //   job_experience: data.job_experience,
    //   visa: data.visa,
    //   to_from_expenses: data.to_from_expenses,
    //   tattoos: data.tattoos,
    //   interview: data.interview,
    //   availability: `${data.availabilityStartDay}, ${data.availabilityStartMonth} , ${data.availabilityStartYear} to ${data.availabilityEndDay}, ${data.availabilityEndMonth} , ${data.availabilityEndYear} `,
    // };

    // console.log("newData ", newData);
    /*
    Axios.post("boatOwner-advertised", newData)
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Boat Sailing post submit Successful!");
        }

        if (res?.status === 201) {
          toast.success("Boat Sailing post already submitted!");
        }
      })
      .catch((err) => {
        toast?.error("Somethings wrong plz try again");
        console.log(err);
      });
      */
  };

  return (
    <>
      <section>
        <div
          className="max-h-[650px] overflow-y-scroll no-scrollbar"
          title="Scroll Now"
        >
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between flex-col md:flex-row mb-5">
              <div className="w-auto md:w-[750px]">
                <InputRadioBox
                  serial="1"
                  id="expertise_level"
                  name="expertise_level"
                  handle={handleChange}
                  labelText1={{ value: "Professional", text: "Professional" }}
                  labelText2={{ value: "Recreational", text: "Recreational" }}
                />
                <InputRadioBox
                  serial="2"
                  id="payroll_status"
                  name="payroll_status"
                  handle={handleChange}
                  labelText1={{ value: "paid", text: "Paid Position" }}
                  labelText2={{ value: "unpaid", text: "Unpaid Position" }}
                />
                <InputRadioBox
                  serial="3"
                  id="experience"
                  name="experience"
                  handle={handleChange}
                  setRadioValue={setRadioValue}
                  labelText1={{ value: "skilled", text: "Skilled Crew" }}
                  labelText2={{ value: "fresher", text: "No Experience" }}
                />
              </div>
            </div>

            <div className="mb-6 grid grid-cols-12 gap-8">
              <div className="col-span-12 md:col-span-6 space-y-3 ">
                {/* POSITION */}
                <div>
                  <SelectOption
                    labelText="POSITION"
                    defaultOption="Will be discussed with the Owner"
                    handle={handleChange}
                    name="advertised_Position"
                    id="advertisedPosition"
                    items={advertisedPositionOptions}
                  />
                </div>

                {/* WAGE */}
                <div>
                  <SelectOption
                    labelText="WAGE"
                    defaultOption="Will be discussed with the Owner"
                    handle={handleChange}
                    name="wage"
                    id="wage"
                    items={wageOptions}
                  />
                </div>

                {/* GENDER WANTED FOR THE JOB */}
                <div>
                  <SelectOption
                    labelText="GENDER WANTED FOR THE JOB"
                    defaultOption="Gender"
                    handle={handleChange}
                    name="gender"
                    id="gender"
                    items={genderOptions}
                  />
                </div>

                {/* CERTIFICATION */}
                <div>
                  <SelectOption
                    labelText="CERTIFICATION NEEDED"
                    defaultOption="Select Certification"
                    handle={handleChange}
                    name="certificate"
                    id="collaborative"
                    items={certificateOptions}
                  />
                </div>

                {/* AVAILABILITY */}
                <div>
                  <small className="text-darkBlue font-semibold">
                    AVAILABILITY
                  </small>
                  <label
                    htmlFor="availability"
                    className="flex items-center py-1 border-midBlue border rounded-md overflow-hidden"
                  >
                    <div className="flex flex-col items-center justify-center gap-1 ">
                      <div className="flex flex-row items-center pl-1 gap-1">
                        <label
                          htmlFor="fromAvailability"
                          className="text-darkBlue px-2"
                        >
                          From :
                        </label>
                        <InputDate
                          name="from"
                          id="fromAvailability"
                          handle={handleChange}
                          styleCol="!flex-nowrap"
                        />
                      </div>
                      <div className="flex flex-row items-center pl-1 gap-1">
                        <label
                          htmlFor="toAvailability"
                          className="text-darkBlue px-2"
                        >
                          to :
                        </label>
                        <InputDate
                          name="to"
                          id="toAvailability"
                          handle={handleChange}
                          styleCol="!flex-nowrap"
                        />
                      </div>
                    </div>
                  </label>
                </div>

                {/* EXPENSES ONBOARD */}
                <div>
                  <SelectOption
                    labelText="EXPENSES ONBOARD"
                    defaultOption="Paid by"
                    handle={handleChange}
                    name="registry"
                    id="registry"
                    items={registryOptions}
                  />
                </div>

                {/* TEAM OR SOLO  */}
                <div>
                  <SelectOption
                    labelText="TEAM OR SOLO"
                    defaultOption="Collaborative Crew"
                    handle={handleChange}
                    name="collaborative"
                    id="collaborative"
                    items={collaborativeOptions}
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 space-y-3">
                {/* JOB ADVERT   */}
                <Textarea
                  id="Job_advert"
                  name="Job_advert"
                  labelText="JOB ADVERT"
                  rows={4}
                  type="text"
                  placeholder="In few words describe what you need for your profile advert…"
                />

                {/* EXPERIENCE NEEDED   */}
                <Input
                  id="job_experience"
                  type="number"
                  name="job_experience"
                  labelText="EXPERIENCE NEEDED"
                  handle={handleChange}
                  placeholder="At least -- Years"
                />

                {/* VISAS NEEDED */}
                <div>
                  <SelectOption
                    labelText="VISAS NEEDED"
                    defaultOption="Yes / No"
                    handle={handleChange}
                    name="visa"
                    id="visa"
                    items={visaNeed}
                  />
                </div>

                {/* EXPENSES TO/FROM THE BOAT */}
                <div>
                  <SelectOption
                    labelText="EXPENSES TO/FROM THE BOAT"
                    defaultOption="Paid by"
                    handle={handleChange}
                    name="to_from_expenses"
                    id="to_from_expenses"
                    items={paidBy}
                  />
                </div>

                {/* TATTOOS  */}
                <div>
                  <SelectOption
                    labelText="TATTOOS"
                    defaultOption="Tattoos Will"
                    handle={handleChange}
                    name="tattoos"
                    id="tattoos"
                    items={tattoos}
                  />
                </div>

                {/* INTERVIEW */}
                <div>
                  <SelectOption
                    labelText="INTERVIEW"
                    defaultOption="Interview System"
                    handle={handleChange}
                    name="interview"
                    id="interview"
                    items={interviewOption}
                  />
                </div>
              </div>
            </div>

            <div className=" flex justify-center gap-12 mt-8">
              <ButtonPrimary type="submit">
                <span>Add Position</span>
              </ButtonPrimary>

              <ButtonPrimary>
                <span>Cancel</span>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddPosition;

// wage options
var advertisedPositionOptions = [
  { text: "Captain", value: "Captain" },
  { text: "Chief Officer", value: "Chief Officer" },
  { text: "Third Officer", value: "Third Officer" },
  { text: "Chief Engineer", value: "Chief Engineer" },
  { text: "Second Engineer", value: "Second Engineer" },
  { text: "Fourth Engineer", value: "Fourth Engineer" },
  { text: "Third Engineer", value: "Third Engineer" },
  { text: "Deck Cadet", value: "Deck Cadet" },
  { text: "Engine Cadet", value: "Engine Cadet" },
  { text: "Second Officer", value: "Second Officer" },
];

// wage options
var wageOptions = [
  { text: "1000 - 1500", value: "1000 - 1500" },
  { text: "1500 - 2000", value: "1500 - 2000" },
  { text: "2000 - 2500", value: "2000 - 2500" },
  { text: "2500 - 3000", value: "2500 - 3000" },
  { text: "3000 - 3500", value: "3000 - 3500" },
  { text: "3500 - 4000", value: "3500 - 4000" },
  { text: "4000 - 4500", value: "4000 - 4500" },
  { text: "4500 - 5000", value: "4500 - 5000" },
  { text: "5000 - 5500", value: "5000 - 5500" },
  { text: "5500 - 6000", value: "5500 - 6000" },
  { text: "6000 - 6500", value: "6000 - 6500" },
  { text: "6500 - 7000", value: "6500 - 7000" },
  { text: "7000 - 7500", value: "7000 - 7500" },
  { text: "7500 - 8000", value: "7500 - 8000" },
  { text: "8000 - 8500", value: "8000 - 8500" },
  { text: "8500 - 9000", value: "8500 - 9000" },
  { text: "9500 - 10,000", value: "9500 - 10,000" },
];

// gender options
var genderOptions = [
  { text: "Male", value: "male" },
  { text: "Female", value: "Female" },
  { text: "Others", value: "Others" },
];

// certificate options
var certificateOptions = [
  { text: "Certificate of Competency", value: "Certificate of Competency" },
  { text: "Captain's License", value: "Captain's License" },
  { text: "Boat Operator's License", value: "Boat Operator's License" },
  { text: "Firefighting Certificate", value: "Firefighting Certificate" },
  { text: "Safety Training Certificate", value: "Safety Training Certificate" },
  { text: "Engineering License", value: "Engineering License" },
];

// registry options
var registryOptions = [
  { text: "Paid by boat crew", value: "Paid by boat crew" },
  { text: "Paid by boat crew", value: "Paid by boat crew" },
];

// collaborative options
var collaborativeOptions = [
  { text: "Not important", value: "Not important" },
  { text: "Important", value: "important" },
];

// interview options
var interviewOption = [
  { text: "Private messaging", value: "Private messaging" },
  { text: "Face to Face", value: "Face to Face" },
];

// tattoos options
var tattoos = [
  { text: "No visible tattoos", value: "No Visible Tattoos" },
  { text: "Visible tattoos", value: "Visible Tattoos" },
];

// paidBy options
var paidBy = [
  { text: "Paid by Crew", value: "Paid by Crew" },
  { text: "Paid by Boat Owner", value: "Paid by Boat Owner" },
];

// visaNeed options
var visaNeed = [
  { text: "B1/B2 US VISA", value: "b1/b2 us visa" },
  { text: "no need", value: "no need" },
];
