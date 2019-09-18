const express = require('express');
const app = express();
const port = 3000;
const { impressum, datenschutz } = require('./data');
const { max_timestamp: timestamp } = require('./timestamp/');

app.get('/timestamp', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  return res.json({ timestamp });
});
app.get('/impressum', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  return res.json(impressum);
});
app.get('/datenschutz', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  return res.json(datenschutz);
});

app.listen(port, () => console.log(`API listening on port ${port}`));
