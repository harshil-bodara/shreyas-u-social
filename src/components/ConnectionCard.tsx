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
  onConnect,
  onIgnore,
}) => {
  return (
    <Box className="flex items-center justify-between p-4 bg-white w-full border-y border-[#D9D9D9]">
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
          <Box className="text-xs text-gray-500 mt-1">
            {mutualConnectionName} & {mutualConnections} other mutual connection
            {mutualConnections > 1 ? "s" : ""}
          </Box>
        </Box>
      </Box>

      <Box className="flex items-center gap-3">
        <Button
          className="bg-transparent text-sm !text-[#353535] font-medium underline hover:text-gray-300"
        >
          Ignore
        </Button>
        <Button variant="contained" className="!w-[132px] !h-[27px] !font-bold" icon={icon}>
          {btnText}
        </Button>
      </Box>
    </Box>
  );
};

export default ConnectionCard;
