import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";
import Input from "../../../Components/Inputs/Input";
import PageSection from "../../../Components/PageSection";
import useAxios from "../../../hooks/useAxios";
import useUser from "../../../hooks/useUser";
import { useLoginiMutation } from "../../../feature/auth/authApi";
import InputRadio from "../../../Components/Inputs/InputRadio";

export default function Login() {

  const { Axios } = useAxios();
  const { user, setReCall, reCall } = useUser();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [login, { data, status, isLoading: loading }] = useLoginiMutation()

  const handleInputData = (e) => {
    setInputData({
      ...inputData,
      [e.name]: e.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userData = {
      email: inputData?.email,
      password: inputData?.password,
      role: inputData?.role,
    };
    console.log(userData)

    try {
      // const { data, status } = await Axios.post("/auth/login", userData);
      const reslut = await login(userData);

      const status = reslut?.data?.statusCode

      switch (status) {
        case 200:
          setIsLoading(false);
          setReCall(!reCall);
          toast.success("Login Successful");
          sessionStorage.setItem("userInfo", JSON.stringify(data));
          navigate("/");
          window.location.reload();
          break;
        case 404:
          setIsLoading(false);
          toast.error("User not found");
          break;
        case 401:
          setIsLoading(false);
          toast.error("Invalid Credentials");
          break;
        default:
          setIsLoading(false);
          toast.error("Unexpected error occurred");
          break;
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <>
      <PageSection>
        <Helmet>
          <title> User Login | Anyvessel</title>
        </Helmet>

        <div className="flex items-center justify-center">
          <div className="space-y-4 min-w-72 w-full max-w-sm shadow-lg rounded-lg px-5 py-6">
            <h1 className="font-inter text-2xl md:text-3xl lg:text-4xl font-medium text-center">
              Log in
            </h1>
            <p className="text-sm font-inter font-normal">
              Enter Your details below
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email or Phon Number"
                  handle={handleInputData}
                />
              </div>

              <div>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  handle={handleInputData}
                />
              </div>
              <div>
                <InputRadio
                  id="role"
                  handle={handleInputData}
                  name="role"
                  radioValue1="boat"
                  radioText1="boat"
                  radioValue2="crew"
                  radioText2="crew"
                  radioValue3="boatservice"
                  radioText3="boatservice"

                />
              </div>

              <div className="flex flex-col-reverse md:flex-row gap-3 items-center justify-between">
                <ButtonPrimary type="submit" loading={loading}>
                  <span> Login in </span>
                </ButtonPrimary>

                <a
                  className="text-base text-primary hover:underline capitalize"
                  href="#"
                >
                  forget password
                </a>
              </div>
            </form>

            <p>
              I don't have an account
              <Link
                to="/register"
                className="hover:text-darkBlue hover:underline cursor-pointer"
              >
                Sign Up?
              </Link>
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
