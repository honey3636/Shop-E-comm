const express = require("express")
require("./connect");
const cors = require('cors');
const signup = require('./signup1');

const app = express();
app.use(cors());
app.use(express.json());

//getting all data from data base 
app.get("/create", async (req, resp) => {

    let result = await signup.find();
    console.log(result);
    resp.send(result);

});


app.get('/check', async (req, res) => {
    const { email, password } = req.query;
    
    try {
      const user = await signup.findOne({ email, password });
      
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

// app.post("/signups", async (req, resp) => {
//     let data = new signup(req.body);
//     let result = await data.save();
//     console.log(result);
//     resp.send(result);

// });

app.post("/signups", async (req, resp) => {

    try {
        let data = new signup(req.body);
        let result = await data.save();
        console.log(result);
        resp.send(result);
    } catch (error) {
        console.error('Error saving signup:', error);
        resp.status(500).send('Internal Server Error');
    }
});


app.listen(3000);
