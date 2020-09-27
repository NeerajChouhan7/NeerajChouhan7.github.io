const express = require("express")
var port = 4567 || 3969;
var app = express()


app.set('view engine', 'html');
app.use('/public', express.static('public'));


app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html")
})
app.get('/connect', (req, res) => {
    res.sendFile(__dirname + "/socials.html")
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})