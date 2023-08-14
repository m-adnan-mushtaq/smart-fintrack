"use client";
import "intro.js/introjs.css";
import { Step, Steps } from "intro.js-react";
import { featuresData } from "@/lib/common/commont";
import { useState } from "react";

function introSteps():Step[]{
    return featuresData.map(feature=>({
        intro:`<p>${feature.description.slice(0,100)+'...'}</p>`,
        title:feature.title,
        element:`.${feature.selector}`,
        position:"bottom"
    }))
}

const IntroTour = ({ enabled }: { enabled: boolean }) => {
    const [stepsEnabled,setStepEnabled]=useState<boolean>(enabled)
    const steps=introSteps()
    const handleExit=()=>{
        setStepEnabled(false)
    }
  return (
    <Steps
      enabled={stepsEnabled}
      steps={steps}
      initialStep={0}
      onExit={handleExit}
      options={{
        nextLabel:"Next Step",
        doneLabel:"Finish Tour",
        tooltipClass:"custom-tooltip"
      }}
    />
  );
};

export default IntroTour;
