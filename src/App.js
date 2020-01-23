import React, {useState, useEffect} from 'react';
import './App.css';
import asyncHi, {cbHi}  from './test'

function App() {

  const [loaded, setLoaded] = useState(false)
  const [result, setResult] = useState()
  const [reload, setReload] = useState()

  useEffect( () => {
    console.log('I am the single one and only asyn call')
    asyncHi( res => {} )
    .then( res => {
      setResult(res)
      setLoaded(true)
    }) 
    cbHi( res => console.log(res) )
  },[reload])

  useEffect(()=>{
    console.log('the second side - i run when result is changed')
  }, [result])

  return (
    <>
    {
      loaded
        ?
        <>
        <img style={{width:'200px',padding:'20px'}} src={result.message} alt='ff' />
        <button onClick={()=>setReload(!reload)}>hit render</button>
        </>
        :
        <h2>loading...</h2> 
    }
    </>
  )
}

export default App;
