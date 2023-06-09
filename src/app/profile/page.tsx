import React from "react";
import { getServerSession } from "next-auth/next";
import { authConfig } from "../config/auth";

type Props = {};

const Profile = async (props: Props) => {
  const session = await getServerSession(authConfig);

  return (
    <div className="flex min-h-screen flex-col items-center ">
      <h1>Profile of {session?.data?.user?.name}</h1>
      {session?.data.user?.image && (
        <img src={session?.data?.user?.image} alt="" />
      )}
    </div>
  );
};

export default Profile;
