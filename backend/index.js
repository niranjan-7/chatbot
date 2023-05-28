const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put('https://api.chatengine.io/users/',{username:username,secret:username,first_name:username},{headers:{"private-key":"4bcbc11a-62ed-4957-846d-1e17b1440523"}})
    console.log(r)
    return res.status(r.status).json(r.data)
  }
  catch(e){
    return "crash"
  }
});

app.listen(3001);