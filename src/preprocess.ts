import * as fs from 'fs';
import { importType, moduleObject, importMapObject } from './types';

/*
* Limitations:
* - imported module names can only contain upper case and english alpabet and _
* - package names are similar to module names in addition to @, _, -, /
*/

export default async (path: string) => {

    const file = await fs.readFileSync(path, 'utf8');
    const importMap: importMapObject = {};

    for (const line of file.split("\n")) {

        if (line === '')
            continue;

        if (!line.startsWith("import"))
            break;

        let isNamed: boolean = false;
        const mods = line.split("import ")[1].split(" from")[0].split("").filter(el => {
            if (el === "{")
                isNamed = true;
            return /[*\-\_,A-Za-z/\s/]/.test(el); // TODO: Add a stronger regex
        }).join("").split(",").map(el => el.trim());
        const pack = line.split("from ")[1].split("").filter(el => /[@\-\/\_\.A-Za-z]/.test(el)).join("");
        if (!importMap[pack])
            importMap[pack] = [];

        for (const mod of mods)
            importMap[pack].push({ type: isNamed ? importType.NAMED : importType.DEFAULT, module: mod });
    }

    return importMap;

}
