"use strict";
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/api/conf', (req, res) => {
    let conf = req.body.conf;
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});