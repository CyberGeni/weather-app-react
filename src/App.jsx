import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=f130bc4b96a05c8ead2afa754aaa4943`
  
  useEffect(() => {
    axios.get(API_URL)
      .then((res) => {
        console.log(res.data.weather[0].main)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
     return () => {
        setData([])
      }

  }, [])
  

  return (
    <div className="App text-[#000607] bg-[#bad0d4] w-full h-screen flex flex-col items-center justify-center text-center">
      <main>
        <form action="" className="flex w-full">
          <input className="rounded-full px-6 py-4 w-96 shadow-md" type="search" name="" id="" placeholder="Enter city name"/>
        </form>
        
        {/* temperature */}
        <div className="w-full">
          {/* <img alt="" /> */}
          <h1 className="text-8xl mt-12 mb-4">{}28℃</h1>
          <img src="" alt="" />
        </div>
        {/* weather condition */}
        <h2 className="text-6xl">{data.weather}Haze</h2>
      </main>
    </div>
  )
}

export default App
