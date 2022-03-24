import React from 'react'
import NavbarHome from '../Components/NavbarHome'
import '../css/styles.css'
function HomePages() {
    return (
        <div className='navbar-brand'>
            <NavbarHome />
            <div>
                <img className='imgBodyHome' src="https://maneimport.b-cdn.net/wp-content/uploads/2022/01/prsse33-600x600.jpeg" alt="" />
            </div>
            

        </div>
    )
}

export default HomePages;