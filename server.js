import express, { req, res, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';

import { router } from './src/routes'

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use((Error, req, res) => {
  if(err instanceof Error){
    // Se for uma instancia do tipo error
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})

app.listen(3333, () => console.log('Server Online!'))