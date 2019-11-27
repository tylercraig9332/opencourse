export const getUsersData = async (id : any) => {
    const headerInit = {
        body: null,
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET'
    }

    let data : Object = {}
    await fetch(`/user/${id}`, headerInit).then(res => res.json())
    .then((d) => data = d)
    return data
}

