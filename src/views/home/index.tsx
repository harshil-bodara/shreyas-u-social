/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TabLayout from "./TabLayout";

const Home = ({ explorerlist, inviteProfiles }: any) => {
  return (
    <>
      <TabLayout explorerlist={explorerlist} inviteProfiles={inviteProfiles} />
    </>
  );
};

export default Home;
