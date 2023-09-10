import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';


function ConverterTwo() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.frankfurter.app/${startDate}..${endDate}?from=${fromCurrency}&to=${toCurrency}`
      );

      const historicalRates = response.data.rates;

      setChartData({
        labels: Object.keys(historicalRates),
        datasets: [
          {
            label: `${fromCurrency} to ${toCurrency}`,
            data: Object.values(historicalRates),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <h1>Currency Converter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div>
          <label>From Currency:</label>
          <input
            type="text"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          />
        </div>
        <div>
          <label>To Currency:</label>
          <input
            type="text"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          />
        </div>
        <button type="submit">Convert</button>
      </form>
      {result && (
        <p>
          {amount} {fromCurrency} is equal to {result} {toCurrency}
        </p>
      )}
      {chartData && (
        <div>
          <h2>Exchange Rate Chart</h2>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}

export default ConverterTwo;
