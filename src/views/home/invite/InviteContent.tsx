import { Box } from "@mui/material";
import ConnectionCard from "components/ConnectionCard";
import React from "react";
import { FaUserPlus } from "react-icons/fa";

const inviteProfiles = [
  {
    name: "Ashika Devi",
    designation: "BBA at Stanford University",
    location: "Mumbai",
    mutualConnection: "Vishvendra is mutual connection",
    message:
      "Your story continues on mobile: Build and edit decks. Give and receive feedback. Add content from any other app.",
  },
  {
    name: "Indranil Biswas",
    designation: "Co-Founder at Eventive Communications LLP",
    location: "Bangalore",
    mutualConnection: "Vishvendra is mutual connection",
  },
  {
    name: "Kavitha Desai",
    designation: "BBA @ Abc University",
    location: "Chennai",
    mutualConnection: "Vishvendra & 123 other mutual connection",
  },
  {
    name: "Priya Meon",
    designation: "Developer @ IJEENI",
    location: "Bangalore",
    mutualConnection: "Vishvendra is mutual connection",
    message:
      "Hey hi, I would like to ask you some question regarding your college. It doesn’t take long, only few minutes. Just like that. Can you help me with this?",
  },
  {
    name: "Amit Gupta",
    designation: "Human Resources Head @ IJEENI",
    location: "Bangalore",
    mutualConnection: "Vishvendra & 123 other mutual connection",
  },
  {
    name: "Kavitha Desai",
    designation: "BBA @ Abc University",
    location: "Chennai",
    mutualConnection: "Vishvendra & 123 other mutual connection",
  },
];

const InviteContent = () => {
  return (
    <Box className="mx-[200px] 2xl:mx-[400px]">
      <Box className="bg-white flex flex-col gap-4 rounded-md">
      {inviteProfiles.map((profile, index) => (
        <ConnectionCard
          key={index}
          name={profile.name}
          title={`${profile.designation} | ${profile.location}`}
          location={profile.location}
          mutualConnections={
            profile.mutualConnection.includes("&")
              ? 123
              : 1
          }
          mutualConnectionName="Vishvendra"
          imageUrl={`/assets/images/profile${(index % 5) + 1}.png`} 
          btnText="Connect"
          icon={<FaUserPlus className="w-3.5 h-3.5" />}
          profileContent="/assets/images/profilecontent.png"
          message={profile.message ?? ""}
          onConnect={() => alert(`Connected with ${profile.name}`)}
          onIgnore={() => alert(`Ignored ${profile.name}`)}
        />
      ))}
    </Box>
    </Box>
  );
};

export default InviteContent;
