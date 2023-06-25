import React from 'react'
import GoodsBlock from '../Good/Goods';
import goods from '../data/Database';
import './style.css'

export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        <div className="block_h2">
          <h2>Товари</h2>
        </div>
        <div className="block_goods">
          {goods.map(item => <GoodsBlock key={item.title} image={item.image} title={item.title} price={item.price} color={item.color} description={item.description} count={item.cnt} sale={item.sale} />)}
        </div>
      </div>
  )
}
