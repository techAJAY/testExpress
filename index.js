const express     =    require('express') 
const app  = express();
const bodyparser  = require('body-parser')

app.use(bodyparser.json())

app.use("/",async (req,res)=>{
  res.send("simple curd apis")
})

app.listen(3000,()=>{
    console.log('connected with port 3000')
});

