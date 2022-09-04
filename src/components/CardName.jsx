import React from 'react'
import { useSelector } from 'react-redux'

const CardName = () => {
    const {cardReducer} = useSelector(wk => wk)
    return (
        <div>
            {cardReducer.data.nama}
        </div>
    )
}

export default CardName
