// eslint-disable-next-line no-unused-vars
import React from 'react'

const Products = () => {
  return (
    <>

    <h2>List Products</h2>
    <table className='table-product'>
      <thead className='bg-primary table-dark'>
        <tr>
          <th scope='col'>Nombre</th>
          <th scope='col'>Precio</th>
          <th scope='col'>Acciones</th>
        </tr>
      </thead>
    </table>
    </>
  )
}

export default Products