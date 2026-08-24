import React from 'react'

export default function CategoryFilter({ categories, activeCategory, onSelect }) {
    return (
        <ul className='navbar-nav flex-row mb-2 fs-6 align-items-center gap-3 justify-content-center flex-wrap'>
            <li className='nav-item'>
                <button
                    className={`nav-link border-0 px-4 py-2 rounded-pill ${activeCategory === 'All' ? 'bg-success text-light' : 'bg-body-secondary text-dark'}`}
                    onClick={() => onSelect('All')}
                >
                    All
                </button>
            </li>

            {categories?.map((e, index) => (
                <li className='nav-item' key={index}>
                    <button
                        className={`nav-link border-0 px-4 py-2 rounded-pill ${activeCategory === e.id ? 'bg-success text-light' : 'bg-body-secondary text-dark'}`}
                        onClick={() => onSelect(e.id)}
                    >
                        {e.name}
                    </button>
                </li>
            ))}
        </ul>
    )
}
