import React from 'react'
import './subscribe.css'

export default function Subscribe() {
    return (
        <div className='subscribe-section pt-5 pb-5'>
            <div className='container-lg subscribe-holder'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='title-section subscribe-title'>
                            <h2>Get Fresh Deals in Your Inbox</h2>
                            <span>Subscribe for exclusive offers, recipes & seasonal picks.</span>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='send-email'>
                            <input className='form-control' type="email" name="" id="" placeholder='Enter Your Email Address' />
                            <button className='btn btn-success'>Subscribe <i className='bi bi-arrow-right'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
