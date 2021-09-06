import style from '../../styles/content.module.css'
import { GitHub } from 'react-feather';

import get_types from "../../util/get_types";

type FunctionProps = {
    realm?: string;
    signatureReturns: JSX.Element[];
    isMethod: boolean;
    name: string;
    category: string | string[] | undefined;
    paramsSignature: JSX.Element[];
}

const Function: React.FC<FunctionProps> = ({realm, signatureReturns, isMethod, name, category, paramsSignature}: FunctionProps) => {


    return <div className="flex flex-col">
        <div className="flex flex-row items-center px-6 py-6 mx-4 my-4 text-lg text-white rounded-md bg-opacity-30 bg-secondary">
                <a href="https://wiki.facepunch.com/gmod/States" className="mx-4 realm"> </a>
                <style jsx={true}>
                    {`.realm{
                        border-radius: 2px;
                        width: 16px;
                        height: 16px;
                        display: none;
                        top: 2px;
                        cursor: hand;
                        display: inline-block;
                        ${realm === "server" 
                            ? 'background: #03a9f4 !important'
                            : realm === "client"
                            ? 'background: #03a9f4 !important'
                            : 'background: linear-gradient(45deg, #dea909 53%, #03a9f4 53.001%)'
                        }
                    }`}
                </style>
                <span className={style.primitives}>{signatureReturns}</span>
                {isMethod && (
                    <>
                        {get_types(String(category))}{":"}
                    </>
                )}
                <span className={"text-[#F2DA68] font-bold"}>{name}</span>( <span className={`${style.args} mx-1`}>{paramsSignature}</span> )
        </div>
        <div className="flex px-4">
            <a href={`https://github.com/nodgear/awgm/search?utf8=✓&q=${name}`} className={`px-4 py-2 flex flex-row ml-auto rounded-md items-center text-white text-opacity-50 transition-all duration-300 hover:text-opacity-100 hover:text-purple-300`}><GitHub className="mr-4" size={16}/> Show on repository</a>
        </div>
    </div>
}

export default Function;