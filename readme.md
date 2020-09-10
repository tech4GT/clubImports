# Club Typescript imports

This is a command line utility for clubbing typescript imports in your files.

## Installation
`npm i -g club-imports`


## Usage (CLI)
`club-imports <Path to your awesome typescript file>`


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
import { mySuperInterface, myOtherSuperInterface } from 'something'


/*
* My super duper typescript code
*/
```