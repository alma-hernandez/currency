import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import 'chart.js/auto'; 
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);



function ConverterTwo() {
  const [amount, setAmount] = useState('');
  const ref = useRef();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(undefined);
  const [chartData, setChartData] = useState(undefined);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `https://api.frankfurter.app/${startDate}..${endDate}?from=${fromCurrency}&to=${toCurrency}`
      );

      const historicalRates = response.data.rates;
      const values = Object.values(historicalRates).map(r => r[toCurrency]);
      setChartData({
        labels: Object.keys(historicalRates),
        datasets: [
          {
            label: `${fromCurrency} to ${toCurrency}`,
            data: values,
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

  const component = chartData !== undefined
    ? <Line ref={ref} data={chartData} />
    : <React.Fragment/>;

  const resultComponent = result !== undefined
    ? (
      <p>
        {amount} {fromCurrency} is equal to {result} {toCurrency}
      </p>
    )
    : <React.Fragment/>;

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
            value={fromCurrency.toUpperCase()}
            onChange={(e) => setFromCurrency(e.target.value)}
          />
        </div>
        <div>
          <label>To Currency:</label>
          <input
            type="text"
            value={toCurrency.toUpperCase()}
            onChange={(e) => setToCurrency(e.target.value)}
          />
        </div>
        <button type="submit">Convert</button>
      </form>
      {resultComponent}
      {component}
    </div>
  );
}

export default ConverterTwo;
