export enum importType {
    NAMED,
    DEFAULT
}

export interface moduleObject {
    type: importType,
    module: string
}

export interface importMapObject {
    [key: string]: moduleObject[]
}