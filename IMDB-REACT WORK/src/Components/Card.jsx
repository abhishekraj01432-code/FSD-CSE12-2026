import React from 'react'

function Card({data}) {
  return (
    <div style={{padding :'5px',margin:'3px', border: '3px solid white',height:'400px',width:'300px',backgroundColor:'aqua',borderRadius : '15px'}}>
      <img src={data.pic} height={300} width={200} style={{borderRadius: '2px'}}></img>
        <h2 style={{color :  'black'}}>Rating : {data.Rating}</h2>
        <h2 style={{color :  'black'}}>Name : {data.Name  }</h2>
   
   
   
   
   
    </div>
  )
}

export default Card
