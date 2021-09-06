import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { ChevronRight, ChevronDown } from 'react-feather';
import PageLink from './PageLink';



export interface SubcategoryProps {
	label: string;
	link: string;
	children?: React.ReactElement<typeof PageLink>[];
}

const Subcategory: React.FC<SubcategoryProps> = ({ label, children, link }) => {
	const router = useRouter()
	const location = String(router.query.category)
	const [collapsed, setCollapsed] = useState(location !== label);
	const [active, setActive] = useState(false)

	useEffect(() => {
		setActive(label === location)
	}, [location, link, label])

	return (
		<div className="flex flex-col w-full">
			<Link href={link} >
				<div
					className={`flex flex-row items-center py-4 px-6 hover:bg-opacity-40 hover:bg-accent select-none transition-colors duration-300 ${!collapsed && 'font-bold'} ${active && 'text-purple-400'} text-md`}
					onClick={() => {
						setCollapsed(!collapsed);
					}}
				>
					
					<ChevronRight className={`transform ${collapsed ? 'rotate-0' : 'rotate-90'} transition-transform duration-300`}/> <span className={`ml-3`}>{`${label[0].toUpperCase()}${label.slice(1).toLowerCase()}`}</span>
				</div>
			</Link>
			<div>
				{ !collapsed && children}
			</div>
		</div>
	);
};

export default Subcategory;
