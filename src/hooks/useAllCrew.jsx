import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "./useAxios";

const useAllCrew = () => {
  const { Axios } = useAxios();
  const [allCrewData, setAllCrewData] = useState([]);

  useEffect(() => {
    Axios(`crew-data`)
      .then((res) => setAllCrewData(res?.data))
      .catch((err) => {
        toast.error("Something Wrong!");
        // console.log(err)
      });
  }, []);

  return { allCrewData };
};

export default useAllCrew;
