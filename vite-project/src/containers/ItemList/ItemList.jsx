import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import ItemComponents from '../ItemComponents/ItemComponents'
import { setItems } from '../../redux/actions/itemAction'
import Slider from '../Slider'
import "./ItemList.css"

const ItemList = () => {
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
        <div className='ItemList'>
            <Slider />
            <div className='ItemList-ItemComonents'><ItemComponents /></div>
            

        </div>
    )
}

export default ItemList