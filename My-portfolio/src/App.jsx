import React from 'react'
import './App.css'
import ContextContainer from './context'
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <ContextContainer>
      <div>
        <Dashboard />
      </div>
    </ContextContainer>
  )
}

export default App
