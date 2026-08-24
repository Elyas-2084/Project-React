import React, { useState } from 'react'
import './contactUs.css'

const infoCards = [
    {
        icon: 'bi-geo-alt',
        title: 'Visit Us',
        lines: ['123 Fresh Street, New York, NY 10001', 'Come say hello at our flagship store'],
    },
    {
        icon: 'bi-envelope',
        title: 'Email Us',
        lines: ['hello@freshmart.com', 'We reply within 24 hours'],
    },
    {
        icon: 'bi-telephone',
        title: 'Call Us',
        lines: ['+1 (555) 123-4567', 'Mon-Sat: 9AM - 6PM'],
    },
    {
        icon: 'bi-clock',
        title: 'Store Hours',
        lines: ['Monday - Saturday', '8:00 AM - 10:00 PM • Sunday: Closed'],
    },
]

const MAX_MESSAGE_LENGTH = 1000

export default function ContactUs() {
    const [message, setMessage] = useState('')

    return (
        <div className='contact-page'>
            <div className='container'>

                <div className='text-center'>
                    <span className='contact-badge'>Get in Touch</span>
                    <h1 className='contact-title'>Contact Us</h1>
                    <p className='contact-subtitle'>
                        We'd love to hear from you — whether it's a question, feedback, or just to say hello.
                    </p>
                </div>

                <div className='row g-5 mt-3'>

                    {/* Left: info cards */}
                    <div className='col-12 col-lg-6'>
                        <div className='d-flex flex-column gap-3'>
                            {infoCards.map((card, index) => (

                                <div className='info-card' key={index}>
                                    <span className='info-icon'>
                                        <i className={`bi ${card.icon}`}></i>
                                    </span>
                                    <div>
                                        <h6 className='info-title'>{card.title}</h6>
                                        {card.lines.map((line, i) => (
                                            <p className={`info-line ${i === 0 ? 'info-line-main' : ''}`} key={i}>
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                            ))}

                            <div className='info-card'>
                                <div>
                                    <h6 className='info-title'>Follow Us</h6>
                                    <div className='social-icons'>
                                        <a href='./'><i className='bi bi-facebook'></i></a>
                                        <a href='./'><i class="bi bi-twitter"></i></a>
                                        <a href='./'><i className='bi bi-instagram'></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className='col-12 col-lg-6'>
                        <form className='contact-form'>
                            <label className='contact-label'>Your Name <span className='required'>*</span></label>
                            <input type='text' className='contact-input' placeholder='John Doe' />

                            <label className='contact-label'>Email Address <span className='required'>*</span></label>
                            <input type='email' className='contact-input' placeholder='hello@example.com' />

                            <label className='contact-label'>Your Message <span className='required'>*</span></label>
                            <textarea className='contact-textarea' placeholder='Tell us how we can help...'
                                maxLength={MAX_MESSAGE_LENGTH} value={message} onChange={(e) => setMessage(e.target.value)}>

                            </textarea>
                            <div className='char-counter'>{message.length}/{MAX_MESSAGE_LENGTH}</div>

                            <button type='submit' className='contact-submit-btn'>
                                <i className='bi bi-send'></i> Send Message
                            </button>

                            <p className='contact-note'>
                                By submitting, you agree to our <a href='/privacy'>Privacy Policy</a>. We'll never share your info.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}