import { motion } from 'framer-motion';

import { ComputersCanvas } from '../../models';

function Intro() {
	return (
		<>
			<section className={`relative w-full h-screen mx-auto`}>
				<div
					className={
						'absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5'
					}
				>
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
						<div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#804dee] to-transparent" />
					</div>

					<div>
						<h1
							className={
								'font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white'
							}
						>
							{`Hi, I'm`} <span className="text-[#915EFF]">Asitha</span>
						</h1>
						<p
							className={
								'text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100'
							}
						>
							Passionate Software Engineer crafting seamless and dynamic web
							experiences with 5+ years of expertise in React.js and Next.js
						</p>
					</div>
				</div>

				<ComputersCanvas />

				<div className="not-visited:xs:bottom-10 mt-5 bottom-32 w-full flex justify-center items-center">
					<a href="#DetailSection">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#aaa6c3] flex justify-center items-start p-2">
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: 'loop',
								}}
								className="w-3 h-3 rounded-full bg-[#aaa6c3] mb-1 cursor-pointer"
							/>
						</div>
					</a>
				</div>
			</section>
		</>
	);
}

export default Intro;
