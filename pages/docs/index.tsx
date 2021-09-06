import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { project, title, ValidSubcategory } from '../../util/parsed';
import Head from 'next/head';


import { Box } from 'react-feather'


const DocsLandingPage: NextPage = () => {
    const route = useRouter();
    return <>
        <Head>
            <title>{`${title} : ${route.query.category}`}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex w-full h-full bg-background rounded-br-md">

        </div>
    </>
}

export default DocsLandingPage;