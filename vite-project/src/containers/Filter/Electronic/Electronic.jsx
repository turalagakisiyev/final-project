import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemFilter from '../../ItemFilter/ItemFilter'
import './Electronic.css'

const Electronics = () => {
    const products = useSelector((state) => state.allItems.items)
    const renderItemList = products.map((products) => {
        const { id, title, price, category, image } = products
        if (category === `electronics`) {
            return (
                <div key={id}>
                    <div className='Electronics-product' >

                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Electronics-product-image' >
                            <img src={image} alt="itemImage" /><div className='Electronics-product-price'><i className="fa-solid fa-manat-sign">   {price}</i>  </div>
                        </div></Link>
                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Electronics-product-info'>
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
            <div className='Electronics'>{renderItemList}</div>
        </>
    )
}

export default Electronics