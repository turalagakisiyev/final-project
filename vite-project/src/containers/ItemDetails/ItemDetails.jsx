import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedItems, removeSelectedItems } from '../../redux/actions/itemAction'

const ItemDetails = () => {

  const itemId = useParams()
  const product = useSelector((state) => state.item)
  const { description, image } = product
  const dispatch = useDispatch()
  const getItemsDetails = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((error) => {
        console.log("Error", error)
      })
    dispatch(selectedItems(response.data))

  }
  useEffect(() => {
    if (itemId && itemId !== "") {
      getItemsDetails();
      return () => {
        dispatch(removeSelectedItems())
      }
    }
  }, [itemId])

  return (
    <div>
      <div>
        salam
      </div>
      <div>
        <img src={image} />
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>

  )
}
export default ItemDetails