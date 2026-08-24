import React from 'react'
import { Link } from 'react-router-dom'
import './not-found.css'

export default function NotFound() {
    return (
        <div className='not-found-page'>
            <div className='container text-center'>

                <div className='nf-icon-wrap'>
                    <span className='nf-emoji'><i class="bi bi-basket2-fill"></i></span>
                    <span className='nf-question'>؟</span>
                </div>

                <h1 className='nf-code'>404</h1>
                <h2 className='nf-title'>Oops! This Aisle is Empty</h2>
                <p className='nf-desc'>
                    Looks like this page got lost between the fruits and veggies.<br />
                    Let's get you back to shopping fresh.
                </p>

                <div className='nf-actions'>
                    <Link to='/' className='btn btn-success d-inline-flex align-items-center gap-2'>
                        <i className='bi bi-house-door'></i> Back to Home
                    </Link>
                    <Link to='/products/all-product/all-category' className='btn btn-outline-success d-inline-flex align-items-center gap-2'>
                        <i className='bi bi-basket'></i> Browse Products
                    </Link>
                </div>

                <div className='nf-scatter'>
                    <span>🍎</span>
                    <span>🥦</span>
                    <span>🍋</span>
                    <span>🥕</span>
                    <span>🍇</span>
                </div>
            </div>
        </div>
    )
}