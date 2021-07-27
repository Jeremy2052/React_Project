import React from 'react'
import './DailyWeather.css'

function DailyWeather({ temp_day, temp_morn, temp_night, humidity, wind_speed }) {
  return (
    <div className='dailyWeather'>
      <p>Day: </p>
      <p>Temperature: {temp_day} &deg;C</p>
      <p>Morning: {temp_morn}&deg;C</p>
      <p>Night: {temp_night}&deg;C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind_speed} mph</p>
    </div>
  )
}

export default DailyWeather
