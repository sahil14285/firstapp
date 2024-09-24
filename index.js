const express = require('express');
//import express from 'express';

const app = express();

app.get('/greet', (req, res) => {

  res.send({hi: 'Hey there'});

});

const PORT = process.env.PORT || 5000;
app.listen(PORT);