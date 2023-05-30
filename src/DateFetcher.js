import React,{useState} from 'react'

export const DateFetcher = () => {
    let[date,setDate]=useState('Unknown')

    const onhandleClick =()=>{
        
        setDate(new Date().toUTCString())
    }
  return (
    <div>
        <button onClick={()=>onhandleClick()}>Push</button>
        UtC Date:{date}
    </div>
  )
}
