import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './offerCard.css'
import fetchData from '../../../Utils/FetchData'

export default function OffersCard() {

    const [offerCard, setOfferCard] = useState()

    useEffect(() => {
        (async () => {

            const res = await fetchData('offers')
            setOfferCard(res.data)

        })()
    }, [])

    const items = offerCard?.map((e, index) => {
        return (

            <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className={`offer-card offer-${e.color} h-100`}>
                    <div className="offer-top">
                        <span className="offer-tag">
                            <i className={`bi bi-${e.icon}`}></i>
                            {e.offerTag}
                        </span>
                        <span className="offer-discount">{e.offerDiscount}</span>
                    </div>
                    <h4 className="offer-title">{e.offerTitle}</h4>

                    {e.offerEnd && <span className="offer-ends"><i className={`"bi bi-${e.icon}`}></i>{e.offerTag}</span>}

                    <Link to="/products/all-product/all-category" className="offer-link">Shop Now <i className="bi bi-arrow-right"></i></Link>
                    <span className="offer-icon">{e.offerIcon}</span>
                </div>
            </div>
        )
    })

    return (
        <div className='offers-section pt-5 pb-5'>
            <div className="container">
                <div className="title-section text-center mb-5">
                    <span className='single-title'>% Limited Time Only</span>
                    <h2 className='fw-bold mt-3'>Hot Deals & Offers</h2>
                    <span className='offers-subtitle'>Don't miss out on these amazing deals — grab them before they're gone!</span>
                </div>
                <div className='row g-4'>
                    {items}
                </div>

                <div className='btn-offers mt-5 text-center'>
                    <Link to={'/offers'}>View All Offers</Link>
                </div>
            </div>
        </div>
    )
}
