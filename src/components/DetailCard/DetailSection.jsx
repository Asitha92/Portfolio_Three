import { motion } from 'framer-motion';

import { services } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import ServiceCard from './ServiceCard';

function DetailSection() {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p
					className={
						'sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'
					}
				>
					Introduction
				</p>
				<h2
					className={
						'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
					}
				>
					Overview
				</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
			>
				{`I'm a skilled software developer with experience in TypeScript and
				JavaScript, and expertise in frameworks like React, Node.js, and
				Three.js. I'm a quick learner and collaborate closely with clients to
				create efficient, scalable, and user-friendly solutions that solve
				real-world problems. Let's work together to bring your ideas to life!`}
			</motion.p>

			<div className="mt-12 flex flex-wrap justify-center gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
}

const WrappedDetailSection = SectionWrapper(DetailSection, 'DetailSection');
export default WrappedDetailSection;
