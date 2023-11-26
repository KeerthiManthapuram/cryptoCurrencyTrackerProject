// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {currencyList} = this.props

    return (
      <div className="app-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="table">
          <div className="column-heading">
            <div className="coin-col">
              <p className="head">Coin Type</p>
            </div>
            <div className="usd-col">
              <p className="head">USD</p>
            </div>
            <div className="euro-col">
              <p className="head">EURO</p>
            </div>
          </div>
          <ul className="items">
            {currencyList.map(each => (
              <CryptocurrencyItem key={each.id} itemDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
