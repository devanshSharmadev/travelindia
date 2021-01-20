import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import {Data} from './data'
import './index.css'
console.log(Data)
function ncard(val){
  return(
<Card 
    imgsrc={val.imgsrc}
    name={val.name}
    state={val.state}
    link={val.info}
    />

  )
}
ReactDOM.render(
  <React.Fragment>
    <h1 className="heading">Top 5 places to travel in India</h1>
    {Data.map(ncard)}
  </React.Fragment>

  ,document.getElementById('root'))