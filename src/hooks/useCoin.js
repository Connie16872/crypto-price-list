import axios from 'axios'
import { useState, useCallback } from 'react'

export default function useCoin() {
  const [coins, setCoins] = useState([])

  const fetchCoins = useCallback(async ({ page, per_page }) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${per_page}&page=${page}&sparkline=true&price_change_percentage=7d`
      )
      setCoins(res.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }, [])

  return {
    coins,
    fetchCoins,
  }
}
