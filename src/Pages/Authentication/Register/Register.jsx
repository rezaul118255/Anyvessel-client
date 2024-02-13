import { Helmet } from "react-helmet";

// bg image
import { Link } from "react-router-dom";
import RegisterBg from "../../../assets/images/register-bg.png";

// react icons
import { BiLogInCircle } from "react-icons/bi";
import ButtonPrimary from "../../../Components/Buttons/ButtonPrimary";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register | Anyvessel</title>
      </Helmet>

      <section
        style={{ backgroundImage: `url(${RegisterBg})` }}
        className="bg-cover bg-center md:h-[915px] py-16 flex flex-col items-center justify-center relative"
      >
        <div className="container">
          {/* register title */}
          <div className="flex flex-col items-center justify-center text-darkBlue">
            <h1 className="text-[24px] font-semibold leading-[36px] mt-[30px]">
              Welcome to Anyvessel,
            </h1>
            <p className="text-[24px] leading-[36px] text-center">
              the World's largest online Boat & Crew network.
            </p>
          </div>

          {/* register main */}
          <div className="max-h-[550px] overflow-x-auto no-scrollbar rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] duration-300 pt-16 lg:pt-20 pb-12 lg:pb-14">
              {/* boat */}
              <div className="h-80 sm:h-[280px] lg:h-[350px] xl:h-[411px] w-full bg-white bg-opacity-90 flex flex-col items-center justify-center gap-5 lg:gap-9 text-center shadow-3xl rounded-[10px] duration-300">
                <div>
                  <h4 className="text-lightBlue text-[19px] leading-7">
                    Register as
                  </h4>
                  <h1 className="text-lightBlue text-4xl font-medium leading-8">
                    Boat
                  </h1>
                </div>

                <div>
                  <p className="text-darkBlue text-[21px] leading-8 font-light">
                    Profile to find
                  </p>
                  <p className="text-darkBlue text-[21px] leading-8 font-light">
                    a crew{" "}
                    <Link to="/" className="font-medium">
                      member
                    </Link>
                  </p>
                </div>

                <Link
                  to="/register/boat-register"
                  className="text-white text-sm font-light bg-blue px-10 py-[9px] rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300"
                >
                  Register
                </Link>
              </div>

              {/* crew */}
              <div className="h-80 sm:h-[280px] lg:h-[350px] xl:h-[411px] w-full bg-white bg-opacity-90 flex flex-col items-center justify-center gap-5 lg:gap-9 text-center shadow-3xl rounded-[10px] duration-300">
                <div>
                  <h4 className="text-lightBlue text-[19px] leading-7">
                    Register as
                  </h4>
                  <h1 className="text-lightBlue text-4xl font-medium leading-8">
                    Crew
                  </h1>
                </div>

                <div>
                  <p className="text-darkBlue text-[21px] leading-8 font-light">
                    Profile to find
                  </p>
                  <p className="text-darkBlue text-[21px] leading-8 font-light">
                    a crew{" "}
                    <Link to="/" className="font-medium">
                      position
                    </Link>
                  </p>
                </div>

                <Link
                  to="/register/crew-register"
                  className="text-white text-sm font-light bg-blue px-10 py-[9px] rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300"
                >
                  Register
                </Link>
              </div>

              {/* boat services */}
              <div className="h-80 sm:h-[280px] lg:h-[350px] xl:h-[411px] w-full bg-white bg-opacity-90 flex flex-col items-center justify-center gap-5 lg:gap-9 text-center shadow-3xl rounded-[10px] duration-300">
                <div>
                  <h4 className="text-lightBlue text-[19px] leading-7">
                    Register as
                  </h4>
                  <h1 className="text-lightBlue text-4xl font-medium leading-8">
                    Boat Services
                  </h1>
                </div>

                <div>
                  <p className="text-darkBlue text-[21px] leading-8 font-light">
                    Profile to find
                  </p>
                  <p className="text-darkBlue text-[21px] leading-8 font-light">
                    a
                    <Link to="/" className="font-medium">
                      boat for services
                    </Link>
                  </p>
                </div>

                <Link
                  to="/register/boat-service-register"
                  className="text-white text-sm font-light bg-blue px-10 py-[9px] rounded-[9px] border border-blue hover:bg-transparent hover:text-blue shadow-md hover:shadow-3xl duration-300"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* card bottom */}
            <div className="max-w-[880px] mx-auto bg-white bg-opacity-90 py-6 md:pl-[123px] md:pr-[39px] rounded-[10px] flex flex-col md:flex-row items-center gap-4 md:gap-0 justify-between duration-300">
              <p className="text-darkBlue text-[21px] font-light leading-8">
                Already a registered member?
              </p>

              <Link to="/login">
                <ButtonPrimary>
                  <span className="flex items-center justify-center gap-3">
                    <BiLogInCircle size="24" /> Sign In
                  </span>
                </ButtonPrimary>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
