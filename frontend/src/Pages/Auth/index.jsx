import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'
import './auth.css'

export default function Auth() {
    const [pageType, setPageType] = useState('login')

    return (
        <div className='auth-page'>
            <div className='container text-center'>

                <span className='auth-badge'>
                    <i className='bi bi-shield-check'></i> Secure Access
                </span>

                <div className='auth-title'>
                    <h2>{pageType === 'login' && 'Welcome Back'}</h2>
                    <h2>{pageType === 'register' && 'Create Account'}</h2>
                    <h2>{pageType === 'forgot' && 'Reset Password'}</h2>
                </div>

                <div className='auth-subtitle'>
                    <p>{pageType === 'login' && 'Sign in to continue shopping'}</p>
                    <p>{pageType === 'register' && 'Join FreshMart for exclusive deals'}</p>
                    <p>{pageType === 'forgot' && 'Well send you a reset link'}</p>
                </div>

                <div className='auth-tabs'>
                    <button className={`auth-tab ${pageType === 'login' ? 'active' : ''}`} onClick={() => setPageType('login')}>Login</button>
                    <button className={`auth-tab ${pageType === 'register' ? 'active' : ''}`} onClick={() => setPageType('register')}>Sign Up</button>
                    <button className={`auth-tab ${pageType === 'forgot' ? 'active' : ''}`} onClick={() => setPageType('forgot')}> Forgot?</button>
                </div>

                <div className='auth-card'>
                    <div className='auth-tab-content' key={pageType}>
                        {pageType === 'login' && <Login />}

                        {pageType === 'register' && <Register />}

                        {pageType === 'forgot' &&
                            <form className='auth-form'>
                                <label className='auth-label'>Registered Email</label>
                                <div className='auth-input-wrap'>
                                    <i className='bi bi-envelope'></i>
                                    <input type='email' placeholder='your@email.com' />
                                </div>
                                <button type='submit' className='auth-submit-btn'>
                                    Send Reset Link <i className='bi bi-arrow-right'></i>
                                </button>
                                <p className='auth-terms'>We'll send a password reset link to your email address.</p>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
