import './App.css';

import {useState} from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [demoType, setDemoType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const emailHandler = (event) => {
    setEmail(event.target.value)
  }

  const radioButtonHandler = (event) => {
    setDemoType(event.target.value)
  }

  const forwardInputs = async () => {
    const dataToSend = {name, email, demoType}
    const response = await fetch('https://someapi.com/request-demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });
    if (response.status === 200) {
      setSubmitted(true)
    }
  }

  const getDemoForm = () => {
    return (
      <div className="App-header">
          <input type="text" placeholder="Your name" onChange={nameHandler} />
        <input type="text" placeholder="Your e-mail" onChange={emailHandler} />
        <input type="radio" name="request" value="live" onChange={radioButtonHandler} />
        <label htmlFor="live">Live Demo</label>
        <input type="radio" name="request" value="recorded" onChange={radioButtonHandler} />
        <label htmlFor="recorded">Recorded Demo</label>
        <input type="radio" name="request" value="1-2-1" onChange={radioButtonHandler} />
        <label htmlFor="1-2-1">1-2-1 with a representative</label>
        <br />
        <input type="button" value="Submit" onClick={forwardInputs} />
      </div>
    )
  }

  const getThankYouPage = () => {
    return (
      <div className="App-header">
        Thank you! We will send you a confirmation e-mail.
      </div>
    )
  }

  return (
    <div className="App">
      { !submitted ? getDemoForm() : getThankYouPage() }
    </div>
  );
}

export default App;
