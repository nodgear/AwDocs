// import {
// 	mdiCodeBraces,
// 	mdiBook,
// 	mdiBookshelf,
// 	mdiCubeOutline,
// 	mdiHook,
// 	mdiViewQuilt,
// 	mdiFormatListNumbered,
// 	mdiDatabase,
// 	mdiCursorDefault,
// } from "@mdi/js";
// import * as mdiIcons from "@mdi/js";
export interface FunctionReferences {
	name: string;
	path: string;
}

export interface FunctionParameters {
	name: string;
	type: string;
	description: string;
}

export interface FunctionReturns {
	type: string;
	description: string;
}

export interface FunctionPage {
	name: string;
	description?: string;
	parameters?: FunctionParameters[];
	returns?: FunctionReturns[];
	examples?: string[];
	warnings?: string[];
	references?: FunctionReferences[];
	realm?: string;
	internal?: boolean;
	item: "function";
	fields?: FieldInfo[]
}

export interface FieldInfo {
	type: string;
	key: string;
	description: string;
}

export interface TablePage {
	name: string;
	description?: string;
	fields?: FieldInfo[];
	realm?: string;
	internal?: boolean;
	item: "table";
}

export type ValidSubcategory = Category | FunctionPage | TablePage;

export interface Category {
	name: string;
	description?: string;
	fields?: FieldInfo[];
	warnings?: string[];
	references?: FunctionReferences[];
	subcategories: {
		[key: string]: ValidSubcategory;
	};
	item: "category";
}

export interface ProjectStructure {
	[key: string]: Category;
}

/**************************************************************************** */

const parsed = require("../parsed.json");
export const project: ProjectStructure = parsed.structure;
export const category_types: string[] = parsed.category_types;
export const title: string = parsed.title;
const extraIcons: {
	[key: string]: string
} = parsed.icons

export const icons = {
	globals: "Code",
	classes: "Users",
	modules: "Box",
	hooks: "Link",
	libraries: "Layers",
	panels: "Layout",
	enums: "List",
	structs: "Database"
};

// console.log(mdiIcons)

// Object.entries(extraIcons).forEach(([tab, icon]: string[]) => {
// 	const key = tab.toLocaleLowerCase()

// 	// @ts-ignore
// 	icons[key] = mdiIcons[icon] !== undefined ? mdiIcons[icon] : mdiCursorDefault
// })
