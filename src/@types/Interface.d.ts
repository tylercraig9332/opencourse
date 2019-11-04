export interface IChapter {
    name: string,
    description: string,
    lessons: Lesson[],
    key?: number | string
}

export interface ILesson {
    name: string,
    description: string,
    type: string,
    data: string | JSON | Object,
    chapterId?: number,
    key?: number | string
}