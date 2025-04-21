/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React from "react";
import Button from "./Button";

type ConnectionCardProps = {
  name: string;
  title: string;
  location: string;
  mutualConnections: number;
  mutualConnectionName: string;
  imageUrl: string;
  btnText: string;
  icon?: any;
  profileContent: any;
  message: string;
  onConnect: () => void;
  onIgnore: () => void;
};

const ConnectionCard: React.FC<ConnectionCardProps> = ({
  name,
  title,
  location,
  mutualConnections,
  mutualConnectionName,
  imageUrl,
  btnText,
  icon,
  profileContent,
  message = false,
  onConnect,
  onIgnore,
}) => {
  return (
    <Box className="bg-white px-7 rounded-md">
      <Box className="py-4 w-full border-b border-[#D9D9D9]">
        <Box className="flex items-center justify-between">
          <Box className="flex items-center gap-2">
            <img
              src={imageUrl}
              alt={name}
              className="w-[58px] h-[58px] rounded-full object-cover"
            />
            <Box>
              <Box className="font-bold text-secondary !text-base">{name}</Box>
              <Box className="text-sm text-gray-600">
                {title} | {location}
              </Box>
              <Box className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <img
                  src={profileContent}
                  alt="cover"
                  className="w-5 h-5 rounded-full object-cover"
                />
                {mutualConnectionName} & {mutualConnections} other mutual
                connection
                {mutualConnections > 1 ? "s" : ""}
              </Box>
            </Box>
          </Box>

          <Box className="flex items-center gap-3">
            <Button variant="outlined" onClick={onIgnore}>Ignore</Button>
            <Button
              variant="contained"
              className="!w-[132px] !h-[27px] !font-bold"
              icon={icon}
              onClick={onConnect}
            >
              {btnText}
            </Button>
          </Box>
        </Box>
        {message && (
          <Box className="bg-gray-100 border border-[#D9D9D9] text-sm text-gray-800 p-3 rounded-md mt-2">
            {message}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ConnectionCard;
