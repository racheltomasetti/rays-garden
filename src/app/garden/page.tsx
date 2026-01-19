"use client";
import dynamic from "next/dynamic";
// import EnterButton from "@/app/components/garden/EnterButton";

const Garden = dynamic(() => import("@/app/components/garden/Garden"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gradient-to-b from-sky-300 to-orange-200 flex items-center justify-center">
      <p className="text-2xl">Loading garden...</p>
    </div>
  ),
});

export default function GardenPage() {
  return (
    <>
      <Garden />
      {/* <EnterButton /> */}
    </>
  );
}
