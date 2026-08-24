import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/Slices/Auth'
import SearchCart from './SearchCart'
import { toast } from 'react-toastify'


export default function Navbar() {
    const { token, username } = useSelector(state => state.authRedux)
    const listLength = useSelector(state => state.cartRedux.listOfProduct).length
    const dispatch = useDispatch()
    const [searchOpen, setSearchOpen] = useState()
    const [accountOpen, setAccountOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const navLinkClass = ({ isActive }) => {
        return `nav-link nav-link-underline ${isActive ? 'active text-success fw-semibold' : ''}`
    }

    const handleLogOut = () => {
        dispatch(logOut());
        setAccountOpen(false);
        toast.error('You Have Logged Out Of Your Account')
    }

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.account-wrapper')) {
            setAccountOpen(false)
        }
    })


    return (
        <nav className={`navbar navbar-expand-lg fixed-top navbar-overlay ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center justify-content-center gap-2" to="/">
                    <img src='./assets/favicon.webp' className=' img-fluid logo-img' alt='favicon' />
                    <span className='fs-4 fw-bold'>Daily <span className='text-success'>Pick</span></span>
                </Link>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-lg offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">

                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
                        <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body d-lg-flex align-items-lg-center">
                        {/* Center links */}
                        <ul className="navbar-nav mb-2 mb-lg-0 fs-6 gap-3 mx-lg-auto d-lg-flex flex-lg-row align-items-lg-center">
                            <li className="nav-item">
                                <NavLink className={navLinkClass} to={'/'} end>Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className={`nav-link nav-link-underline ${location.pathname.startsWith('/products') ? 'active text-success fw-semibold' : ''}`}
                                    to={'/products/all-product/all-category'}>
                                    Products
                                </Link>
                            </li>

                            <li className="nav-item">
                                <NavLink className={navLinkClass} to={'/categories'}>Categories</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={navLinkClass} to={'/about'}>AboutUs</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={navLinkClass} to={'/contact'}>Contact Us</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className={navLinkClass} to={'/offers'}>Offers</NavLink>
                            </li>
                        </ul>

                        {/* Right icons */}
                        <div className="icon-btn mt-3 mt-lg-0 align-items-center">
                            <div className='desktop-only-control'>
                                <button onClick={() => setSearchOpen((s) => !s)} className="navbar-tool-btn">
                                    <i className="bi bi-search fs-5"></i>
                                </button>

                                {searchOpen && <SearchCart />}
                            </div>

                            <Link to="/cart" className="navbar-tool-btn desktop-only-control" aria-label={`view cart with ${listLength} items`}>
                                <i className="bi bi-cart cart-icon"></i>
                                <span className="cart-badge">{listLength}</span>
                            </Link>

                            {token ?
                                <div className="dropdown position-relative account-wrapper">
                                    <button className="btn account-btn d-flex align-items-center gap-2 rounded-pill border px-2 py-1" onClick={() => setAccountOpen(prev => !prev)}>
                                        <span className="account-avatar bg-success text-white rounded-circle d-flex align-items-center justify-content-center">
                                            <i className="bi bi-person-fill"></i>
                                        </span>
                                        <span className="fw-semibold account-name">{username}</span>
                                        <i className={`bi bi-chevron-down account-chevron ${accountOpen ? 'rotate' : ''}`}></i>
                                    </button>

                                    {accountOpen &&
                                        <div className="dropdown-menu show account-dropdown shadow border-0 rounded-3 p-2">

                                            <div className="d-flex align-items-center gap-3 px-2 py-2">

                                                <div className="account-dropdown-avatar bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-person-fill fs-5"></i>
                                                </div>
                                                <div className="d-flex flex-column account-user-info">
                                                    <span className="text-secondary small">Welcome back 👋</span>
                                                    <span className="fw-semibold text-dark account-dropdown-username">{username}</span>
                                                </div>
                                            </div>

                                            <div className="dropdown-divider"></div>

                                            <Link to="/cart" className="dropdown-item rounded-2 d-flex align-items-center gap-2 py-2" onClick={() => setAccountOpen(false)}>
                                                <i className="bi bi-cart3"></i>
                                                <span>My Cart</span>
                                            </Link>

                                            <div className="dropdown-divider"></div>

                                            <button className="dropdown-item rounded-2 d-flex align-items-center gap-2 py-2 text-danger" onClick={handleLogOut}>
                                                <i className="bi bi-box-arrow-right"></i>
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    }
                                </div>
                                :
                                <>
                                    {/* Desktop Login */}
                                    <Link className="navbar-tool-btn desktop-login-link" to="/auth">
                                        <i className="bi bi-person fs-4"></i>
                                    </Link>

                                    {/* Mobile Login */}
                                    <Link className="mobile-login-link" to="/auth">
                                        <i className="bi bi-person fs-5"></i>
                                        <span>Login</span>
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}