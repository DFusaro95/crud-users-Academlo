const express = require('express');
const userRouter = require('./users/users.router');
const db = require('./utils/database');
const app = express();
const port = 9200;

app.use(express.json());

db.authenticate()
  .then(() => {
    console.log('Database Authenticated succesfully')
  })
  .catch((err) => {
    console.log(err)
  });

db.sync()
  .then(() => {
    console.log('Database Synced succesfully')
  })
  .catch((err) => {
    console.log(err)
  });

app.use('/api/v1', userRouter);

app.get('/', (req, res) => {
  res.status(200).json({message: 'OK'})
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
});
