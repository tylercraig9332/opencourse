export interface IChapter {
    name: string,
    description: string,
    id?: number | string
}

export interface ILesson {
    name: string,
    description: string,
    type: string,
    content: string | JSON | Object,
    chapterId?: number,
    id?: number | string
}