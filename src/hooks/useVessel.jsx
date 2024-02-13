import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useUser from "./useUser";

const useVessel = () => {
  const { user } = useUser();
  const { Axios } = useAxios();
  // console.log("user ", user);

  const {
    data: vessels = [],
    isLoading: vesselLoading,
    refetch,
  } = useQuery({
    queryKey: ["vessels"],
    enabled: !user,
    queryFn: async () => {
      const res = await Axios.get(`/vessels/${user?._id}`);
      return res.data;
    },
  });

  return { vessels, vesselLoading, refetch };
};

export default useVessel;
