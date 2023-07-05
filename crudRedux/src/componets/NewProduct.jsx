// eslint-disable-next-line no-unused-vars
import React from 'react'

const NewProduct = () => {
    return (
        <div className='new-product-form' >
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className=''>Agregar nuevo producto</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Nombre Producto</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Nombre Producto'
                                    name='nombre'
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Precio Producto</label>
                                <input
                                    type="number"
                                    className='form-control'
                                    placeholder='Precio Producto'
                                    name='precio'
                                />
                            </div>
                        </form>

                        <button 
                        type='submit'
                        className='btn-form'
                        >Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct