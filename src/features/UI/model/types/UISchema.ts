//<address of the page, position scroll in pixels>
export type ScrollSchema = Record<string, number>


export interface UISchema {
    scroll: ScrollSchema;
}