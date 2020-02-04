import React from 'react'

const Config = {
  API_URL: 'https://localhost:5001/',
}
if (process.env.NODE_ENV === 'production') {
  Config.API_URL = 'https://wgs-watchdog.herokuapp.com/'
}
export default Config
