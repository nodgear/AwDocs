import * as Icon from 'react-feather';
import { icons } from '../../util/parsed'
import Link from 'next/link'

interface NavbarItemProps {
    icon: string;
    name: string;
    active?: boolean;
 }

const NavItem = ({icon, name, active}: NavbarItemProps) => {
    //@ts-ignore
    const Glyph = Icon[icons[icon]] ?? Icon["AlertTriangle"]

    return <Link href={`/docs/${icon}`} >
        <div className={`flex flex-col items-center justify-center h-24 hover:bg-tertiary active:bg-accent transition-colors duration-300 text-white rounded-md select-none ${active && 'bg-accent'}`}>
            <Glyph size={32}/><span className="mt-2 text-sm">{name}</span>
        </div>
    </Link>
}

export default NavItem;