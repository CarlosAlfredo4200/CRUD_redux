// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
    <nav className='container'>
        <div className='mi-navbar' >
            <Link to={'/'}>
            <h1 className='h1-header'>CRUD -React, Redux, REST API & Axios</h1>
            </Link>
        <Link className='mi-boton' to="/newproduct">Agregar Producto &#43;</Link>
        </div>
    </nav>
  )
}

export default Header