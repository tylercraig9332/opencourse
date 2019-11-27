import React, { useEffect, useState } from "react";
import { getUsersData } from "../api/profile";
import { Divider, Alert } from 'antd';
import ListView from '../Course/ListView'

export default function Profile() {
  const [data, setData] = useState(Object);

  useEffect(() => {
    let userID = window.location.href.split("/")[4];
    console.log(userID);
    getUsersData(userID).then(d => {
      setData(d);
    });
  }, []);

  if (Object.entries(data).length === 0) {
    return (<Alert
      style={{width: '60%', marginTop: '2%', marginLeft: 'auto', marginRight: 'auto'}}
      message="Invalid User"
      description="This user either does not exist or no longer exists."
      type="warning"
      showIcon
    />)
  } else {
  return (
    <div>
      <h1 style={{textAlign: 'center', margin: '20px'}}>{data.username}'s Profile</h1>
      <Divider />
      <ListView />
    </div>
  )}
}
