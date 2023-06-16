import React from 'react'
import './style.css'

export default function Goods(props) {
  return (
    <div className='goodsItem'>
      <div className="left">
        <div className="blockImage" style={{backgroundImage: `url(${props.image})`}}></div>
      </div>
      <div className="right">
        <h3>{props.title}</h3>
        <p>Ціна: {props.price}₴</p>
        <p>Колір: {props.color}₴</p>
        <p>Опис: {props.description}</p>
        <p>Кількість: {props.count}</p>
        <button>Купити</button>
      </div>
    </div>
  )
}
