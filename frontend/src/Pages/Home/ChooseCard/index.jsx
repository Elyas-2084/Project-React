import React, { useEffect, useState } from 'react'
import './chooseCard.css'
import fetchData from '../../../Utils/FetchData'

export default function ChooseCard() {

    const [choose, setChoose] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetchData('chooses')
            setChoose(res.data)

        })()
    }, [])

    const items = choose?.map((e, index) => {
        return (
            <div className='col-12 col-md-6 col-lg-3' key={index}>
                <div className='choose-box'>
                    <div className='icon-box'>
                        <i className={`bi bi-${e.icon}`}></i>
                    </div>
                    <span className='choose-subtitle'>{e.title}</span>
                    <span className='choose-description'>{e.description}</span>
                </div>
            </div>
        )
    })
    return (
        <div className='why-choose-section pt-5 pb-5'>
            <div className="container">

                <div className="title-section text-center mb-5">
                    <h2 className='fw-bold mt-3'>Why Choose FreshMart?</h2>
                    <span>We go the extra mile to bring freshness to your table</span>
                </div>

                <div className="row g-4">
                    {items}
                </div>
            </div>
        </div>
    )
}
