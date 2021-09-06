import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Sidebar } from 'react-feather';
import FunctionPage from '../../../../../components/content/FunctionPage';
import function_name from "../../../../../util/function_name";
import clear_label from "../../../../../util/clear_label";

import { project,
	FunctionPage as FunctionPageObject,
} from '../../../../../util/parsed';
    
const SubCategoryPage: NextPage = () => {
    const route = useRouter();
	const { tab, category, subcategory } = route.query;
	const category_object = project[String(tab)]?.subcategories?.[String(category)];
	const item = (subcategory && "subcategories" in category_object
		? category_object?.subcategories[String(subcategory)]
		: category_object) as FunctionPageObject;
	const [func_name, isMethod] = function_name(item?.name);
	const title = isMethod ? `${category}:${func_name}` : func_name;

    return <>
        <Head>
            <title>{`${route.query.subcategory}`}</title>
        </Head>
        <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto bg-background rounded-br-md">
			<div className="border-b-2 border-white align-center border-opacity-5 ">
				<div className="flex flex-row items-center px-4 text-white">
					<Sidebar className="mr-4" />
					<div className="flex flex-col w-full py-4 text-lg text-bold">
						{clear_label(func_name)}<span className="-mt-1 text-sm text-white text-opacity-10">{route.query.category}</span>
					</div>
				</div>
			
			</div>
			<FunctionPage />
        </div>
    </>
}

export default SubCategoryPage;