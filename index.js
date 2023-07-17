const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;

app.post('/register', (req, res) => {
    console.log(req.body)
    res.json({ status: 'ok' });
  });

app.listen(port, ()=>{
    console.log(`house hunter serve is runing on ${port}`)
})