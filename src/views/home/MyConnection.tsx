import React from "react";
import { Box, Typography } from "@mui/material";
import ConnectionCard from "components/ConnectionCard";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoPersonRemoveOutline } from "react-icons/io5";

const myProfiles = [
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

const MyConnection = () => {
  return (
    <Box className="lg:mx-[230px]">
      <Box className="bg-white flex flex-col p-[27px] rounded-md">
        <Typography className="text-[#8C8C8C] !font-bold !text-xs 2xl:!text-sm !mb-3">
          775 Connections
        </Typography>
        {myProfiles.map((myProfile, index) => (
          <ConnectionCard
            key={index}
            name={myProfile.name}
            title={`${myProfile.designation} | ${myProfile.location}`}
            mutualConnections={
              myProfile.mutualConnections.includes("&") ? 123 : 1
            }
            mutualConnectionName="Vishvendra"
            imageUrl={myProfile.imageUrl}
            icon={<BiMessageRoundedDetail className="w-4 h-4" />}
            outlineIcon={<IoPersonRemoveOutline className="w-3.5 h-3.5" />}
            btnText="Message"
            outlineText="Remove"
            profileContent="/assets/images/profilecontent.png"
            onConnect={() => alert(`Connected with ${myProfile.name}`)}
            onIgnore={() => alert(`Ignored ${myProfile.name}`)}
            isButtonClassName="!w-[95px]"
          />
        ))}
      </Box>
    </Box>
  );
};

export default MyConnection;
