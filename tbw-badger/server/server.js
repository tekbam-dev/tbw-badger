import express from 'express';
import dotenv from 'dotenv';
import {Pool} from 'pg';


dotenv.config({path:"./config.env"});
// Created express app to
const app = express();



const pool = new Pool({

  connectionString: process.env.DATABASE_URL,
});
  


app.get('/health/db' , async(req,res)=>{
  console.log('inside health db');
 try {
    const result = await pool.query('SELECT NOW() AS time');
    res.json({ connected: true, time: result.rows[0].time });
  } catch (error) {
    console.error('Database query failed:', error.message);
    res.status(500).json({ connected: false });
  }
});


app.get('/test', async(req,res) => {
  console.log('Test')
})


app.get('/users', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, name, email FROM users ORDER BY id'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Could not fetch users:', error.message);
    res.status(500).json({ error: 'Could not fetch users' });
  }
});

//Callback function to console log when new request come to PORT

app.listen(process.env.PORT,() => {
// console.log(process.env.DATABASE_URL);
  

  console.log(`Server is listening at port ${process.env.PORT}`);

})   