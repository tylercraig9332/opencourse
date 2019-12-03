export interface IChapter {
    name: string,
    description: string,
    id?: number | string
}

export interface ILesson {
    name: string,
    description: string,
    type: string,
    content: string,
    author: number,
    preview?: string,
    chapterID?: number,
    courseID?: number,
    id?: number | string
}