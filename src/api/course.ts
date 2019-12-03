export const saveDetails = async (name : string, description : string) => {
    /*const data = {
        title: localStorage.getItem('courseTitle'),
        description: localStorage.getItem('courseDescription')
    }*/
    const data = {
        title: name,
        description: description
    }
    let initData = {
        body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
    }
    let courseId = -1
    await fetch('/course/', initData).then(res => res.json())
    .then((res) => {courseId = res.id; console.log(res.id)})
    .catch(error => console.error(error))
    return courseId
}

export const updateDetails = async (id : number, name : string, description : string) => {
    if (id === -1) {
        // This means we meant to do a post
        // This also might be a bad error lmao
        return saveDetails(name, description)
    }
    const data = {
        id: id,
        name: name,
        description: description
    }
    let initData = {
        body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT"
    }
    let courseId = -1
    await fetch('/course/', initData).then(res => res.json())
    .then((res) => {
        if (typeof(res) === 'boolean') {
            console.log("Updated")
            courseId = id
        } else {
            courseId = res.id
            console.log(res.id)
        }
        
    })
    .catch(error => console.error(error))
    return courseId
}

export const fetchDetails = async (id : number) => {

    const headerInit = {
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    }

    let data : Object = {}
    await fetch(`/course/${id}`, headerInit).then(res => res.json())
    .then((d) => data = d)
    return data
}

export const listCourses = async (byType : string) => {

    const initData = {
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    }
    let c : Object[] = []
    await fetch('/course/' + byType, initData).then(res => res.json())
    .then((all) => {
        //console.log(all)
        c = all
    })
    return c
}

export const savePreview = (id : number, url : string) => {
    if (url.length < 1 || url === '') return
    console.log(url)
    const initData = {
        body: JSON.stringify({preview: url}),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT'
    }
    fetch('/course/preview/' + id, initData).then((res) => res.json())
    .then((res) => console.log(res))
    
}

export const fetchAuth = (id : number) : Promise<boolean> => {
    const initData = {
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    }
    return fetch('/course/auth/' + id, initData)
    .then(res => res.json())
    .then(res => {console.log(res); return res})
    .catch((err) => {console.log(err); return false})
}