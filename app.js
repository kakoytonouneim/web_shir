const config = require('config');
const client_id = config.get('TALENT_CLIENT_ID');
const client_secret = config.get('TALENT_CLIENT_SECRET');
console.log({client_id, client_secret});

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/client/public/index.html');
});

app.get("/login", (req, res) => {
    const redirect_uri = 'http://localhost:3001/api/return';
    const redirectLink = `https://talent.kruzhok.org/oauth/authorize/?response_type=code\&client_id=${client_id}\&redirect_uri=${redirect_uri}`;

    res.redirect(redirectLink);
    console.log(redirectLink);
});


app.get("/api/return", async (req, res) => {
    res.send("Ты авторизовался!!!");
});


const PORT = config.get('port');
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT));
