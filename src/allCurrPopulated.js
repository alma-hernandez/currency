import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [baseCurrency, setBaseCurrency] = useState('EUR');
    const [convertedCurrencies, setConvertedCurrencies] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const apiUrl = `https://api.frankfurter.app/latest?from=${baseCurrency}`;

        setLoading(true);

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
    }, [amount, baseCurrency]);

    return (
        <div className="allCurrencies">
            <div>
                <h1>Currency Converter</h1>
                <div>
                    <label>
                        Amount:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Base Currency:
                        <select
                            value={baseCurrency}
                            onChange={(e) => setBaseCurrency(e.target.value)}
                        >
                            <option value="AUD">AUD</option>
                            <option value="BGN">BGN</option>
                            <option value="BRL">BRL</option>
                            <option value="CAD">CAD</option>
                            <option value="CHF">CHF</option>
                            <option value="CNY">CNY</option>
                            <option value="CZK">CZK</option>
                            <option value="DKK">DKK</option>
                            <option value="GBP">GBP</option>
                            <option value="HDK">HDK</option>
                            <option value="HUF">HUF</option>
                            <option value="IDR">IDR</option>
                            <option value="ILS">ILD</option>
                            <option value="INR">INR</option>
                            <option value="ISK">ISK</option>
                            <option value="JPY">JPY</option>
                            <option value="KRW">KRW</option>
                            <option value="MXN">MXN</option>
                            <option value="MYR">MYR</option>
                            <option value="NOK">NOK</option>
                            <option value="NZD">NZD</option>
                            <option value="PHP">PHP</option>
                            <option value="PLN">PLN</option>
                            <option value="RON">RON</option>
                            <option value="SEK">SEK</option>
                            <option value="SGD">SGD</option>
                            <option value="THB">THB</option>
                            <option value="TRY">TRY</option>
                            <option value="USD">USD</option>
                            <option value="ZAR">ZAR</option>
                        </select>
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
        </div>
    );
}

export default CurrencyConverter;

