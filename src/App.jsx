import './App.css';
import { useState } from 'react';
import User from './components/User';
import Display from './components/Display';

function App() {
  const [ user, setUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passCon: ""
  })
  const [ newUser, setNewUser ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })


  return (
    <div className="App">
      <User user={ user } setUser={ setUser } setNewUser={ setNewUser } />
      <Display newUser={ newUser }/>
    </div>
  );
}

export default App;