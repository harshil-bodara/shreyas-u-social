/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Typography } from "@mui/material";
import ConnectionCard from "components/ConnectionCard";
import useAuth from "hook/useAuth";
import { useRouter } from "next/navigation";

const SentConnection = ({sendProfiles}:any) => {
  const router = useRouter();
  const { withdrawConnection, friendRequest } = useAuth();

  const handleWithdrawUser = async (targetUserId: string) => {
    await withdrawConnection(targetUserId);
    router.refresh();
  };

  const handleAcceptFriendRequest = async (requestId: string) => {
    await friendRequest("accept", { requestId });
    router.refresh();
  };

  const handleRejectFriendRequest = async (requestId: string) => {
    await friendRequest("reject", { requestId });
    router.refresh();
  };
  return (
    <Box className="sm:mx-10 md:mx-20 xl:mx-[230px]">
      <Box className="bg-white flex flex-col p-[27px] rounded-md">
        <Typography className="text-[#8C8C8C] !font-bold !text-xs 2xl:!text-sm !mb-3">
         {sendProfiles.length} Sent Connections
        </Typography>
        {sendProfiles?.map((sentProfile:any, index:number) => (
          <ConnectionCard
          key={index}
          name={sentProfile.username || sentProfile.name}
          title={`${sentProfile.designation || sentProfile.description} | ${sentProfile.city || ""}`}
          mutualConnections={sentProfile.connections}
          mutualConnectionName="Vishvendra"
          imageUrl={sentProfile.coverImage}
          direction={sentProfile.direction}
          isButton={false}
          outlineText="withdraw"
          onWithdraw={() => sentProfile._id && handleWithdrawUser(sentProfile._id)}
          onAccept={() => sentProfile._id && handleAcceptFriendRequest(sentProfile._id)}
          onReject={() => sentProfile._id && handleRejectFriendRequest(sentProfile._id)}
          location=""
        />
        ))}
      </Box>
    </Box>
  );
};

export default SentConnection;
