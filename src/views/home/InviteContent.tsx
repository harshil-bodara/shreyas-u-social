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
  return (
    <Box className="lg:mx-[230px]">
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
            outlineText="Ingore"
            icon={<FaUserPlus className="w-3.5 h-3.5" />}
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
