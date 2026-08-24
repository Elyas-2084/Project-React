import React, { useEffect, useState } from 'react'
import './card-category.css'
import { Link } from 'react-router-dom'
import fetchData from '../../Utils/FetchData'

export default function CardCategories() {

    const [card, setCard] = useState()

    useEffect(() => {
        (async () => {
            const res = await fetchData('categories?populate=*')
            setCard(res.data)
        })()

    }, [])

    const items = card?.map((e, index) => {
        return (
            <div className='col' key={index}>
                <figure className="figure categories-item overflow-hidden rounded-top-4 m-0 w-100">
                    <div className="categories-img-wrap">
                        <img src={process.env.REACT_APP_BASE_URL + e.image.url} className="figure-img categories-img" alt={e.name} />
                    </div>
                    <Link to={`/products/${e.id}/${e.name}`}><figcaption className="caption">{e.name}</figcaption></Link>
                </figure>
            </div>
        )
    })

    return (

        <div className='categories-section d-flex flex-column align-items-center pt-5 pb-5'>
            <div className='title-section text-center mb-5'>
                <h2>Shop by Category</h2>
                <span>Browse our wide selection of fresh products organized just for you</span>
            </div>

            <div className='container'>
                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4'>
                    {items}
                </div>
            </div>
        </div>
    )
}
