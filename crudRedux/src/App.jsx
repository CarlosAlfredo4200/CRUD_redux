

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import EditProduct from './componets/EditProduct'
import Header from './componets/Header'
import NewProduct from './componets/NewProduct'
import Products from './componets/Products'


function App() {


  return (


    <BrowserRouter>
      <Header />
      <div className='container margin-routes'>

        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/newproduct' element={<NewProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />

        </Routes>
      </div>

    </BrowserRouter>

  )
}

export default App
