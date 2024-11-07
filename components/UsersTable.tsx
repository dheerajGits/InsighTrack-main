"use client";
import React from "react";
import DraggableTable from "./DraggableColumnTable";

export default function UserTable({ users }: { users: any }) {
  return (
    <div className="flex flex-col mt-10 border-gray-500 border-2 rounded-lg">
      <DraggableTable users={users} />
    </div>
  );
}
