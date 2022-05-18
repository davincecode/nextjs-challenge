import React, { useState } from 'react'



function Pricing_One() {

const [subscription, setSubscription] = useState(true);

  return (
    <>  
    <section className="sans py-16 antialiased bg-primary-grey md:w-3/5 container mx-auto">
      <div className="mb-16 space-y-4 text-center">
        <label className='text-[#2563eb]'>PRICING</label>
          <h1 className="text-4xl font-semibold leading-tight">Pricing tiers, for all contractors.</h1>
            <p className="px-4 sm:px-8 lg:px-24">Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
                  
          <div className='item-center w-auto justify-center flex'>
            <button className={subscription ? "px-4 py-1 font-semibold border-2 rounded-l-lg dark:bg-[#2563eb] dark:border-[#2563eb] dark:text-[#fff] transition ease-linear " : "px-4 py-1 border-2 rounded-l-lg dark:border-[#2563eb] hover:bg-[#2563eb] hover:text-[#fff] transition ease-linear "} onClick={() => setSubscription(true)}>Monthly</button>
            <button className={subscription ? "px-4 py-1 border-2 rounded-r-lg dark:border-[#2563eb] hover:bg-[#2563eb] hover:text-[#fff] transition ease-linear" : "px-4 py-1 font-semibold border-2 rounded-r-lg dark:bg-[#2563eb] dark:border-[#2563eb] dark:text-[#fff] transition ease-linear" } onClick={() => setSubscription(false)}>Annually</button>
          </div>
      </div>

      <section className="flex flex-col lg:flex-row items-center lg:justify-center w-full lg:px-10 py-12">
          <article className="hover:shadow-2xl hover:bg-[#f7f8f9] cursor-pointer duration-300 w-4/5 lg:w-custom mb-10 lg:px-8 py-14 text-center text-primary-dark bg-primary-white border rounded-2xl lg:rounded-r-none lg:rounded-l-2xl shadow-md min-h-[520px] flex-1">
            <h5 className="font-bold text-base">Starter</h5>
              <h2 className="pb-4 flex justify-center flex-col font-bold ">
                <span className="text-6xl py-4">FREE</span>
                <span className="text-lg font-normal flex-wrap px-4">Get started with Renotag, absolutely free!</span>
              </h2>
            <ul className="text-sm font-bold">
                <li className="pt-4 pb-4 ">3 free estimates</li>
                <li className="pt-3 pb-4 ">3 free customer send-outs</li>
                <li className="pt-4 pb-4 ">48-hour support response time</li>
            </ul>
              <button className="border bg-[#3b81f6] text-[#fff] hover:text-[#fff] hover:bg-[#2563eb] uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-4 font-bold text-primary-very-light rounded-md">
              Subscribe
              </button>
          </article>
          
          <article className="hover:shadow-2xl cursor-pointer duration-300 lg:w-custom w-4/5 mb-10 py-16 lg:px-12 text-center text-white bg-[#2d68eb] rounded-3xl drop-shadow-2xl z-10 min-h-[600px] flex-1" >
                <h5 className="font-bold text-base ">Pro</h5>
                <small className='absolute top-0 bg-[#f97315] px-8 py-1 rounded-full -translate-y-1/2'>Most Popular</small>
                <div className="flex-col font-bold pb-4 mt-2 flex justify-center">
                  <div className='flex flex-row justify-center items-end py-4'>
                    <span className="text-6xl ">${ subscription ? 99 : 79 }</span>
                    <small>/Month</small>
                  </div>
                  <span className="text-lg font-normal flex-wrap px-4">A plan that suits most general contractor&apos;s needs.</span>
            </div>
            <ul className=" text-sm font-bold">
              <li className="pt-4 pb-4 ">10 estimates / month</li>
              <li className="pt-4 pb-4 ">Unlimited customer sendouts</li>
              <li className="pt-4 pb-4 ">Your brand on estimates</li>
              <li className="pt-4 pb-4 ">24-hour support response time</li>
            </ul>
            <button className="border bg-[#fff] text-[#2d68eb] hover:text-[#fff] hover:bg-[#2d68eb] uppercase text-center text-sm mt-10 md:px-24 px-12 sm:px-16 py-4 rounded-md font-bold">
              Subscribe
            </button>
          </article>
          
          <article className="hover:shadow-2xl hover:bg-[#f7f8f9] cursor-pointer duration-300 bg-white w-4/5 lg:w-custom mb-10 lg:px-4 py-10 text-center text-primary-dark rounded-2xl lg:rounded-l-none lg:rounded-r-2xl border shadow-md min-h-[520px] flex-1">
            <h5 className="font-bold text-base">Enterprise</h5>
                <h2 className="flex flex-col justify-center pb-4 font-bold ">
                <div className='flex flex-row justify-center items-end py-4'>
                    <span className="text-6xl">${ subscription ? 129 : 105 }</span>
                    <small>/Month</small>
                  </div>
                  <span className="text-lg font-normal flex-wrap px-4">Unlimited estimates and dedicated support for your company.</span>
            </h2>
            <ul className="text-sm font-bold">
              <li className="pt-2 pb-2 ">Unlimited estimates</li>
              <li className="pt-2 pb-2 ">Unlimited customer sendouts</li>
              <li className="pt-2 pb-2 ">Your brand on estimates</li>
              <li className="pt-2 pb-2 ">1-hour support response time</li>
            </ul>
            <button className="border bg-[#3b81f6] text-[#fff] hover:text-[#fff] hover:bg-[#2563eb] uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-4 rounded-md font-bold text-primary-very-light">
            Subscribe
            </button>
          </article>
        </section>
      </section>
    </>
  )
}

export default Pricing_One