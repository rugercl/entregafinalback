import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import NavbarLogueado from '../Components/NavbarLogueado'

function ProductPages() {
    const [product, setProduct] = useState([])
    const params = useParams()
    const idCart = localStorage.getItem('idCart')

    const GetProduct = async () => {
        const res = await axios.get(`http://localhost:8080/api/productos/${params.id}`)
        setProduct(res.data)
        console.log('resProd', res.data);
    }

    const handleSubmitCarrito = async (e) => {
        const idProd = e.target.id
        console.log('idProd', idProd);
        const res = await axios.post(`http://localhost:8080/api/carritos/${idCart}/productos/${idProd}`)
        console.log('resCarrito', res);
    }

    useEffect(() => {
        GetProduct()
    }, [])

    const producto =
        <div key={product.id} className="card" style={{ width: '100%' }}>
            <img src={product.foto} className="card-img-top" alt="..." style={{ height: '18rem', border: '1px solid grey' }} />
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{`Descripcion: ${product.descripcion}`}</p>
                <p className="card-text">{`Precio: ${product.precio}`}</p>
                <div className='d-flex justify-content-around'>
                   
                    <a href="#" className="btn btn-warning" id={params.id} onClick={handleSubmitCarrito}>Agregar Al Carrito</a>
                </div>
            </div>
        </div>

    return (
        <>
            <NavbarLogueado />
            <div className="container">
                <div className="card-group">
                    <div>
                        {producto}
                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductPages;