const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const authRouter = require('./routers/authRouter')

const PORT = process.env.PORT || 8080
const PASSWORD = `97bw9YqFABUPpB9`

const app = express()

app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)


const start = async () => {
  try {
    await mongoose.connect(`mongodb+srv://admin:${PASSWORD}@kanban-desk.1cwt0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch(e) {
    console.log(e);
  }
}

start()