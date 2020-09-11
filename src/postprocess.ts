import { importLocation, importLocationObject } from './types';

export default (imports: string, options: { [key: string]: any }): string => {


    let importArray = [imports];

    if (options.group) {
        const groupedImports = group(imports);
        importArray = [groupedImports[0].join("\n"), groupedImports[1].join("\n")];
    }

    if (options.sort) {
        importArray = importArray.map(el => sort(el));
    }

    return importArray.join("\n\n") + "\n\n";

}

const sort = (str: string) => {
    return str.split("\n").filter(el => el !== '').sort().join("\n");
}

const group = (imports: string) => {

    const obj: importLocationObject = { 0: [], 1: [] };

    for (const line of imports.split("\n")) {
        if (line.startsWith("import"))
            obj[determineImportLocation(line) === importLocation.LOCAL ? 1 : 0].push(line);
    }

    return obj;
}

const determineImportLocation = (str: string) => {
    return str.split("from ")[1].split("").filter(el => /[@\-\/\_\.A-Za-z]/.test(el)).join("").startsWith(".") ? importLocation.LOCAL : importLocation.NPM;
}