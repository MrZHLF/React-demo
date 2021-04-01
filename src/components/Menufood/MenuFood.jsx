import React, { useState } from 'react'
import items from './data'
import Categories from './Categories'
import Menu from './Menu'
import './food.css'


const allCategories = ['all',...new Set(items.map(item=> item.category))]
const MenuFood = () => {
  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category ==='all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter(item => item.category == category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>美食广场菜单</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu items={menuItems}/>
      </section>
      {/* <ColorGenerator/> */}
    </main>
  );
}

export default MenuFood;
