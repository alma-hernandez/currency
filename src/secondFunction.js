import React, { useState } from 'react';
import axios from 'axios';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      
      const conversionResult = response.data.rates[toCurrency] * amount;
      setResult(conversionResult.toFixed(2));
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
    </div>
  );
}

export default CurrencyConverter;
