import TableLine from './TableLine'
import { FieldInfo } from '../../util/parsed';
import get_types from "../../util/get_types";

type TablePageProps = {
    fields: FieldInfo[];
}

const TablePage: React.FC<TablePageProps> = ({fields}:TablePageProps) => {
    return <>
        <section className="container px-4 py-6 font-mono">
        <h1 className="mb-4 text-2xl text-white text-opacity-30">Keys and values</h1>
        <div className="w-full overflow-hidden rounded-md">
            <div className="w-full overflow-x-auto">
            <table className="w-full">
                <thead>
                <tr className="font-semibold tracking-wide text-left text-white text-opacity-50 uppercase border-b border-gray-900 bg-secondary text-md">
                    <th className="px-4 py-3">KEY</th>
                    <th className="px-4 py-3">DESCRIPTION</th>
                </tr>
                </thead>
                <tbody className="bg-opacity-50 bg-secondary">
                {
						fields.map((field, index) => {
							// return <tr key={`${index}-${field.key}--${field.type}`}>
							// 	<td>{get_types(field.type)}</td>
							// 	<td>{field.key}</td>
							// 	<td>{field.description}</td>
							// </tr>
							return <TableLine type={get_types(field.type)} value={field.description} variable={field.key} key={`${index}-${field.key}--${field.type}`}/>
						})
					}
                
                </tbody>
            </table>
            </div>
        </div>
        </section>
    </>
}

export default TablePage;