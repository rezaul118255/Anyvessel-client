import { createBrowserRouter } from "react-router-dom";
import NotFound from "../ErrorPage/NotFound";
import MainLt from "../Layouts/MainLt";
import About from "../Pages/About/";
// import Booking_Calender from "../Components/UserLayouts/Boat/Booking_Calender";
import Advertised from "../Components/UserLayouts/Boat/Advertised/Advertised";
import Charter from "../Components/UserLayouts/Boat/Charter/Charter";
import Contact from "../Components/UserLayouts/Boat/Contact/Contact";
import Location from "../Components/UserLayouts/Boat/Location/Location";
import Vessel from "../Components/UserLayouts/Boat/Vessel/Vessel";
import Login from "../Pages/Authentication/Login/Login";
import BoatRegister from "../Pages/Authentication/Register/BoatRegister/BoatRegister";
import Register from "../Pages/Authentication/Register/Register";
import BoatForSale from "../Pages/BoatForSale";
import BoatSearch from "../Pages/BoatSearch";
import BoatServices from "../Pages/BoatServices";
import CrewSearch from "../Pages/CrewSearch";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Booking_Calender from "../Components/UserLayouts/Boat/BookingCalender/Booking_Calender";
import CrewRegister from "../Pages/Authentication/Register/CrewRegister/CrewRegister";
import BoatServicesRegister from "../Pages/Authentication/Register/BoatServicesRegister/BoatServicesRegister";

// browser route
const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLt />,
    errorElement: <NotFound />,
    children: [
      //===== root route start
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Charter />,
          },
          {
            path: "/vessel",
            element: <Vessel />,
          },
          {
            path: "/location",
            element: <Location />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/advertised",
            element: <Advertised />,
          },
          {
            path: "/booking",
            element: <Booking_Calender />,
          },
        ],
      },
      {
        path: "/about-us",
        element: <About />,
      },

      {
        path: "/crew-search",
        element: <CrewSearch />,
      },
      {
        path: "/boat-search",
        element: <BoatSearch />,
      },
      {
        path: "/boat-for-sale",
        element: <BoatForSale />,
      },
      {
        path: "/boat-services",
        element: <BoatServices />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      //===== register route start =========
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      //===== boat register route start
      {
        path: "/register/boat-register",
        element: <BoatRegister />,
      },
      {
        path: "/register/crew-register",
        element: <CrewRegister />,
      },
      {
        path: "/register/boat-service-register",
        element: <BoatServicesRegister />,
      },
      //===== boat register route end

      //===== register route end =========

      //===== root route end
    ],
  },
]);

export default Routers;
