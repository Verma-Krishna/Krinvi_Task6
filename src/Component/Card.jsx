import React from 'react'

export default function Card() {
  return (
    <>
        <main className='w-screen h-screen bg-blue-50' >
     <header className='w-full h-28 '></header>
     <h1 className='text-xl font-bold flex items-center ml-20 mb-4 pl-2'> <img src="backward-arrow.png" alt="" className='w-4 h-4 mr-4'/> Payment Methods</h1>
    <div className="card w-1/2 h-[50%] bg-white shadow-current rounded-lg px-4 ml-24 py-2">
      <h1 className='text-md font-medium text-black mb-1'>Payment Details</h1>
      <hr className='mb-4'/> 
      <h4 className='text-sm text-gray-500 mb-1'>Choose a Payment Method</h4>
      <div className="payment-btn flex gap-4 mb-4">
       <button   className='bg-slate-100 flex items-center justify-center rounded-xl p-4 border-2 border-blue-300 w-36 h-16 font-semibold' >
          <img src="card.png"  className='  w-10 h-6 mr-2 '/>Card
        </button>
        <button   className='bg-slate-100 flex items-center justify-center rounded-xl   font-semibold w-40 h-16' >
          <img src="right-arrow.png"  className='  w-4 h-6 mr-2 '/>Bank Transfer
        </button>
      </div>
        <div className="flex flex-wrap ">
          <label for="card-number" className="block w-full font-medium text-gray-700">Card Number *</label>
          <input type="text" id="card-number" name="card-number" className="bg-white border py-1 w-full border-gray-300 rounded-md  px-4 " />
        </div>
        <div className="flex items-center py-2 gap-6 ">
          <div className="flex flex-wrap w-1/2">
            <label for="card-number" className="block w-full font-medium text-gray-700">Expiration Date *</label>
            <input type="date" id="date" name="date" className="bg-white border py-1 border-gray-300 rounded-md  px-4 w-full" placeholder="MM/DD/YYYY" />
          </div>
          <div className="flex flex-col w-1/2">
            <label for="card-number" className="block w-full font-medium text-gray-700">CVV *</label>
            <input type="text" id="card-number" name="card-number" className="bg-white border py-1  border-gray-300 rounded-md  px-4 w-full" placeholder='Enter'/>
          </div>
        </div>
        <div className="py-2 flex justify-end mb-2">
           <div className="flex justify-center items-center gap-2">
           <input type="checkbox" id="checkbox" name="checkbox" class="w-4 h-4 text-blue-600 bg-white  border-gray-700 rounded-md"/>
           <label for="card-number" className="text-gray-700">Remember This Card</label>
           </div>
        </div>
     </div>

    </main>
    </>
  )
}
