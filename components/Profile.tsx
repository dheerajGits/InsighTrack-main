"use client";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { Fragment, useEffect, useRef, useState } from "react";

const options = [
  { name: "Profile", href: "/profile" },
  { name: "Event Triggered Webhooks", href: "/webhooks" },
  { name: "Plans", href: "/Plans" },
  { name: "Contact-us", href: "/contact-us" },
];

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<any | undefined>(null);
  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      {" "}
      <Menu>
        <MenuButton
          className="flex flex-row items-center justify-center gap-1 "
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <UserCircleIcon className="w-10 hover:cursor-pointer" />
          <ChevronDownIcon
            className={`w-5 transition  ${
              isOpen ? "rotate-180" : ""
            } duration-300`}
          />
        </MenuButton>
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute bg-[#3d3c3c]  rounded-lg border border-[#b6b4b4] top-12 right-0 flex flex-col justify-start p-2">
            {options.map((route, index) => {
              return (
                <MenuItem key={index}>
                  <p
                    className=" hover:bg-[#6e5e9b]/90 text-white  py-2 rounded-lg pl-2 w-60 transition duration-200 ease-in-out"
                    onClick={() => {
                      router.push(route.href);
                    }}
                  >
                    {route.name}
                  </p>
                </MenuItem>
              );
            })}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
