import React from 'react';

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
        <div>
            <h1 className='text-7xl'>Coding Adda Blogs</h1>
            <h2 className='mt-5 md:mt-8'>
                Welcome to{" "}
                <span className='underline decoration-4 decoration-[#151725]'>Every Developers</span>{" "}
                favorite place to visit blogs
            </h2>
        </div>

        <p className="mt-5 md:mt-2 text-gray-400 maxw-w-sm">
            New College Hacks | Trending Topics | Coding Hacks & More!
        </p>
    </div>
  )
}

export default Banner;