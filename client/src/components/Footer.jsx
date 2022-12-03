import React from 'react'
import Logo from '../images/logo.png'

const Footer = () => {
  return (  
    <footer>
      <img src={Logo} alt="Blog logo" />
      <span>
        &copy;2022 Made with <b>React</b>
      </span>
    </footer>
  )
}

export default Footer