/** @format */

import React from 'react';
import { images } from '../constants';
const Menu = () => {
	return (
		<div className='relative px-[30px] w-full h-full mb-10'>
			<div className='flex flex-col md:flex-row gap-6 md:gap-2'>
				<div className='md:flex-1 h-[300px] md:h-[600px]'>
					<img
						src={images.menu01}
						alt=''
						className='h-full object-cover md:h-2/3'
					/>
				</div>
				<div className='md:flex-1 flex flex-col justify-center gap-20 md:gap-12 lg:gap-20'>
					<div className='absolute bg-base-yellow h-[180px] w-[calc(100%-30px)] md:w-[70%] top-[20%] md:top-0 left-0 -z-10' />
					<h1 className='font-base text-4xl md:text-5xl lg:text-6xl  md:mt-20 lg:mt-0 font-extrabold '>
						Menu
					</h1>
					<p className='font-alt text-sm md:text-base  leading-[30px] md:leading-[40px]'>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					<button
						type='button'
						className='font-alt text-sm text-left text-base-white font-semibold bg-base-black w-fit px-8 py-2 rounded-sm duration-300 hover:text-base-clr hover:bg-base-white'>
						learn more
					</button>
					<div className='absolute bg-base-clr h-[180px] w-[calc(100%-30px)] md:w-20 right-0 bottom-10 lg:bottom-40 -z-10' />
				</div>
				<div className='md:flex-1 h-[300px] md:h-[600px] flex items-end'>
					<img
						src={images.menu02}
						alt=''
						className='h-full object-cover md:h-2/3'
					/>
				</div>
			</div>
		</div>
	);
};

export default Menu;
