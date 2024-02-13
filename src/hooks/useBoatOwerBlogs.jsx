import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useUser from "./useUser";

const useBoatOwnerBlogs = () => {
  const { user } = useUser();
  const { Axios } = useAxios();

  const {
    data: boatOwnerBlogs = [],
    isLoading: blogsLoading,
    refetch,
  } = useQuery({
    queryKey: ["boatOwnerBlogs"],
    enabled: !!user,
    queryFn: async () => {
      const res = await Axios.get(`/get-posts/${user?._id}`);
      return res.data?.data;
    },
  });

  return { boatOwnerBlogs, blogsLoading, refetch };
};

export default useBoatOwnerBlogs;
