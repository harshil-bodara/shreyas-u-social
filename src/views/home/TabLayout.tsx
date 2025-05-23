/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Box, OutlinedInput, Tab, Tabs } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import Button from "components/Button";
import InviteContent from "./InviteContent";
import ExplorerContent from "./ExplorerContent";
import { IoIosLogOut } from "react-icons/io";
import SentConnection from "./SentConnection";
import MyConnection from "./MyConnection";
import useAuth from "hook/useAuth";
import { useRouter } from "next/navigation";


const CustomTabPanel = ({
  children,
  value,
  index,
}: {
  children?: React.ReactNode;
  value: number;
  index: number;
}) => {
  return value === index ? <>{children}</> : null;
};

const headerTabs = [
  { name: "Explore" },
  { name: "Invite" },
  { name: "Sent Connection" },
  { name: "My Connection" },
  { name: "Following" },
];

const TabLayout = ({explorerlist, inviteProfiles, sendProfiles, myConnections}:any) => {
  const [tabIndex, setTabIndex] = useState(0);
  const router = useRouter();
  const {handleLogout} = useAuth();
  const handleTabChange = (_: any, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Box className="ml-auto w-fit">
        <Button className="!h-[36px] !w-[100px] font-bold lg:hidden bg-[#f9f9f9] mb-2">
          <IoIosLogOut className="w-5 h-5" />
          Log Out
        </Button>
      </Box>
      <Box className="p-4 sm:p-[27px] bg-[#F9F9F9] rounded-[6px] mb-4 sm:mb-7">
        <Box className="flex flex-col sm:flex-row justify-between border-b border-[#D9D9D9] overflow-x-auto w-full">
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            sx={{
              ".MuiTabs-indicator": {
                display: "none",
              },
              ".MuiTabs-list": {
                justifyContent: "start !important",
              },
              ".MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", sm: "center" },
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              },
              ".MuiButtonBase-root": {
                padding: "0 14px 5px 14px !important",
                position: "relative",
                "&.Mui-selected::after": {
                  content: '""',
                  position: "absolute !important",
                  bottom: "0 !important",
                  left: "50% !important",
                  transform: "translateX(-50%) !important",
                  backgroundColor: "var(--color-primary) !important",
                  height: "2px !important",
                  width: "100% !important",
                },
              },
              ".MuiTab-root": {
                fontFamily: "Plus Jakarta Sans, serif",
                textTransform: "none",
                color: "var(--color-secondary)",
                "&.Mui-selected": {
                  color: "var(--color-primary) !important",
                  fontWeight: "500",
                },
              },
            }}
          >
            {headerTabs?.map((tab, index) => (
              <Tab
                key={index}
                className="!text-base sm:!text-lg"
                disableRipple
                label={tab.name}
              />
            ))}
          </Tabs>
          <Button className="!h-[36px] !w-[100px] font-bold hidden lg:flex justify-center items-center" onClick={() => {handleLogout();
            router.push("/login")
          }}>
          <IoIosLogOut className="w-5 h-5" />
          Log Out
        </Button>
        </Box>
        <Box className="pt-[15px] flex justify-between">
          <Box className="flex flex-wrap md:flex-nowrap justify-between w-full gap-2 sm:gap-4 md:gap-5.5">
            <Box className="flex items-center rounded-[6px] px-3 py-3 w-full md:w-[298px] h-[35px] sm:h-[46px] bg-[#F2F2F2] relative">
              <FiSearch className="text-gray-700 mr-2 text-lg absolute" />
              <OutlinedInput
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "0 !important",
                    height: "46px",
                  },
                }}
                placeholder="Search"
                className="pl-2.5"
              />
            </Box>
            <Box className="flex items-center gap-3 md:gap-[22px] w-full">
              <Button className="!w-[65px] !h-[35px] sm:!h-[46px] sm:!w-[101px]">
                Peer
              </Button>
              <Button className="!w-[65px] !h-[35px] sm:!h-[46px] sm:!w-[101px]">
                Company
              </Button>
              <Button className="!w-[65px] !h-[35px] sm:!h-[46px] sm:!w-[101px]">
                College
              </Button>
              <Button className="!w-[65px] !h-[35px] sm:!h-[46px] sm:!w-[101px] text-gray-700 flex lg:hidden justify-center gap-1 !text-xs items-center">
                <CiFilter className="w-3.5 h-3.5" />
                Filter
              </Button>
            </Box>
          </Box>
          <Button className="!w-[103px] text-gray-700 hidden lg:flex justify-center gap-1 !text-base items-center">
            <CiFilter className="w-4.5 h-4.5" />
            Filter
          </Button>
        </Box>
      </Box>
      <Box>
        <CustomTabPanel value={tabIndex} index={0}>
          <ExplorerContent  explorerlist={explorerlist}/>
        </CustomTabPanel>
        <CustomTabPanel value={tabIndex} index={1}>
          <InviteContent  inviteProfiles={inviteProfiles}/>
        </CustomTabPanel>
        <CustomTabPanel value={tabIndex} index={2}>
          <SentConnection  sendProfiles={sendProfiles}/>
        </CustomTabPanel>
        <CustomTabPanel value={tabIndex} index={3}>
          <MyConnection myConnections={myConnections}/>
        </CustomTabPanel>
      </Box>
    </>
  );
};

export default TabLayout;
