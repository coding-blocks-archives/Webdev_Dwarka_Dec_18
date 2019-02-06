const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
/**
 * express.static 
 * @function - It delievers static resources
 * @param {public dir path}
 * @param {__dirname} - It is the currect directory path of server.js
 */
app.use('/',express.static(path.join(__dirname,'public')));
    

app.listen(port, () => console.log(`Listening at ${port}`));