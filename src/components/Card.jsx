import React from 'react'
import { useSelector } from 'react-redux'
import CardImage from './CardImage'
import CardName from './CardName'

const Card = () => {
    const {authReducer} = useSelector(a => a)
    console.log(authReducer)
    return (
        <div>
            {
                !! authReducer.isLogin ? (
                    <div>
                        <CardName />
                        <CardImage />
                    </div>
                ) : (
                    <h3>Anda belum login</h3>
                )
            }
            
        </div>
    )
}

export default Card
