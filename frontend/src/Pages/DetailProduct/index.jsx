import React, { useEffect, useState } from 'react'
import './detail-product.css'
import { Link, useParams } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../../store/Slices/Cart'
import fetchData from '../../Utils/FetchData'
import { toast } from 'react-toastify'

export default function DetailProduct() {
    // const quantity = useSelector(state => state.cartRedux.listOfProduct)?.filter(e => e.id === +id)[0]?.quantityCart
    const [product, setProducts] = useState()
    const { id } = useParams()
    const [firstNumber, setFirstNumber] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            const res = await fetchData(`products?populate=*&filters[id][$eq]=${id}`)
            setProducts(res.data[0])
        })()

    }, [id])

    if (!product) {
        return (
            <div className='  detail-page d-flex justify-content-center'><ThreeDots /></div>
        )
    }

    const hasDiscount = product.oldPrice > 0

    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, count: firstNumber }));
        toast.success(`${product.name} added to cart`)
    }

    return (
        <div className='detail-page'>
            <div className='container'>
                <div className='detail-breadcrumb'>
                    <Link to={'/'}>Home</Link> / <Link to={'/products/all-product/all-category'}>Products</Link> / <span>{product.name}</span>
                </div>

                <div className='detail-card'>
                    <div className='row g-0'>

                        <div className='col-12 col-md-5'>
                            <div className='detail-img-wrap'>
                                <img src={process.env.REACT_APP_BASE_URL + product.image.url} alt={product.name} title={product.name} className='detail-img' />
                            </div>
                        </div>

                        <div className='col-12 col-md-7'>
                            <div className='detail-body'>
                                <span className='detail-category'>All</span>

                                <h1 className='detail-title'>{product.name}</h1>

                                <div className='detail-rating'>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill'></i>
                                    <i className='bi bi-star-fill text-muted'></i>
                                    <span className='review-count'>(4)</span>
                                </div>

                                <div className='detail-seller'>
                                    By <Link to='/seller'>{product.seller}</Link>
                                </div>

                                <p className='detail-description'>{product.description}</p>


                                <div className='detail-price'>
                                    <span className='price-current'>${product.price}</span>
                                    {hasDiscount && <span className='price-old'>${product.oldPrice}</span>}
                                </div>

                                <div className='detail-actions'>
                                    <div className='qty-control'>
                                        {/* <button onClick={() => dispatch(removeProduct(product.id))} disabled={quantity <= 1 ? true : false}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => dispatch(addProduct(product))}>+</button> */}


                                        <button onClick={() => setFirstNumber(firstNumber - 1)} disabled={firstNumber <= 1 ? true : false}>-</button>
                                        <span>{firstNumber}</span>
                                        <button onClick={() => setFirstNumber(firstNumber + 1)}>+</button>



                                    </div>

                                    <button className='btn-add-cart' onClick={handleAddToCart}>
                                        <i className='bi bi-cart'></i>
                                        Add to Cart
                                    </button>
                                </div>

                                <ul className='detail-perks'>
                                    <li><i className='bi bi-truck'></i> Free delivery on orders over $50</li>
                                    <li><i className='bi bi-arrow-counterclockwise'></i> Easy 7-day returns</li>
                                    <li><i className='bi bi-shield-check'></i> Quality guaranteed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}