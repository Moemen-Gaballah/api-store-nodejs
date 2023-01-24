import express, { Request, Response } from 'express'
import dotenv from 'dotenv';
import bcrypt from "bcrypt";
// import registerRouter from './routes/register'
import {registerHandler, loginHandler} from './handlers/authHandler'
// import loginRouter from './routes/login'
import blaRouter from './routes/bla'

import bodyParser from 'body-parser'
dotenv.config()


const PORT = process.env.PORT || 3000;
const address: string = `0.0.0.0:${PORT}`

const app = express();

app.use(bodyParser.json())
// app.use(express.urlencoded());

// app.use('/api/login', loginRouter);

app.post('/api/login', loginHandler);


app.post('/api/register', registerHandler);

// app.use('/api/register', registerRouter);
app.use('/bla', blaRouter);


app.get('/healthz', function (req: Request, res: Response) {
    res.send({status: 'OK'})
})

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(PORT,  () => {
    console.log(`starting app on: ${address}`)
});
