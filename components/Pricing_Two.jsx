import React, { useState } from 'react'
import { BiCheckCircle } from "react-icons/bi";
import price from "/data/price"


function Pricing_Two() {

  const [subscription, setSubscription] = useState(true);

  const monthly = "px-4 py-1 border-2 dark:border-[#2563eb] hover:bg-[#2563eb] hover:text-[#fff] transition ease-linear";
  const yearly = "px-4 py-1 font-semibold border-2 dark:bg-[#2563eb] dark:border-[#2563eb] dark:text-[#fff] transition ease-linear";

  return (
    <>
      <div className='w-screen h-screen bg-[#f7f8f9]'>
      <section className='container mx-auto p-4 sm:p-10 h-screen'>
      <div className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
	      <div className="container mx-auto p-4 sm:p-10">
          <div className="mb-16 space-y-4 text-center">
            <label className='text-[#2563eb]'>PRICING</label>
            <h1 className="text-4xl font-semibold leading-tight">Pricing tiers, for all contractors.</h1>
            <p className="px-4 sm:px-8 lg:px-24">Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
            <div className='pt-8'>
            <button className={subscription ? yearly : monthly } onClick={() => setSubscription(true)}>Monthly</button>
            <button className={subscription ? monthly : yearly } onClick={() => setSubscription(false)}>Annually</button>
        </div>
      </div>
      <div className="grid max-w-xl grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
        { price.map((item) => (
            <div className="relative z-0 flex flex-col items-center hover:bg-[#f2f2f2] transition ease-linear cursor-pointer p-12 border shadow-xl rounded-md" key={item.id}>
              <span className="absolute top-0 px-40 pt-1 pb-2 font-medium rounded-b-full dark:bg-[#2563eb] dark:text-[#fff]">{ item.name }</span>
                <p className="my-12 text-4xl font-bold dark:text-[#2563eb]">{ subscription ? item.monthlyprice : item.annualprice }</p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                  <span>{ item.description }</span>
                  </li>
              <div>
                <ul>{ item.details.map(
                    (detail) => (
                      <li className="flex items-center space-x-2" key={ detail }>
                        <BiCheckCircle /><span>{ detail }</span>
                      </li>
                    ))}
                    </ul>
                  </div>
            </ul>
            <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-[#2563eb] dark:md:hover:bg-[#2563eb] hover:text-[#fff]">{ item.button }</button>
          </div>
          ))}
    </div>
	</div>
        </div>
        </section>
      </div>
    </>
  )
}

export default Pricing_Two