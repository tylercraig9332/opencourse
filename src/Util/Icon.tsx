import { Button } from 'antd';
import React from 'react';
import './Icon.css';

export default function Icon(props : any) {
    
    let s = 'user'
    
    if (props.type === 'edit') {
      // The edit logo is centered weird which drives me fucking crazy lmao
      s = 'edit';
    }
    return (
      <span>
        <Button className={s} id={'1'} onClick={props.action} type="default" shape="circle" ><i  className={'`fas fa-${props.type}`'}></i></Button>
      </span>
    )
  
}

