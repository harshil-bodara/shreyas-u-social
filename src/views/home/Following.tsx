import React from "react";
import { Box, Typography } from "@mui/material";
import ConnectionCard from "components/ConnectionCard";
import { IoPersonRemoveOutline } from "react-icons/io5";

const sentProfiles = [
  {
    imageUrl: "assets/images/profile1.png",
    name: "Ashika Devi",
    designation: "BBA at Stanford University",
    location: "Mumbai",
    mutualConnections: "Vishvendra is mutual connection",
  },
  {
    imageUrl: "assets/images/profile2.png",
    name: "Indranil Biswas",
    designation: "Co-Founder at Eventive Communications LLP",
    location: "Bangalore",
    mutualConnections: "Vishvendra is mutual connection",
  },
  {
    imageUrl: "assets/images/profile5.png",
    name: "Kavitha Desai",
    designation: "BBA @ Abc University",
    location: "Chennai",
    mutualConnections: "Vishvendra & 123 other mutual connection",
  },
  {
    imageUrl: "assets/images/profile6.png",
    name: "Priya Meon",
    designation: "Developer @ IJEENI",
    location: "Bangalore",
    mutualConnections: "Vishvendra is mutual connection",
  },
  {
    imageUrl: "assets/images/profile8.png",
    name: "Amit Gupta",
    designation: "Human Resources Head @ IJEENI",
    location: "Bangalore",
    mutualConnections: "Vishvendra & 123 other mutual connection",
  },
  {
    imageUrl: "assets/images/profile5.png",
    name: "Kavitha Desai",
    designation: "BBA @ Abc University",
    location: "Chennai",
    mutualConnections: "Vishvendra & 123 other mutual connection",
  },
];

const Following = () => {
  return (
    <Box className="sm:mx-10 md:mx-20 xl:mx-[230px]">
      <Box className="bg-white flex flex-col p-[27px] rounded-md">
        <Typography className="text-[#8C8C8C] !font-bold !text-xs 2xl:!text-sm !mb-3">
          10 Followings
        </Typography>
        {sentProfiles.map((sentProfile, index) => (
          <ConnectionCard
            key={index}
            name={sentProfile.name}
            title={`${sentProfile.designation} | ${sentProfile.location}`}
            mutualConnections={
              sentProfile.mutualConnections.includes("&") ? 123 : 1
            }
            mutualConnectionName="Vishvendra"
            imageUrl={sentProfile.imageUrl}
            icon={false}
            btnText="Accept"
            isButtonClassName="!w-full sm:!w-[100px]"
           outlineIcon={<IoPersonRemoveOutline className="w-3.5 h-3.5" />}
                       outlineText="Remove"
            onConnect={() => alert(`Connected with ${sentProfile.name}`)}
            onIgnore={() => alert(`Ignored ${sentProfile.name}`)}
            location={""}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Following;
