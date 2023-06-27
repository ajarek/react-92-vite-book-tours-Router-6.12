import { useNavigate } from 'react-router-dom'
import data from '../../assets/data.json'
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home'>
      {data.map((d) => {
        return (
          <div
            key={d.id}
            className='card'
            onClick={() =>navigate(`home-edit/${d.id}/`)}
          >
            <div className='card-wrapper'>
              <div className='img'>
                <img
                  src={d.foto}
                  alt='foto'
                />
              </div>
              <div className='info'>
                <h3>{d.nazwa}</h3>
                <p>kraj: {d.kraj}</p>
                <p>region: {d.rejon}</p>
                <p>cena: {d.cena}PLN</p>
                <p>ranking: {d.ranking}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
