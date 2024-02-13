import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { TbRubberStampOff } from "react-icons/tb";
import uploadImg from "../../../../assets/images/upload-ico.png";
import useAxios from "../../../../hooks/useAxios";
import useBoatOwnerGallery from "../../../../hooks/useBoatOwnerGallery";
import useUser from "../../../../hooks/useUser";

const generateImgUrl = (file) => {
  const url = URL.createObjectURL(file);
  return url;
};

export default function BoatOwnerImgGallery() {
  const { user } = useUser();
  const { galleryData, isGalleryLoading, refetch } = useBoatOwnerGallery();
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [vesselImages, setVesselImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const { Axios } = useAxios();
  const [galleryId, setGalleryId] = useState("");
  const [userId, setUserId] = useState(null);
  const [reCall, setReCall] = useState(true);
  console.log("galleryData hooks ", galleryData);

  useEffect(() => {
    setUserId(galleryData?.userId);
    setImages(galleryData?.vesselImages || []);
    setGalleryId(galleryData?._id);
  }, [galleryData]);

  // Image hosting
  const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;
  // const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const image_hosting_url = import.meta.env.VITE_Image_URL;

  const promiseArr = [];
  const uploadImages = async (data) => {
    if (data?.length > 0) {
      try {
        // Check if multiple images are selected
        const formData = new FormData();
        for (const { id, file } of data) {
          setIsUploading(TbRubberStampOff);
          formData.append("image", file);
          const response = await axios.post(image_hosting_url, formData);
          const imageUrls = response.data.data.url;
          setVesselImages((prev) => [
            ...prev,
            { id, image: imageUrls, loved: false },
          ]);
          setFiles([]);
        }

        setIsUploading(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const multipleFilesUpload = (e) => {
    setIsUploading(true);
    const selectedFiles = e.target.files;

    for (let index = 0; index < selectedFiles.length; index++) {
      const file = selectedFiles[index];
      const url = generateImgUrl(file);
      let id = "id" + Math.random().toString(16).slice(2);
      setFiles((prevFiles) => [...prevFiles, { id, image: url, file }]);
    }

    setIsUploading(false);
  };

  const handleImageUpload = () => {
    setIsUploading(true);
    uploadImages(files);
    setIsUploading(false);
  };

  // photo gallery save
  const handleSaveGallery = () => {
    console.log("userId ", userId);
    if (userId) {
      const newData = {
        userId: userId,
        galleryId,
        vesselImages: [...images, ...vesselImages],
      };
      newData &&
        Axios.post("/gallery", newData)
          .then((res) => {
            const data = res?.data?.data;
            setImages(data?.vesselImages);
            setVesselImages([]);
            setIsUploading(false);
          })
          .catch((err) => console.log("gallery image save err", err));
    }
  };

  // upload images
  const handleUploadDelete = (name) => {
    const obj = files?.filter((item) => item?.file?.name != name);
    setFiles(obj);
  };

  // images loved updated
  const handleLoved = (id, value) => {
    if ((galleryId, id)) {
      const updatedLoved = { loved: value };
      Axios.put(`gallery-img-loved-update/${galleryId}/${id}`, updatedLoved)
        .then((res) => {
          setReCall(!reCall);
          const loved = res.data;
        })
        .catch((err) => console.log("error ", err));
    }
  };

  return (
    <>
      <div className="flex justify-between gap-2 items-center flex-wrap mb-5">
        <p className="text-black font-light mb-2">Photo Gallery</p>

        <div className="flex gap-4">
          {files?.length ? (
            <button
              onClick={handleImageUpload}
              disabled={isUploading}
              className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 "
            >
              {isUploading ? (
                <div className="relative flex items-center justify-center">
                  uploading...
                  <div className="absolute top-0 w-full h-full bg-blue/10 z-10">
                    <div
                      className="w-7 h-7 rounded-full absolute
                            border-4 border-solid border-gray-200"
                    ></div>

                    <div className="w-7 h-7 rounded-full animate-spin absolute border-4 border-solid border-transparent border-t-blue shadow-md"></div>
                  </div>
                </div>
              ) : (
                "Upload Now"
              )}
            </button>
          ) : (
            ""
          )}

          {vesselImages?.length ? (
            <button
              onClick={handleSaveGallery}
              disabled={isUploading}
              className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 "
            >
              {isUploading ? (
                <div className="relative flex items-center justify-center">
                  Save...
                  <div className="absolute top-0 w-full h-full bg-blue/10 z-10">
                    <div
                      className="w-7 h-7 rounded-full absolute
                            border-4 border-solid border-gray-200"
                    ></div>

                    <div className="w-7 h-7 rounded-full animate-spin absolute border-4 border-solid border-transparent border-t-blue shadow-md"></div>
                  </div>
                </div>
              ) : (
                "Save"
              )}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[10px]">
        {images?.length && !isGalleryLoading ? (
          images?.map((item, i) => (
            <div key={i} className="relative">
              <img
                className="h-44 w-full object-cover object-center rounded-lg"
                src={item?.image}
                alt=""
              />
              <span
                onClick={() => handleLoved(item?.id, !item?.loved)}
                className={`cursor-pointer absolute top-2 right-3 border-2 rounded-full p-0.5 border-transparent flex items-center justify-center transition duration-300 ${
                  item?.loved ? "hover:border-red-500" : "hover:border-white"
                }`}
                title="Favorite"
              >
                <AiFillHeart
                  size="30"
                  className={`${item?.loved ? "text-red-500" : "text-white"}`}
                />
              </span>
            </div>
          ))
        ) : (
          <>
            <div>
              <p> Loading...</p>
            </div>
          </>
        )}

        {vesselImages?.length
          ? vesselImages?.map((image, i) => (
              <figure key={i} className="relative">
                <img
                  className="h-44 w-full object-cover object-center rounded-lg"
                  src={image?.image}
                  alt=""
                />
              </figure>
            ))
          : null}

        {files?.length
          ? files?.map((image, i) => (
              <div key={i} className="relative">
                <img
                  className="h-44 w-full object-cover object-center rounded-lg"
                  src={image?.image}
                  alt=""
                />

                <span
                  className="cursor-pointer"
                  onClick={() => handleUploadDelete(image?.file?.name)}
                  title="Delete image"
                >
                  <RxCrossCircled
                    size="30"
                    className="absolute top-2 right-3 hover:text-red-400"
                  />
                </span>
              </div>
            ))
          : null}

        <label
          htmlFor="vessel"
          className="p-4 h-44 flex flex-col items-center justify-center border-2 border-dashed border-blue rounded-md bg-[#DCECFC]"
        >
          <input
            id="vessel"
            name="vessel_image"
            type="file"
            accept="image/*"
            multiple
            // onChange={handleVesselPhotoUpload}
            onChange={multipleFilesUpload}
            className="w-full hidden focus:outline-none border-none p-[10px] text-darkBlue placeholder:text-darkBlue"
          />
          <img src={uploadImg} alt="upload img" />
          <p className="text-center text-darkBlue font-light mt-1">
            Click to upload image
          </p>
        </label>
      </div>
    </>
  );
}
