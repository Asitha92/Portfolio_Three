import { NavLink, useLocation } from 'react-router-dom';
import { logo } from '../../assets';

function NavBar() {
	const { pathname } = useLocation();
	return (
		<header className="flex justify-between items-center sm:px-10 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
			<NavLink
				to="/"
				className="w-12 h-12 rounded-lg bg-white items-center justify-center flex"
			>
				<img
					src={logo}
					alt="logo"
					className="object-contain"
				/>
			</NavLink>
			<p
				className={`text-[18px] font-bold cursor-pointer flex ${
					pathname === '/' ? 'text-black' : 'text-[#915EFF]'
				}`}
			>
				Asitha&nbsp;
				<span
					className={`sm:block hidden ${
						pathname === '/' ? 'text-black' : 'text-[#915EFF]'
					}`}
				>
					{' '}
					| Software Engineer
				</span>
			</p>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink
					to="/about"
					className={({ isActive }) =>
						isActive
							? 'text-[#915EFF]'
							: pathname === '/'
							? 'text-black'
							: 'text-[#dfd9ff]'
					}
				>
					About
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						isActive
							? 'text-[#915EFF]'
							: pathname === '/'
							? 'text-black'
							: 'text-[#dfd9ff]'
					}
				>
					Contact
				</NavLink>
			</nav>
		</header>
	);
}

export default NavBar;
