"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
const options = [
  { name: "Joined At", hash: "joinedAt" },
  { name: "Last Active", hash: "last_active" },
  { name: "Filter By Events", hash: "filter_by_event" },
];

export default function UserFilterMenu({
  filter,
  setJoinedFilter,
  setLastSeenFilterShow,
  setFilter,
}: {
  filter: any;
  setJoinedFilter: React.Dispatch<boolean>;
  setLastSeenFilterShow: React.Dispatch<boolean>;
  setFilter: React.Dispatch<any>;
}) {
  const menuRef = useRef<any | undefined>(null);
  const [show, setShow] = useState(false);
  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const addFilter = (name: string) => {
    let isPresent = false;
    filter.map((element: any) => {
      if (element.name && element.name == name) isPresent = true;
    });
    if (isPresent) {
      setShow(false);
      return;
    } else {
      if (name == "joinedAt") {
        const newFilter = [
          ...filter,
          {
            name: "joinedAt",
            startDateTime: dayjs(),
            endDateTime: dayjs().add(7, "day"), // inittal date added which is editable
          },
        ];
        setFilter(newFilter);
        setJoinedFilter(true);
      } else if (name == "filter_by_event") {
        const newFilter = [
          ...filter,
          {
            name: "event", // we will add event after this initial selection
          },
        ];
        setFilter(newFilter);
      } else {
        const newFilter = [
          ...filter,
          {
            name: "lastSeen",
            startDateTime: dayjs(),
            endDateTime: dayjs().add(7, "day"), // initial date added which is editable
          },
        ];
        setFilter(newFilter);
        setLastSeenFilterShow(true);
      }
    }
    setShow(false);
  };

  const router = useRouter();
  return (
    <Menu as={"div"} className="relative" ref={menuRef}>
      <MenuButton
        className="text-white text-sm tracking-wider max-w-20 ml-4 p-1 flex items-center justify-center gap-1 hover:text-[#7d6ccf] hover:bg-[#5e4cb9] font-light hover:bg-opacity-40 bg-opacity-25 rounded-md"
        onClick={() => {
          setShow((prev: boolean) => {
            return !prev;
          });
        }}
      >
        <b className="text-xl font-light">+ </b> <b>Filters</b>
      </MenuButton>
      <Transition
        show={show}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute bg-[#3d3c3c]  rounded-lg border border-[#b6b4b4] top-12 left-10 flex flex-col justify-start p-2">
          {options.map((option: { name: string; hash: string }) => {
            return (
              <MenuItem>
                <p
                  className=" hover:bg-[#6e5e9b]/90 hover:cursor-pointer text-white  py-2 rounded-lg pl-2 w-60 transition duration-200 ease-in-out"
                  onClick={() => {
                    addFilter(option.hash);
                  }}
                >
                  {option.name}
                </p>
              </MenuItem>
            );
          })}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
