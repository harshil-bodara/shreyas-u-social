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
      <Box className="py-4 px-6 w-full h-[72px] justify-between items-center gap-4 mb-7"></Box>
    </>
  );
};

export default Header;
