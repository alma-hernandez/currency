import React from 'react';
import convertCurrency from './secondFunction.js';

export const TwoCurrencyConverter = () => {
    return <div>
        <div className="container boxForAbbv">
            <div className="row">Abbreviations for Currency</div>
            <div className="row">
                <div className="col">USD = US dollar</div>
                <div className="col">AUD = Australian Dollar</div>
                <div className="col">CAD = Canadian Dolalr</div>
                <div className="col">CHF = Swiss franc</div>
                <div className="col">JPY = Japanese Yen</div>
                <div className="col">BGN = Bulgarian lev</div>
            </div>
            <div className="row">
                <div className="col">CZK = Czech koruna</div>
                <div className="col">DKK = Danish krone</div>
                <div className="col">GBP = Pound sterling</div>
                <div className="col">HUF = Hungarian forint</div>
                <div className="col">PLN = PLN = Polish zloty</div>
                <div className="col">RON = Romanian leu</div>
            </div>
            <div className="row">
                <div className="col">SEK = Swedish krona</div>
                <div className="col">ISK = Icelandic krona</div>
                <div className="col">NOK = Norwegian krone</div>
                <div className="col">TRY = Turkish lira</div>
                <div className="col">BRL = Brazilan real</div>
                <div className="col">CNT = Chinese yuan renminbi</div>
            </div>
            <div className="row">
                <div className="col">HKD = Hong Kong dollar</div>
                <div className="col">IDR = Indonesian rupiah</div>
                <div className="col">ILS = Israeli shekel</div>
                <div className="col">KRW = South Korean won</div>
                <div className="col">MXN = Mecivan peso</div>
                <div className="col">MYR = Malayasian ringgit</div>
            </div>
            <div className="row">
                <div className="col">NZD = New Zealand dollar</div>
                <div className="col">PHP = PHilippine peso</div>
                <div className="col">SGD = Singapore dollar</div>
                <div className="col">THB - Thai baht</div>
                <div className="col">ZAR = South African rand</div>
                <div className="col"></div>
            </div>
        </div>
    
    { convertCurrency() }
    </div >
}