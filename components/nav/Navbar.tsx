import type {Category} from '../../util/parsed'

import NavItem from './NavItem'

interface NavbarProps {
   tabs: [string, Category][];
   tab: string | string[] | undefined;
}

const Navbar = ({tabs, tab}: NavbarProps) => {

    return <>
        <nav className="bg-secondary h-full w-28 flex-shrink-0 rounded-bl-md px-2 py-2" role="navigation">
                {tabs.map(
					([key, value]) =>
						Object.values(value.subcategories).length !== 0 && (
                            <NavItem icon={key} name={value.name} key={key} active={tab === value.name.toLowerCase()}/>
                        )
                )}
        </nav>
    </>
}

export default Navbar;