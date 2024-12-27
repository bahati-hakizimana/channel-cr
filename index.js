// password: bahati2015
// username: bahati 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { Client } = require('pg');
const authRouter = require ('./routers/authRouter');
const postRouter = require('./routers/postRouter')
const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/auth', authRouter);
app.use('api/posts', postRouter);
app.get('/', (req, res) =>{
    res.json({message:"Our app is on good running condition"});
});

app.listen(process.env.PORT, () =>{

    console.log("Our app is running well please");

})

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

client.connect()
.then(() => {
    console.log("You are connected succeccful");
}).catch((err) =>{
    console.log(err);
});