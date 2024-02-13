import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useUser from "./useUser";

const useBoatOwnerGallery = () => {
  const { user } = useUser();
  const { Axios } = useAxios();

  const {
    data: galleryData = [],
    isLoading: isGalleryLoading,
    refetch,
  } = useQuery({
    queryKey: ["galleryData"],
    enabled: !!user,
    queryFn: async () => {
      const res = await Axios.get(`/gallery/${user?._id}`);
      return res.data?.data;
    },
  });

  return { galleryData, isGalleryLoading, refetch };
};

export default useBoatOwnerGallery;
