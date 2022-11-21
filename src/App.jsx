import './App.css'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  const ref = useRef(null);
  const API_KEY = 'f130bc4b96a05c8ead2afa754aaa4943'
  // const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${API_KEY}`
  
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmit = event => {
    //  prevent page refresh
    event.preventDefault();
    let value = ref.current.value
      console.log(value)
      return value;
  };
  
  let city = 'Lagos';
  
  return (
    <div className="font-['Poppins'] text-[#062d34] bg-[#bad0d4] w-full h-screen flex flex-col items-center justify-center text-center">
      <main>

        <section className="w-fit mx-auto flex my-10">
          <svg  className="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="rgba(52,72,94,1)"/></svg> 
          {Object.keys(data).length > 0 && data.name}
        </section>
        
        <form onSubmit={handleSubmit} className="flex justify-center mx-auto w-full">
          <input className="focus:outline-[#395f66] rounded-full px-6 py-4 w-full sm:w-96 shadow-md" ref={ref} type="search" defaultValue='Lagos' contentEditable placeholder="Lagos"/>
        </form>
        
        {/* temperature */}
        <div className="mt-12 mb-4 flex justify-center items-center space-x-3">
          <img className="h-fit sm:w-16 md:w-24" src={`http://openweathermap.org/img/w/${Object.keys(data).length > 0 && data.weather[0].icon}.png`} alt="" />
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold">{Object.keys(data).length > 0 && Math.floor(data.main.temp - 273.15)}°C </h1>
          <img className="h-fit sm:w-16 md:w-24" src={`http://openweathermap.org/img/w/${Object.keys(data).length > 0 && data.weather[0].icon}.png`} alt="" />
        </div>
        {/* weather condition */}
      <h2 className="text-5xl">
        {Object.keys(data).length > 0 && data.weather[0].main}
      </h2>
      </main>
    </div>
  )
}

export default App
