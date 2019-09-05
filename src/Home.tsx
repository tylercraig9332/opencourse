import { Button } from 'antd';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App" style={pageStyle}>
      <h1 style={{color: 'dimgrey'}}>Welcome to Opencourse</h1>
      <Button size="large" type="default" style={{marginBottom: 5}} onClick={() => window.location.href = '/login'} block>Log in</Button>
      <Button size="large" type="primary" block onClick={() => window.location.href = '/signup'}>Sign Up</Button>
    </div>
  );
}

const pageStyle : any = {
  textAlign: "center",
  width: 400,
  marginTop: '4rem',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default App;
