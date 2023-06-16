import React from 'react'
import GoodsBlock from '../Good/Goods';
import goods from '../data/Database';
import './style.css'

export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <GoodsBlock key={item.title} image={item.image} title={item.title} price={item.price} color={item.color} description={item.description} count={item.cnt} sale={item.sale} />)}
      </div>
  )
}
