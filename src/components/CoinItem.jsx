import React from 'react'

function CoinItem({ coin }) {

  return (<tr>
    <td
      className="left-0 bg-dark pl-[10px] pr-6 py-3"
    >
      <div className="min-w-[24px]">
        {coin.market_cap_rank}
      </div>
    </td>
    <td
      className="bg-dark px-6 py-3 text-left"
    >
      <div className="flex items-center max-w-[140px]">
        <div className="w-[24px] h-[24px] rounded-full mr-[9px]">
          <img src={coin.image} className="object-fit" alt='coin_image' />
        </div>
        <div>
          <p className="font-bold">{coin.name}</p>
          <span className="text-lightGrey-200 text-[12px]">{coin.symbol.toUpperCase()}</span>
        </div>
      </div>
    </td>
    <td className="px-6 py-3">{'$' + coin.current_price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
    <td className="px-6 py-3">{'$' + coin.market_cap.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
  </tr >)
}

export default CoinItem