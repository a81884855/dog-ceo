const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public/`));

app.get("/api/breed", (req, res) => {
  axios.get('https://dog.ceo/api/breeds/list/all')
    .then(function(data){
      breeds = data.data.message;
      res.json(breeds)
    });
  });

app.get("/api/image/:breed", (req, res)=>{
  axios.get(`https://dog.ceo/api/breed/${req.params.breed}/images`)
    .then(function(data){
      image = data.data.message;
      res.json(image)
    });
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});