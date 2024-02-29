import express from 'express';
import usersRouter from './routes/users.js'
import postsRouter from './routes/posts.js'
import repliesRouter from './routes/replies.js'
import logging from './middleware/logging.js'
import errors from './middleware/errors.js';
import xss from './middleware/xss.js'
import notFound from './middleware/notFound.js';


const app = express();
// change to 8080 from 3000
const port = 8080;

app.use(express.json()) // switching to api
app.use(xss)
app.use(logging.logRequest)

app.use((req, res, next) => {
  req.user = {
    userId: 6,
  };
  next();
});

app.use('/v1/users', usersRouter);
app.use('/v1/posts', postsRouter);
app.use('/v1/replies', repliesRouter);

// Middleware for Errors
app.use(errors.errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`app listening on port: http://localhost:${port}`);
})