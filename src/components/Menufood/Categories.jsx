import React from 'react'

const Categories = ({filterItems,categories}) => {
    console.log(categories,'categories');
    return (
        <div className="btn-container">
            {
                categories.map((category,i) => {
                    return (
                        <button 
                        key={i}
                        onClick={()=>filterItems(category)} 
                        className="filter-btn">
                            {category}
                        </button>
                    )
                })
            }
            
        </div>
    )
}

export default Categories
