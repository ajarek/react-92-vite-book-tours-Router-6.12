import data from '../../assets/data.json'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      {data.map((d) => {
        return (
          <div
            key={d.id}
            className='card'
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
                <p>{d.kraj}</p>
                <p>{d.rejon}</p>
                <p>{d.cena}PLN</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Home
