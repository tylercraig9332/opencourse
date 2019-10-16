import React, { useEffect, useState } from 'react';


export default function Test() {

    const [data, setData] = useState(undefined)

    useEffect(() => {
        fetch('/api/getTest')
        .then(res => res.json())
        .then(list => setData(list))
    }, [])

    return (
        <div>
            <p>this is a test</p>
            {data}
        </div>
    )

}
