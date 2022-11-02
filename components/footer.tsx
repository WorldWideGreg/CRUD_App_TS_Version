import Link from 'next/link';
import {FiGithub,FiLinkedin} from 'react-icons/fi';
import AppFooterCopyright from '../components/AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/WorldWideGreg',
	},
	{
		id: 2,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/gregory-morel/',
	}
	
];

export default function AppFooter() {
	return (
		<div className="mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t mx-auto border-slate-500">
				<p className='text-xs flex justify-center mb-5'>This CRUD application is using Next.js, Tailwind.CSS, Typescript, MongoDB and Github</p>				
				<div className="font-general-regular flex flex-col justify-center items-center mb-5">
					<p className="text-xl text-primary-dark mb-5">
						Suivez moi / Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
}
