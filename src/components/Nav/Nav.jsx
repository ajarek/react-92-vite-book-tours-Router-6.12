import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'


import './Nav.css'
import { React, useState, useContext } from 'react'
import { AppContext } from '../../App'

const Nav = () => {
  const {isLogin,setIsLogin} = useContext(AppContext)
  const [isOpen, setOpen] = useState(false)
 

  return (
    <>
      <nav className='nav'>
        <div className='logo'>
          <Link
            className='link'
            to={'/'}
          >
            <img
              src='/images/turysta-logo.png'
              alt='logo'
            />
            <h1>Turysta.pl</h1>
          </Link>
          {isLogin ? <p style={{marginLeft:'16px',fontSize:'24px'}}> zalogowano!</p>:null}
        </div>

        <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
          <Link
            className='link'
            to={'/contact'}
          >
            <h1>Contact</h1>
          </Link>
        <Link
            className='link'
            to={'/login'}
          >
            <h1>Logowanie</h1>
          </Link>
          <Link
            className='link'
            to={'/register'}
          >
            <h1>Rejestracja</h1>
          </Link>
         

       
        </ul>

        <div className='hamburger'>
          <Hamburger
            size={30}
            duration={0.3}
            distance='md'
            color={isOpen ? '#ff3f34' : '#ffffff'}
            easing='ease-in'
            rounded
            label='Show menu'
            onToggle={(toggled) => {
              setOpen(true)
              if (toggled) {
                // open a menu
              } else {
                setOpen(false)
              }
            }}
          />
        </div>
      </nav>
    </>
  )
}

export default Nav
