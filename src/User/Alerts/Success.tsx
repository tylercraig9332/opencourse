import { Alert } from 'antd';
import React from 'react';

export default function Success() {
    return (
        <Alert message="Success!" type="success" style={{marginTop: 10, marginBottom: 10}} showIcon/>
    )
}