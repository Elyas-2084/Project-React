import React from 'react'
import { Link } from 'react-router-dom'
import './card-product.css'

export default function CardProduct({ image, name, price, id, seller, oldPrice, categoryName, handleClick }) {


    return (
        <div className="card product-card" onClick={handleClick}>
            <img src={image} className="product-card-img" alt={name} />
            <div className="card-body product-card-body">
                <span className="product-category d-block">{categoryName}</span>
                <span className="card-title product-title d-block">{name}</span>

                <div className="product-rating">
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill text-muted'></i>
                    <span className="review-count">(4)</span>
                </div>

                <div className="product-seller">
                    By <Link to="/seller">{seller}</Link>
                </div>

                <div className="product-footer">
                    <div className="product-price">
                        <span className="price-current">{`$${price}`}</span>
                        <span className="price-old">{oldPrice ? `$${oldPrice}` : ''}</span>
                    </div>


                    <button className="btn-add">

                        <Link to={`/detail-product/${id}/${name}`}>
                            <i className="bi bi-cart"></i> Add
                        </Link>
                    </button>
                </div>


            </div>
        </div>
    )
}