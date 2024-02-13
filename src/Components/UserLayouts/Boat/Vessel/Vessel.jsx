import { useState } from "react";

// images
// import useVessel from "../../hooks/useVessel";
import useVessel from "../../../../hooks/useVessel";
import ButtonPrimary from "../../../Buttons/ButtonPrimary";
import AddVessel from "./AddVessel";
import ShowVessels from "./ShowVessels";

const Vessel = () => {
  const { vessels, vesselLoading, refetch } = useVessel();
  const [tabs, setTabs] = useState("showVessel");

  return (
    <section className="h-full">
      <div
        title="Scroll now"
        className="max-h-[650px] no-scrollbar overflow-y-scroll"
      >
        <div className="flex justify-end mb-8">
          {tabs === "addVessel" ? (
            <ButtonPrimary onClick={() => setTabs("showVessel")}>
              Show Vessel
            </ButtonPrimary>
          ) : (
            <ButtonPrimary onClick={() => setTabs("addVessel")}>
              Add new Vessel
            </ButtonPrimary>
          )}
        </div>

        {/* form */}
        {tabs === "addVessel" ? <AddVessel /> : <ShowVessels />}
      </div>
    </section>
  );
};

export default Vessel;
