import axios from "axios";

const useAxios = () => {
  const Axios = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    headers:{
      "Content-Type":"application/json"
    }
  });
  return { Axios };
};

export default useAxios;
