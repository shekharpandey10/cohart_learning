import express from 'express'
import { Client } from 'pg'
const pgClient = new Client(
  'postgresql://neondb_owner:npg_ob1kwyupmGF8@ep-long-credit-ad6y71hp-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
)

// console.log(pgClient)
const app = express()
app.use(express.json())

const connectDb = async () => {
  await pgClient.connect()
  console.log('connected....')
  //   const result = await pgClient.query('select * from users;')
  //   console.log(result.rows)
}
connectDb()

app.post('/signup', async (req, res) => {
  const { username, password, email } = req.body
  console.log(username, password, email)
  const response = await pgClient.query(
    `INSERT INTO users (username,email,password) VALUES ('${username}','${email}','${password}')`
  )

  res.json({
    msg: 'You have signed up',
  })
})

app.listen(3000, () => {
  console.log('port 3000')
})
