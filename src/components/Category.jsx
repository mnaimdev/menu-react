import React from 'react'

const Category = ({categories, filterItems}) => {
  return (
    <>
    {
        categories.map((item, index) => {
            return (
                <>
                   <button className='btn lunchBtn' onClick={() => filterItems(item)}>{item}</button>
                </>
            )
        })
    }
    </>
  )
}

export default Category;