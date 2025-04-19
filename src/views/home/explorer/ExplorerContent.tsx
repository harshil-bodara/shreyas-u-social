import React from "react";
import { Box, Typography } from "@mui/material";
import CardProfile from "components/CardProfile";
import Button from "components/Button";
import { FaPlus, FaUserPlus } from "react-icons/fa";


const cardProfiles = [
  {
    coverImage: "assets/images/profilebg1.png",
    logo: "assets/images/profile1.png",
    name: "Ashika Devi",
    tag: "PEER",
    location: "BBA at Stanford University",
    followers: "Mumbai",
    mutuals: "Vishwendra is mutual connection",
    profileContent: "/assets/images/profilecontent.png",
    btnText: "Connect",
    icon: <FaUserPlus className="w-3.5 h-3.5" />,
    tagColor: "#FAA464",
  },
  {
    coverImage: "assets/images/profilebg2.png",
    logo: "assets/images/profile2.png",
    name: "Ashika Devi",
    tag: "HR",
    location: "BBA at Stanford University",
    followers: "Mumbai",
    mutuals: "Vishwendra is mutual connection",
    profileContent: "/assets/images/profilecontent.png",
    btnText: "Connect",
    icon: <FaUserPlus className="w-3.5 h-3.5" />,
    tagColor: "#8787FC",
  },
  {
    coverImage: "assets/images/profilebg3.png",
    logo: "assets/images/profile3.png",
    name: "Ashika Devi",
    tag: "COMPANY",
    location: "BBA at Stanford University",
    followers: "Mumbai",
    mutuals: "Vishwendra is mutual connection",
    profileContent: "/assets/images/profilecontent.png",
    btnText: "Follow",
    icon: <FaPlus className="w-3.5 h-3.5" />,
    tagColor: "#77BE8A",
  },
  {
    coverImage: "assets/images/profilebg4.png",
    logo: "assets/images/profile4.png",
    name: "Ashika Devi",
    tag: "COLLEGE",
    location: "BBA at Stanford University",
    followers: "Mumbai",
    mutuals: "Vishwendra is mutual connection",
    profileContent: "/assets/images/profilecontent.png",
    btnText: "Follow",
    icon: <FaPlus className="w-3.5 h-3.5" />,
    tagColor: "#77BE8A",
  },
];

const ExplorerContent = () => {
  return (
    <Box className="mx-[80px] 2xl:mx-[200px]">
      <Box className="pb-7">
        <Box className="flex justify-between items-center pb-[15px]">
          <Typography className="!text-[22px] !font-bold text-secondary">
            Recommended
          </Typography>
          <Button className="!text-sm !text-primary hover:!bg-transparent !w-fit !h-fit !p-0 font-bold">
            View More
          </Button>
        </Box>
        <Box className="grid grid-cols-4 gap-7.5">
          {cardProfiles.map((cardProfile, i) => {
            return (
              <CardProfile
                key={i}
                coverImage={cardProfile.coverImage}
                logo={cardProfile.logo}
                name={cardProfile.name}
                tag={cardProfile.tag}
                location={cardProfile.location}
                followers={cardProfile.followers}
                mutuals={cardProfile.mutuals}
                profileContent={cardProfile.profileContent}
                btnText={cardProfile.btnText}
                icon={cardProfile.icon}
                tagColor={cardProfile.tagColor}
              />
            );
          })}
        </Box>
      </Box>
      <Box className="pb-7">
        <Box className="flex justify-between items-center pb-[15px]">
          <Box className="flex gap-3 items-center">
            <Typography className="!text-[22px] !font-bold text-secondary">
              From your college
            </Typography>
            <Typography className="!text-[7px] text-[#F9F9F9] pt-[3px] !font-bold bg-[#FAA464] w-[45px] h-[14px] flex justify-center items-center rounded-full">
              PEER
            </Typography>
          </Box>
          <Button className="!text-sm !text-primary hover:!bg-transparent !w-fit !h-fit !p-0 font-bold">
            View More
          </Button>
        </Box>
        <Box className="grid grid-cols-4 gap-7.5">
          {cardProfiles.map((cardProfile, i) => {
            return (
              <CardProfile
                key={i}
                coverImage={cardProfile.coverImage}
                logo={cardProfile.logo}
                name={cardProfile.name}
                tag={cardProfile.tag}
                location={cardProfile.location}
                followers={cardProfile.followers}
                mutuals={cardProfile.mutuals}
                profileContent={cardProfile.profileContent}
                btnText={cardProfile.btnText}
                icon={cardProfile.icon}
                tagColor={cardProfile.tagColor}
              />
            );
          })}
        </Box>
      </Box>
      <Box className="pb-7">
        <Box className="flex justify-between items-center pb-[15px]">
          <Box className="flex gap-3 items-center">
            <Typography className="!text-[22px] !font-bold text-secondary">
              Recommended HR’s
            </Typography>
            <Typography className="!text-[7px] text-[#F9F9F9] pt-[3px] !font-bold bg-[#8787FC] w-[45px] h-[14px] flex justify-center items-center rounded-full">
              HR
            </Typography>
          </Box>
          <Button className="!text-sm !text-primary hover:!bg-transparent !w-fit !h-fit !p-0 font-bold">
            View More
          </Button>
        </Box>
        <Box className="grid grid-cols-4 gap-7.5">
          {cardProfiles.map((cardProfile, i) => {
            return (
              <CardProfile
                key={i}
                coverImage={cardProfile.coverImage}
                logo={cardProfile.logo}
                name={cardProfile.name}
                tag={cardProfile.tag}
                location={cardProfile.location}
                followers={cardProfile.followers}
                mutuals={cardProfile.mutuals}
                profileContent={cardProfile.profileContent}
                btnText={cardProfile.btnText}
                icon={cardProfile.icon}
                tagColor={cardProfile.tagColor}
              />
            );
          })}
        </Box>
      </Box>
      {/* <ConnectionCard
        name="Ashika Devi"
        title="BBA at Stanford University | Mumbai"
        location="Chennai"
        mutualConnections={123}
        mutualConnectionName="Vishwendra"
        imageUrl="/assets/images/profile1.png"
        btnText="Connect"
        icon={<FaUserPlus className="w-3.5 h-3.5" />}
        onConnect={() => alert("Connected!")}
        onIgnore={() => alert("Ignored!")}
      /> */}
    </Box>
  );
};

export default ExplorerContent;
