import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './search.css'
import fetchData from '../../../Utils/FetchData'

export default function SearchCart() {
    const [searchInp, setSearchInp] = useState()
    const [resultSearch, setResultSearch] = useState()

    useEffect(() => {
        (async () => {
            if (searchInp) {
                const res = await fetchData(`products?populate=*&filters[name][$containsi]=${searchInp}&pagination[page]=1&pagination[pageSize]=3`)
                setResultSearch(res.data)
            }
        })()
    }, [searchInp])

    const items = resultSearch?.map((e, index) => {
        return (
            <Link key={index} className="search-result-item" to={`/detail-product/${e.id}/${e.name.replaceAll(' ', '-')}`}>
                <img src={process.env.REACT_APP_BASE_URL + e?.image?.url} alt={e.name} className='search-result-img' />
                <span className='search-result-name'>{e.name}</span>
                <i className='bi bi-arrow-right search-result-arrow'></i>
            </Link>
        )
    })

    window.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box-inner')) {
            setSearchInp('')
        }
    })

    return (
        <div>
            <div className='search-box'>
                <div className='search-box-inner'>
                    <i className='bi bi-search search-icon'></i>
                    <input onChange={(e) => setSearchInp(e.target.value)} value={searchInp} type='text' className='search-input' placeholder='Search for fresh groceries, vegetables, fruits...' autoFocus />
                    <button className='search-submit-btn'>Search</button>

                    <div className={`search-results ${searchInp ? 'open' : ''}`}>
                        {items?.length > 0 ?
                            <>
                                {items}
                                <Link to={`/products/all-product/all-category`} className='search-show-more'>Show all results<i className='bi bi-arrow-right'></i></Link>
                            </>
                            :
                            searchInp &&
                            <div className='search-no-result'>
                                <i className='bi bi-search'></i>
                                <span>No products found for "{searchInp}"</span>
                            </div>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
