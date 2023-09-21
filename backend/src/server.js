import express from 'express';
import cors from 'cors';
import databaseConnection from '../database/db.js';
import routes from './routes.js';
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });  
  app.use(cors());
  app.use(routes);
databaseConnection();

export default app;
