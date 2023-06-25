import React from "react";
import goods from '../data/Database'
import GoodsBlock from '../Good/Goods';
import './style.css'

export default function SaleCont(){

    const filteredData = goods.filter(item => item.sale === true);

    return(
        <div className="sale-page">
            <div className="infoPage">
                <h2>АКЦІЙНІ ТОВАРИ</h2>
            </div>
            <div className="sale-goods">
                {filteredData.map(item => <GoodsBlock key={item.title} image={item.image} title={item.title} price={item.price} color={item.color} description={item.description} count={item.cnt} sale={item.sale} />)}
            </div>
        </div>
    )
}