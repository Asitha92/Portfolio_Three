import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const StarWrapper = (Component, idName) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.3 }}
				className={'sm:px-16 px-6 sm:py-8 py-5 max-w-7xl mx-auto relative z-0'}
			>
				<span
					className="hash-span"
					id={idName}
				>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default StarWrapper;
