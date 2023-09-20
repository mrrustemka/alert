import React from 'react';
import { Alert } from './Alert';
import './App.css';

function App() {
  return (
    <div className="App">
      <Alert heading="Success" closable>
        Everything is really Good!
      </Alert>
    </div>
  );
}

export default App;
