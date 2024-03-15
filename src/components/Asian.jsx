/** @format */

import React from 'react';
import { images } from '../constants';
const Asian = () => {
	return (
		<div className='relative h-full w-full p-[30px] mb-10'>
			<div className='absolute w-1/2 h-1/2 md:h-2/3 top-0 right-0 bg-base-yellow -z-10' />
			<div className='flex flex-col gap-8 py-10'>
				<h1 className='font-base text-3xl md:text-4xl lg:text-5xl font-bold text-center py-10 '>
					Asian Food
				</h1>
				<div className='font-base w-2/3 md:w-full md:px-12 lg:px-20 mx-auto text-xs md:text-base flex flex-col md:flex-row gap-20 md:gap-4 text-center '>
					<p>
						While it is important to have naturally occurring sugars in your
						diet, many foods contain harmful added sugars that contain no
						nutritional value.
					</p>
					<p>
						While it is important to have naturally occurring sugars in your
						diet, many foods contain harmful added sugars that contain no
						nutritional value.
					</p>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-2 md:w-full'>
				<img
					src={images.asianfood01}
					alt=''
					className='h-[250px] md:h-[350px] md:w-1/3 object-cover rounded-md hover:scale-110 cursor-pointer  duration-300'
				/>
				<img
					src={images.asianfood02}
					alt=''
					className='h-[250px] md:h-[350px] md:w-1/3  object-cover rounded-md hover:scale-110 cursor-pointer duration-300'
				/>
				<img
					src={images.asianfood03}
					alt=''
					className='h-[250px] md:h-[350px] md:w-1/3  object-cover rounded-md hover:scale-110 cursor-pointer duration-300'
				/>
			</div>
		</div>
	);
};

export default Asian;
