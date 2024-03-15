/** @format */

import React, { useState, useEffect } from 'react';
import Logo from './logo';
import { FaBars, FaXmark } from 'react-icons/fa6';
const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [showShadow, setShowShadow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShowShadow(true);
			} else {
				setShowShadow(false);
			}

			return () => {
				window.removeEventListener('scroll');
			};
		});
	}, []);

	return (
		<nav
			className={`${
				showShadow && 'shadow-lg'
			} fixed z-50 top-0 left-0 bg-base-white max-h-[77px] w-full flex items-center justify-between px-[30px] py-[14px]`}>
			<Logo />
			{!toggleMenu && (
				<FaBars
					className='text-xl cursor-pointer'
					onClick={() => setToggleMenu(!toggleMenu)}
				/>
			)}
			{toggleMenu && (
				<div className='absolute left-0 top-0 w-full h-screen bg-base-black animate-slide-bottom'>
					<FaXmark
						className='absolute top-[17px] right-[29px] text-white text-xl  cursor-pointer'
						onClick={() => setToggleMenu(!toggleMenu)}
					/>
					<ul className='absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center '>
						<li className='py-2 hover:text-base-clr hover:animate-scale duration-500 '>
							<a href=''>Home</a>
						</li>
						<li className='py-2 hover:text-base-clr hover:animate-scale duration-500'>
							<a href=''>Menu</a>
						</li>
						<li className='py-2 hover:text-base-clr hover:animate-scale duration-500'>
							<a href=''>Learn Online</a>
						</li>
						<li className='py-2 hover:text-base-clr hover:animate-scale duration-500'>
							<a href=''>Asian Food</a>
						</li>
						<li className='py-2 hover:text-base-clr hover:animate-scale duration-500'>
							<a href=''>Farm Products</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
