const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log("Send")
});


const routeGet = require('./route.js')
app.use(routeGet);



/*
app.use(express.json())
app.post('/test',(req, res) =>{
  res.json(req.body)
  console.log(req.body)
})
*/

app.listen(3000, () => {
  console.log('server started');
});
