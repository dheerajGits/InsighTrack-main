// "use client";
import NavigationButton from "@/components/NavigationButton";
import React from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import UserFilteredView from "@/components/UserFilteredView";

const getUserData = async () => {};

async function User() {
  //   const router = useRouter();
  const user = await getUserData();
  console.log(process.env.MAIN_API_URL);
  return (
    <main className="flex flex-col  px-20 py-5">
      <p className="text-2xl font-bold mb-8">Users</p>
      <UserFilteredView users={await getUserData()} />
    </main>
  );
}
export default User;
