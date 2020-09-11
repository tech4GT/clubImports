# Club Typescript imports

This is a command line utility for clubbing typescript imports in your files.

## Installation
`npm i -g club-imports`


## Usage (CLI)
```shell
club-imports [Options]

Options:
  -s, --sort         sort the import lines
  -g, --group        group npm and local imports separately
  -f, --file <path>  Path to your typescript file
  -h, --help         display help for command
```


```ts
// myfile.ts
import { mySuperInterface } from 'something'
import { myOtherSuperInterface } from 'something'


/*
* My super duper typescript code
*/
```


```ts
// myfile.ts after processing
import { mySuperInterface, myOtherSuperInterface } from 'something';


/*
* My super duper typescript code
*/
```