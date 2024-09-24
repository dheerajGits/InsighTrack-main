"use client";

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";
const options = [
  { name: "Profile", href: "/profile" },
  { name: "Event Triggered Webhooks", href: "/webhooks" },
  { name: "Plans", href: "/Plans" },
  { name: "Contact-us", href: "/contact-us" },
];

export default function UserFilterMenu({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) {
  const menuRef = useRef(null);
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

  const router = useRouter();
  console.log(show);
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
          <MenuItem>
            <p
              className=" hover:bg-[#6e5e9b]/90 text-white  py-2 rounded-lg pl-2 w-60 transition duration-200 ease-in-out"
              onClick={() => {
                setShow(false);
              }}
            >
              Joined At
            </p>
          </MenuItem>
          <MenuItem>
            <p
              className=" hover:bg-[#6e5e9b]/90 text-white  py-2 rounded-lg pl-2 w-60 transition duration-200 ease-in-out"
              onClick={() => {
                setShow(false);
              }}
            >
              Last Active
            </p>
          </MenuItem>
          <MenuItem>
            <p
              className=" hover:bg-[#6e5e9b]/90 text-white  py-2 rounded-lg pl-2 w-60 transition duration-200 ease-in-out"
              onClick={() => {
                setShow(false);
              }}
            >
              Filter By Event
            </p>
          </MenuItem>{" "}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
