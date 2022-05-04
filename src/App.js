import React from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="container">
      <Navbar 
        darkMode={ darkMode }
        toggleDarkMode={ toggleDarkMode }
      />
      <Main 
        darkMode={ darkMode }
      />
    </div>
  )
}

export default App;
