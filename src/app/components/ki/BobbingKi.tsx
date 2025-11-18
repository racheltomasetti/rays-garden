import Image from "next/image";

export default function BobbingKi() {
  return (
    <div className="flex justify-center">
      <Image
        src="/icon.png"
        alt="Ki Logo"
        width={50}
        height={50}
        className="rounded-full animate-bob"
        priority
      />
    </div>
  );
}
