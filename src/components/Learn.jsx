/** @format */

import React from 'react';

const Learn = () => {
	return (
		<div className='bg-url1 h-full p-[30px] flex flex-col gap-10 pb-20'>
			<h1 className='font-base text-3xl md:text-4xl lg:text-5xl text-base-clr font-semibold text-center'>
				Learn <span className='font-extrabold'>Cooking</span> Online
			</h1>
			<p className='px-2 font-alt italic text-xs md:text-base md:w-1/2 md:mx-auto text-center text-base-white'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua
				<br />
				<span className='inline-block uppercase not-italic mt-10'>
					Image from
					<span className='text-base-clr font-bold '> Freepik</span>
				</span>
			</p>
			<div className='flex flex-col md:flex-row gap-10'>
				<div className='flex-1 p-8 flex flex-col justify-between gap-4 bg-base-white'>
					<h2 className='font-base text-5xl md:text-7xl font-bold'>1</h2>
					<h3 className='font-base text-3xl md:text-4xl font-bold'>
						Base Meals
					</h3>
					<p className='font-alt text-xs md:text-base '>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
					<button
						type='button'
						className='w-fit uppercase text-xs md:text-base lg:text-lg font-alt text-base-clr font-semibold border-b border-base-clr duration-300 hover:border-transparent'>
						Learn More
					</button>
				</div>
				<div className='flex-1 p-8 flex flex-col justify-between gap-4 bg-[rgba(0,0,0,0.85)]'>
					<h2 className='font-base text-5xl md:text-7xl text-base-clr font-bold'>
						2
					</h2>
					<h3 className='font-base text-3xl md:text-4xl text-base-white font-bold'>
						Knife Skills
					</h3>
					<p className='font-alt text-xs md:text-base text-base-white  '>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
					<button
						type='button'
						className=' w-fit uppercase text-xs md:text-base lg:text-lg font-alt text-base-clr font-semibold border-b border-base-clr duration-300 hover:border-transparent'>
						Learn More
					</button>
				</div>
				<div className='flex-1 p-8 flex flex-col justify-between gap-4 text-base-white  bg-base-clr'>
					<h2 className='font-base text-5xl md:text-7xl font-bold'>3</h2>
					<h3 className='font-base text-3xl md:text-4xl font-bold'>
						Cooking Chicken
					</h3>
					<p className='font-alt text-xs md:text-base'>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur.
					</p>
					<button
						type='button'
						className='w-fit uppercase text-xs md:text-base lg:text-lg font-alt text-base-white font-semibold border-b border-base-white duration-300 hover:border-transparent'>
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
};

export default Learn;
