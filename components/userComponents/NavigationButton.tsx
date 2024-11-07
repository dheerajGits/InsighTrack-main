"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function NavigationButton({
  className,
  path,
  action,
}: {
  className?: string;
  path: string;
  action?: "replace" | "push";
}) {
  const router = useRouter();
  return (
    <button
      className={`${className}`}
      onClick={() => {
        if (!action || action == "push") {
          console.log("Hii");
          router.push(path);
        } else router.replace(path);
      }}
    >
      HII
    </button>
  );
}
