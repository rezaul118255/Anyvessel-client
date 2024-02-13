import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import LoadingSpinner from "../Loading/LoadingSpinner";

const UploadImage = ({
  handle,
  name,
  id,
  multipleImages = false,
  children,
  uploadBtn = true,
  valid = [],
}) => {
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState(multipleImages ? [] : "");
  console.log(uploadedPhoto)




  // Image hosting
  const image_hosting_url = import.meta.env.VITE_Image_URL;

  console.log("image_hosting_url ", image_hosting_url);
  //  handle upload functionality
  const handleUpload = async (event) => {

    setUploadLoading(true);
    const picture = multipleImages ? event.target.files : event.target.files[0];
    const formData = new FormData();
    formData.append("image", picture);

    try {
      const response = await axios.post(image_hosting_url, formData);
      console.log("response ", response);

      const url = response.data.data.display_url;
      setUploadedPhoto(multipleImages ? [...uploadedPhoto, url] : url);
      setUploadLoading(false);
      toast.success("Photo uploaded!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      setUploadLoading(false);
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    handle({ name: name, value: uploadedPhoto });
  }, [uploadedPhoto]);

  return (
    <>
      {uploadLoading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <label
          htmlFor={id}
          className="md:col-span-2 lg:col-span-1 flex items-center justify-between rounded-[10px] py-1 px-2 h-full"
        >
          {!uploadedPhoto?.length ? (
            <>{children}</>
          ) : (
            <div className="text-darkBlue p-2 flex items-center flex-wrap justify-start">
              {multipleImages ? (
                uploadedPhoto?.length &&
                uploadedPhoto?.map((url, idx) => (
                  <figure className="w-28 h-28 p-2 bg-white shadow">
                    <img className="w-full h-full" src={url} alt="" />
                  </figure>
                ))
              ) : (
                <figure className="w-full h-full p-2 bg-white shadow">
                  <img className="w-full h-full" src={uploadedPhoto} alt="" />
                </figure>
              )}
            </div>
          )}
          <>
            <input

              id={id}
              name={id}
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="w-full hidden focus:outline-none border-none py-1 px-2 text-darkBlue placeholder:text-darkBlue"
            />
            {uploadBtn && (
              <ButtonPrimary onClick={() => document.getElementById(id).click()} htmlFor={id} style="!rounded-full">
                Upload
              </ButtonPrimary>
            )}
          </>
        </label>
      )}
    </>
  );
};

export default UploadImage;
