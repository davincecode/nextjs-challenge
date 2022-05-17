import price from "/data/price"

function PriceList() {
  return (
    <>
      
  <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-50">
	<div className="container mx-auto p-4 sm:p-10">
		<div className="mb-16 space-y-4 text-center">
			<h1 className="text-4xl font-semibold leading-tight">Pricing</h1>
			<p className="px-4 sm:px-8 lg:px-24">Sunt suscipit eaque qui iure unde labore numquam iusto alias explicabo, pariatur ipsam, cupiditate aliquid modi?</p>
			<div>
				<button className="px-4 py-1 font-semibold border rounded-l-lg dark:bg-violet-400 dark:border-violet-400 dark:text-coolGray-900">Monthly</button>
				<button className="px-4 py-1 border rounded-r-lg dark:border-violet-400">Annually</button>
			</div>
    </div>
    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
        { price.map((item) => (
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md" key={item.id}>
              <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-400 dark:text-coolGray-900">{ item.name }</span>
                <p className="my-6 text-4xl font-bold dark:text-violet-400">{ item.price }</p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    Xsvg
                    <span>{ item.description }</span>
                  </li>
                  <div>{ item.details.map(
                    (detail) => (
                      <li className="flex items-center space-x-2" key={ detail }>
                        <span>{ detail }</span>
                      </li>
                    ))}
                  </div>
                </ul>
              <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-violet-400">Subscribe</button>
            </div>
          ))}
    </div>
	</div>
  </section>
        </>
  )
}

export default PriceList;