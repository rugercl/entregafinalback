import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarLogueado from '../Components/NavbarLogueado'
import {Footer} from './FooterPages'

function LoginPages() {

    const [products, setProducts] = useState([])
    const idCart = localStorage.getItem('idCart')

    const GetProducts = async () => {
        const res = await axios.get('http://localhost:8080/api/productos/')
        console.log('res', res)
        setProducts(res.data)
    }

    const handleSubmitCarrito = async (e) => {
        console.log('idFrontCard', e.target.id)
        const idProd = e.target.id
        const res = await axios.post(`http://localhost:8080/api/carritos/${idCart}/productos/${idProd}`)
    }

    useEffect(() => {
        GetProducts()   
    }, [])

    const productos = products.map((p, index) =>
        <div key={index} className="card" style={{ width: '100%' }}>
            <img src={p.foto} className="card-img-top" alt="..." style={{ height: '18rem', border: '1px solid grey' }} />
            <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text">{`Marca: ${p.descripcion}`}</p>
                <p className="card-text">{`Precio: ${p.precio}`}</p>
                <div className='d-flex justify-content-around'>
                    <a href={`/producto/${p.id}`} className="btn btn-primary">Ver Mas</a>
                    <a href="#" className="btn btn-warning" id={p.id} onClick={handleSubmitCarrito}>Agregar Al Carrito</a>
                </div>
            </div>
        </div>

    )

    return (
        <>
            <NavbarLogueado />

            <div className="container">
                <div className="card-group">
                    {productos}
                </div>
                
            </div>
            
        </>
    )
}

export default LoginPages;