export interface IChapter {
    name: string,
    description: string,
    lessons: Lesson[]
}

export interface ILesson {
    name: string,
    description: string,
    type: string,
    data: string | JSON | Object,
    chapterId?: number
}