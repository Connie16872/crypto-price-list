import React from 'react'

function Footer() {
  return (
    <footer
      className="
        bg-black
        w-full
        text-lightGrey-100
        pt-[12px]
        pb-[12px]
        pl-[56px]
        pr-[44px]
        text-[14px] text-center
      "
    >
      <div className="max-w-[220px] mx-auto sm:max-w-xl sm:flex sm:justify-center">
        <p>© 2022 Connie Teng. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer