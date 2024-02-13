import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useUser from "./useUser";

const useProfileData = () => {
  const { user } = useUser();
  const { Axios } = useAxios();

  const {
    data: profileData = [],
    isLoading: profileDataLoading,
    refetch,
  } = useQuery({
    queryKey: ["userProfileData"],
    enabled: !!user,
    queryFn: async () => {
      const res = await Axios.get(`/user-data/${user?.email}/${user?.role}`);
      return res.data?.data;
    },
  });

  return { profileData, profileDataLoading, refetch };
};

export default useProfileData;
