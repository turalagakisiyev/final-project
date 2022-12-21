import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedItems, removeSelectedItems } from '../../redux/actions/itemAction'

const ItemDetails = () => {

  const itemId = useParams()
  const product = useSelector((state) => state.item)
  const { description, image } = product
  const dispatch = useDispatch()
  const getItemsDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${itemId.productId}`)
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
        <img src={image} />
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <button><Link to="/form-page">Buy</Link></button>
      </div>
    </div>

  )
}
export default ItemDetails