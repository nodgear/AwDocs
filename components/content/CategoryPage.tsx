import {NextPage} from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link'
import marked from 'marked';
import { project, Category, FunctionReferences } from '../../util/parsed';
import TablePage from '../../components/content/TablePage'
import { Link as LinkIcon } from 'react-feather'

const CategoryContent: NextPage = () => {   
    const route = useRouter();
    const { tab, category } = route.query;
	const category_object = project[String(tab)]?.subcategories?.[String(category)] as Category;
	const description = category_object?.description;
	const fields = category_object?.fields ?? []
    const references: FunctionReferences[] = category_object?.references ?? [];
    const warnings: string[] = category_object?.warnings ?? [];

	const showWarnings = warnings.length > 0


	function markedDescription() {
		return {
			__html: marked(description as string),
		};
	}

	return <>
			 {description && (
                <>
                    <h1 className="px-4 mb-2 text-2xl text-white text-opacity-30">Description</h1>
                    <div className="px-4 text-white" dangerouslySetInnerHTML={markedDescription()}/>
                    {references.length > 0 &&(
                        <div className="mt-6">
                        { references.map(reference => {
                                return <div className="px-4 mt-2 text-white">
                                    <span className="flex flex-row"><LinkIcon size={12} className="mr-2"/>See also: <span className="ml-2 font-bold text-purple-500"><Link href={`/docs/${reference.path}`} key={reference.path}>{reference.name}</Link></span></span>
                                </div>
                            })
                        }
                        </div>
                    )}

                </>
            )}
			<div>
            {showWarnings &&(
                <>
                    <div>
                        <h1 className="px-4 mb-2 text-2xl text-white text-opacity-30">Warnings</h1>
                        <div className="px-4 mb-12 text-white">
                            {warnings.length > 0 && warnings.map( warning => {
                                return <div className="px-4 py-2 my-2 bg-yellow-300 border-2 border-yellow-600 border-opacity-50 border-dashed rounded-md bg-opacity-10" key={warning}>
                                        {warning}
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
			{fields.length !== 0 && <>
				<TablePage fields={fields} />
			</>}
	</>
}

export default CategoryContent;