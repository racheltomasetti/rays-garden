import Image from "next/image";
export default function KiOrigin() {
  return (
    <div className="bg-[var(--bg-2)] rounded-lg p-6 md:p-8 shadow-sm">
      <h2 className="text-3xl md:text-3xl text-[var(--accent)] mb-6 text-center">
        The Origin of Ki
      </h2>
      <div className="space-y-4 text-[var(--tx)] text-lg md:text-xl leading-relaxed text-center">
        <p>
          Ki (氣/気) is an ancient East Asian concept meaning life force, vital
          energy, breath.
        </p>
        <p>
          In traditional practice, cultivating{" "}
          <span className="italic font-bold">
            Ki means harmonizing mind, body, and spirit
          </span>{" "}
          through presence, breath, and intentional practice.
        </p>
      </div>
      <br />
      {/* sun */}
      <Image
        src={"/assets/sun.png"}
        alt="sun"
        width={75}
        height={75}
        className="mx-auto rounded-full animate-bob"
      />
    </div>
  );
}
