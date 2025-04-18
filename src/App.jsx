import { useEffect, useState } from 'react'
import  { ExportToExcel } from './excelFile.jsx'

function App() {

  const [userData , setUserpost] = useState([]);
  
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => {
        console.log(json),
        setUserpost(json)
  })
      },[])

  
  
   
  return (
    <div>
    <ExportToExcel userDetail={userData}  />
    </div>
  )
}

export default App
