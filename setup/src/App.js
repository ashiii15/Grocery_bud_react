import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState("")
  const [list,setList] =useState([])
  const[isEdit,setIsedit] = useState(false)
  const [alert,setAlert] = useState({
    show :false,
    message : "",
    type : ''
  })
  const submitHandler = (e)=>{
    e.preventDefault()
    if(!name){
      showAlert(true,'please enter a valid item','danger')
    }
    else if(name && isEdit){
      // deals with edit
    }
    else{
      // display alert
      const newItem = {id:new Date().getTime().toString(),title:name}
      setList([...list,newItem])
      setName('')

    }
  }
  const showAlert = (show=false,message='',type='')=>{
    setAlert({show,message,type})
  }
  return (<section className='section-center'>
    <form className='grocery-form' onSubmit={submitHandler}>
      {alert.show && <Alert {...alert}removeAlert = {showAlert}></Alert>}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
        <input className='grocery' type='text' onChange={(e)=>setName(e.target.value)} value={name} placeholder='e.g eggs'></input>
        <button className='submit-btn'>{isEdit?`edit`:`submit`}</button>
      </div>
      </form>
      {list.length > 0 && 
      <div className='grocery-container'>
      <List values={list}></List>
      <button className='clear-btn'>clear items</button>
      </div>
      }
        
      
     

  </section>)
}

export default App
