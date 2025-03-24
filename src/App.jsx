import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './routes/Home'
import Error from './routes/Error'
import Login from './routes/Login'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='*' element={<Error/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>    
      </Routes>
    <Footer/>  
    </BrowserRouter>
  )
}

export default App
