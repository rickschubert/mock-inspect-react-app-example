import './App.css';

import {useState} from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [demoType, setDemoType] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  const radioButtonHandler = (event) => {
    setDemoType(event.target.value)
  }

  const forwardInputs = () => {
    console.warn({name, email, demoType})
  }

  return (
    <div className="App App-header">
      <input type="text" placeholder="Your name" onChange={nameHandler} />
      <input type="text" placeholder="Your e-mail" onChange={emailHandler} />
      <input type="radio" name="request" value="live" onChange={radioButtonHandler} />
      <label for="live">Live Demo</label>
      <input type="radio" name="request" value="recorded" onChange={radioButtonHandler} />
      <label for="recorded">Recorded Demo</label>
      <input type="radio" name="request" value="1-2-1" onChange={radioButtonHandler} />
      <label for="1-2-1">1-2-1 with a representative</label>
      <br />
      <input type="button" value="Submit" onClick={forwardInputs} />
    </div>
  );
}

export default App;
