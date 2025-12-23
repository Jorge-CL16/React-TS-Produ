import { useEffect, useState } from 'react'

import './App.css'
import type WeatherForecast from './weatherforecast.model'

function App() {

  const [weatherforecast, setWeatherforecast] = useState<WeatherForecast[]>()
  
  useEffect( () =>{
    fetch(`${import.meta.env.VITE_API_URL}/weatherforecast`)
    .then(respuesta => respuesta.json()
    .then(json => setWeatherforecast(json)))
  }, [])
  return (
    <>
      {weatherforecast ? <div>
        <ul>
        {
          weatherforecast.map(wf => <li key={wf.date}>
            {`${wf.date} - ${wf.summary} (${wf.temperatureC}C)`}
          </li>)
        }
        </ul>
      </div> : 'Arregla tu pinche url we, regresa aranza ya no puedo vivir sin ti Aranza'}
    </>
  )
}

export default App
