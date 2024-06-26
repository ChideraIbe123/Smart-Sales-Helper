import { useState } from 'react'
import viteLogo from '/vite.svg'

import Hero from "./components/Hero"
import GlobeMap from './components/GlobeMap'
import TikTokLogin from './components/LoginButton'


import './App.css'
const App = () => {
  
  return (
    <div>
     <div>
      <h1> Welcome to the app</h1>
      <TikTokLogin />
     </div>
     
     
    </div>
    
  );

};

export default App;
