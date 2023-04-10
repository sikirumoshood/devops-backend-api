const {router} = require('./route')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/api/v1', router)


app.listen(4000, () => {
  console.log('::: Backend api server running on port 4000')
})

