import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
    return (
        <footer className='site-footer'>
            <div className='container'>
                <div className='row gy-5'>

                    {/* Brand */}
                    <div className='col-12 col-md-3'>
                        <div className='footer-brand d-flex align-items-center gap-2 mb-3'>
                            <div className='footer-logo'>
                                <img src='./assets/favicon.webp' alt='favicon' />
                            </div>
                            <span className='fs-4 fw-bold text-white'>Daily Pick</span>
                        </div>

                        <p className='footer-desc'>
                            Your trusted online grocery store delivering farm-fresh produce, dairy, bakery goods and daily essentials right to your doorstep since 2020.
                        </p>

                        <ul className='footer-contact list-unstyled'>
                            <li><i className="bi bi-geo-alt"></i> 123 Fresh Street, New York, NY 10001</li>
                            <li><i className="bi bi-envelope"></i> hello@freshmart.com</li>
                            <li><i className="bi bi-telephone"></i> +1 (555) 123-4567</li>
                            <li><i className="bi bi-clock"></i> Mon-Sat: 8AM - 10PM</li>
                        </ul>

                        <div className='footer-socials d-flex gap-2'>
                            <a href="./" className='social-icon'><i className="bi bi-facebook"></i></a>
                            <a href="./" className='social-icon'><i className="bi bi-instagram"></i></a>
                            <a href="./" className='social-icon'><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className='col-6 col-md-3'>
                        <h6 className='footer-heading'>CATEGORIES</h6>
                        <ul className='footer-links list-unstyled'>
                            <li><Link to="/products">Fruits & Vegetables</Link></li>
                            <li><Link to="/products">Dairy Products</Link></li>
                            <li><Link to="/products">Bakery & Bread</Link></li>
                            <li><Link to="/products">Beverages</Link></li>
                            <li><Link to="/products">Snacks & Chips</Link></li>
                            <li><Link to="/products">Frozen Foods</Link></li>
                            <li><Link to="/products">Organic Products</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className='col-6 col-md-3'>
                        <h6 className='footer-heading'>QUICK LINKS</h6>
                        <ul className='footer-links list-unstyled'>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/offers">Offers & Deals</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/cart">My Cart</Link></li>
                            <li><Link to="/blogs">Blog</Link></li>
                            <li><Link to="/categories">Categories</Link></li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div className='col-6 col-md-3'>
                        <h6 className='footer-heading'>SUPPORT & LEGAL</h6>
                        <ul className='footer-links list-unstyled'>
                            <li><Link to="/">Help Center</Link></li>
                            <li><Link to="/">Shipping Policy</Link></li>
                            <li><Link to="/">Return & Refund</Link></li>
                            <li><Link to="/">Terms & Conditions</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Cookie Policy</Link></li>
                            <li><Link to="/">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                <hr className='footer-divider' />

                {/* Payment methods + badges */}
                <div className='footer-methods d-flex flex-wrap align-items-center justify-content-between gap-3'>
                    <div className='payment-list d-flex flex-wrap align-items-center gap-2'>
                        <span className='payment-label'>We accept:</span>
                        <span className='payment-pill'><i className="bi bi-credit-card"></i> Visa</span>
                        <span className='payment-pill'><i className="bi bi-credit-card"></i> Mastercard</span>
                        <span className='payment-pill'><i className="bi bi-credit-card"></i> Amex</span>
                        <span className='payment-pill'><i className="bi bi-wallet2"></i> Apple Pay</span>
                        <span className='payment-pill'><i className="bi bi-paypal"></i> PayPal</span>
                    </div>

                    <div className='badge-list d-flex flex-wrap gap-2'>
                        <span className='footer-badge'><i className="bi bi-lock-fill"></i> Secure Checkout</span>
                        <span className='footer-badge'><i className="bi bi-truck"></i> Free Shipping $50+</span>
                        <span className='footer-badge'><i className="bi bi-leaf-fill"></i> 100% Organic</span>
                    </div>
                </div>

                <hr className='footer-divider' />

                {/* Bottom bar */}
                <div className='footer-bottom d-flex flex-wrap align-items-center justify-content-between'>
                    <span>© 2026 FreshMart. Made with <span className='text-danger heart'><i className='bi bi-heart-fill'></i></span> All rights reserved.</span>
                    <div className='footer-bottom-links d-flex gap-3'>
                        <Link to="/terms">Terms & Conditions</Link>
                        <span>·</span>
                        <Link to="/privacy">Privacy Policy</Link>
                        <span>·</span>
                        <Link to="/cookie-policy">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}