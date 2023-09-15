import express from 'express';
import mailRoutes from './routes/mailRoutes.js';

const app = express();
const port = 3000

app.use(express.json());

app.use('/api', mailRoutes)

app.listen(port, async() => {
  console.log(`Example app listening at http://localhost:${port}`);
});