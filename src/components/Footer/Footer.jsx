import React from 'react'
import './style.css'

export default function Footer() {

  let dateNow = new Date()

  return (
   <footer>
    Всі права захищено &copy;{dateNow.getFullYear()}
   </footer>
  )
}
