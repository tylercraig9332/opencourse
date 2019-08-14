import React from 'react';

const App: React.FC = () => {
  return (
    <div className="App">
      <p>Hello World!</p>
      <button className="btn btn-primary" onClick={() => window.location.href="./test"}>
        Test
      </button>
    </div>
  );
}

export default App;
