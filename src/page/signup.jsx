import React from 'react'

const SignUp = () => {
  return (
    <div className=' space-y-5 w-full'>
      <h2 className='text-center text-white text-xl'> REGISTER HERE</h2>
      <form action="" className='flex flex-col gap-6 w-5/6 md:w-96 lg:w-2/5 mx-auto  p-8 rounded-xl h-5/6 shadow-2xl bg-white'>
        <div className='flex flex-col space-y-3'>
          <label htmlFor="" className='text-gray-600'>First name</label>
          <input type="text" name="" id="" className='border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200'/>
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor="" className='text-gray-600'>Last name</label>
          <input type="text" name="" id="" className='border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200'/>
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor="" className='text-gray-600'> Email </label>
          <input type="text" name="" id="" className='border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200'/>
        </div>
        <div className='flex flex-col space-y-3'>
          <label htmlFor="" className='text-gray-600'> Password </label>
          <input type="text" name="" id="" className='border w-full px-3 h-10 bg-gray-100 focus:outline-none hover:shadow-md hover:rounded-md focus:bg-white transition-all duration-200'/>
        </div>

        <input type="button" value="Submit" className='px-7 rounded-md py-2 w-min text-slate-50 bg-gradient-to-br from-fuchsia-500 to-violet-700 hover:shadow-md transition-all duration-200'/>
      </form>
    </div>
  )
}

export default SignUp