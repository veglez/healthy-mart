import "reflect-metadata"
import express from 'express'
import startDBConnection from './db'
import { CategoryRouter, ProductRouter, UserRouter } from './routes'

console.log("developing mode works")
const app = express()


//middleware to get the body parsed as json
app.use(express.json())

// Routes
app.use("/users", UserRouter)
app.use("/products", ProductRouter)
app.use("/category", CategoryRouter)


startDBConnection()

const PORT = 5000
app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`)
})
