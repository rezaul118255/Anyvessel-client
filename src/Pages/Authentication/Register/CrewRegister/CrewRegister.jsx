import { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import ButtonPrimary from "../../../../Components/Buttons/ButtonPrimary";
import Input from "../../../../Components/Inputs/Input";
import InputDate from "../../../../Components/Inputs/InputDate";
import InputNationality from "../../../../Components/Inputs/InputNationality";
import InputRadio from "../../../../Components/Inputs/InputRadio";

import { validateInputData } from "../../../../Utils/validateInputData";
import useAxios from "../../../../hooks/useAxios";

import { useCrewResigerMutation } from "../../../../feature/auth/authApi";

const CrewRegister = () => {
  const { Axios } = useAxios();
  const [crewResiger, { data: crewData, isLoading, isError, error }] =
    useCrewResigerMutation();

  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [inputData, setInputData] = useState({
    username: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
    UserExperience: "",
    nationality: "",
    gender: "",
    birthday: "",
    role: "crew",
  });

  const handleChange = async (e) => {
    return setInputData({
      ...inputData,
      [e?.name]: e?.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("inputData ", inputData);

    // error handle
    setErrors(null);
    const errorArr = validateInputData(inputData);
    // console.log("errorArr ", errorArr);
    if (errorArr.length) return setErrors(errorArr);

    // password checking
    if (inputData?.password !== inputData?.retypePassword) {
      return toast.error("password did not match!", {
        position: "top-right",
        autoClose: 3000,
      });
    }

    if (inputData?.picture === null || inputData?.identityPhoto === null) {
      return toast.warning("Please Upload Photo!", {
        position: "top-right",
        autoClose: 3000,
      });
    }

    const newData = {
      fullName: inputData?.fullName,
      username: inputData?.username,
      email: inputData?.email,
      phone: inputData?.phone,
      password: inputData?.password,
      UserExperience: inputData?.UserExperience,
      nationality: inputData?.nationality,

      gender: inputData?.gender,
      birthday: inputData?.birthday,
      role: "crew",
    };
    try {
      // console.log('newDAta', newData)
      const reslut = await crewResiger(newData);
      navigate("/login", { replace: true });

      const status = reslut?.data?.statusCode;
      switch (status) {
        case 200:
          toast.success("Login Successful");
          sessionStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/login");
          // window.location.reload();
          break;
        case 404:
          toast.error("User not found");
          break;
        case 401:
          toast.error("Invalid Credentials");
          break;
        default:
          toast.error("Unexpected error occurred");
          break;
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="bg-white bg-opacity-90 px-5 sm:px-10 py-10 md:px-[93px] md:py-[30px] mt-6 rounded-[10px]">
      <div className="max-w-[715px] mx-auto text-center mb-6">
        <h2 className="text-lightBlue text-[19px] font-semibold">
          Register a Boat profile to find a crew member:
        </h2>
        <p className="text-lightBlue font-light">
          A Boat profile is to find a crew member for a boat, yacht, or ship
          that you own or represent.
        </p>
      </div>

      {/* form */}
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form onSubmit={handleSubmit}>
        <div className="md:grid md:grid-cols-2 flex flex-col md:gap-x-[37px] gap-y-5 text-sm">
          {/* username */}
          <Input
            id="username"
            name="username"
            placeholder="username"
            handle={handleChange}
            valid={errors}
          />
          {/* Full name */}
          <Input
            id="full_name"
            name="fullName"
            placeholder="full Name"
            handle={handleChange}
            valid={errors}
          />
          {/* Email address */}
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            handle={handleChange}
            valid={errors}
          />
          {/* Phone number */}
          <Input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone number"
            handle={handleChange}
            valid={errors}
          />
          {/* password */}
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            handle={handleChange}
            valid={errors}
          />
          {/* Retype password */}
          <Input
            id="retypePassword"
            name="retypePassword"
            type="password"
            placeholder="Retype password"
            handle={handleChange}
            valid={errors}
          />
          {/* User Experience */}
          <Input
            id="UserExperience"
            name="UserExperience"
            type="text"
            placeholder="User Experience"
            handle={handleChange}
            valid={errors}
          />

          {/* nationality */}
          <InputNationality
            id="nationality"
            name="nationality"
            handle={handleChange}
            valid={errors}
          />

          {/* gender */}
          <InputRadio
            id="gender"
            labelText="Gender"
            handle={handleChange}
            name="gender"
            radioValue1="male"
            radioText1="male"
            radioValue2="female"
            radioText2="female"
            valid={errors}
          />

          {/* Birthday */}
          <InputDate
            labelText="Birthday:"
            id="birthday"
            handle={handleChange}
            name="birthday"
            valid={errors}
          />
        </div>

        {/* buttons */}
        <div className="mt-6 w-fit mx-auto space-x-4">
          <ButtonPrimary type="submit">
            <span>Register</span>
          </ButtonPrimary>

          <ButtonPrimary type="submit" styleReverse={true}>
            <span>Cancel</span>
          </ButtonPrimary>
        </div>
      </form>
    </div>
  );
};

export default CrewRegister;
