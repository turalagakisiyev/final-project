import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedItems, removeSelectedItems } from '../../redux/actions/itemAction'
import "./ItemDetails.css"

const ItemDetails = () => {

  const itemId = useParams()
  const product = useSelector((state) => state.item)
  const { description, image, title, price } = product
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
    <div style={{
      display: "flex",
      justifyContent: "center",
      padding: "2%"
    }}><div className='ItemDetails'>

        <div className='ItemDetails-image'>
          <img src={image} />
        </div>



        <div className='ItemDetails-right'>


          <Link to='/'>
            <button className='ItemDetails-right-back' onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}><i className="fa-solid fa-arrow-left"></i></button>
          </Link>

          <div style={{ fontSize: "large", fontWeight: "bold" }}>{title}</div>

          <div>{description}</div>
          <div className='ItemDetails-right-buy'><div className='ItemDetails-right-price'><i className="fa-solid fa-manat-sign">     {price}</i></div>

            <div>
              <Link to="/form-page"><button className='btn'></button></Link>
            </div></div>


        </div>
      </div></div>


  )
}
export default ItemDetails