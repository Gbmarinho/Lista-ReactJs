import { useState } from 'react'
import styles from './header.module.css'
import rockt from '../assets/rocket.svg'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <header className={styles.Header}>
        <div className={styles.HeaderContent}>
          <img src={rockt} alt="" />
          <p>to<span>do</span></p>
        </div>
    </header>
  )
}

export default Header
