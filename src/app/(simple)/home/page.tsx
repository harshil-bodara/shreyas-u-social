import React from "react";
import Home from "views/home";
import { cookies } from "next/headers";
import axios from "axios";

const Homepage = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const [explorersRes, inviteRes] = await Promise.all([
    axiosInstance.get("/explore", { headers: { "Cache-Control": "no-store" } }),
    axiosInstance.get("/users/invite", { headers: { "Cache-Control": "no-store" } }),
  ]);

  const explorers = explorersRes.data.exploreItems;
  const inviteProfiles = inviteRes.data.users;

  return <Home explorerlist={explorers} inviteProfiles={inviteProfiles} />;
};

export default Homepage;
