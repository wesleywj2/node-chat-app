const path = require('path');
const express = require('express');
let app = express();
const portNum = 3000;
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || portNum;
app.use(express.static(publicPath));

app.get('/',(req,res)=>{
  res.send('ahah');
});

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
