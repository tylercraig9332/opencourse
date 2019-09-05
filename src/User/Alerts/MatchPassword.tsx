import { Alert } from 'antd';
import React from 'react';

export default function MatchPassword() {
    return (
        <Alert message="Passwords do not match" type="error" style={{marginTop: 10}} showIcon/>
    )
}