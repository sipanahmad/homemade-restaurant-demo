/** @format */

import React from 'react';
import { images } from '../constants';
const Farm = () => {
	return (
		<div className='relative w-full h-full flex flex-col md:flex-row gap-8 p-[30px] pt-[50px] items-center'>
			<div className='absolute h-2/5 w-1/2 top-0 left-0 bg-base-clr -z-10' />
			<img
				src={images.farm01}
				className='h-[250px] md:h-[400px] md:w-[200px] lg:w-full lg:h-[450px] xl:h-[700px] 2xl:h-[1350px] object-cover w-full rounded-md'
			/>
			<img
				src={images.farm02}
				className='rounded-md h-[250px] md:h-[400px] md:w-[200px]  lg:h-[450px] lg:w-full  xl:h-[700px] 2xl:h-[1350px] object-cover '
			/>
			<div className='flex flex-col gap-8 py-8'>
				<h3 className='font-base text-3xl md:text-4xl text-base-clr font-bold pr-10 md:px-0'>
					Farm Products
				</h3>
				<p className='font-alt text-base-black text-xs md:text-base w-full'>
					The use of local farm products lorem ipsum dolor sit amet, consectetur
					adipisciong elit nullam nunc justo sagittis suscipit ultrices.
				</p>
				<button
					type='button'
					className='uppercase text-xs md:text-base lg:text-lg 2xl:text-2xl 2xl:mb-24 font-alt text-base-clr font-semibold border-b border-base-clr duration-300 hover:border-transparent w-fit'>
					Learn more
				</button>
			</div>
		</div>
	);
};

export default Farm;
