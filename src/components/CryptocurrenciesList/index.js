// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({currenciesList: updatedData, isLoading: false})
  }

  getLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  getCurrencies = () => {
    const {currenciesList} = this.state

    return (
      <div className="cryptocurrenciesListContainer">
        <h1 className="mainTitle">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="cryptoImage"
          alt="cryptocurrency"
        />
        <ul className="cryptoCurrencyDataContainer">
          <li className="header">
            <p className="coinTypeTitle">Coin Type</p>
            <div className="usdEuroTitleContainer">
              <p className="usdTitle">USD</p>
              <p className="euroTitle">EURO</p>
            </div>
          </li>
          {currenciesList.map(each => (
            <CryptocurrencyItem each={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="result">
        {isLoading && this.getLoader()}
        {!isLoading && this.getCurrencies()}
      </div>
    )
  }
}

export default CryptocurrenciesList
