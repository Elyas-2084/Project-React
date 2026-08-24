import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { addProduct, clearAll, clearProduct, removeProduct } from '../../store/Slices/Cart'

const FREE_DELIVERY_THRESHOLD = 50
const DELIVERY_FEE = 4.99

export default function Cart() {
  const list = useSelector(state => state.cartRedux.listOfProduct)
  const dispatch = useDispatch()

  let totalPriceFinal = 0


  const items = list?.map((e, index) => {
    totalPriceFinal += e?.price * e?.quantityCart

    return (
      <div div className='info-cart' key={index} >
        <div className='info-img'>
          <img src={process.env.REACT_APP_BASE_URL + e.image.url} alt={e.name} />
        </div>

        <div className='detail-cart'>
          <h6 className='info-title'>{e.name}</h6>
          <span className='info-price'>${e.price}</span>
        </div>

        <div className='add-remove-cart'>
          <button className='qty-btn' onClick={() => dispatch(removeProduct(e.id))}>-</button>
          <span className='qty-value'>{e.quantityCart}</span>
          <button className='qty-btn' onClick={() => dispatch(addProduct(e))}>+</button>
          <span className='total-price'>${(e.quantityCart * e.price).toFixed(2)}</span>
          <button className='delete-btn' onClick={() => dispatch(clearProduct(e.id))}><i className='bi bi-trash'></i></button>
        </div>
      </div >
    )
  })

  const remainingForFreeDelivery = Math.max(FREE_DELIVERY_THRESHOLD - totalPriceFinal, 0)
  const deliveryFee = remainingForFreeDelivery === 0 ? 0 : DELIVERY_FEE
  const total = totalPriceFinal + deliveryFee
  const progressPercent = Math.min((totalPriceFinal / FREE_DELIVERY_THRESHOLD) * 100, 100)

  return (
    <div className='cart-page'>
      <div className='container'>
        {list && list.length > 0 ?
          <>
            <div className='cart-page-header'>
              <h1>Your Cart</h1>
              <p>{list.length} item{list.length > 1 ? 's' : ''} in your cart</p>
            </div>

            <div className='row g-4 mt-3'>

              {/* Left: item list */}
              <div className='col-12 col-lg-7'>
                <div className='d-flex flex-column gap-3'>
                  {items}
                </div>
              </div>

              {/* Right: order summary */}
              <div className='col-12 col-lg-5'>
                <div className='order-summary'>
                  <h5 className='summary-title'>
                    <i className='bi bi-credit-card'></i>
                    Order Summary
                  </h5>

                  <div className='summary-row'>
                    <span>totalPriceFinal</span>
                    <span>${totalPriceFinal.toFixed(2)}</span>
                  </div>

                  <div className='summary-row'>
                    <span><i className='bi bi-truck'></i> Delivery</span>
                    <span>{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                  </div>

                  {remainingForFreeDelivery > 0 && (
                    <div className='free-delivery-box border border-success'>
                      <div className='free-delivery-text'>
                        <i className='bi bi-exclamation-circle'></i>
                        Add ${remainingForFreeDelivery.toFixed(2)} more for free delivery
                      </div>
                      <div className='progress-track'>
                        <div className='progress-fill' style={{ width: `${progressPercent}%` }}></div>
                      </div>
                    </div>
                  )}

                  <hr className='summary-divider ' />

                  <div className='summary-row summary-total'>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <Link to='' className='checkout-btn'>
                    Proceed to Checkout <i className='bi bi-arrow-right'></i>
                  </Link>

                  <div className='summary-footer'>
                    <span><i className='bi bi-shield-check'></i> Secure Checkout</span>
                    <span><i className='bi bi-credit-card'></i> Fast Payment</span>
                  </div>

                  <button className='clear-cart-btn' onClick={() => dispatch(clearAll())}>
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div className='cart-empty'>
              <i className='bi bi-cart-x'></i>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything yet.</p>
              <Link to='/products/all-product/all-category' className='checkout-btn d-inline-flex' style={{ maxWidth: 220 }}>
                Browse Products
              </Link>
            </div>
          </>
        }
      </div>
    </div>
  )
}