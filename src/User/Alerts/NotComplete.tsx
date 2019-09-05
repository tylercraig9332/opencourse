import { Alert } from 'antd';
import React from 'react';

export default function NotComplete() {
    return (
        <Alert message="Please fill out all fields" type="warning" style={{marginTop: 10}} showIcon/>
    )
}