// "use client";
import NavigationButton from "@/components/NavigationButton";
import React from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import UserFilteredView from "@/components/UserFilteredView";
import axios from "axios";

const getUserData = async () => {
  try {
    const {
      data: { users },
    } = await axios.get(`${process.env.MAIN_API_URL}/users`);
    return getUserData;
  } catch (e) {
    console.log("Error while fetching users");
  }
};

async function User() {
  //   const router = useRouter();
  const users = await getUserData();
  console.log(process.env.MAIN_API_URL);
  return (
    <main className="flex flex-col  px-20 py-5">
      <p className="text-2xl font-bold mb-8">Users</p>
      <UserFilteredView users={users} />
    </main>
  );
}
export default User;
