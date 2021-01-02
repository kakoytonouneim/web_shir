const express = require('express')
const config = require('config')

const app = express()
const PORT = config.get('port') || 9000

const b = 0
const client_id = config.get('talent_client_id')
const client_secret = config.get('talent_client_secret')

console.log({client_id, client_secret})
app.get('/', (req, res)  => {
   
})

app.get("/login", (req, res) => {
    const redirect_uri = "http://localhost:9000/api/return"
    res.redirect(
      `https://talent.kruzhok.org/oauth/authorize/?response_type=code\&client_id=${client_id}\&redirect_uri=${redirect_uri}`
    );
  });

app.get('/api/return', async (req, res) => {
  res.redirect(
    `http://localhost:9000/account`
  )
})

app.get("/account", async (req, res) => {
    res.send("А тут переадресация на account js, но нужен Мишаа")

})

app.listen(PORT, () => console.log('Listening http://localhost:' + PORT))