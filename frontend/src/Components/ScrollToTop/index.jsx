import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './scroll_to_top.css'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [pathname])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!visible) return null

    return (
        <button className='scroll-top-btn' onClick={scrollToTop} aria-label='Scroll to top'>
            <i className="bi bi-arrow-up"></i>
        </button>
    )
}