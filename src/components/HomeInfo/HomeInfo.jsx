/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import { arrow } from '../../assets/icons';

function HomeInfo({ currentStage }) {
	if (currentStage === 1)
		return (
			<h1 className="sm:text-xl sm:leading-snug text-center bg-[#2b77e7] relative rounded-[10px] border border-[#2b77e7] shadow-sm py-4 px-8 text-white mx-5 opacity-90">
				{`Hi, I'm`}
				<span className="font-semibold mx-2 text-white">Asitha</span>
				👋
				<br />
				{`A Software Engineer from United Kingdom 🇬🇧`}
			</h1>
		);

	if (currentStage === 2) {
		return (
			<div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl bg-[#2b77e7] rounded-[10px] border border-[#2b77e7] shadow-sm pt-4 pb-12 px-8 opacity-90">
				<p className="font-medium sm:text-xl text-center">
					{`I have worked with many companies `}
					<br />{' '}
					{`and picked up many skills along the
					way`}
				</p>

				<Link
					to="/about"
					className="bg-white border border-white shadow-sm py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3 opacity-100 cursor-pointer"
				>
					Learn more
					<img
						src={arrow}
						alt="arrow"
						className="w-4 h-4 object-contain"
					/>
				</Link>
			</div>
		);
	}

	if (currentStage === 3) {
		return (
			<div className="mx-5 flex text-white flex-col gap-3 max-w-2xl bg-[#2b77e7] relative rounded-[10px] border border-[#2b77e7] shadow-sm pt-4 pb-12 px-8 opacity-90">
				<p className="font-medium text-center sm:text-xl">
					Led multiple projects to success over the years. <br /> Curious about
					the impact?
				</p>

				<Link
					to="/about#experience"
					className="bg-white border border-white shadow-sm py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3 opacity-90"
				>
					Visit my portfolio
					<img
						src={arrow}
						alt="arrow"
						className="w-4 h-4 object-contain"
					/>
				</Link>
			</div>
		);
	}

	if (currentStage === 4) {
		return (
			<div className="mx-5 relative flex text-white flex-col gap-3 max-w-2xl bg-[#2b77e7] rounded-[10px] border border-[#2b77e7] shadow-sm pt-4 pb-12 px-8 opacity-90">
				<p className="font-medium sm:text-xl text-center">
					{`Looking for a dev? `} <br />{' '}
					{`I'm just a few
					keystrokes away`}
				</p>

				<Link
					to="/contact"
					className="bg-white border border-white shadow-sm py-3 px-6 rounded-lg text-blue-500 text-center font-semibold sm:w-1/2 w-[90%] -bottom-5 absolute mx-auto right-0 left-0 flex justify-center items-center gap-3 opacity-90"
				>
					{`Let's talk`}
					<img
						src={arrow}
						alt="arrow"
						className="w-4 h-4 object-contain"
					/>
				</Link>
			</div>
		);
	}

	return null;
}

export default HomeInfo;
