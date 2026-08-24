import React from 'react'
import Slider from './Slider'
import './style.css'
import { Link } from 'react-router-dom'
import OffersCard from './OffersCard'
import ChooseCard from './ChooseCard'
import OurProducts from './OurProducts'
import NewsLetter from './NewsLetter'
import Subscribe from './Subscribe'
import OurCategories from './OurCategories'

export default function Home() {
    return (
        <div>
            <div className='hero'>
                <img src='./assets/hero-Banner.jpg' alt="hero banner" />
                <div className="overlay-first"></div>
                <div className='overlay-second' />
                <div className='hero-content'>

                    <div className='badge'>
                        <i className="bi bi-truck me-2 fs-6"></i>
                        <span> Free delivery on orders over $50</span>
                    </div>

                    <h1>
                        Fresh Groceries
                        <br />
                        <span>Delivered</span> to
                        <br />
                        Your Door
                    </h1>

                    <p>Shop fruits, vegetables, and dairy essentials with ease.Farm-fresh quality at your fingertips.</p>

                    <div className="hero-buttons">
                        <Link to="/products/all-product/all-category" className='btn btn-success d-flex align-items-center justify-content-center gap-2'>
                            Shop Now <i className="bi bi-arrow-right-short fs-4"></i>
                        </Link>
                        <Link to="/offers" className='btn btn-outline-light d-flex align-items-center justify-content-center'>
                            View Offers
                        </Link>
                    </div>
                </div>
            </div>

            <OurCategories />

            <OurProducts />

            <OffersCard />

            <ChooseCard />

            <Slider />

            <NewsLetter />

            <Subscribe />
        </div>
    )
}