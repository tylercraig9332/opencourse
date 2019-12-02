import { ILesson } from '../@types/Interface'

type CourseListProps = {
    fetchString : string,
}

type PreviewCardProps = {
    lesson: ILesson,
    toolbar?: boolan,
    onClick?: any
}

export {
    CourseListProps,
    PreviewCardProps
}