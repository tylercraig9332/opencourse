import { Alert } from 'antd';
import React from 'react';

export default function EmailExp() {
    return (
        <Alert message="Email is not valid" type="error" style={{marginTop: 10}} showIcon/>
    )
}