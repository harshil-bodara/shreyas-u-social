/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TabLayout from "./TabLayout";

const Home = ({ explorerlist, inviteProfiles, sendProfiles, myConnections }: any) => {
  return (
    <>
      <TabLayout explorerlist={explorerlist} inviteProfiles={inviteProfiles} sendProfiles={sendProfiles} myConnections={myConnections}/>
    </>
  );
};

export default Home;
