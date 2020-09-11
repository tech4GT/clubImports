import * as fs from 'fs';

export default async (fileName: string, imports: string) => {

    const originalFileContents = await fs.readFileSync(fileName, "utf8");

    let flag = false;
    await fs.writeFileSync(fileName, imports + originalFileContents.split("\n").filter(el => {
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