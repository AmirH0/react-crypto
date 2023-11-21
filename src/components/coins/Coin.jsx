import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../Data/Data";
import './Coin.css'

export default function Coin() {
  const [coins, setCoins] = Data();
  const [coin, setcoin] = useState();
  let param = useParams();

  useEffect(() => {
    let res = coins.find((coin) => coin.rank == param.ID);
    setcoin(res);
    console.log(res);
  }, [coins]);

  return (
    <div>
      {coin ? (
        <div className="coin">
          <h1>{coin.name}</h1>
          <h2>{coin.symbol}</h2>

          <p>Coin Rank : {coin.rank}</p>
          <p>
            Coin price : <br /> {coin.priceUsd}
          </p>
          <p>
            MarketCap : <br /> {coin.marketCapUsd}
          </p>
          <p>
            changePerecent : <br /> {coin.changePercent24Hr}
          </p>
          <p>
            volumeUsd24Hr : <br /> {coin.volumeUsd24Hr}
          </p>
          <p>
            explorer : <br /> {coin.explorer}
          </p>
        </div>
      ) : (
        <h2>Loading ....</h2>
      )}
    </div>
  );
}
