import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../../../../../hooks/useAxios";
import useBoatOwnerBlogs from "../../../../../hooks/useBoatOwerBlogs";
import ButtonPrimary from "../../../../Buttons/ButtonPrimary";
import Textarea from "../../../../Inputs/Textarea";
import CustomModal from "../../../../Modals/CustomModal";
import BlogPostCart from "./BlogPostCart";
// import CustomModal from "./CustomModal";

export default function BoatOwnerPost() {
  const { Axios } = useAxios();
  const { boatOwnerBlogs, blogsLoading, refetch } = useBoatOwnerBlogs();
  const [postText, setPostText] = useState("");
  const [userData, setUserData] = useState(null);
  const [reCall, setReCall] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isPostModalOpen, setPostModalOpen] = useState(false);

  console.log("userData ", userData);
  console.log("boatOwnerBlogs ", boatOwnerBlogs);

  const handleBasicInfoModal = (e) => {
    if (e == "cancel") setPostModalOpen(false);
  };

  useEffect(() => {
    setUserData(boatOwnerBlogs?.userData);
    setPosts(boatOwnerBlogs?.blogs);
  }, [boatOwnerBlogs, blogsLoading]);

  const handleAddNewPost = (e) => {
    e.preventDefault();

    // console.log("profileData ", profileData?.data?.userData);
    if (userData) {
      const newData = {
        userId: userData?._id,
        description: postText,
        numberOfLoveReact: [],
        role: "boat",
      };
      console.log("newData ", newData);

      Axios.post("/post-create", newData)
        .then((res) => {
          const data = res?.data?.data;
          if (data?.insertedId) {
            toast.success("post successful! ");
            setReCall(!reCall);
            setPostText("");
            setPostModalOpen(false);
          }
        })
        .catch((err) => {
          console.log("post-create ", err);
          toast.error("Somethings Wrong");
        });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between my-2">
        <p className="font-light">Posts</p>
        <button
          onClick={() => setPostModalOpen(true)}
          className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20"
        >
          Add new post
        </button>
      </div>

      {blogsLoading ? (
        <p className="text-center py-4"> Loading... </p>
      ) : (
        <>
          {!posts?.length ? (
            <p className="text-center py-4"> No Post Here </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              {posts.map((post, index) => (
                <BlogPostCart
                  key={index}
                  post={post}
                  refetch={refetch}
                  userData={userData}
                />
              ))}
            </div>
          )}
        </>
      )}

      {isPostModalOpen && (
        <CustomModal
          isModalOpen={isPostModalOpen}
          setIsModalOpen={setPostModalOpen}
          handleModal={handleBasicInfoModal}
        >
          <form className="text-black" onSubmit={handleAddNewPost}>
            <div>
              <h3 className="font-bold text-xl mb-2">Write your Post</h3>
              <p className="border-t border-dark mb-5"></p>

              {/* Language */}
              <div className="w-full mb-4">
                <label htmlFor="postText" className="text-dark text-sm">
                  Post Description here:
                </label>
                {/* <textarea
                  id="postText"
                  name="postText"
                  onChange={(e) => setPostText(e.target.value)}
                  defaultValue={postText}
                  placeholder="Type Language"
                  className="w-full border  text-black bg-white border-dark/40 p-2 rounded-md focus:outline-none focus:border-primary mb-1 sm:mb-3 line-clamp-8 resize-none"
                ></textarea> */}

                <Textarea
                  id="postText"
                  name="postText"
                  placeholder="write Your Post"
                  handle={(e) => setPostText(e?.value)}
                />
              </div>

              <div>
                {/* <input
                  className="bg-blue text-white font-light py-1 px-5 rounded-lg hover:bg-transparent hover:text-blue border border-blue hover:border-blue duration-300 hover:shadow-lg hover:shadow-blue/20 mx-auto cursor-pointer"
                  type="submit"
                  value="Post Now"
                /> */}
                <ButtonPrimary type="submit">
                  <span> Post Now </span>
                </ButtonPrimary>
              </div>
            </div>
          </form>
        </CustomModal>
      )}
    </>
  );
}
