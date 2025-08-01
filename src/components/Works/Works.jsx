import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { github } from '../../assets';
import { SectionWrapper } from '../../hoc';
import { projects } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import PropTypes from 'prop-types';

function ProjectCard({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	live_site_link,
}) {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3">
						<div
							onClick={() => window.open(source_code_link, '_blank')}
							className="bg-gradient-to-r from-[#434343] to-[#000000] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="source code"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-[#aaa6c3] text-[14px]">{description}</p>
				</div>
				<div className="flex mt-1">
					<div
						onClick={() => window.open(live_site_link, '_blank')}
						className="text-violet-400 text-[14px] cursor-pointer"
					>
						<p>Go to live application 🚀</p>
					</div>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
}

function Works() {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p
					className={
						'sm:text-[18px] text-[14px] text-[#aaa6c3] uppercase tracking-wider'
					}
				>
					My work
				</p>
				<h2
					className={
						'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
					}
				>
					Projects
				</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className="mt-3 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
				>
					Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7 justify-center">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
}

ProjectCard.propTypes = {
	index: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
		})
	).isRequired,
	image: PropTypes.string.isRequired,
	source_code_link: PropTypes.string.isRequired,
	live_site_link: PropTypes.string.isRequired,
};

const WrappedWorksSection = SectionWrapper(Works, 'works');
export default WrappedWorksSection;
