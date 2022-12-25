import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemFilter from '../../ItemFilter/ItemFilter'
import './Man.css'

const Man = () => {
    const products = useSelector((state) => state.allItems.items)
    const renderItemList = products.map((products) => {
        const { id, title, price, category, image } = products
        if (category === `men's clothing`) {
            return (
                <div key={id}>
                    <div className='Man-product' >

                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Man-product-image' >
                            <img src={image} alt="itemImage" /><div className='Man-product-price'><i className="fa-solid fa-manat-sign">  {price}</i>  </div>
                        </div></Link>
                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Man-product-info'>
                            <div>{title}</div>

                        </div></Link>


                    </div>
                </div>
            )
        }


    })
    return (
        <>
            <ItemFilter />
            <div className='Man'>{renderItemList}</div>
        </>
    )
}

export default Man