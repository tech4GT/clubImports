#!/usr/bin/env node

import preprocess from './preprocess';
import generateImports from './generateImports';
import writeImports from './writeImports';

/*
* Would not work with relative file paths
*/

(async () => {

    const fileName = process.argv[2];

    console.log(`Processing file ${fileName}\n\n`);

    const importMap = await preprocess(fileName);

    // console.log(importMap);

    const output = generateImports(importMap);

    console.log(`Imports generated:\n${output}\n\n`);

    await writeImports(fileName, output);

    console.log("Done!");

})();
