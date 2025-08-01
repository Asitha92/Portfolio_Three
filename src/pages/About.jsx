import {
	Intro,
	WrappedExperienceSection,
	WrappedDetailSection,
	WrappedTechSection,
	WrappedWorksSection,
	WrappedFeedbacksSection,
} from '../components';

function About() {
	return (
		<div className="relative z-0 bg-slate-950">
			<div className="bg-[url(src/assets/herobg.png)] bg-cover bg-no-repeat bg-center">
				<Intro />
			</div>
			<WrappedDetailSection />
			<WrappedExperienceSection />
			<WrappedTechSection />
			<WrappedWorksSection />
			<WrappedFeedbacksSection />
		</div>
	);
}

export default About;
