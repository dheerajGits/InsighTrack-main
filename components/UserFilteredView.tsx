"use client";
import { FunnelIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import UserFilterMenu from "./UserFilterMenu";
import UserJoinedFilter from "./UserJoinedFilter";

export default function UserFilteredView({ users }: { users: any }) {
  const [filter, setFilter] = useState<any>([]);
  const [joinFilterShow, setJoinedFilterShow] = useState<boolean>(false);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between mb-2 select-none">
        <p>{users?.data?.length || 0} Users match given profile</p>
        <div className="flex flex-row items-center justify-center gap-10">
          <button className="flex flex-row items-center justify-center gap-1 p-2 hover:bg-[#4e3bac] hover:text-[#5e4cb9] hover:bg-opacity-30 rounded-lg">
            <FunnelIcon width={20} />
            <p>Hide Filter</p>
          </button>
          <button className="flex flex-row items-center justify-center gap-1 p-2 hover:bg-[#4e3bac] hover:text-[#5e4cb9] hover:bg-opacity-30 rounded-lg">
            <FunnelIcon width={20} />
            <p>Export</p>
          </button>
          <button className="flex flex-row items-center justify-center gap-1 p-2 hover:bg-[#4e3bac] hover:text-[#5e4cb9] hover:bg-opacity-30 rounded-lg">
            <FunnelIcon width={20} />
            <p>Add/Edit Profile</p>
          </button>
        </div>
      </div>
      <div className="w-full min-h-20 border-[0.5px] border-gray-600 rounded-md flex flex-col">
        <p className="text-gray-500 font-mono text-sm p-2 font-semibold">
          All Users
        </p>
        <div className="p-2">
          {joinFilterShow && (
            <UserJoinedFilter
              setFilter={setFilter}
              filter={filter}
              setFilterShow={setJoinedFilterShow}
              onClick={() => {}}
            />
          )}
        </div>
        <UserFilterMenu
          setJoinedFilter={setJoinedFilterShow}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}
