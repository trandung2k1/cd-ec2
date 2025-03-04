require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const { notFound, errorHandlingMiddleware } = require('./middlewares/errorHandlingMiddleware');
const routes = require('./routes');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// app.use(morgan('combined'));
app.use(helmet());
app.disable('x-powered-by');
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    return res.send('Welcome to the server!');
});
app.get('/about', (req, res) => {
    return res.send('About route');
});
routes(app);
app.use(notFound);
app.use(errorHandlingMiddleware);
app.listen(port, () => console.log(colors.green(`Server listening on http://localhost:${port}`)));
module.exports = app;
