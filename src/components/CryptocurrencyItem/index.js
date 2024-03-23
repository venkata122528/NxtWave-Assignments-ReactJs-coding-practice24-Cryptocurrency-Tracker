// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {each} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = each

  return (
    <li className="eachCurrencyContainerItem">
      <div className="logoCurrencyNameContainer">
        <img src={currencyLogo} className="currencyLogo" alt={currencyName} />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="usdEuroCurrenciesContainer">
        <p className="usdTitle">{usdValue}</p>
        <p className="euroTitle">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
