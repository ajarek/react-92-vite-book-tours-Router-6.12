import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FormContact } from '../../helper/FormContact/FormContact'
import './Contact.css'
export const Contact = () => {
  return (
    <div className='contact'>
      <div className='left-wrapper'>
        <h1>Kontakt</h1>
        <a
          className={'link'}
          href='tel:+48573219230'
        >
          <FaPhoneAlt /> +48 573 219 230
        </a>
        <a
          className={'link'}
          href='mailto:ajarek@poczta.onet.pl'
        >
          <FaMailBulk /> ajarek@poczta.onet.pl
        </a>
        <a
          className={'link'}
          href='#'
        >
          <FaMapMarkerAlt /> Poland Kołobrzeg{' '}
        </a>
      </div>
      <div className='right-wrapper'>
        <p>Napisz do Nas 🖊️ :</p>
        <FormContact />
      </div>
      <div className='footer'>
        <Link
          className={'link'}
          to={'/'}
        >
          <div className='logo'>
            <img
              src='/images/turysta-logo.png'
              alt='logo'
            />
            Turysta.pl
          </div>
        </Link>
        <div className='socials'>
          <div className='social'>
            <a href='#'>
              <FaGithub />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaFacebook />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaLinkedinIn />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
