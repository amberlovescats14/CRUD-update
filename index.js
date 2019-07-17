const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const Music = require('./routes/Music')
const cors = require('cors')
// import cookieParser 
const app = express();
app.use(cors())

require('dotenv').config()

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
const uri = process.env.MONGOOSE
mongoose.connect(uri,{ useNewUrlParser: true } )
const connection = mongoose.connection;
connection.once('open', ()=> console.log(`MongoDB connection established!`))
// mongoose.createConnection("mongodb://localhost/checkpoint2", { useNewUrlParser: true });
app.use(bodyParser.json())
app.use(cookieParser())

// app.get('/', (req, res) => {
//   return res.send( `Hello World`)
// })
app.use('/music', Music)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});