import React from "react";
import { Box, Typography } from "@mui/material";
import Button from "./Button";

interface CardProfileProps {
  coverImage: any;
  logo: any;
  name: string;
  tag: string;
  location: any;
  followers: any;
  mutuals: string;
  btnText: string;
  icon?: any;
  profileContent: any;
  tagColor?: any;
}

const CardProfile = ({
  coverImage,
  logo,
  name,
  tag,
  location,
  followers,
  mutuals,
  btnText,
  icon,
  profileContent,
  tagColor,
}: CardProfileProps) => {
  return (
    <Box className="bg-white rounded-[6px] w-full text-center">
      <img
        src={coverImage}
        alt="cover"
        className="w-full h-[69px] rounded-t-[6px] object-cover"
      />

      <Box className="flex flex-col items-center p-5 pt-0 -mt-12">
        <Box className="relative">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-18 h-18 rounded-full"
          />
          <Typography
            className="!text-[7px] text-[#F9F9F9] -bottom-1 left-[14px] !font-bold w-[45px] h-[14px] flex justify-center items-center rounded-full absolute"
            style={{ backgroundColor: tagColor }}
          >
            {tag}
          </Typography>
        </Box>
        <Typography className="!font-bold !text-base text-secondary !mt-2">
          {name}
        </Typography>
        <Typography className="!text-xs text-[#353535] !mt-0.5">
          {location}
        </Typography>
        <Box className="flex items-center !text-xs text-[#353535] mt-1 mb-2">
          {followers}
        </Box>
        <Box className="flex items-center gap-1">
          <img
            src={profileContent}
            alt="cover"
            className="w-5 h-5 rounded-full object-cover"
          />
          <Typography className="!text-[10px] text-gray-700">
            {mutuals}
          </Typography>
        </Box>

        <Button
          variant="contained"
          className="!w-full !font-bold !mt-3"
          icon={icon}
        >
          {btnText}
        </Button>
      </Box>
    </Box>
  );
};

export default CardProfile;
