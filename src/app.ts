import express from 'express';
import usersRouter from './routes/users.js'
import logging from './middleware/logging.js'
import errors from './middleware/errors.js';
import xss from './middleware/xss.js'


const app = express();
const port = 3000;

app.use(express.json()) // switching to api
app.use(xss)
app.use(logging.logRequest)
app.use(errors.errorHandler);

app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`app listening on port: http://localhost:${port}`);
})