import { Fragment } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import style from "../../styles/content.module.css";
import Function from "../../components/content/Function";
import Variable from "../../components/content/Variable";
import { Link as LinkIcon } from "react-feather";

import {
  project,
  FunctionPage as FunctionPageObject,
  FunctionParameters,
  FunctionReturns,
  FunctionReferences,
  FieldInfo,
} from "../../util/parsed";

import function_name from "../../util/function_name";
import marked from "../../util/marked";
import get_types from "../../util/get_types";

const CategoryContent: NextPage = () => {
  const route = useRouter();
  const { tab, category, subcategory } = route.query;
  const category_object =
    project[String(tab)]?.subcategories?.[String(category)];
  const item = (
    subcategory && "subcategories" in category_object
      ? category_object?.subcategories[String(subcategory)]
      : category_object
  ) as FunctionPageObject;

  const [func_name, isMethod] = function_name(item?.name);
  const title = isMethod ? `${category}:${func_name}` : func_name;

  let description = item?.description;
  const examples: string[] = item?.examples ?? [];
  const references: FunctionReferences[] = item?.references ?? [];
  const warnings: string[] = item?.warnings ?? [];
  const parameters: FunctionParameters[] = item?.parameters ?? [];
  const returns: FunctionReturns[] = item?.returns ?? [];
  const realm = item?.realm;
  const internal = item?.internal;
  const showWarnings = internal || warnings.length > 0;
  const fields: FieldInfo[] = item?.fields ?? [];

  function markedDescription() {
    return {
      __html: marked(description ?? ""),
    };
  }

  function markedExamples() {
    return {
      __html: marked(examples.join("\n\n")),
    };
  }

  const signatureReturns = returns
    .map((ret) => get_types(ret.type, true))
    .map((ret, index) => (
      <Fragment key={index}>
        {index > 0 && ", "}
        {ret}
      </Fragment>
    ));

  const paramsSignature = parameters
    .map((param) => (
      <>
        {get_types(param.type, true)}{" "}
        <span className="text-[#da7a6a] font-bold">{param.name}</span>
      </>
    ))
    .map((param, index) => (
      <Fragment key={index}>
        {index > 0 && ", "}
        {param}
      </Fragment>
    ));

  return (
    <>
      { isMethod ? <Function
        name={func_name}
        paramsSignature={paramsSignature}
        isMethod={isMethod}
        realm={realm}
        signatureReturns={signatureReturns}
        category={category}
      /> : <> 
        <div className="flex flex-col">
            <div className="flex flex-row items-center px-6 py-6 mx-4 my-4 text-lg text-white rounded-md bg-opacity-30 bg-secondary">
                {title}
            </div>
        </div>
      </>}
      <div className="mb-12">
        {description && (
          <>
            <h1 className="px-4 mb-2 text-2xl text-white text-opacity-30">
              Description
            </h1>
            <div
              className="px-4 text-white"
              dangerouslySetInnerHTML={markedDescription()}
            />
            {references.length > 0 && (
              <div className="mt-6">
                {references.map((reference) => {
                  return (
                    <div className="px-4 mt-2 text-white">
                      <span className="flex flex-row">
                        <LinkIcon size={12} className="mr-2" />
                        See also:{" "}
                        <span className="ml-2 font-bold text-purple-500">
                          <Link
                            href={`/docs/${reference.path}`}
                            key={reference.path}
                          >
                            {reference.name}
                          </Link>
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      <div>
        {showWarnings && (
          <>
            <div>
              <h1 className="px-4 mb-2 text-2xl text-white text-opacity-30">
                Warnings
              </h1>
              <div className="px-4 mb-12 text-white">
                {internal && (
                  <div className="px-4 py-2 my-2 bg-red-600 border-2 border-red-600 border-opacity-50 rounded-md bg-opacity-10">
                    This is used internally - although you're able to use it you
                    probably shouldn't
                  </div>
                )}
                {warnings.length > 0 &&
                  warnings.map((warning) => {
                    return (
                      <div
                        className="px-4 py-2 my-2 bg-yellow-300 border-2 border-yellow-600 border-opacity-50 border-dashed rounded-md bg-opacity-10"
                        key={warning}
                      >
                        {warning}
                      </div>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        {parameters.length !== 0 && (
          <>
            <h1 className="px-4 mb-2 text-2xl text-white text-opacity-30">
              Arguments
            </h1>
            <div className="px-4 mb-12 text-white">
              {parameters.map((param, index) => (
                <Variable
                  param={param}
                  index={index}
                  key={`parent-${param.type}-${param.name}-${index}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        {fields.length !== 0 && (
          <>
            <h1 className="px-4 mb-2 text-2xl text-white text-opacity-30">
              Fields
            </h1>
            <div className="px-4 mb-12 text-white rounded-md">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rounded-md">
                  <thead className="text-xs text-gray-300 uppercase rounded-md bg-secondary">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((field, index) => (
                      <>
                        <tr className="border-b bg-primary border-secondary">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                          >
                            { field.type.toUpperCase() }
                          </th>
                          <td className="px-6 py-4">
                            { field.key }
                          </td>
                          <td className="px-6 py-4">
                            {field.description}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        {examples.length !== 0 && (
          <>
            <h1 className="px-4 mb-2 text-2xl text-white text-opacity-30">
              Examples
            </h1>
            <div
              className={`px-6 py-6 mx-4 bg-opacity-50 bg-primary ${style.code} overscroll-x-auto`}
              dangerouslySetInnerHTML={markedExamples()}
            />
          </>
        )}
      </div>
    </>
  );
};

export default CategoryContent;
