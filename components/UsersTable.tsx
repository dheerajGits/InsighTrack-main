"use client";
import React from "react";
import DraggableTable from "./DraggableColumnTable";

export default function UserTable({ users }: { users: any }) {
  return (
    <div className="flex flex-col">
      <DraggableTable />
    </div>
  );
}
