import { useState } from "react";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";
import AddPosition from "./AddPosition";
import ShowAdvertised from "./ShowAdvertised";

const Advertised = () => {
  const [tabs, setTabs] = useState("showAdvertised");

  return (
    <>
      <section className="h-full">
        <div
          title="Scroll now"
          className="max-h-[650px] no-scrollbar overflow-y-scroll"
        >
          <div className="flex justify-end mb-8">
            {tabs === "addAdvertised" ? (
              <ButtonPrimary onClick={() => setTabs("showAdvertised")}>
                Show Advertised
              </ButtonPrimary>
            ) : (
              <ButtonPrimary onClick={() => setTabs("addAdvertised")}>
                Add New Position
              </ButtonPrimary>
            )}
          </div>

          {/* form */}
          {tabs === "showAdvertised" ? <ShowAdvertised /> : <AddPosition />}
        </div>
      </section>
    </>
  );
};

export default Advertised;
