/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box } from "@mui/material";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import profileContent from "./../../public/assets/images/profile2.png"

type ConnectionCardProps = {
  name: string;
  title: string;
  location?: string;
  mutualConnections: number;
  mutualConnectionName: string;
  imageUrl: string;
  btnText?: string;
  outlineText?: string;
  icon?: any;
  outlineIcon?: any;
  message?: string;
  isButton?: any;
  direction?: string;
  isButtonClassName?: string;
  onConnect?: () => void;
  onIgnore?: () => void;
  onWithdraw?: () => void;
  onReject?: () => void;
  onAccept?: () => void;
};

const ConnectionCard: React.FC<ConnectionCardProps> = ({
  name,
  title,
  location,
  mutualConnections,
  mutualConnectionName,
  imageUrl,
  btnText,
  outlineText,
  icon,
  outlineIcon,
  isButton = true,
  isButtonClassName,
  message = false,
  direction,
  onConnect,
  onIgnore,
  onWithdraw,
  onReject,
  onAccept,
}) => {
  return (
    <Box className="bg-white rounded-md">
      <Box className="py-[18px] w-full border-t border-[#D9D9D9]">
        <Box className="flex flex-col lg:flex-row items-center justify-between">
          <Box className="flex items-center gap-2">
          <Image
            src={imageUrl}
            alt="mutual profile"
            width={20}
            height={20}
              className="w-[58px] h-[58px] rounded-full object-cover"
          />
            <Box>
              <Box className="font-bold text-secondary !text-base">{name}</Box>
              <Box className="text-xs 2xl:text-sm text-[#353535]">
                {title} | {location}
              </Box>
              <Box className="text-[10px] 2xl:text-xs text-gray-500 mt-0.5 flex items-center gap-1">
              <Image
                  src={profileContent}
                  alt="cover"
                  className="w-3.5 h-3.5 2xl:w-5 2xl:h-5 rounded-full object-cover"
                  width={20}
                  height={20}
                />
                {mutualConnectionName} & {mutualConnections} other mutual
                connection
                {mutualConnections > 1 ? "s" : ""}
              </Box>
            </Box>
          </Box>

          <Box className="flex items-center gap-3">
            {isButton && (
              <Button
                variant="contained"
                className={`!h-[27px] !font-bold !text-[11px] ${isButtonClassName}`}
                icon={icon}
                onClick={onConnect}
              >
                {btnText}
              </Button>
            )}
            {direction === "received" ? (
              <>
                <Button
                  variant="outlined"
                  className="!text-[11px]"
                  onClick={onReject}
                >
                  Reject
                </Button>
                <Button
                  variant="contained"
                  className="!h-[27px] !font-bold !text-[11px]"
                  onClick={onAccept}
                >
                  Accept
                </Button>
              </>
            ) : (
              <Button
                variant="outlined"
                className="!text-[11px]"
                icon={outlineIcon}
                onClick={onIgnore || onWithdraw}
              >
                {outlineText}
              </Button>
            )}
          </Box>
        </Box>
        {message && (
          <Box className="bg-[#f2f2f2] border border-[#D9D9D9] text-sm text-gray-800 p-2.5 rounded-md mt-2">
            {message}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ConnectionCard;
