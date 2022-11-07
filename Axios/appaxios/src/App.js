import React, {useEffect, useState} from 'react';
import api from './services/api.js';

function App() {
  const nmuser="Adalberto Piotto"
             
  const [user, setUser]=useState();
  useEffect(()=>{
    api
    .post("/users/ler/",
      {
     nmuser:nmuser
      })
    .then((response)=>{setUser(response.data)
      console.log(response.data);})
    .catch((err)=>{
      console.error("ops! erro "+err);
    })
   
},[]);
 
  return (
<div className="App">
  <p>Usuario:{user?.id}</p>
  <p>Nome:{user?.nomeUser}</p>
</div>
  );
}

export default App;

