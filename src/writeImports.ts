import * as fs from 'fs';

export default async (fileName: string, imports: string) => {

    const originalFileContents = await fs.readFileSync(fileName, "utf8");

    await fs.writeFileSync(fileName, imports + originalFileContents.split("\n").filter(el => !el.startsWith("import")).join("\n"));

}