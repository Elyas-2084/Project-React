import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './slider.css'
import fetchData from '../../../Utils/FetchData'

export default function Slider() {

    const [slider, setSlider] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetchData('sliders?populate=*')
            setSlider(res.data)
        })()
    }, [])

    return (
        <div className='testimonials-section pb-5 pt-5'>
            <div className='container'>
                <div className='title-section text-center mb-5'>
                    <h2 className='fw-bold mt-3'>What Our Customers Say</h2>
                    <span>Join thousands of happy customers</span>
                </div>

                <div className='testimonial-viewport-wrap'>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.testimonial-dots',
                            bulletClass: 'dot',
                            bulletActiveClass: 'active',
                        }}
                        className='testimonial-viewport'
                    >
                        {slider?.map((e, index) => (
                            <SwiperSlide key={index} className='testimonial-slide'>
                                <div className='testimonial-card'>
                                    <div className='testimonial-header'>
                                        <div className='avatar-wrap'>
                                            <img src={process.env.REACT_APP_BASE_URL + e.image.url} alt={e.name} className='avatar-img' />
                                            <span className='quote-badge'>
                                                <i className='bi bi-quote'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className='mb-0'>{e.name}</h5>
                                            <div className='testimonial-role'>{e.role}</div>
                                            <div className='testimonial-company'>{e.company}</div>
                                        </div>
                                    </div>

                                    <p className='testimonial-text'>"{e.description}"</p>

                                    <div className='testimonial-stars'>
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className='bi bi-star-fill'></i>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='testimonial-dots'></div>
            </div>
        </div>
    )
}