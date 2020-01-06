import React from 'react';

import Title from './components/Title/Title'
import Todo from './containers/Todo/Todo'


import './App.css';

function App() {
  return (
    <div className="App">
      <Title title="ToDo App"/>
      <Todo />
    </div>
  );
}

export default App;
