// import { Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Header from './Components/Header';
import Home from './Components/Home';
import Skills from './Components/Skills';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// import { faFontAwesome } from '@fortawesome/free-brand-svg-icons'

library.add(fas)

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
