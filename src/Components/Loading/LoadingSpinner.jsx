export default function LoadingSpinner() {
  return (
    <>
      <div className="inline-flex justify-center items-center h-full relative">
        <div className="">
          <div className="flex items-center justify-center absolute top-0 left-0">
            <div className="w-10 h-10 border-b-2 border-darkBlue rounded-full animate-spin"></div>
          </div>
          <div className="flex items-center justify-center absolute top-0 left-0">
            <div className="w-10 h-10 border-t-2 border-darkBlue rounded-full delay-500 animate-spin"></div>
          </div>
        </div>
      </div>
    </>
  );
}
