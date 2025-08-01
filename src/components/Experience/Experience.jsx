import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { textVariant } from '../../utils/motion';
import PropTypes from 'prop-types';

function ExperienceCard({ experience }) {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#1d1836',
				color: '#fff',
			}}
			contentArrowStyle={{ borderRight: '7px solid  #232631' }}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<div className="text-[#aaa6c3] text-[16px] font-semibold flex justify-between">
					<p>{experience.company_name}</p>
					<p>{experience.date}</p>
				</div>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
}

function Experience() {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p
					className={
						'sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'
					}
				>
					What I have done so far
				</p>
				<h2
					className={
						'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
					}
				>
					Work Experience
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
}

ExperienceCard.propTypes = {
	experience: PropTypes.shape({
		title: PropTypes.string.isRequired,
		company_name: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		iconBg: PropTypes.string.isRequired,
		points: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};

const WrappedExperienceSection = SectionWrapper(Experience, 'experience');
export default WrappedExperienceSection;
