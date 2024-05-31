const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const secret = 'secret';
app.use(bodyParser.json());
app.use(cookieParser(secret));
app.get('/cookie', (req, res) => {
  res
    .cookie('token', 'xdcgfvhkjfrytg27fe25', { signed: true})
    .send();
});
app.get('/', (req, res) => {  
  res.send(req.signedCookies);
  console.log(req.signedCookies);
});
app.listen(3000);