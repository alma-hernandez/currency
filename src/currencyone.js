import React from 'react';
import "./currencyone.css";

const MainContent = () => {
    return (
        <div className="container main">
            <div className="row currentcurrency">
                <div className="col">
                    <input id = "amount" placeholder="Amount"></input>
                </div>
                <div className="col currentcurrency">
                    <select>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="usd">INR</option>
                        <option value="eur">AUD</option>
                        <option value="gbp">CAD</option>
                        <option value="usd">SGD</option>
                        <option value="eur">CHF</option>
                        <option value="gbp">MYR</option>
                        <option value="usd">JPY</option>
                        <option value="eur">CNY</option>
                    </select>
                </div>
            </div>
        </div>
    )
};

export default MainContent;