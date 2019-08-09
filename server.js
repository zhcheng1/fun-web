const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'web/dist')))

app.get('*', (req, res) => {
	res.sendfile(path.join(__dirname = 'web/dist/index.html'))
});


const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);