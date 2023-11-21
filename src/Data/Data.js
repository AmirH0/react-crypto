import axios from "axios";
import { useEffect, useState } from "react";

export default function Data() {
  const [coins, setCoins] = useState([]);

  let key = "32b64e21-95c0-4c76-97ac-0386feed6278";
  let url =
    "https://api.coincap.io/v2/assets?Key=32b64e21-95c0-4c76-97ac-0386feed6278";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [coins];
}
