"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to garden page on first visit
    router.push("/garden");
  }, [router]);

  return null;
}
