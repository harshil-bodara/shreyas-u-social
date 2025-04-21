/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import ConnectionCard from "components/ConnectionCard";
import useAuth from "hook/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import { FaUserPlus } from "react-icons/fa";

const InviteContent = ({ inviteProfiles }: any) => {
  const router = useRouter();
  const { friendRequest, ignoreUser } = useAuth();
  const handleSendFriendRequest = async (receiverId: string) => {
    await friendRequest("send", { receiverId });
    router.refresh();
  };

  const handleIngoreUser = async (ignoredUserId: string) => {
    await ignoreUser(ignoredUserId);
    router.refresh();
  };
  console.log(inviteProfiles)
  return (
    <Box className="mx-[200px] 2xl:mx-[400px]">
      <Box className="bg-white flex flex-col gap-4 rounded-md">
        {inviteProfiles?.map((profile: any, index: number) => (
          <ConnectionCard
            key={index}
            name={profile.username}
            title={`${profile.designation} | ${profile.city}`}
            location={profile.city || "Mumbai"}
            mutualConnections={profile.connections}
            mutualConnectionName="Vishvendra"
            imageUrl={
              profile.coverImage ||
              `/assets/images/profile${(index % 5) + 1}.png`
            } // Use dynamic cover image
            btnText="Connect"
            icon={<FaUserPlus className="w-3.5 h-3.5" />}
            profileContent="/assets/images/profilecontent.png"
            message={profile.message || "Hello, let's connect!"}
            onConnect={() => profile._id && handleSendFriendRequest(profile._id)}
            onIgnore={() => profile._id && handleIngoreUser(profile._id)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InviteContent;
