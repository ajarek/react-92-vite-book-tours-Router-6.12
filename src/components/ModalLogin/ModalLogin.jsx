import React from 'react'
import './ModalLogin.css'

const ModalLogin = ({ onClose, onChange }) => {
  return (
    <div className='modal-login'>
      <div className='modal'>
        <h2>Błędne dane, lub nie jesteś zarejestrowany!</h2>
        <div className='wrapper-modal-login'>
          <button
            className='close-button'
            onClick={onClose}
          >
            Zarejestruj
          </button>
          <button
            className='close-button'
            onClick={onChange}
          >
            Popraw Dane
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin
