// password: bahati2015
// username: bahati 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.get('/', (req, res) =>{
    res.json({message:"Our app is on good running condition"});
});

app.listen(process.env.PORT, () =>{

    console.log("Our app is running well please");

})