export enum importType {
    NAMED,
    DEFAULT
}

export enum importLocation {
    NPM = 0,
    LOCAL
}

export interface moduleObject {
    type: importType,
    module: string
}

export interface importMapObject {
    [key: string]: moduleObject[]
}

export interface importLocationObject {
    [key: number]: string[]
}