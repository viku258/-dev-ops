const express = require('express');
const os = require('os');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
  res.send({ username: os.userInfo().username });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Application is running',
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on port ${PORT}!`);
});
