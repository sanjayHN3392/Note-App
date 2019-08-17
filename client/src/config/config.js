

import Axios from 'axios';

// Axios.defaults.baseURL = "https://vnoteapp.herokuapp.com" ;
let axios
if(window.location.hostname === 'localhost'){
  axios = Axios.create({
    baseURL: "http://localhost:3006"
  });
}else{
  axios = Axios.create({
    baseURL: "https://snote-app.herokuapp.com"
  });
}

export default axios