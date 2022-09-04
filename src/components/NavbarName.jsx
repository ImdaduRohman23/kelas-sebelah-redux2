import React from 'react'
import { useSelector } from 'react-redux';

const NavbarName = () => {
    const {navbarReducer} = useSelector(hehe => hehe);

    return (
        <div>
            {navbarReducer.data.nama_comp}
        </div>
    )
}

export default NavbarName
