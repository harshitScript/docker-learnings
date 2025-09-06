import { useEffect, useState } from 'react'
import './App.css'
import { getApiPath } from './utils';

function App() {
  const [description, setDescription] = useState('Not Fetched');
  useEffect(() => {
    fetch(getApiPath('/description'))
      .then((rawJson) => rawJson.json())
      .then((res) => {
        setDescription(res.message)
      }).catch(error => {
        console.log(`Error while fetching description: ${error.message}`)
      })
  }, [])
  return (
    <>
      <h1>Docker 🐳</h1>
      <h3>Multi Container application [Docker Compose]</h3>
      <code style={{ background: 'lightgray', padding: "0.5rem", borderRadius: "0.5rem" }}>{description}</code>
    </>
  )
}

export default App
