/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Typography } from "@mui/material";
import ConnectionCard from "components/ConnectionCard";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoPersonRemoveOutline } from "react-icons/io5";



const MyConnection = ({myConnections}:any) => {
  return (
    <Box className="sm:mx-10 md:mx-20 xl:mx-[230px]">
      <Box className="bg-white flex flex-col p-[27px] rounded-md">
        <Typography className="text-[#8C8C8C] !font-bold !text-xs 2xl:!text-sm !mb-3">
        {myConnections?.length} Connections
        </Typography>
        {myConnections.map((myConnection:any, index:number) => (
          <ConnectionCard
            key={index}
            name={myConnection.username || myConnection.name}
            title={`${myConnection.designation || "company"} | ${myConnection.city  || "Mumbai" }`}
            location={myConnection.city}
            mutualConnections={myConnection.connections}
            mutualConnectionName="Vishvendra"
            imageUrl={myConnection.coverImage}
            icon={<BiMessageRoundedDetail className="w-4 h-4" />}
            btnText="Message"
            outlineIcon={<IoPersonRemoveOutline className="w-3.5 h-3.5" />}
            outlineText="Remove"
            onConnect={() => alert(`Connected with ${myConnection.username}`)}
            onIgnore={() => alert(`Ignored ${myConnection.username}`)}
        isButtonClassName="!w-full sm:!w-[95px]"
          />
        ))}
      </Box>
    </Box>
  );
};

export default MyConnection;
