import React, { useEffect, useState } from 'react'
import './products-page.css'
import CardProduct from '../../Components/CardProduct'
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate, useParams } from 'react-router-dom'
import fetchData from '../../Utils/FetchData'
import CategoryFilter from '../../Components/CategoryFilter'


export default function Products() {
    const { categoryId } = useParams()
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const [categories, setCategories] = useState([])

    const activeCategory = categoryId && categoryId !== 'all-product' ? Number(categoryId) : 'All'


    useEffect(() => {
        (async () => {
            const resCategories = await fetchData('categories')
            setCategories(resCategories.data)
        })();


        (async () => {
            const resProduct = await fetchData(`products?populate=*${categoryId === 'all-product' ? '' : `&filters[category][$eq]=${categoryId}`}`)
            setProducts(resProduct.data)
        })()

    }, [categoryId])


    const handleSelectCategory = (catId) => {
        if (catId === 'All') {
            navigate('/products/all-product/all-category')
        }
        else {
            const cat = categories.find((c) => c.id === catId)
            navigate(`/products/${catId}/${encodeURIComponent(cat?.name || '')}`)
        }
    }

    const handleCartClick = (id, name) => {
        return navigate(`/detail-product/${id}/${name}`)
    }

    return (
        <div className='products-page'>
            <div className='container-xxl'>

                {/* Header */}
                <div className='products-page-header'>
                    <h1>Shop All Products</h1>
                    <p>Browse our full selection of fresh groceries</p>

                    <CategoryFilter
                        categories={categories}
                        activeCategory={activeCategory}
                        onSelect={handleSelectCategory}
                    />
                </div>

                {/* Product grid */}
                {products && products.length >= 1 ?

                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-2'>
                        {products?.map((e) => (
                            <div className='col' key={e.id}>
                                <CardProduct
                                    name={e.name}
                                    image={process.env.REACT_APP_BASE_URL + e.image.url}
                                    price={e.price}
                                    id={e.id}
                                    seller={e.seller}
                                    oldPrice={e.oldPrice}
                                    categoryName={e.category?.name}
                                    handleClick={() => handleCartClick(e.id, e.name)}
                                />
                            </div>
                        ))}
                    </div>

                    :

                    <div className='d-flex flex-column align-items-center justify-content-center' style={{ color: '#0f430f', fontWeight: '500' }}>
                        <ThreeDots />
                        There are no products.
                    </div>
                }
            </div>
        </div>
    )
}
