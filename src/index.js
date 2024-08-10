const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const setupAndStartServer = async () => {

    // Create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extendesc: true}));

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        
    });
}

setupAndStartServer();
