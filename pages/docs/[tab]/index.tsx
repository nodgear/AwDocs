import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { project, title, ValidSubcategory } from '../../../util/parsed';
import Head from 'next/head';


import { Box } from 'react-feather'


const TabPage: NextPage = () => {
    const route = useRouter();
    return <>
        <Head>
            <title>{`${title} : ${route.query.category}`}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex items-center justify-center w-full h-full bg-background rounded-br-md">
            <span className='font-bold text-white font-lg'>Select item/category to start</span>
        </div>
    </>
}

export default TabPage;