import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import useAxios from "./useAxios";
import toast from "react-hot-toast";

const useAllBoatSailingPost = () => {
  const { Axios } = useAxios();
  const [boatSellPost, setBoatSellPost] = useState([]);

  useEffect(() => {
    Axios.get("/boat-sailing")
      .then((res) => {
        setBoatSellPost(res.data);
      })
      .catch((error) => {
        toast.error("Something Wrong!");
        // console.log(error)
      });
  }, []);

  return { boatSellPost };
};

export default useAllBoatSailingPost;
