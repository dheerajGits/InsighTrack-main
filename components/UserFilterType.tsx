"use client";
import React from "react";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

const getIcon = (name: string) => {
  if (name == "calendar") {
    return <CalendarDateRangeIcon />;
  } else {
    return <CursorArrowRaysIcon />;
  }
};
export default function UserFilterType({
  name,
  type,
}: {
  name: string;
  type: string;
}) {
  return (
    <div className="flex flex-row items-center justify-center p-1 px-2 rounded-md gap-3 bg-gray-500 hover:border-2 hover:border-[#673cea] hover:text-[#c4b3f6] ">
      {type == "calendar" ? (
        <CalendarDateRangeIcon width={20} />
      ) : (
        <CursorArrowRaysIcon width={20} />
      )}
      <p className="text-sm">
        User {">"} {name}
      </p>
    </div>
  );
}
