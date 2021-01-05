const express = require("express");
const session = require('express-session');
const fetch = require("node-fetch");
const config = require("config");
const PORT = config.get("port");
const client_id = config.get("TALENT_CLIENT_ID");
const client_secret = config.get("TALENT_CLIENT_SECRET");
const redirect_uri = config.get("REDIRECT_URI");
const authorizationUri = config.get("AUTHORIZATION_ENDPOINT");
const tokenUri = config.get("TOKEN_ENDPOINT");

const app = express();

app.get("/login/talent", (req, res) => {
  res.redirect(`${authorizationUri}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`);
});

async function getAccessToken({ code, client_id }) {
  const request = await fetch(tokenUri,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`
    }
  );

  const text = await request.text();
  const params = JSON.parse(text);
  return params["access_token"];
}

async function fetchTalentUser(token) {
  const request = await fetch("https://talent.kruzhok.org/api/user/", { headers: { Authorization: "Bearer " + token } });

  const text = await request.text();
  const params = JSON.parse(text);
  return params;
}

app.get("/", async (req, res) => {
  const code = req.query.code;
  const access_token = await getAccessToken({ code, client_id });
  const user = await fetchTalentUser(access_token);

  if (access_token !== undefined) {
    // req.session.access_token = access_token;
    res.send('user ' + String(user));
    // req.session.talentId = user.id;
    // res.redirect("/admin");
  } else {
    res.send("Login did not succeed!");
  }
});

app.get("/admin", async (req, res) => {
  if (req.session && req.session.talentId === 43538)
    res.send("Hello Bogdan <pre>" + JSON.stringify(req.session, null, 2));
  else
    res.redirect("/login/talent");

});

app.get("/logout", (req, res) => {
  if (req.session) req.session = null;
  res.redirect("/");
});

app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT + "/login/talent"));