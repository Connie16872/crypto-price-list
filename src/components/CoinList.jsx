import React from 'react'
import CoinItem from './CoinItem'
import useCoin from '../hooks/useCoin'
import { useEffect } from 'react'


function CoinList() {
  const { coins, fetchCoins } = useCoin()
  const titles = ['#',
    '名稱', '價格', '市值'
  ]
  useEffect(() => {
    Promise.all([
      fetchCoins({ page: 1, per_page: 30 }),
    ])
  }, [fetchCoins])

  return (<>
    <div className="max-w-[1280px] overflow-x-auto">
      <table className="text-center text-[14px border-b-[1px] border-gray-800">
        <thead>
          <tr className="border-b-[1px] border-gray-800">
            {
              titles.map((title, idx) =>
                <th key={idx} className='px-6 py-3 cursor-pointer'>{title}</th>
              )
            }
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {
            coins.map((coin, idx) =>
              <CoinItem
                key={idx}
                coin={coin}
              />
            )
          }
        </tbody>
      </table>
    </div>
  </>)
}

export default CoinList

