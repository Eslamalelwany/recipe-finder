
import './App.css'
import Header from './components/header'
import SecSection from './components/SecSection'
import { Routes, Route } from 'react-router-dom'
import Recipes from './components/Recipes'
import About from './components/About'
function App() {

  return (
    <div className='lg:w-[95rem] xl:w-[95rem] w-[100vw] m-auto bg-[#DFE1DD]'>
    <Header/>
    <Routes>
      <Route path='/' element = {<SecSection/>}/>
      <Route path='/recipes' element = {<Recipes/>}/>
      <Route path='/about' element = {<About/>}/>
    </Routes>
    </div>
  )
}

export default App
