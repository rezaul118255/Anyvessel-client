import toast from "react-hot-toast";
import { arrowLeft, arrowRight } from "../../Utils/all-icons-svg";

const PrevNextButton = () => {
  // handle left
  const handleLeft = () => {
    toast.loading("Coming soon...");
  };

  // handle Right
  const handleRight = () => {
    toast.loading("Coming soon...");
  };

  return (
    <>
      <div className="flex gap-3 items-center">
        {copyButton(arrowLeft, handleLeft)}
        {copyButton(arrowRight, handleRight)}
      </div>
    </>
  );
};

export default PrevNextButton;

function copyButton(text, handle) {
  return (
    <button
      onClick={handle}
      className="w-10 h-10 rounded-full p-2 bg-secondary flex items-center justify-center "
    >
      {text}
    </button>
  );
}
