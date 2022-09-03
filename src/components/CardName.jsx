import React from 'react'
import { useSelector } from 'react-redux'

const CardName = () => {
    const {data} = useSelector(wk => wk)
    return (
        <div>
            {data.nama}
        </div>
    )
}

export default CardName
