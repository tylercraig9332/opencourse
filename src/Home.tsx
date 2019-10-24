import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import './Styles/Home.css';

const App: React.FC = () => {

  const [logged, setLogged] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    fetch('auth/logged').then(res => res.json())
    .then((id) => {
      console.log(id)
      setLogged(typeof(id) == 'number')
      setLoaded(true)
    })
  }, [])

  const accountPanel = (loaded) ? (
    <div>
      <br></br>
      <Button size="large" type="primary" style={{marginBottom: 5}} onClick={() => window.location.href = '/login'} block>Login</Button>
      <Button size="large" type="default" block onClick={() => window.location.href = '/signup'}>Sign Up</Button>
    </div>
  ) : undefined

  return (
    <div className="App" style={{width: 400, padding: 20}}>
      <h1 style={{color: 'dimgrey', marginBottom: 3}}>Opencourse</h1>
      <hr></hr>
      <p>where learning is open and knowledge is free</p>
      <img alt=" " className="books" src={"/static/books-opencourse-launch.jpg"}/>
      {logged ? undefined : accountPanel}
    </div>
  );
}

export default App;
