"use client";

import React, { useState } from "react";
import { MdDragIndicator } from "react-icons/md";

// Initial column and row data
type column = {
  id: string;
  label: string;
};
const initialColumns: column[] = [
  { id: "name", label: "Name" },
  { id: "distinct_id", label: "Distinct Id" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
  { id: "raw_data", label: "Raw Data" },
];

const DraggableTable = (users: any) => {
  const [columns, setColumns] =
    useState<{ id: string; label: string }[]>(initialColumns);
  const [draggedColumnIndex, setDraggedColumnIndex] = useState<any>();

  // Function to handle drag start
  const handleDragStart = (index: number) => {
    setDraggedColumnIndex(index);
  };

  // Function to handle drag over
  const handleDragOver = (event: any) => {
    event.preventDefault(); // Prevent the default to allow dropping
  };

  // Function to handle drop and reorder columns
  const handleDrop = (index: number) => {
    if (draggedColumnIndex === null) return;

    const draggedColumn = columns[draggedColumnIndex];
    const updatedColumns = [...columns];

    // Remove the dragged column from its old position
    updatedColumns.splice(draggedColumnIndex, 1);
    // Insert the dragged column into the new position
    updatedColumns.splice(index, 0, draggedColumn);

    setColumns(updatedColumns);
    setDraggedColumnIndex(null); // Reset dragged index after dropping
  };
  return (
    <table className="border-1">
      <thead>
        <tr className=" bg-[#3c3c3c]">
          {columns.map((column, index) => (
            <th
              key={column.id}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className="p-2 relative  rounded-l-xl "
            >
              {/* Column Label */}
              <p className="max-w-20">{column.label}</p>
              {/* Drag Icon */}
              <span
                draggable
                onDragStart={() => handleDragStart(index)}
                className="absolute right-2 top-2 cursor-move"
              >
                <MdDragIndicator size={20} />
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="mt-2">
        {users.map((row: any, rowIndex: number) => (
          <tr key={rowIndex} className="hover:bg-gray-700 rounded-lg">
            {columns.map((column: { id: string; label: string }) => (
              <td key={column.id} className="pl-4 py-2">
                {row[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DraggableTable;
