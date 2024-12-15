import './App.css'
import Details from './components/Details'
import Main from './components/Main'
import { Routes,Route } from 'react-router-dom'
import SellForm from './components/SellForm'
import { useState } from 'react'

const App = () => {

  const [products,setProducts] = useState([])

  const addProduct = (newProduct) => {
    setProducts((prevProducts)=> [...prevProducts,newProduct])
  }
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main products={products}/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/sell' element={<SellForm addProduct={addProduct}/>}/>
      </Routes>
    </div>
  )
}

export default App
