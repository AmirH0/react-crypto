import React, { useEffect, useState } from "react";
import "./Coins.css";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";

export default function Coins(props) {
  const [myCoin, setMyCoin] = useState([]);
  // const [result, setResult] = useState([]);
  const [arrowPos, setArrowPos] = useState(0);
  const [price, setPrice] = useState(0);
  const [sortTop, setSorttop] = useState(true);
  const [coinName, setCoinName] = useState("");

  let mres = props.coin;

  useEffect(() => {
    console.log(mres);
    const res = mres.filter((resp) => resp.rank < 50);
    setMyCoin(res);
    setPrice(0);
  }, [mres]);

  function sortByRank(num) {
    setArrowPos(num);
    let oo;
    if (!sortTop) {
      oo = myCoin.sort((a, b) => a.rank - b.rank);
    } else {
      oo = myCoin.sort((a, b) => a.rank - b.rank).reverse();
    }
    setMyCoin(oo);
    setSorttop(!sortTop);
  }

  function sortByPrice(num) {
    setArrowPos(num);
    let oo;
    if (!sortTop) {
      oo = myCoin.sort((a, b) => a.priceUsd - b.priceUsd);
    } else {
      oo = myCoin.sort((a, b) => a.priceUsd - b.priceUsd).reverse();
    }
    setMyCoin(oo);
    setSorttop(!sortTop);
  }

  function searchName(event) {
    setCoinName(event.target.value);
    const res = mres.filter(
      (resp) =>
        resp.symbol.toLowerCase().includes(event.target.value.toLowerCase()) ||
        (resp.id.includes(event.target.value.toLowerCase()) && resp.rank < 50)
    );
    setMyCoin(res);
  }

  function changePrice(event) {
    setPrice(event.target.value);

    // console.log(event.target.value)
    const res = mres.filter(
      (resp) => resp.priceUsd < parseFloat(event.target.value) && resp.rank < 50
    );
    setMyCoin(res);
  }
  return (
    <div className="container">
      <div className="filter">
        <div className="input-container">
          <p>price limit</p>
          <input
            type="number"
            onChange={(event) => changePrice(event)}
            value={price}
          />
        </div>
        <div className="input-container">
          <p>search by name : </p>
          <input
            type="text"
            onChange={(event) => searchName(event)}
            value={coinName}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortByRank(0)} className="rank">
              Rank
              {arrowPos == 0 && (sortTop ? <FaLongArrowAltDown/> : <FaLongArrowAltUp/>)}
            </th>
            <th>Coin</th>
            <th onClick={() => sortByPrice(1)} className="price">
              Price
              {arrowPos == 1 && (sortTop ? <FaLongArrowAltDown/> : <FaLongArrowAltUp/>)}
            </th>
            <th>Market Cap</th>
            <th>change 24Hr</th>
          </tr>
        </thead>
        <tbody>
          {myCoin.map((coin) => {
            return (
              <tr key={coin.rank}>
                <td>{coin.rank}</td>
                <td>
                  <NavLink className="navlink" to={`/coin/${coin.rank}`}>
                    {coin.name}
                  </NavLink>
                </td>
                <td>${Math.round(coin.priceUsd * 100000) / 100000}</td>
                <td>${Math.round(coin.marketCapUsd / 10000000) / 100}b</td>
                <td>{Math.round(coin.changePercent24Hr * 100) / 100}% </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
