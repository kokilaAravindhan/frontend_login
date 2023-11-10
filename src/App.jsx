import { useState } from 'react'

import './App.css'
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProtectedRoute from './ProtectectedRoute';
import Verify from './Pages/Verify';

import GoldCalculationTextBox from './components/GoldCalculation/GoldCalculationTextBox';
import { BrowserRouter,Route,Routes,Router,Link,Navigate} from 'react-router-dom';

function App() {
  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<ProtectedRoute element={ <GoldCalculationTextBox />} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
