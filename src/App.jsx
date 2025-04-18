import { useEffect, useState } from 'react'
import  { ExportToExcel } from './excelFile.jsx'

function App() {

  const [ProductData , setProductrpost] = useState([]);
  const [user, setUserpost] = useState([]);
  // product Api 
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => {
        console.log(json),
        setProductrpost(json)
  });

  // User Api 
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json),
        setUserpost(json)

      })

  
    },[])
  
  return (
    <div>
    <ExportToExcel ProductData={ProductData} user={user}  />
    </div>
  )
}

export default App
