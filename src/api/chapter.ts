import { IChapter } from '../@types/Interface'
export const saveChapter = async (courseId : number, chapter : IChapter) => {
    const initData = {
        body: JSON.stringify({
            id: chapter.id,
            courseId: courseId,
            name: chapter.name,
            description: chapter.description
        }),
        headers: {
            "Content-Type": "application/json"
        },
        method: "PUT"
    }
    let returnId = -1;
    await fetch('/chapter/', initData).then((res : any) => res.json())
    .then((res : any) => {
        console.log(res)
        returnId = res.id
    })
    return returnId
}


export const fetchChapters = async (courseID : number) : Promise<IChapter[]> => {
    const initData = {
        body: null,
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET"
    }
    let data = await fetch('/chapter/all/' + courseID, initData).then((res : any) => res.json()).then(data => formatChapters(data))
    return data
}

export const initChapters = [{
    name: 'Chapter 1',
    description: 'your first chapter',
    /*lessons: [{
        name: 'Lesson 1',
        description: '',
        type: 'lecture',
        data: {},
    }], // : Lessson[],*/
}]

async function formatChapters(arr : any[]) : Promise<IChapter[]> {
    let rtn = arr.map((chapter) => {
            let ic = {
                name: chapter.name,
                description: chapter.description,
                id: chapter.id
            } as IChapter
            return ic
    })
    return rtn
}