import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import clear_label from '../../util/clear_label'

export interface PageLinkProps {
    label: string;
    link: string;
    onClick?: () => void;
}

const PageLink: React.FC<PageLinkProps> = ({ label, link, onClick }) => {
    const router = useRouter()
	const location = router.query
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive( !String(location.subcategory).endsWith('-') ? String(location.subcategory).endsWith(label) : String(location.category).includes(label) )
    }, [location, link, label])

	return <Link href={`/docs/${link}`} >
        <div className={`px-16 py-2 text-sm transition-colors duration-300 select-none hover:bg-accent ${active && 'bg-opacity-40 bg-accent'}`}>
            <span>{clear_label(label)}</span>
	    </div>
    </Link>;
};

export default PageLink;
