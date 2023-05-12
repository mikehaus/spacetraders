"use client";
import { useQuery } from "react-query";
import axios from "axios";
import { env } from "../src/env.mjs";

function Sidebar() {
  return (
    <div className="flex justify-center w-1/12 min-h-screen bg-slate-700 p-2"></div>
  );
}

function MainContainer() {
  return <div className="w-11/12 min-h-full bg-slate-800"></div>;
}

export default function Home() {
  // TODO: REFACTOR TO HANDLE CALL IN SERVER COMPONENT
  const AXIOS_FACTION_CONFIG = {
    method: "get",
    url: "https://api.spacetraders.io/v2/my/factions",
    headers: { Authorization: `Bearer ${env.NEXT_PUBLIC_SPACETRADERS_KEY}` },
  };

  const getFactions = () => {
    axios(AXIOS_FACTION_CONFIG)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  const factionData = useQuery({
    queryKey: ["factions"],
    queryFn: getFactions,
  });
  console.log(factionData);

  return (
    <main>
      <div className="flex min-h-screen min-w-screen max-h-screen overflow-hidden bg-transparent">
        <Sidebar />
        <MainContainer />
      </div>
    </main>
  );
}
