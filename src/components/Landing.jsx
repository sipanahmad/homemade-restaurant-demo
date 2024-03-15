/** @format */

import React from 'react';
const Landing = () => {
	return (
		<section className='w-full bg-url mt-[56px] flex items-end h-[60vh]  md:h-[calc(100vh-56px)]'>
			<article className=' px-[30px] pb-10  sm:py-8 '>
				<h2 className=' mb-4 2xl:mb-24 uppercase font-base flex flex-col text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl font-black sm:font-bold text-base-white'>
					Homemade
					<span className='font-semibold sm:font-medium'>Restaurant</span>
				</h2>
				<p className='w-3/5 2xl:w-full mb-4 2xl:mb-24 font-alt text-sm md:text-base lg:text-lg 2xl:text-2xl text-base-white'>
					Uis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur Image from 
					<span className='text-base-clr font-semibold'> Freepik</span>
				</p>
				<button
					type='button'
					className='uppercase text-sm md:text-base lg:text-lg 2xl:text-2xl 2xl:mb-24 font-alt text-base-clr font-semibold border-b border-base-clr duration-300 hover:border-transparent'>
					Learn more
				</button>
			</article>
		</section>
	);
};

export default Landing;
