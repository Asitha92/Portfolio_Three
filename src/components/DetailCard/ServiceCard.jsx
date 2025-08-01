/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import PropTypes from 'prop-types';

function ServiceCard({ index, title, icon }) {
	return (
		<Tilt className="xs:w-[250px] w-[300px]">
			<motion.div
				variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
				className="w-full bg-[linear-gradient(90.13deg,_#00cea8_1.9%,_#bf61ff_97.5%)] p-[1px] rounded-[20px] shadow-[0px_35px_120px_-15px_#211e35]"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-[#151030] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img
						src={icon}
						alt="web-development"
						className="w-16 h-16 object-contain"
					/>

					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
}

ServiceCard.propTypes = {
	index: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default ServiceCard;
