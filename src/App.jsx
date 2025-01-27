import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'))

root.render(
 <div>
  <img src={reactLogo} alt="reactlogo" />
  <h1>Fun facts about React!</h1>
  <ul>
    <li>Was first release in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 200K stars on GitHub</li>
    <li>Is maintained by Meta</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
 </div>
)


export default App
