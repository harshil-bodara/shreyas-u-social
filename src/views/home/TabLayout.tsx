/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { Box, OutlinedInput, Tab, Tabs } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import Button from "components/Button";
import InviteContent from "./invite/InviteContent";
import ExplorerContent from "./explorer/ExplorerContent";
import { IoIosLogOut } from "react-icons/io";

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

const TabLayout = ({explorerlist, inviteProfiles}:any) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (_: any, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <>
      <Box className="p-[27px] bg-[#F9F9F9] rounded-[6px] mb-7">
        <Box className="flex justify-between items-center border-b border-[#D9D9D9]">
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
                className="!text-lg"
                disableRipple
                label={tab.name}
              />
            ))}
          </Tabs>
          <Button className="!h-[36px] !w-[100px] font-bold">
            <IoIosLogOut className="w-5 h-5" />
            Log Out
          </Button>
        </Box>
        <Box className="pt-[15px] flex justify-between">
          <Box className="flex gap-5.5">
            <Box className="flex items-center rounded-[6px] px-3 py-3 w-[298px] h-[46px] bg-[#F2F2F2] relative">
              <FiSearch className="text-gray-700 mr-2 text-lg absolute" />
              <OutlinedInput
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "0 !important",
                    height: "46px",
                  },
                }}
                placeholder="Search"
                className="pl-4"
              />
            </Box>
            <Button className="!w-[101px]">Peer</Button>
            <Button className="!w-[101px]">Company</Button>
            <Button className="!w-[101px]">College</Button>
          </Box>
          <Button className="!w-[103px] text-gray-700 flex justify-center gap-1 !text-base items-center">
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
      </Box>
    </>
  );
};

export default TabLayout;
