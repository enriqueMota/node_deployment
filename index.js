import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import router from './routes/index.js';
import cors from 'cors';
// import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
console.log(process.env.DB_URL)


// crear el servidor
const app = express();

// Whitelisting cors
const whitelist = ['http://localhost:300'];
const cors_options = {
     origin: (origin, callback) => {
          const existe = whitelist.some(dominio => dominio === origin);
          if (existe) {
               callback(null, true)
          } else {
               callback(new Error('Thou shall not pass'))
          }
     }
}

// Habilitar cors
app.use(cors());
// app.use(cors(cors_options));

// habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// habilitar routing
app.use('/', router);

// Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
});

// leer local host
const host = process.env.HOST || '0.0.0.0';

// leer puerto
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
     console.log(`Server is running on port: ${port} and hosted by ${host}`);
})
