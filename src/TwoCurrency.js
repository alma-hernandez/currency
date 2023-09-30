import React from 'react';
import ConvertCurrency from './secondFunction.js';
import "./TwoCurrency.css";

export const TwoCurrencyConverter = () => {
    return <div>
        <div className="container boxForAbbv">
            <div className="row">Abbreviations for Currency</div>
            <div className="instructions">Choose two currencies from the list below, and add the abbreviations into the converter.</div>
            <table>
                <tbody>
                    <tr>
                        <td className="gridlines">USD</td>
                        <td className="gridlines">US dollar</td>
                        <td className="gridlines">AUD</td>
                        <td className="gridlines">Australian Dollar</td>
                        <td className="gridlines">CAD</td>
                        <td className="gridlines">Canadian Dollar</td>
                    </tr>
                    <tr>
                        <td className="gridlines">CHF</td>
                        <td className="gridlines">Swiss franc</td>
                        <td className="gridlines">JPY</td>
                        <td className="gridlines">Japanese Yen</td>
                        <td className="gridlines">BGN</td>
                        <td className="gridlines">Bulgarian lev</td>
                    </tr>
                    <tr>
                        <td className="gridlines">CZK</td>
                        <td className="gridlines">Czech koruna</td>
                        <td className="gridlines">DKK</td>
                        <td className="gridlines">Danish krone</td>
                        <td className="gridlines">GBP</td>
                        <td className="gridlines">Pound sterling</td>
                    </tr>
                    <tr>
                        <td className="gridlines">HUF</td>
                        <td className="gridlines">Hungarian forint</td>
                        <td className="gridlines">PLN</td>
                        <td className="gridlines">Polish zloty</td>
                        <td className="gridlines">RON</td>
                        <td className="gridlines">Romanian leu</td>
                    </tr>
                    <tr>
                        <td className="gridlines">SEK</td>
                        <td className="gridlines">Swedish krona</td>
                        <td className="gridlines">ISK</td>
                        <td className="gridlines">Icelandic krona</td>
                        <td className="gridlines">NOK</td>
                        <td className="gridlines">Norwegian krone</td>
                    </tr>
                    <tr>
                        <td className="gridlines">TRY</td>
                        <td className="gridlines">Turkish lira</td>
                        <td className="gridlines">BRL</td>
                        <td className="gridlines">Brazilian real</td>
                        <td className="gridlines">CNT</td>
                        <td className="gridlines">Chinese yuan renminbi</td>
                    </tr>
                    <tr>
                        <td className="gridlines">HKD</td>
                        <td className="gridlines">Hong Kong dollar</td>
                        <td className="gridlines">IDR</td>
                        <td className="gridlines">Indonesian rupiah</td>
                        <td className="gridlines">ILS</td>
                        <td className="gridlines">Israeli shekel</td>
                    </tr>
                    <tr>
                        <td className="gridlines">KRW</td>
                        <td className="gridlines">South Korean won</td>
                        <td className="gridlines">MXN</td>
                        <td className="gridlines">Mexican peso</td>
                        <td className="gridlines">MYR</td>
                        <td className="gridlines">Malaysian ringgit</td>
                    </tr>
                    <tr>
                        <td className="gridlines">NZD</td>
                        <td className="gridlines">New Zealand dollar</td>
                        <td className="gridlines">PHP</td>
                        <td className="gridlines">Philippine peso</td>
                        <td className="gridlines">SGD</td>
                        <td className="gridlines">Singapore dollar</td>
                    </tr>
                    <tr>
                        <td className="gridlines">THB</td>
                        <td className="gridlines">Thai baht</td>
                        <td className="gridlines">ZAR</td>
                        <td className="gridlines">South African rand</td>
                        <td className="gridlines"></td>
                        <td className="gridlines"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ConvertCurrency/>
    </div >
}