
const re = /([.:])(\w+$)/
export default function function_name(string: string): [string, boolean] {
    const match = string ? string.match(re) : ["Failed to match"];
    const isMethod = match !== null && match[1] === ":"

    return [isMethod && match !== null ? match[2] as string : string, isMethod]
}
