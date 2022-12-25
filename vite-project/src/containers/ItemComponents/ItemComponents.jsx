import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemFilter from '../ItemFilter/ItemFilter'
import './ItemComponents.css'

const ItemComponents = () => {
    const products = useSelector((state) => state.allItems.items)
    const renderItemList = products.map((products) => {
        const { id, title, price, image } = products
        return (
            <div key={id}>
                <div className='ItemComponents-product' >

                    <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
                        <div className='ItemComponents-product-image'    >
                            <img src={image} alt="itemImage" /><div className='ItemComponents-product-price'><i className="fa-solid fa-manat-sign">  {price}</i>  </div>
                        </div>
                        <div className='ItemComponents-product-info'>
                            <div>{title}</div>
                        </div></Link>


                </div>
            </div>
        )

    })
    return (
        <>
            <ItemFilter />
            <div className='ItemComponents'>{renderItemList}</div>

        </>
    )

}

export default ItemComponents