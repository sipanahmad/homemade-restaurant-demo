/** @format */

import React from 'react';

const Footer = () => {
	return (
		<footer className='w-full h-full bg-black p-[30px] text-base-white '>
			<div className='flex flex-col md:flex-row md:justify-around  border-b border-1 border-[rgba(255,255,255,0.2)] mb-6'>
				<div className='py-8 flex flex-col gap-4'>
					<h6 className='font-base text-sm'>Headline</h6>
					<p className='font-alt text-xs'>Sample footer text</p>
				</div>
				<div className='py-8 flex flex-col gap-4'>
					<h6 className='font-base text-sm'>Headline</h6>
					<p className='font-alt text-xs'>Sample footer text</p>
				</div>
				<div className='py-8 flex flex-col gap-4'>
					<h6 className='font-base text-sm'>Headline</h6>
					<p className='font-alt text-xs'>Sample footer text</p>
				</div>
			</div>
			<div className='flex justify-center items-center'>
				<p className='font-base text-xs'>Sample footer text</p>
			</div>
		</footer>
	);
};

export default Footer;
