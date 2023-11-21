import React from "react";
import Data from "../../Data/Data";
import Coins from "../coins/Coins";

export default function Home() {
  const [coins, setCoins] = Data();

  return (
    <div>
      <Coins coin={coins} />
    </div>
  );
}
