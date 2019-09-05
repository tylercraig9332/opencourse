'use strict'
import { Alert } from 'antd';
import React from 'react';

export default function LengthPassword() {
    return (
        <Alert 
            message="Password is not at least 7 characters" 
            type="warning"  
            style={{marginTop: 10}}
            showIcon
        />
    )
}