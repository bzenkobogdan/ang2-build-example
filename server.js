var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

if(process.env.NODE_ENV !== 'production') {
    (require('./dev-server.js'))(app);
}

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});