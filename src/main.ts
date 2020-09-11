#!/usr/bin/env node
import { program } from 'commander';

import preprocess from './preprocess';
import generateImports from './generateImports';
import writeImports from './writeImports';
import { exit } from 'process';
import postprocess from './postprocess';

program
    .option('-s, --sort', 'sort the import lines')
    .option('-g, --group', 'group npm and local imports separately')
    .option('-f, --file <path>', 'Path to your typescript file');

program.parse(process.argv);

if (!program.file) {
    console.error("No file specified");
    exit(1);
}

const fileName = program.file;

console.log(`Processing file ${fileName}\n\n`);

const importMap = preprocess(fileName);

const output = postprocess(generateImports(importMap), program.opts());

console.log(`Imports generated:\n${output}\n\n`);

writeImports(fileName, output);

console.log("Done!");
