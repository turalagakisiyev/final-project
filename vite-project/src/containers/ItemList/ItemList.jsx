import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ItemComponents from '../ItemComponents/ItemComponents'
import { setItems } from '../../redux/actions/itemAction'

const ItemList = () => {
    const items = useSelector((state) => state.allItems.items)
    const dispatch = useDispatch()


    const getItems = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((error) => {
                console.log("Error", error)
            })
        dispatch(setItems(response.data))

    }
    useEffect(() => {
        getItems()
    }, [])

    return (
        <div>
            
            <ItemComponents />
            
        </div>
    )
}

export default ItemList