const express = require('express');

const config = require('config');
const client_id = config.get('TALENT_CLIENT_ID');
const client_secret = config.get('TALENT_CLIENT_SECRET');
console.log({client_id, client_secret});

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/login", (req, res) => {
    const redirect_uri = "http://localhost/api/return";
    res.redirect(
        `https://talent.kruzhok.org/oauth/authorize/?response_type=code\&client_id=${client_id}\&redirect_uri=${redirect_uri}`
    );
});


app.get("/api/return", async (req, res) => {
    res.send("Ты авторизовался блинб!!!");
});


const PORT = config.get('port');
app.listen(PORT, () => console.log("Listening on localhost:" + PORT));
