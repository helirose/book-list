/**
 * Express app on node server
 * Run with 'node index.js'
 */

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

require('./src/routes/bookRoutes.js') (app);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
