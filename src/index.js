const express = require('express');
const app = express();

//settings
app.set('port', 3000);

// middlewares

// routes


// static files

//listening server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});