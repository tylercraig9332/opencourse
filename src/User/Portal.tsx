import { Button, Col, Input, message, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import formToJSON from '../Util/formToJSON';
import Success from './Alerts/Success';

export default function Portal(props: any) {
 
    const [success, setSuccess] = useState<Boolean>(false);


    function handleSubmit(event : any) {
        event.preventDefault()
        const form = formToJSON(event.target)
        const reqHeaders = {
          body: JSON.stringify(form),
          headers: {
              "Content-Type": "application/json"
          },
          method: "POST"
      }

      fetch('/auth/user/', reqHeaders)
      .then( res => {
           setSuccess(res.status == 200) 
           if (res.status == 200) {
               window.location.href = '/courses/all'
           }
           else {
            // handle this res.
            message.error("Something went wrong.")
            message.info("Please check your username and password and try again")
           }
        })
      .catch(error=>console.error(error))
    }

    const signup = (props.signup == undefined) ? (<span style={formStyle}><a href="/signup/">Don't have an account? Sign Up</a></span>) : undefined

    return (
        <div style={pageStyle}>
            <Row>
              <Col span={6} offset={6}>
                <h1 style={{color: 'dimgrey'}}>Sign In</h1>
                <div>{success ? <Success /> : undefined}</div>
                <form onSubmit={handleSubmit}>
                  <Input name="username" placeholder="username" size="large"/>
                  <Input.Password name="password" placeholder="password" style={formStyle} size="large" />
                  <Button type="primary" size="large" style={formStyle} block htmlType="submit">Go</Button>
                  {signup}
                </form>
              </Col>
            </Row>
        </div>
    )
}

const pageStyle = {
    marginTop: '2rem'
}

const formStyle = {
  marginTop: 10
}
