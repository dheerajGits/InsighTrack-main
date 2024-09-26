"use client";
import { FunnelIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import UserFilterMenu from "./UserFilterMenu";
import UserJoinedFilter from "./UserJoinedFilter";
import LastActiveUserFilter from "./LastActiveUserFilter";
import axios from "axios";

export default function UserFilteredView({ users }: { users: any }) {
  const [filter, setFilter] = useState<any>([]);
  const [joinFilterShow, setJoinedFilterShow] = useState<boolean>(false);
  const [lastSeenFilterShow, setLastSeenFilterShow] = useState<boolean>(false);
  const fetchUsers = async () => {
    if (filter) {
      try {
        if (filter) {
          const users = await axios.get(`${"http://localhost:3030"}/users`, {
            params: {
              filter: JSON.stringify(filter),
            },
          });
        }
      } catch (e) {
        console.error("Error in fetching users with filter");
      }
    }
  };
  useEffect(() => {
    console.log("hii");
    fetchUsers();
  }, [filter]);

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
      <div className="w-full min-h-20 border-[0.5px] border-gray-600 rounded-md flex flex-col gap-2">
        <p className="text-gray-500 font-mono text-sm p-2 font-semibold">
          All Users
        </p>
        {joinFilterShow && (
          <UserJoinedFilter
            setFilter={setFilter}
            filter={filter}
            setFilterShow={setJoinedFilterShow}
          />
        )}
        {lastSeenFilterShow && (
          <LastActiveUserFilter
            setFilter={setFilter}
            filter={filter}
            setFilterShow={setLastSeenFilterShow}
          />
        )}
        <UserFilterMenu
          setJoinedFilter={setJoinedFilterShow}
          setLastSeenFilterShow={setLastSeenFilterShow}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
}
