/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Box, Typography } from "@mui/material";
import CardProfile from "components/CardProfile";
import Button from "components/Button";
import { FaPlus, FaUserPlus } from "react-icons/fa";
import useAuth from "hook/useAuth";
import { useRouter } from "next/navigation";

type ProfileType = {
  coverImage: string;
  logo: string;
  name: string;
  tag: string;
  location: string;
  followers: string;
  mutuals: string;
  profileContent: string;
  btnText: string;
  icon: React.ReactNode;
  tagColor: string;
  id?: string;
  type?: string;
};

type ExplorerContentProps = {
  explorerlist: any[];
};

const ExplorerContent = ({ explorerlist }: ExplorerContentProps) => {
  const { companyFollowUnfollow, friendRequest } = useAuth();
  const router = useRouter();

  const convertedProfiles: ProfileType[] = explorerlist?.map(
    (profile: any): ProfileType => ({
      coverImage: "assets/images/profilebg1.png",
      logo: profile.coverImage || "assets/images/default-avatar.png",
      name: profile.username || profile.name || "Anonymous",
      tag: profile.type ? profile.type.toUpperCase() : "USER",
      location: "Mumbai",
      followers: `${profile.connections + ' Followers'}`,
      mutuals: "Vishwendra is mutual connection",
      profileContent: "/assets/images/profilecontent.png",
      btnText: profile.type === "company" ? "Follow" : "Connect",
      icon:
        profile.type === "company" ? (
          <FaPlus className="w-3.5 h-3.5" />
        ) : (
          <FaUserPlus className="w-3.5 h-3.5" />
        ),
      tagColor: profile.type === "company" ? "#77BE8A" : "#FAA464",
      id: profile._id || profile.id, // assuming _id or id is companyId
      type: profile.type,
    })
  );

  const groupedProfiles = convertedProfiles.reduce(
    (acc: Record<string, ProfileType[]>, profile: ProfileType) => {
      if (!acc[profile.tag]) acc[profile.tag] = [];
      acc[profile.tag].push(profile);
      return acc;
    },
    {}
  );

  const recommendedProfiles: ProfileType[] = convertedProfiles;
  const fromCollegeProfiles: ProfileType[] = groupedProfiles["USER"] || [];
  const hrProfiles: ProfileType[] = groupedProfiles["HR"] || [];
  const companyProfiles: ProfileType[] = groupedProfiles["COMPANY"] || [];

  const handleCompanyFollow = async (
    companyId: string,
    type: "follow" | "unfollow"
  ) => {
    await companyFollowUnfollow(companyId, type);
    router.refresh();
  };

  const handleSendFriendRequest = async (receiverId: string) => {
    await friendRequest("send", { receiverId });
    router.refresh();
  };

  return (
    <Box className="xl:mx-16 2xl:mx-30">
      <Box className="pb-12 sm:pb-10 md:pb-7">
        <Box className="flex justify-between items-center pb-[15px]">
          <Typography className="!text-base sm:!text-[22px] !font-bold text-secondary">
            Recommended
          </Typography>
          <Button className="!text-sm !text-primary !bg-transparent !w-fit !h-fit !p-0 font-bold">
            View More
          </Button>
        </Box>
        <Box className="grid grid-cols-4 gap-7.5">
          {recommendedProfiles.map((cardProfile: ProfileType, i: number) => {
            const isCompany = cardProfile.type === "company";

            return (
              <CardProfile
                key={i}
                {...cardProfile}
                isCompany={isCompany}
                onfollowUnfollow={isCompany ? () => cardProfile.id && handleCompanyFollow(cardProfile.id, "follow") : undefined}
                // Pass onConnectRequest if it's not a company
                onConnectRequest={!isCompany ? () => cardProfile.id && handleSendFriendRequest(cardProfile.id) : undefined}
              />
            );
          })}
        </Box>
      </Box>
      <Box className="pb-12 sm:pb-10 md:pb-7">
        <Box className="flex justify-between items-center pb-[15px]">
          <Box className="flex gap-3 items-center">
            <Typography className="!text-base sm:!text-[22px] !font-bold text-secondary">
              From your college
            </Typography>
            <Typography className="!text-[7px] text-[#F9F9F9] pt-[3px] !font-bold bg-[#FAA464] w-[45px] h-[14px] flex justify-center items-center rounded-full">
              USER
            </Typography>
          </Box>
          <Button className="!text-sm !text-primary !bg-transparent !w-fit !h-fit !p-0 font-bold">
            View More
          </Button>
        </Box>
<Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5">
          {fromCollegeProfiles.length > 0 ? (
            fromCollegeProfiles.map((cardProfile: ProfileType, i: number) => (
              <CardProfile
                key={i}
                {...cardProfile}
                onConnectRequest={() =>
                  cardProfile.id && handleSendFriendRequest(cardProfile.id)
                }
              />
            ))
          ) : (
            <Typography className="col-span-4 text-center text-gray-400">
              No users from your college found.
            </Typography>
          )}
        </Box>
      </Box>
      <Box className="pb-12 sm:pb-10 md:pb-7">
        <Box className="flex justify-between items-center pb-[15px]">
          <Box className="flex gap-3 items-center">
            <Typography className="!text-base sm:!text-[22px] !font-bold text-secondary">
              Recommended HR’s
            </Typography>
            <Typography className="!text-[7px] text-[#F9F9F9] pt-[3px] !font-bold bg-[#8787FC] w-[45px] h-[14px] flex justify-center items-center rounded-full">
              HR
            </Typography>
          </Box>
          <Button className="!text-sm !text-primary !bg-transparent !w-fit !h-fit !p-0 font-bold">
            View More
          </Button>
        </Box>
    <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5">
          {hrProfiles.length > 0 ? (
            hrProfiles.map((cardProfile: ProfileType, i: number) => (
              <CardProfile
                key={i}
                {...cardProfile}
                onConnectRequest={() =>
                  cardProfile.id && handleSendFriendRequest(cardProfile.id)
                }
              />
            ))
          ) : (
            <Typography className="col-span-4 text-center text-gray-400">
              No HR profiles found.
            </Typography>
          )}
        </Box>
      </Box>
      <Box className="pb-7">
        <Box className="flex justify-between items-center pb-[15px]">
          <Box className="flex gap-3 items-center">
            <Typography className="!text-[22px] !font-bold text-secondary">
              Top Companies
            </Typography>
            <Typography className="!text-[7px] text-[#F9F9F9] pt-[3px] !font-bold bg-[#77BE8A] w-[70px] h-[14px] flex justify-center items-center rounded-full">
              COMPANY
            </Typography>
          </Box>
          <Button className="!text-sm !text-primary !bg-transparent !w-fit !h-fit !p-0 font-bold">
            View More
          </Button>
        </Box>
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5">
          {companyProfiles.length > 0 ? (
            companyProfiles.map((cardProfile: ProfileType, i: number) => (
              <Box key={i} className="relative">
                <CardProfile
                  {...cardProfile}
                  onfollowUnfollow={() =>
                    cardProfile.id &&
                    handleCompanyFollow(cardProfile.id, "follow")
                  }
                />
              </Box>
            ))
          ) : (
            <Typography className="col-span-4 text-center text-gray-400">
              No company profiles found.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ExplorerContent;
