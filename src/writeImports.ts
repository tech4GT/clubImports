import * as fs from 'fs';

export default (fileName: string, imports: string) => {

    const originalFileContents = fs.readFileSync(fileName, "utf8");

    let flag = false;
    fs.writeFileSync(fileName, imports + originalFileContents.split("\n").filter(el => {
        if (flag)
            return true;
        else if (el === '' || el.startsWith("import"))
            return false;
        else {
            flag = true;
            return true;
        }
    }).join("\n"));

}