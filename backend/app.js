const express = require('express');
const app = express();
const port = 3788;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/auth/callback', (req, res) => {
  const authCode = req.query.code;
  const state = req.query.state;
  
  console.log('Authorization Code:', authCode);
  console.log('State:', state);

  res.send('Authorization code received, you can close this window.');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors()); // This enables CORS for all routes