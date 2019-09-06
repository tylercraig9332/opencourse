import { Icon, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
const { SubMenu } = Menu
export default function Nav() {

    const [logged, setLogged] = useState<Boolean>(false)
    const [id, setId] = useState<number>(-1)

    useEffect(() => {
        fetch('/auth/logged').then((res) => res.json())
        .then((r) => {
            console.log(r)
            setLogged(true)
            setId(r)
        })
        .catch((err) => console.log("user is not logged in or an error has occured", err))
        //setLogged(log)
    }, [])
    
    function redirect(path: string) : void {
        window.location.href = path
    }

    const account = (
        <SubMenu title={
            <span className="submenu-title-wrapper" onClick={() => redirect(`/profile`)}><i className="fas fa-user"></i> Account</span>
        } style={right}>
            <Menu.Item onClick={() => redirect('/logout')}>
                <Icon type="user" style={{ fontSize: '16px', bottom: '3px', position: 'relative'}}/> Profile 
            </Menu.Item>
            <Menu.Item onClick={() => redirect('/logout')}>
                <Icon type="setting" style={{ fontSize: '16px', bottom: '3px', position: 'relative'}}/> Settings 
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item onClick={() => redirect('/logout')}>
                Logout <Icon type="logout" style={{ fontSize: '16px', bottom: '3px', position: 'relative'}}/>
            </Menu.Item>
        </SubMenu>
    )

    return (
        <div>
        <Menu mode="horizontal">
            <Menu.Item onClick={() => redirect('/')}>
                <img style={{marginTop: '25%'}}src="/static/openhead.png" width="30" height="30" className="d-inline-block align-top" alt=" " />
            </Menu.Item>
            <Menu.Item onClick={() => redirect('/')}>
                <strong>Opencourse</strong>
            </Menu.Item>
            <SubMenu title={
                <span className="submenu-title-wrapper" onClick={() => redirect('/courses/all')}>Courses</span>
            } >
                <Menu.ItemGroup title="Browse">
                    <Menu.Item key="all" onClick={() => redirect('/courses/all')}><i className="fas fa-archive"></i> All</Menu.Item>
                    <Menu.Item key="popular"><i className="far fa-gem"></i> Popular</Menu.Item>
                    <Menu.Item key="new"><i className="far fa-lightbulb"></i> New</Menu.Item>
                    <Menu.Item key="tags"><i className="fas fa-tags"></i> By Tags</Menu.Item>
                </Menu.ItemGroup>
                <Menu.Divider/>
                    <Menu.Item key="create">Create New Course <i className="fas fa-plus-circle"></i></Menu.Item>
            </SubMenu>
            {logged ? 
            (account) :
            (<Menu.Item style={right} onClick={() => redirect('/login')}>
                Log In
            </Menu.Item>)
            }
        </Menu>
        </div>
    )
}

const right : any = {
    float: 'right',
    marginRight: 30
}