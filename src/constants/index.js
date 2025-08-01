import {
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	igniterspace,
	intervest,
	amused,
	pearson,
	omobio,
	ecommerce,
	portfolio_1,
	threejs,
	kim,
	greg,
	nodepilot,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Frontend Developer',
		icon: web,
	},
	{
		title: 'Content Creator',
		icon: creator,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Senior Software Engineer',
		company_name: 'Intervest Software Technologies',
		icon: intervest,
		domain: 'Travel Insurance',
		technologies: 'React.js, Next.js, Jaspersoft Studio, Java',
		iconBg: '#383E56',
		date: 'March 2024 - Current',
		points: [
			'Crafted 20+ customizable PDF templates using Jaspersoft Studio and Java, partnering with underwriters and QA teams to ensure compliance with regulatory standards, automating 60% of manual data entry for 15,000+ annual client transactions while achieving 100% audit-ready documentation and reducing post-release revisions by 40%.',
			'Architected a reusable component library and established foundational page structures for a large-scale Next.js migration, accelerating frontend development velocity by 20% and ensuring adherence to modern best practices for scalability and maintainability. ',
			'Created and documented a structured onboarding guide covering project architecture, workflows, and best practices, reducing new developer onboarding time by over 80% and improving team knowledge transfer. ',
		],
	},
	{
		title: 'Software Engineer',
		company_name: 'Amused Group',
		icon: amused,
		domain: 'Betting',
		technologies:
			'React.js, Redux, TypeScript, tailwindcss, Jest, React Testing Library',
		iconBg: '#E6DEDD',
		date: 'December 2022 - November 2023',
		points: [
			'Developed and optimized over 20+ responsive web pages and 50+ reusable components, reducing frontend development time by 40% while ensuring a seamless user experience for a rapidly evolving betting platform.',
			'Engineered and deployed key betting functionalities, handling thousands of real-time transactions per second, boosting system efficiency and reducing latency by 30%.',
			'Led onboarding initiatives for 5+ new developers, creating structured documentation and training sessions that cut onboarding time by 50%, enabling faster team integration and productivity.',
			'Cultivated a collaborative onboarding culture by launching biweekly team-building workshops and mentorship programs for 5+ new hires, resulting in 40% faster ramp-up times and a 25% increase in first-year retention rates based on annual employee satisfaction surveys.',
			`Reviewed and refined over 50% of the team's codebase, ensuring adherence to best practices and high-quality standards, which reduced UI-related bugs by 40%. Additionally, introduced a standardized naming convention for component IDs, enhancing code readability, maintainability, and team collaboration.`,
		],
	},
	{
		title: 'Software Engineer',
		company_name: 'Omobio (Pvt) Ltd',
		icon: omobio,
		domain: 'Telecommunication',
		technologies: 'React.js, Redux, TypeScript, Bootstrap, RESTful APIs',
		iconBg: '#383E56',
		date: 'June 2021 - October 2022',
		points: [
			'Tailored and built 15+ interactive UI components for a telecommunication web application, enhancing user experience and interface responsiveness. ',
			'Boosted frontend performance, reducing page load time by 20% through efficient rendering techniques and accelerated API handling.',
			'Partnered with UI/UX designers and backend developers to deliver 50+ pixel-perfect React components and integrate 15+ RESTful APIs, achieving 100% design-to-code fidelity and reducing frontend-backend integration errors by 40% through rigorous testing and Agile iteration.',
		],
	},
	{
		title: 'Software Engineer',
		company_name: 'Pearson Lanka',
		icon: pearson,
		domain: 'E-Learning',
		technologies: 'React.js, Redux, TypeScript, SCSS, WCAG',
		iconBg: '#E6DEDD',
		date: 'June 2019 - June 2021',
		points: [
			'Built and maintained a fully shareable, responsive, and accessible component library from scratch, ensuring 100% design consistency across multiple teams without reliance on external libraries.',
			'Constructed pixel-perfect UI components, aligning precisely with provided designs, which enhanced user experience and minimized UI inconsistencies by 35% across the learning application.',
			'Enhanced performance and accessibility, implementing best practices in React.js, Redux, and TypeScript, resulting in a 25% improvement in load times and full WCAG compliance.',
			'Collaborated with cross-functional teams, ensuring seamless integration of reusable components, which accelerated development workflows and eliminated redundant code by 50%.',
		],
	},
	{
		title: 'Trainee Software Engineer',
		company_name: 'IgniterSpace',
		icon: igniterspace,
		domain: 'Education',
		technologies: 'Angular, Node.js, MySQL, SCSS',
		iconBg: '#E6DEDD',
		date: 'September 2017 - March 2018',
		points: [
			'Architected and developed a web-based management portal, automating 15+ manual processes (e.g., attendance tracking, resource allocation) and reducing administrative task time by 40% for staff.',
		],
	},
];

const testimonials = [
	{
		testimonial: `I had the pleasure of working with Asitha on a React project where his Front-End expertise was invaluable. His meticulous attention to detail and proficiency in React significantly elevated the quality of our product. What truly sets Asitha apart is his willingness to try new things. He consistently demonstrates a forward-thinking approach, not only adapting to new technologies and methods but also actively seeking them out to enhance our project’s capabilities.
Asitha is an asset to any team, bringing a combination of technical acumen, innovative thinking, and problem-solving abilities. His contributions go beyond just fulfilling tasks; he elevates the entire project with his insights and dedication.`,
		name: 'Kim Chan',
		designation: 'CTO',
		company: 'Pyxis',
		image: kim,
	},
	{
		testimonial: `It's my pleasure to recommend Asitha, who was one of the early team members on our project. Asitha's dedication and commitment to the success of our team were truly outstanding. Not only did he contribute significantly to the project's success through his hard work and excellent work ethic, but he also played a pivotal role in upskilling new team members, fostering a collaborative and supportive environment. Asitha's positivity and constant smile were infectious, making every interaction a pleasure. He is a great collaborator, a true team player, and his contributions would undoubtedly make him a valuable asset to any company. I highly recommend Asitha for his outstanding professional qualities and positive impact on our team.`,
		name: 'Greg Yap',
		designation: 'Engineering Manager',
		company: 'Amused Group',
		image: greg,
	},
];

const projects = [
	{
		name: 'E-Commerce Store',
		description:
			'A full-featured MERN stack e-commerce store with a user-facing frontend and a powerful admin panel for managing products, orders, and users.',
		tags: [
			{
				name: 'Next.js',
				color:
					'bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] bg-clip-text text-transparent',
			},
			{
				name: 'nodejs',
				color:
					'bg-gradient-to-t from-[#f12711] to-[#f5af19] bg-clip-text text-transparent',
			},
			{
				name: 'mongodb',
				color:
					'bg-gradient-to-t from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent',
			},
			{
				name: 'tailwindcss',
				color:
					'bg-gradient-to-t from-[#ec008c] to-[#fc6767] bg-clip-text text-transparent',
			},
		],
		image: ecommerce,
		source_code_link: 'https://github.com/Asitha92/ecommerce-mern-vercel',
	},
	{
		name: 'Portfolio Website',
		description:
			'A modern React-based portfolio website showcasing my work with interactive 3D elements powered by Three.js for a dynamic and immersive user experience.',
		tags: [
			{
				name: 'react',
				color:
					'bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] bg-clip-text text-transparent',
			},
			{
				name: 'three.js',
				color:
					'bg-gradient-to-t from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent',
			},
			{
				name: 'tailwind.css',
				color:
					'bg-gradient-to-t from-[#ec008c] to-[#fc6767] bg-clip-text text-transparent',
			},
		],
		image: portfolio_1,
		source_code_link: 'https://github.com/Asitha92/Portfolio_Three',
	},
	{
		name: 'Node Pilot',
		description:
			'A visual workflow editor that lets users create, connect, and run node-based flows with AI actions.',
		tags: [
			{
				name: 'react',
				color:
					'bg-gradient-to-t from-[#2f80ed] to-[#56ccf2] bg-clip-text text-transparent',
			},
			{
				name: 'react flow',
				color:
					'bg-gradient-to-t from-[#11998e] to-[#38ef7d] bg-clip-text text-transparent',
			},
			{
				name: 'tailwind.css',
				color:
					'bg-gradient-to-t from-[#ec008c] to-[#fc6767] bg-clip-text text-transparent',
			},
			{
				name: 'deepseek',
				color:
					'bg-gradient-to-t from-[#f12711] to-[#f5af19] bg-clip-text text-transparent',
			},
		],
		image: nodepilot,
		source_code_link: 'https://github.com/Asitha92/NodePilot',
	},
];

export { services, technologies, experiences, testimonials, projects };
