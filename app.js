import express from 'express'

require('dotenv').config()
console.log(process.env);

const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send('ecommerce api')
})

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listenning on ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()