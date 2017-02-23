const path = require('path');
const express = require('express');

const app = express();
const port = (process.env.PORT || 8080);

const indexPath = path.join(__dirname, '../build/index.html');
const filesPath = express.static(path.join(__dirname, '../build/'));
const specsPath= express.static(path.join(__dirname, '../specs/'));
const assetsPath = express.static(path.join(__dirname, '../assets'));

app.use('/', filesPath);
app.use('/specs/', specsPath);
app.use('/assets/', assetsPath);
app.get('*', function (_, res) { res.sendFile(indexPath) });

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
