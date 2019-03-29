const express = require('express');
const bodyParser = require('body-parser');
const swig = require('swig');
const views = require('./routes/views');

const port = 3000;
const app = express();
const parser = bodyParser.json();
const engine = swig.Swig();

app.use(parser);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.use('/', express.static('public'));
app.use(nocache);

views(app);

app.listen(port, "localhost", () => {console.log(`Server running on port ${port}`)});

function nocache(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next();
}
