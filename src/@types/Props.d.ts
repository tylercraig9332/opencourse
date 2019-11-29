import { ILesson } from '../@types/Interface'

type CourseListProps = {
    fetchString : string,
}

type PreviewCardProps = {
    lesson: ILesson
}

export {
    CourseListProps,
    PreviewCardProps
}