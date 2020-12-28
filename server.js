import express from "express";


const app = express();

const client_id = process.env.TALENT_CLIENT_ID;
const client_secret = process.env.TALENT_CLIENT_SECRET;
console.log({ client_id, client_secret });



app.get("/", (req, res) => {
  res.sendFile(__dirname +'/public/index.html');
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


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("Listening on localhost:" + PORT));