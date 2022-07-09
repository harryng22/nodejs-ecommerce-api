const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const start = async  () => {
    try {
        app.listen(port, console.log(`Server is listenning on ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()