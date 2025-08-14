// Design an object representation for a subset of JSON containing only objects, arrays and strings.
// Examples from this JSON subset:
//  ex1 = {"a": "foo", "b": "bar"}
//  ex2 = {"b": ["foo", "bar"]}
//  ex3 = {"a": {"b": [{"c": "foo", "d": {}, "e": "bar", "f": {"g": "baz"}}]}}
//  ex4 = {"a": [{"b": "foo"}, {"c": "bar"}, {"b": "baz"}]}
//  ex5 = ["val1", "val2", {"a": "foo"}]


function isJsonVal(v) {
    if(typeof v === "string") return true;

    if(Array.isArray(v)) {
        return v.every(isJsonVal);
    }

    if(v && typeof v === "object") {
        return Object.values(v).every(isJsonVal);
    }

    return false;
}


function stringifySubset(v, space = 2) {

    if(!isJsonVal(v)) {
        throw new Error("Value is not in the allowed JSON subset.");
    }

    return JSON.stringify(v, null, space);
    
}


function parseSubset(jsonText) {
    const parsed = JSON.parse(jsonText);

    if(!isJsonVal(parsed)) {
        throw new Error("Parsed val is not the allowed JSON subset.");
    }

    return parsed;
}

const ex1 = { a: { b: [{ c: "foo", d: {}, e: "bar", f: { g: "baz" } }] } };

const ex2 = { x: 20 }

console.log("ex1 valid?", isJsonVal(ex1));
console.log("ex2 valid?", isJsonVal(ex2));