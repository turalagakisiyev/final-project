import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ItemComponents = () => {
    const products = useSelector((state) => state.allItems.items)
    const renderItemList = products.map((products) => {
        const { id, title, price, category, image } = products
        return (
            <div key={id}>
                <Link to={`/product/${id}`}>
                    <div><img src={image} alt="itemImage" /></div>
                    <div>{title}</div>
                    <div>{price}₼</div>
                    <div>{category}</div>
                </Link>
            </div>
        )

    })
    return (
        <>
            {renderItemList}
        </>
    )

}

export default ItemComponents