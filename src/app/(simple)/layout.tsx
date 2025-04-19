import Header from "@/views/layout/Header";
import Sidebar from "@/views/layout/Sidebar";
import { Box } from "@mui/material";
import React from "react";

export default function AuthLayout({ children }: React.PropsWithChildren) {
  return (
    <Box className="flex min-h-screen">
      <Box className="md:w-[260px] h-screen fixed overflow-hidden z-10 md:z-auto">
        <Sidebar />
      </Box>
      <Box className="md:ml-[260px] md:w-[calc(100%-264px)] w-full">
        <Header />
       <Box className="p-6">
       {children}
       </Box>
      </Box>
    </Box>
  );
}
