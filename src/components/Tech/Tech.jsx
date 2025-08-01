import { BallCanvas } from '../../models';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';

function Tech() {
	return (
		<>
			<h2
				className={
					'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10'
				}
			>
				Tech Stack
			</h2>
			<div className="flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology) => (
					<div
						className="w-28 h-28"
						key={technology.name}
					>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</div>
		</>
	);
}

const WrappedTechSection = SectionWrapper(Tech, 'tech');
export default WrappedTechSection;
