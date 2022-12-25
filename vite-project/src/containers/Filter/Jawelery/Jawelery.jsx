import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemFilter from '../../ItemFilter/ItemFilter'
import './Jawelery.css'

const Jawelery = () => {
    const products = useSelector((state) => state.allItems.items)
    const renderItemList = products.map((products) => {
        const { id, title, price, category, image } = products
        if (category === `jewelery`) {
            return (
                <div key={id}>
                    <div className='Jewelery-product' >

                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Jewelery-product-image' >
                            <img src={image} alt="itemImage" /><div className='Jewelery-product-price'><i className="fa-solid fa-manat-sign">   {price}</i>  </div>
                        </div></Link>
                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Jewelery-product-info'>
                            <div>{title}</div>

                        </div></Link>


                    </div>
                </div>
            )
        }


    })
    return (
        <>
        <ItemFilter/>
        <div className='Jewelery'>{renderItemList}</div>
        </>
    )
}

export default Jawelery