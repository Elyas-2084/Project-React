import React from 'react'
import { Link } from 'react-router-dom'
import './about-us.css'

const stats = [
    { number: '5+', label: 'Years of Experience' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '1,200+', label: 'Fresh Products' },
    { number: '12', label: 'Cities Served' },
]

const values = [
    {
        icon: 'bi-leaf',
        title: 'Farm-Fresh Quality',
        desc: 'We partner directly with local farms to bring you the freshest produce, picked and delivered within hours.',
    },
    {
        icon: 'bi-truck',
        title: 'Fast & Reliable Delivery',
        desc: 'Same-day delivery across our service areas, so your groceries arrive fresh and on time, every time.',
    },
    {
        icon: 'bi-heart',
        title: 'Community First',
        desc: 'A portion of every order supports local farmers and community food programs in the cities we serve.',
    },
    {
        icon: 'bi-shield-check',
        title: 'Quality Guaranteed',
        desc: 'Not happy with a product? We offer easy returns and a 100% satisfaction guarantee on every order.',
    },
]


export default function AboutUs() {
    return (
        <div className='about-page'>

            {/* Header */}
            <div className='container text-center about-header'>
                <span className='about-badge'>Our Story</span>
                <h1 className='about-title'>About FreshMart</h1>
                <p className='about-subtitle'>
                    We're on a mission to make fresh, high-quality groceries accessible to everyone —
                    delivered right to your door, without the hassle.
                </p>
            </div>

            {/* Story */}
            <div className='container about-story'>
                <div className='row align-items-center g-5'>
                    <div className='col-12 col-lg-6'>
                        <img src='./assets/aboutStory.jpeg' alt='FreshMart founders' className='about-story-img' />
                    </div>
                    <div className='col-12 col-lg-6'>
                        <span className='about-story-tag'>How It Started</span>
                        <h2 className='about-story-title'>From a Small Stand to Your Doorstep</h2>
                        <p className='about-story-text'>
                            FreshMart began in 2020 as a single farmers-market stand, born from a simple idea:
                            everyone deserves easy access to fresh, honest food. What started with a handful
                            of local partnerships has grown into a trusted online grocery serving thousands
                            of families across 12 cities.
                        </p>
                        <p className='about-story-text'>
                            Today, we work with over 80 local farms and suppliers, carefully selecting every
                            item that reaches your basket — because freshness and trust are still at the heart
                            of everything we do.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats */}
            <div className='about-stats'>
                <div className='container'>
                    <div className='row g-4 text-center'>
                        {stats.map((e, index) => (
                            <div className='col-6 col-lg-3' key={index}>
                                <h3 className='stat-number counter-number'>{e.number}</h3>
                                <p className='stat-label'>{e.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className='container about-values'>
                <div className='text-center mb-5'>
                    <h2 className='fw-bold'>What We Stand For</h2>
                    <p className='text-muted'>The values that guide everything we do</p>
                </div>

                <div className='row g-4'>
                    {values.map((e, index) => (
                        <div className='col-12 col-md-6 col-lg-3' key={index}>
                            <div className='value-card'>
                                <div className='value-icon'>
                                    <i className={`bi ${e.icon}`}></i>
                                </div>
                                <h5 className='value-title'>{e.title}</h5>
                                <p className='value-desc'>{e.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className='about-cta'>
                <div className='container text-center'>
                    <h2>Ready to Taste the Difference?</h2>
                    <p>Join thousands of happy customers enjoying farm-fresh groceries every week.</p>
                    <Link to='/products' className='btn btn-outline-light about-cta-btn'>
                        Shop Now <i className='bi bi-arrow-right'></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}