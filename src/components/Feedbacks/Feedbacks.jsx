import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { fadeIn, textVariant } from '../../utils/motion';
import { testimonials } from '../../constants';
import PropTypes from 'prop-types';

const FeedbackCard = ({
	index,
	testimonial,
	name,
	designation,
	company,
	image,
}) => (
	<motion.div
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}
		className="bg-black p-10 rounded-3xl xs:w-[320px] w-full"
	>
		<p className="text-white font-black text-[48px]">&quot;</p>

		<div className="mt-1">
			<p className="text-white tracking-wider text-[18px]">{testimonial}</p>

			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-white font-medium text-[16px]">
						<span className="bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] bg-clip-text text-transparent">
							@
						</span>{' '}
						{name}
					</p>
					<p className="mt-1 text-[#aaa6c3] text-[12px]">
						{designation} of {company}
					</p>
				</div>

				<img
					src={image}
					alt={`feedback_by-${name}`}
					className="w-10 h-10 rounded-full object-cover"
				/>
			</div>
		</div>
	</motion.div>
);

const Feedbacks = () => {
	return (
		<div className={'mt-5 rounded-[20px]'}>
			<motion.div variants={textVariant()}>
				<p
					className={
						'text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'
					}
				>
					What others say
				</p>
				<h2
					className={
						'font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'
					}
				>
					Testimonials.
				</h2>
			</motion.div>
			<div
				className={'pb-14 sm:px-16 px-6 sm:py-16 py-10 flex flex-wrap gap-5'}
			>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	);
};

FeedbackCard.propTypes = {
	index: PropTypes.number,
	testimonial: PropTypes.string,
	name: PropTypes.string,
	designation: PropTypes.string,
	company: PropTypes.string,
	image: PropTypes.string,
};

const WrappedFeedbacksSection = SectionWrapper(Feedbacks, 'Feedbacks');
export default WrappedFeedbacksSection;
