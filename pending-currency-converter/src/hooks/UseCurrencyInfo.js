import React, { useEffect, useState } from "react";

function UseCurrencyInfo() {
  const [data, setData] = useState({});

  return useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => res[currency]);
    console.log(data);
  }, [currency]);
}

export default UseCurrencyInfo;
