import './HomeEdit.css'
import { useParams, Link } from 'react-router-dom'
import data from '../../assets/data.json'
import { useState,useContext, useEffect } from 'react'
import { AppContext } from '../../App'
const HomeEdit = () => {
  let { id } = useParams()
  const { selectedData,setSelectedData } = useContext(AppContext)
  useEffect(()=>{
    setSelectedData( data?.find((el) => el.id === id))

  })
  return (
    <div className='home-edit'>
      
        <div className='img'>
          <img src={selectedData.foto} alt="" />
        </div>
        <div className='info'>
          <h2>{selectedData.nazwa}</h2>
          <span>kraj: <b>{selectedData.kraj}</b></span>{' '}
          <span>rejon: <b>{selectedData.rejon}</b></span>
          <p>{selectedData.opis}</p>
          <div className="wrapper-cena">
          <div className="cena">cena: <b>{selectedData.cena}</b> PLN</div>
          <Link to={'/'} className='link-cena'>Powrót</Link>
          <Link to={'/payment-form'}  className='link-cena'>Zamawiam</Link>
          </div>
        </div>
     
    </div>
  )
}

export default HomeEdit
