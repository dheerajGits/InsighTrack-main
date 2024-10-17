"use client";

import React, { useState } from "react";

// Initial column and row data
const initialColumns = [
  { id: "name", label: "Name" },
  { id: "age", label: "Age" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone" },
];

const initialRows = [
  { name: "John Doe", age: 28, email: "john@example.com", phone: "123456789" },
  {
    name: "Jane Smith",
    age: 34,
    email: "jane@example.com",
    phone: "987654321",
  },
];

const DraggableTable = () => {
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
        <tr>
          {columns.map((column, index) => (
            <th
              key={column.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className="cursor-move"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {initialRows.map((row: any, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column: { id: string; label: string }) => (
              <td key={column.id}>{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DraggableTable;
