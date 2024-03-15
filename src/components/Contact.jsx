/** @format */

import React from 'react';
import {
	FaFacebookF,
	FaXTwitter,
	FaInstagram,
	FaYoutube,
	FaPinterestP,
} from 'react-icons/fa6';
import { images } from '../constants';
const Contact = () => {
	return (
		<div className='w-full h-full bg-url2 text-base-white p-[30px] pt-[500px] flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-x-40 lg:gap-10 md:gap-y-20  md:items-center'>
			<div className='md:w-1/2 flex  flex-col gap-8 md:gap-4 '>
				<h3 className='uppercase font-base text-2xl md:text-3xl font-bold'>
					Fresh Food cafe
				</h3>
				<p className='font-alt text-xs md:text-sm lg:pr-10 '>
					Our Cafe is a family-owned restaurant that has been proudly serving
					around the 1940s located on the corner of Broadway and West 112th
					Street in New York.
				</p>
				<ul className='flex gap-4'>
					<li>
						<a href=''>
							<FaFacebookF className='text-2xl text-base-white' />
						</a>
					</li>
					<li>
						<a href=''>
							<FaXTwitter className=' text-2xl text-base-white' />
						</a>
					</li>
					<li>
						<a href=''>
							<FaInstagram className='text-2xl text-base-white' />
						</a>
					</li>
					<li>
						<a href=''>
							<FaYoutube className='text-2xl text-base-white' />
						</a>
					</li>
					<li>
						<a href=''>
							<FaPinterestP className='text-2xl text-base-white' />
						</a>
					</li>
				</ul>
			</div>
			<div className='md:flex-1 py-8 flex flex-col gap-3 lg:items-center lg:justify-center'>
				<img
					src={images.contact01}
					alt=''
					className='w-[80px]'
				/>
				<p className='font-alt text-lg uppercase font-bold'>our menu</p>
			</div>
			<div className='md:flex-1 py-8 flex flex-col -mt-20 md:items-center lg:justify-center '>
				<img
					src={images.contact02}
					alt=''
					className='md:ml-0 -ml-10 lg:mt-10 w-[150px] lg:h-[150px] object-cover'
				/>
				<p className='-mt-5 font-alt text-lg uppercase font-bold'>specials</p>
			</div>
			<div className='md:flex-1 py-8 flex flex-col -mt-32 lg:-mt-24 md:items-center lg:justify-center'>
				<img
					src={images.contact03}
					alt=''
					className='md:ml-0 -ml-10 w-[150px]  lg:h-[250px] object-cover'
				/>
				<p className='-mt-20 lg:-mt-16  font-alt text-lg uppercase font-bold'>
					drinks
				</p>
			</div>
		</div>
	);
};

export default Contact;
