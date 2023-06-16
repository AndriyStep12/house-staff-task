import React from 'react'

let arr = [
  'Головна',
  'Товари',
  'Акційні',
  'Про нас',
  'Контакти',
  'Правила',
  'Кабінет'

]

export default function Header() {
  return (
    <div>
      <header>
        <div>
          <span className='logo'>House Staff</span>
        </div>
        <nav>
          <ul>
            {arr.map(item => <li>{item}</li>)}
          </ul>
        </nav>
        
      </header>
      <div className="presentation">
        <h1>Кращі товари для дому</h1>
        <p>за низькими цінами</p>
        <button>Переглянути</button>
      </div>
    </div>
  )
}
