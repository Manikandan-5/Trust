import React from 'react'
import Image from 'react-bootstrap/Image';
const Header = () => {

  return (
    <header className='header-sec'>
        <section className="inner_head">
        <Image src={require('./assets/logo.avif')} style={{borderRadius:'50%',height:'200px',width:'200px'}} />
        <h1>Welcome to Our Helping Community</h1>
          
        </section>
    </header>
  )
}

export default Header;