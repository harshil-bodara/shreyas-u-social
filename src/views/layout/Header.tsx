import { Box } from "@mui/material";
import React from "react";

const navLinks = [
  { name: "For Patients" },
  { name: "For Medical Practitioners" },
  { name: "For Medical Labs Services" },
  { name: "For Clinics & Hospitals" },
];

const Header = () => {
  return (
    <>
      <Box className="xl:py-4 xl:px-6 w-full xl:h-[72px] xl:mb-7 justify-between items-center gap-4"></Box>
    </>
  );
};

export default Header;
