const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, skala-devops CI Pipeline!');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'skala-devops',
    time: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

module.exports = app;