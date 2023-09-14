import React from 'react';
import ConvertCurrency from './secondFunction.js';
import "./TwoCurrency.css";

export const TwoCurrencyConverter = () => {
    return <div>
        <div className="container boxForAbbv">
            <div className="row">Abbreviations for Currency</div>
            <table>
                <tbody>
                    <tr>
                        <td>USD</td>
                        <td>US dollar</td>
                        <td>AUD</td>
                        <td>Australian Dollar</td>
                        <td>CAD</td>
                        <td>Canadian Dollar</td>
                    </tr>
                    <tr>
                        <td>CHF</td>
                        <td>Swiss franc</td>
                        <td>JPY</td>
                        <td>Japanese Yen</td>
                        <td>BGN</td>
                        <td>Bulgarian lev</td>
                    </tr>
                    <tr>
                        <td>CZK</td>
                        <td>Czech koruna</td>
                        <td>DKK</td>
                        <td>Danish krone</td>
                        <td>GBP</td>
                        <td>Pound sterling</td>
                    </tr>
                    <tr>
                        <td>HUF</td>
                        <td>Hungarian forint</td>
                        <td>PLN</td>
                        <td>Polish zloty</td>
                        <td>RON</td>
                        <td>Romanian leu</td>
                    </tr>
                    <tr>
                        <td>SEK</td>
                        <td>Swedish krona</td>
                        <td>ISK</td>
                        <td>Icelandic krona</td>
                        <td>NOK</td>
                        <td>Norwegian krone</td>
                    </tr>
                    <tr>
                        <td>TRY</td>
                        <td>Turkish lira</td>
                        <td>BRL</td>
                        <td>Brazilian real</td>
                        <td>CNT</td>
                        <td>Chinese yuan renminbi</td>
                    </tr>
                    <tr>
                        <td>HKD</td>
                        <td>Hong Kong dollar</td>
                        <td>IDR</td>
                        <td>Indonesian rupiah</td>
                        <td>ILS</td>
                        <td>Israeli shekel</td>
                    </tr>
                    <tr>
                        <td>KRW</td>
                        <td>South Korean won</td>
                        <td>MXN</td>
                        <td>Mexican peso</td>
                        <td>MYR</td>
                        <td>Malaysian ringgit</td>
                    </tr>
                    <tr>
                        <td>NZD</td>
                        <td>New Zealand dollar</td>
                        <td>PHP</td>
                        <td>Philippine peso</td>
                        <td>SGD</td>
                        <td>Singapore dollar</td>
                    </tr>
                    <tr>
                        <td>THB</td>
                        <td>Thai baht</td>
                        <td>ZAR</td>
                        <td>South African rand</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ConvertCurrency/>
    </div >
}