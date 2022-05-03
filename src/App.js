import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// ! npm install react-router-dom@5.3.0
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  // const [buttonText, setButtonText] = useState('Enable DarkMode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      // setButtonText('Enable LightMode');
      document.body.style.backgroundColor = 'hsl(240, 50%, 25%)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      // setButtonText('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("light mode has been enabled", "Success");
    }
  }

  // const toggleMode1 = () => {
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'red';
  //     document.body.style.color = 'white';
  //     showAlert("Red mode has been enabled", "Success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("light mode has been enabled", "Success");
  //   }
  // }

  return (
    // ctrl + f 
    <>
    {/* search: react router dom  */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    {/* <Navbar title="TextUtils" mode={mode} buttonText={buttonText} toggleMode={toggleMode}></Navbar> */}
    {/* <Navbar></Navbar> */}
    <Alert alert={alert}/>

    <div className="container my-3">
    <Switch>
        {/* /users --> Component-1 
            /users/home --> Component-2 */}
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
          </Route>
    </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;

// npm run build
 
