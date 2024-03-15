/** @format */

import React from 'react';
import { images } from '../constants';
const Meat = () => {
	return (
		<div className='h-full w-full flex flex-col md:flex-row bg-base-yellow  '>
			<img
				src={images.meat01}
				alt=''
				className='flex-1 h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[1350px] object-cover w-full'
			/>
			<h1 className=' py-10 font-special font-black text-3xl md:text-4xl lg:text-5xl 2xl:text-8xl uppercase flex-1 mx-auto md:my-auto text-center'>
				<span className='vert '>Meat</span>
				<span className='vert '>fish</span>
				<br />
				<span className=''>And</span>
			</h1>
			<img
				src={images.meat02}
				alt=''
				className='flex-1 h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px]  2xl:h-[1350px] object-cover w-full'
			/>
		</div>
	);
};

export default Meat;
