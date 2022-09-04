import React from 'react'
import { useSelector } from 'react-redux'

const CardImage = () => {
    const dariRedux = useSelector((haha) => haha)
    return (
        <div>
            <img src={dariRedux.cardReducer.data.avatar} alt="" />
        </div>
    )
}

export default CardImage
