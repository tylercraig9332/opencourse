import { ILesson } from '../@types/Interface'

type CourseListProps = {
    fetchString : string,
}

type PreviewCardProps = {
    lesson: ILesson,
    toolbar?: boolan
}

export {
    CourseListProps,
    PreviewCardProps
}