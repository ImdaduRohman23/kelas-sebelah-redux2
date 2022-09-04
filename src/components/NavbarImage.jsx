import React from 'react'
import { useSelector } from 'react-redux'

const NavbarImage = () => {
    const {navbarReducer} = useSelector(hehe => hehe);

    return (
        <div>
            {navbarReducer.data.logo}
        </div>
    )
}

export default NavbarImage
