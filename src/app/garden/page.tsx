"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import GardenEntryModal from "@/app/components/GardenEntryModal";
import EnterButton from "@/app/components/garden/EnterButton";

const Garden = dynamic(() => import("@/app/components/garden/Garden"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gradient-to-b from-sky-300 to-orange-200 flex items-center justify-center">
      <p className="text-2xl">Loading garden...</p>
    </div>
  ),
});

export default function GardenPage() {
  // const [showTooltip, setShowTooltip] = useState(true);
  // const [hasClickedLighthouse, setHasClickedLighthouse] = useState(false);

  // const handleLighthouseClick = () => {
  //   setHasClickedLighthouse(true);
  //   setShowTooltip(false);
  // };

  return (
    <>
      <Garden />
      {/* {showTooltip && <GardenEntryModal isOpen={showTooltip} />}
      {hasClickedLighthouse && <EnterButton />} */}
      <EnterButton />
    </>
  );
}
