import React, { useEffect, useState } from 'react';

import { needLogin } from '../Util/auth'

import { Icon, Menu, message } from 'antd';
const { SubMenu, Item, Divider, ItemGroup } = Menu
export default function Nav() {

    const [logged, setLogged] = useState<Boolean>(false)
    const [id, setId] = useState<number>(-1)

    useEffect(() => {
        fetch('/auth/logged').then((res) => res.json())
        .then((r) => {
            if (r == null) {
                evauluateLogin()
            }
            let l = true
            if (r == null) {
                l = false
            }
            setLogged(l)
            setId(r)
        })
        .catch((err) => {
            console.log("user is not logged in or an error has occured", err)
            evauluateLogin()
        })
    }, [])

    function evauluateLogin() {
        const locs = window.location.href.split('/')
        if (needLogin(locs)) {
            message.warning("You need to be logged in to use this feature.")
            window.setTimeout(() => window.location.href = "/login", 500)

        }
    }
    
    function redirect(path: string) : void {
        window.location.href = path
    }

    const account = (
        <SubMenu title={
            <span className="submenu-title-wrapper" onClick={() => redirect(`/profile`)}><i className="fas fa-user"></i> Account</span>
        } style={right}>
            <Item onClick={() => redirect('/profile/' + id)}>
                <Icon type="user" style={{ fontSize: '16px', bottom: '3px', position: 'relative'}}/> Profile 
            </Item>
            <Item onClick={() => redirect('/settings')}>
                <Icon type="setting" style={{ fontSize: '16px', bottom: '3px', position: 'relative'}}/> Settings 
            </Item>
            <Divider/>
            <Item onClick={() => redirect('/logout')}>
                Logout <Icon type="logout" style={{ fontSize: '16px', bottom: '3px', position: 'relative'}}/>
            </Item>
        </SubMenu>
    )

    return (
        <div>
        <Menu mode="horizontal">
            <Item onClick={() => redirect('/about')}>
                <img style={{marginTop: '25%'}} src="/static/openhead.png" width="30" height="30" className="d-inline-block align-top" alt=" " />
            </Item>
            <Item onClick={() => redirect('/')}>
                <strong>Opencourse</strong>
            </Item>
            <SubMenu title={
                <span className="submenu-title-wrapper" onClick={() => redirect('/courses/all')}>Courses</span>
            } >
                <ItemGroup title="Browse">
                    <Item key="all" onClick={() => redirect('/courses/all')}><i className="fas fa-archive"></i> All</Item>
                    <Item key="popular" onClick={() => redirect('/courses/popular')}><i className="far fa-gem"></i> Popular</Item>
                    <Item key="new" onClick={() => redirect('/courses/new')}><i className="far fa-lightbulb"></i> New</Item>
                    <Item key="tags" onClick={() => redirect('/courses/tags/')}><i className="fas fa-tags"></i> By Tags</Item>
                </ItemGroup>
                <Divider/>
                    <Item key="create" onClick={() => redirect('/courses/build/')}>
                        Create Course <i className="fas fa-plus-circle"></i>
                    </Item>
            </SubMenu>
            <SubMenu title={
                <span className="submenu-title-wrapper" onClick={() => redirect('/lessons/all')}>Lessons</span>
            } >
                <ItemGroup title="Browse">
                    <Item key="all" onClick={() => redirect('/lessons/all')}><i className="fas fa-archive"></i> All</Item>
                    <Item key="popular" onClick={() => redirect('/lessons/popular')}><i className="far fa-gem"></i> Popular</Item>
                    <Item key="new" onClick={() => redirect('/lessons/new')}><i className="far fa-lightbulb"></i> New</Item>
                    {logged ? 
                    <Item key="user" onClick={() => redirect('/lessons/yours')}><i className="far fa-user-circle"></i> Made by You</Item> 
                    : null}
                </ItemGroup>
                <Divider/>
                    <Item key="create" onClick={() => redirect('/lessons/build/')}>
                        Create Lesson <i className="fas fa-plus-circle"></i>
                    </Item>
            </SubMenu>
            
            {logged ? 
            (account) :
            (<Item style={right} onClick={() => redirect('/login')}>
                Log In
            </Item>
            )
            }
            <Item style={{float: 'right'}} onClick={() => redirect('/contrib')}>
                  Contribute
            </Item>
        </Menu>
        </div>
    )
}

const right : any = {
    float: 'right',
    marginRight: 30
}