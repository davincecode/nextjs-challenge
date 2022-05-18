import React, { useState } from 'react'
import { BiCheckCircle } from "react-icons/bi";
import price from "/data/price"


function Pricing_Two() {

  const [subscription, setSubscription] = useState(true);

  const monthly = "px-4 py-1 border-2 dark:border-[#2563eb] hover:bg-[#2563eb] hover:text-[#fff] transition ease-linear";
  const yearly = "px-4 py-1 font-semibold border-2 dark:bg-[#2563eb] dark:border-[#2563eb] dark:text-[#fff] transition ease-linear";

  return (
    <>
     <div className='w-full h-full bg-[#f7f8f9]'>
        <section className='md:w-5/6 lg:w-3/5 mx-auto p-4 sm:p-10 '>
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
                  <div className="relative z-0 flex flex-col items-center hover:bg-[#f2f2f2] transition ease-linear cursor-pointer p-12 border shadow-xl rounded-md flex-1" key={item.id}>
                    <span className="absolute top-0 px-12 pt-1 pb-2 font-medium rounded-b-2xl dark:bg-[#2563eb] dark:text-[#fff]">{ item.name }</span>
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
                  <section>
                    <div className="flex flex-wrap justify-center py-20 text-gray-300 my-5">
                      <a href="!" className="button button--winona p-0 bg-[#2563eb] hover:bg-[#f97315] hover:text-white text-[#fff] relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden" data-text="TRY IT NOW">
                        <span className="align-middle block">
                          {item.button}
                        </span>
                      </a>
                    </div>
                  </section>
    
                </div>
                ))}
          </div>
        </div>
          </div>
        </section>
        <div className="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
        </div>
      </div>
    </>
  )
}

export default Pricing_Two