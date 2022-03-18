/**
 * Express app on node server
 * Run with 'node index.js'
 */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

require('./src/routes/bookRoutes.js') (app);

require('./src/config/database.js');

app.listen(port, () => {
    console.log(`listening on ${port}`);
});