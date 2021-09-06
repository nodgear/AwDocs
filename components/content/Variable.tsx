import type {FunctionParameters} from '../../util/parsed';
import style from '../../styles/content.module.css'
import get_types from "../../util/get_types";
import marked from 'marked';

type VariableProps = {
    param: FunctionParameters;
    index: number;
}

const Variable: React.FC<VariableProps> = ({param, index}:VariableProps) =>  {
    return <>
        <div className="relative mb-6"
            key={`${param.type}-${param.name}-${index}`}
        >
            <div className="ml-16">
                <p>
                    <span className={`${style.args}`}>{get_types(param.type)}</span>
                    <strong>{param.name}</strong>
                </p>
                <p className={`mt-2`}
                    dangerouslySetInnerHTML={{
                        __html: marked(param.description),
                    }}
                />
            </div>
            <span className={style.argcount}>{index + 1}</span>
        </div>
    </>
}

export default Variable;