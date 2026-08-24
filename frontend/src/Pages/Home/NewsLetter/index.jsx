import React from 'react'
import './newsLetter.css'

export default function NewsLetter() {
    return (
        <div className='newsletter-section mt-5'>
            <i className="bi bi-stars decor-icon decor-top-left d-none d-lg-block"></i>
            <i className="bi bi-envelope decor-icon decor-bottom-right d-none d-lg-block"></i>

            <div className='container text-center position-relative'>
                <span className='newsletter-badge'>
                    <i className="bi bi-stars"></i> Exclusive Updates
                </span>

                <h2 className='newsletter-title'>Stay Fresh with Us</h2>

                <p className='newsletter-subtitle'>
                    Subscribe to get exclusive deals, new product<br />
                    alerts, and fresh recipes delivered to your inbox.
                </p>

                <form className='newsletter-form'>
                    <input
                        type="email"
                        className='newsletter-input'
                        placeholder='Enter your email address'
                    />
                    <button type='submit' className='newsletter-btn'>
                        <i className="bi bi-send"></i> Subscribe
                    </button>
                </form>

                <div className='newsletter-note'>
                    <span>✓ No spam, unsubscribe anytime</span>
                    <span className='dot-sep'>•</span>
                    <span>✓ Weekly fresh content</span>
                </div>
            </div>
        </div>
    )
}
