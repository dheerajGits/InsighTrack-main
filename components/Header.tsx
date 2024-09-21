"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const headerRoutes: { name: string; path: string }[] = [
  { name: "Users", path: "/users" },
  { name: "Events", path: "/events" },
  { name: "Daily Analytics", path: "/analytics" },
];

export default function Header() {
  const router = useRouter();
  return (
    <div className="py-1 px-10 flex flex-row justify-between items-center w-full bg-[#673cea]">
      <img
        src="/Logo.png"
        className="w-16 hover:cursor-pointer"
        alt=""
        onClick={() => {
          router.replace("/");
        }}
      />
      <div className="flex flex-row items-center justify-center gap-12 w-[500px]">
        {headerRoutes.map((route: { name: String; path: string }, index) => {
          return (
            <button
              className="py-1 px-3 hover:bg-[#36297a]  rounded-lg"
              onClick={() => {
                router.push(`${route.path}`);
              }}
              key={index}
            >
              {route.name}
            </button>
          );
        })}{" "}
        <UserCircleIcon className="w-10 hover:cursor-pointer" />
      </div>
    </div>
  );
}
