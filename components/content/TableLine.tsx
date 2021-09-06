import{ReactElement, JSXElementConstructor} from 'react';

type TableProps = {
    variable: string
    type: ReactElement<any, string | JSXElementConstructor<any>>;
    value: string;
}

const TableLine: React.FC<TableProps> = ({variable, type, value}:TableProps) => {
    return <>
        <tr className="text-white">
            <td className="px-4 py-3 border border-white border-opacity-10">
            <div className="flex items-center text-sm">
                <div>
                    <p className="font-semibold text-white">{variable}</p>
                    <p className="text-xs text-gray-600">{type}</p>
                </div>
            </div>
            </td>
            <td className="px-4 py-3 font-semibold border border-white border-opacity-10 text-ms">{value}</td>
        </tr>
    </>
}

export default TableLine;