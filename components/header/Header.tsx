import {NextPage} from 'next';
import Link from 'next/link'

const Header: NextPage = () => {
    return <>
    <header className="flex flex-row items-center w-full h-16 py-6 pr-6 rounded-t-md bg-tertiary">
        <Link href="/docs" ><div className="flex justify-center text-white border-r-2 border-opacity-50 cursor-pointer align-center w-28 border-background"><img src="/d3ctb8w.png" alt="Awesome"/></div></Link>
        <a href="https://github.com/nodgear/awgm" className="px-4 py-2 ml-auto font-semibold text-white transition-all duration-300 rounded-sm bg-background hover:bg-success">Repository</a>
        <a href="https://wiki.facepunch.com/gmod" className="px-4 py-2 ml-6 font-semibold text-white transition-all duration-300 rounded-sm bg-background hover:bg-blue-500">Wiki</a>
    </header>
    </>
}

export default Header;