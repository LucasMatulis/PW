import React, {useEffect, useState} from 'react';
import api from './services/api.js';

function App() {
  var nmuser="Lucas"
  var id="1a76cf8f-5418-4bdc-8c52-ce84dce542cf"
             
  const [user, setUser]=useState();
  useEffect(()=>{
    api
    .post("/users/ler",
      {
     nmuser:nmuser,
     id:id
      })
    .then((response)=>{setUser(response.data)
      console.log(response.data);})
    .catch((err)=>{
      console.error("ops! erro "+err);
    })
   
},[]);
 
  return (
<div className="App">
  <p>Usuario:{id}</p>
  <p>Nome:{nmuser}</p>
</div>
  );
}

export default App;
