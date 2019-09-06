import { message } from 'antd'
import React, { useEffect } from 'react'

export default function Logout() {

    useEffect(() => {
        fetch('/auth/logout').then(res => {
            if (res.status == 200) {
                message.success("Success!")
                window.location.href = '/'
            }
            else 
                message.error("Something went wrong")
        })
    }, [])

    return (
        <div style={pageStyle}>
            <h1 style={{color: 'dimgrey'}}>Logging out</h1>
        </div>
    )
}

const pageStyle : any = {
    textAlign: "center",
    width: 400,
    marginTop: '4rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  }