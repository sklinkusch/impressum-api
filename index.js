const express = require('express');
const app = express();
const port = 3000;
const { impressum, datenschutz } = require('./data');
const { min_timestamp: timestamp } = require('./timestamp/');

app.get('/timestamp', (req, res) => res.json({ timestamp }));
app.get('/impressum', (req, res) => res.json(impressum));
app.get('/datenschutz', (req, res) => res.json(datenschutz));

app.listen(port, () => console.log(`API listening on port ${port}`));
