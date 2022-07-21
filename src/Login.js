import {useState, useEffect} from 'react'
import axios from 'axios'

function Login() {

  const [lands, setLands] = useState([])

  useEffect(()=>{
    async function getAllLand(){
      try{

        const lands = await axios.get("http://127.0.0.1:8000/api/land")
        console.log(lands.data)
        setLands(lands.data)

      } catch(error){
        console.log(error)
      }
    }
    getAllLand()
  },[])

  return (

    <div className='Login'>
    <h1> Login-Page</h1>

    {
      lands.map((land,i)=>{
        return(
          <h2 key={i}>{land.location} {land.size} {land.price} </h2>
          )
      })
     }

    </div>
  )
}

export default Login
    
 

