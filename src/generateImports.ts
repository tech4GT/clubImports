import { importType, importMapObject } from './types';

export default (importMap: importMapObject) => {

    /*
    * Ignoring alphabetic ordering for now
    */

    let output = "";

    for (const key in importMap) {

        let thisImport = "import {";
        const arr = importMap[key];

        for (const obj of arr) {
            if (obj.type === importType.DEFAULT) {
                output += `import ${obj.module} from '${key}';\n`;
            } else if (obj.type === importType.NAMED) {
                thisImport += ` ${obj.module},`;
            }
        }

        if (thisImport !== "import {")
            output += `${thisImport.slice(0, -1)} } from '${key}';\n`;

    }

    return output;

}