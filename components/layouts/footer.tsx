import { FiGithub, FiLinkedin } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

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
			<div className="mx-auto">
				<p className='text-xs text-center flex justify-center mb-5 light:text-gray-900 dark:text-gray-400'>
					This CRUD application is using Next.js, Tailwind.CSS, Typescript, MongoDB and Github
				</p>
				<div className="font-general-regular flex flex-col justify-center items-center mb-5">
					<p className="text-2xl light:text-gray-900 dark:text-white-rose mb-5">
						Suivez moi / Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 dark:bg-white-rose hover:bg-gray-300 shadow-sm p-4 duration-200"
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
