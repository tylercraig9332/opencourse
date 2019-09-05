import { Button, Col, Input, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import Email from './Alerts/EmailExp';
import Length from './Alerts/LengthPassword';
import Match from './Alerts/MatchPassword';
import Complete from './Alerts/NotComplete';
import Success from './Alerts/Success';


export default function SignUp(props: any) {

    const [submit, setSubmit] = useState<Boolean>(false)

    const [incomplete, setinComplete] = useState<Boolean>(false)

    const [match, setMatch] = useState<Boolean>(false)

    const [length, setLength] = useState<Boolean>(false)

    const [email, setEmail] = useState<Boolean>(false)

    const [success, setSuccess] = useState<Boolean>(false)

    function handleSubmit(event : any) : void {
        event.preventDefault()
        let form: any = formToJSON(event.target)
        const incomp = !(form.username.length > 0 && form.password.length > 0 && form.match.length > 0 && form.email.length > 0)
        setinComplete(incomp)
        const match = (form.password !== form.match) 
        setMatch(match)
        const length = (form.password.length < 7) 
        setLength(length)

        let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const email = !emailPattern.test(form.email)
        setEmail(email)
        // All checks pass
        if (!incomp && !match && !length && !email) {
            console.log(form)
            const reqHeaders = {
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST"
            }

            fetch('/user/', reqHeaders)
            .then(data=>{data.json()})
            .then(res=>setSuccess(true))
            .catch(error=>console.error(error))
        }
        
    }

    useEffect(() => {
        //
    }, [submit])

    return (
        <div style={pageStyle}>
            <Row>
              <Col span={6} offset={6}>
                <h1 style={{color: 'dimgrey'}}>Sign Up</h1>
                <div>{success ? <Success /> : undefined}</div>
                <form onSubmit={handleSubmit}>
                  <Input name="username" placeholder="new username" size="large"/>
                  <Input name="email" placeholder="email" style={formStyle} size="large"/>
                  <Input.Password name="password" placeholder="new password" style={formStyle} size="large" />
                  <Input.Password name="match" placeholder="re-enter password" style={formStyle} size="large" />
                  <Button type="primary" size="large" style={formStyle} block htmlType="submit" onClick={() => setSubmit(true)}>Go</Button>
                </form>
                <br></br>
                <div>{match ? <Match /> : undefined } </div>
                <div>{incomplete ? <Complete/> : undefined }</div>  
                <div>{length ? <Length /> : undefined}</div>
                <div>{email ? <Email /> : undefined}</div>
              </Col>
            </Row>
        </div>
    )
}

function formToJSON(form : Object) : any {
    return [].reduce.call(form, (data : any , element : any) => {
    if (element.name.length > 0)
        data[element.name] = element.value;
    return data;
  }, {});
}

// Component Style

const pageStyle = {
    marginTop: '2rem'
}

const formStyle = {
  marginTop: 10
}