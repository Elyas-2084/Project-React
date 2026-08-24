import React from 'react'
import './offers.css'
import OffersCard from '../Home/OffersCard'
import Subscribe from '../Home/Subscribe'
export default function Offers() {
    return (
        <div className='offers-page'>
            <div className='container'>
                <div className='offers-page-header'>
                    <h1>Deals & Offers</h1>
                    <p>Grab the best deals on fresh groceries</p>
                </div>
            </div>
            <OffersCard />
            <Subscribe />
        </div>
    )
}