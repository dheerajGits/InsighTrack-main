"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/outline";
import UserFilterType from "./UserFilterType";
type Inputs = {
  startDateTime: Date;
  endDateTime: Date;
};

export default function UserJoinedFilter({
  setFilterShow,
  filter,
  setFilter,
}: {
  setFilterShow: React.Dispatch<boolean>;
  setFilter: React.Dispatch<any>;
  filter: any;
}) {
  const {
    register,
    formState: { isSubmitted, errors },
    handleSubmit,
  } = useForm();
  const removeFilter = () => {
    let newFilter: any = [];
    filter.forEach((element: any) => {
      if (element.name != "joinedAt") {
        newFilter.push(element);
      }
    });
    setFilter(newFilter);
    setFilterShow(false);
  };
  const onSubmit = (data: any) => {
    let newFilter: any = [];
    console.log(data);
    filter.forEach((element: any) => {
      if (element.name == "joinedAt") {
        element.startDateTime = new Date(data.startDateTime);
        element.endDateTime = new Date(data.endDateTime);
        newFilter.push(element);
      } else {
        newFilter.push(element);
      }
    });
    setFilter(newFilter);
  };
  return (
    <div className="flex flex-row items-center gap-3 px-5">
      <p className="text-gray-400 text-sm ">where</p>
      <UserFilterType name="Joined At" type="calendar" />
      <div className="flex flex-row items-center justify-center gap-10 p-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-6 "
        >
          <div className="flex flex-row gap-2 items-center">
            <p> From</p>
            <input
              type="date"
              placeholder="From"
              className="bg-gray-700 rounded-lg p-1 focus:border-0"
              {...register("startDateTime", { required: true })}
            />
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p>To</p>
            <input
              type="date"
              placeholder="From"
              className="bg-gray-700 rounded-lg p-1 focus:border-0"
              {...register("endDateTime", { required: true })}
            />
          </div>{" "}
          <button
            type="submit"
            className=" p-1 rounded-lg bg-indigo-300 py-0 w-20 hover:bg-transparent text-black hover:text-white"
          >
            <p>Edit Filter</p>
          </button>
        </form>
        <TrashIcon
          className="hover:text-red-500 hover:bg-gray-600 rounded-md p-1 hover:cursor-pointer"
          width={28}
          onClick={removeFilter}
        />
      </div>
    </div>
  );
}
