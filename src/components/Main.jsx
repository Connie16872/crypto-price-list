import React from 'react'
import CoinList from './CoinList.jsx'

function Main() {
  return (
    <main className="max-w-[1280px] mx-auto relative overflow-y-auto">
      <div className="px-[16px] sm:px-[53px] pt-[37px] sm:pt-[70px] pb-[92px]">
        <h1 className="text-[20px] font-bold mb-[40px]">
          市值前 30 加密貨幣
        </h1>
        <CoinList />
      </div>
    </main>
  )
}

export default Main