import express from 'express'
import { Client } from 'pg'
const pgClient = new Client(
  'postgresql://neondb_owner:npg_ob1kwyupmGF8@ep-long-credit-ad6y71hp-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
)

// console.log(pgClient)
const app = express()
app.use(express.json())
const INSERT_QUERY_USER = `INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id;`
const INSERT_QUERY_ADDRESS=`INSERT INTO addresses (city,country,pincode,user_id) VALUES($1,$2,$3,$4);`

const connectDb = async () => {
  await pgClient.connect()
  console.log('connected....')
  //   const result = await pgClient.query('select * from users;')
  //   console.log(result.rows)
}
 await connectDb()

app.post('/signup', async (req, res) => {
  const { username, password, email, city, country, pincode } = req.body
  console.log(username, password, email)
  await pgClient.query("BEGIN;")
  const response = await pgClient.query(INSERT_QUERY_USER, [
    username,
    email,
    password,
  ])
  console.log(response.rows[0].id)
  const id=response.rows[0].id
  console.log('start..........')
  const addressResponse=await pgClient.query(INSERT_QUERY_ADDRESS,[city,country,pincode,id])
  console.log('end........')
  await pgClient.query("COMMIT;")
  console.log(addressResponse)
  res.json({
    msg: 'You have signed up',
  })
})

app.get('/metadata',async(req,res)=>{
  const id=req.query.id
  const query=`SELECT users.id, users.username,users.email,addresses.city,addresses.country,addresses.pincode
  FROM users JOIN addresses ON users.id=addresses.user_id
  WHERE users.id=$1`
  const response=await pgClient.query(query,[id])
  console.log(response.rows)
  res.json({
   response: response.rows
  })
})

app.listen(3000, () => {
  console.log('port 3000')
})
