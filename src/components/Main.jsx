import Menubar from './Menubar'
import Navbar from './Navbar'
import Login from './Login'
import { useEffect, useState } from 'react'
import Home from './Home'
import Footer from './Footer'


const Main = ({products}) => {

  const [prod,setProd] = useState([])
  
  

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
         .then(json=>setProd(json))
  }

  useEffect(()=>{
    getProducts()
  },[])
    
  return (
    <div>
      
      <Navbar/>
      <Login/>
      <Menubar/>
      <Home products={[...prod,...products]}/>
      <Footer/>
    </div>
  )
}

export default Main

