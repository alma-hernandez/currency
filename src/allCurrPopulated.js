import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [convertedCurrencies, setConvertedCurrencies] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Define the API endpoint with the base currency EUR
    const apiUrl = `https://api.frankfurter.app/latest?from=EUR`;

    setLoading(true);

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Calculate the converted amounts for each currency
        const converted = {};
        for (const currency in data.rates) {
          converted[currency] = (amount * data.rates[currency]).toFixed(2);
        }

        setConvertedCurrencies(converted);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [amount]);

  return (
    <div>
      <h1>Currency Converter (EUR as Base)</h1>
      <div>
        <label>
          Amount (in EUR):
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Converted Currencies:</h2>
          <ul>
            {Object.entries(convertedCurrencies).map(([currency, value]) => (
              <li key={currency}>
                {currency}: {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;
