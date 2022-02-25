

  const express = require('express');
  const lolrouter = express.Router();
  const path = require('path');
  
  

  app.get('/:temp/:hum/:flag/:nowdate/:key', (req, res) => {
      
    if (req.params.key = ""){

            const fs = require('fs')
            const dataJson = {
                temperature: req.params.hum,
                humidity: req.params.temp,
                flag: req.params.flag,
                date: req.params.nowdate
            }
            const jsonString = JSON.stringify(dataJson)
            fs.writeFile('./data.json', jsonString, err => {
                if (err) {
                    console.log('Error writing file', err)
                } else {
                    console.log('Successfully wrote file')
                }
            })
        }
        else{
            res.json({"error":"invalid-api-key"})
            res.responseCode(511)
        }
  });


  //Rotas de entrega HTML
  

  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
  });
  //Rotas para receber requests API
  
  
  
  module.exports = lolrouter;