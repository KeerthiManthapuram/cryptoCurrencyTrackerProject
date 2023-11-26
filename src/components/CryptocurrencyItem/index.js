// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = itemDetails
  return (
    <li className="currency-item">
      <div className="currency-holder">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p className="name">{currencyName}</p>
      </div>
      <div className="usd-holder">
        <p className="name">{usdValue}</p>
      </div>
      <div className="euro-holder">
        <p className="name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
