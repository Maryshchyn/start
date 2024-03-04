
// live_Da4dJ7HpVF3zfxl8TM3Pfs1iMokDIGz54GheiwPQVmIRS8yP3abnmO3QkkehqEqh


//  https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME

import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_Da4dJ7HpVF3zfxl8TM3Pfs1iMokDIGz54GheiwPQVmIRS8yP3abnmO3QkkehqEqh";
const select = document.querySelector('.breed-select');

axios.get('https://api.thecatapi.com/v1/breeds')
  .then( ({data})=> {
    console.log(data);
    // return data.map(el=> console.log(el));
  })
  .catch((error)=> 
    console.log(error)
  )
  