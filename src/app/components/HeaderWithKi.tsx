import Image from "next/image";
import Link from "next/link";
import Connect from "./ki/Connect";

interface HeaderWithKiProps {
  showBackButton?: boolean;
}

export default function HeaderWithKi({ showBackButton = false }: HeaderWithKiProps) {
  const kiLogo = (
    <Link href="/garden" className="cursor-pointer hover:opacity-80 transition-opacity">
      <Image
        src="/assets/ki-light.png"
        alt="Ki"
        width={75}
        height={75}
        className="object-contain"
        priority
      />
    </Link>
  );

  if (showBackButton) {
    return (
      <div className="flex items-center justify-between relative">
        <Link
          href="/"
          className="text-[#100f0f] hover:font-bold transition-colors inline-flex items-center gap-2"
        >
          ← back
        </Link>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          {kiLogo}
        </div>
        <div className="w-16"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 pb-1">
      {kiLogo}
      <Connect />
    </div>
  );
}
