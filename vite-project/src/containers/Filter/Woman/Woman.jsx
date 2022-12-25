import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemFilter from '../../ItemFilter/ItemFilter'
import './Woman.css'


const Woman = () => {
    const products = useSelector((state) => state.allItems.items)
    const renderItemList = products.map((products) => {
        const { id, title, price, category, image } = products
        if (category === `women's clothing`) {
            return (
                <div key={id}>
                    <div className='Woman-product' >

                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Woman-product-image' >
                            <img src={image} alt="itemImage" /><div className='Woman-product-price'><i className="fa-solid fa-manat-sign">   {price}</i>  </div>
                        </div></Link>
                        <Link style={{ textDecoration: "none" }} to={`/product/${id}`}><div className='Woman-product-info'>
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
            <div className='Woman'>{renderItemList}</div>
        </>
    )


}

export default Woman