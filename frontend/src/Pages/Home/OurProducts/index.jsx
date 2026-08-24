import React, { useEffect, useState } from 'react'
import CardProduct from '../../../Components/CardProduct'
import { ThreeDots } from 'react-loader-spinner'
import fetchData from '../../../Utils/FetchData'
import { Link, useNavigate } from 'react-router-dom'
import './our-product.css'

export default function OurProducts() {
    const [products, setProducts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const res = await fetchData('products?populate=*')
            setProducts(res.data)


        })()
    }, [])

    const previewProducts = products?.slice(0, 8)

    const handleSubClick = (id, name) => {
        navigate(`/detail-product/${id}/${name}`)
    }
    return (
        <div className='products-section pt-5 pb-5'>
            <div className='container'>
                <div className='products-title text-center mb-5'>
                    <h2 className=''>Popular Products</h2>
                    <span>Handpicked fresh items just for you</span>
                </div>

                {products ?
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                        {previewProducts?.map((e, index) => {
                            return (
                                <div className='col' key={index}>
                                    <CardProduct
                                        name={e.name}
                                        image={process.env.REACT_APP_BASE_URL + e.image.url}
                                        price={e.price}
                                        id={e.id}
                                        seller={e.seller}
                                        oldPrice={e.oldPrice}
                                        categoryName={e.category.name}
                                        handleClick={() => handleSubClick(e.id, e.name)}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div className=' d-flex justify-content-center'><ThreeDots /></div>
                }

                <div className='text-center mt-5'>
                    <Link to='/products/all-product/all-category' className='btn btn-outline-success px-4 py-2 rounded-pill fw-semibold'>
                        View All <i className='bi bi-arrow-right ms-1'></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
