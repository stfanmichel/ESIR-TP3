const express = require('express')

const app = express()
const port = process.env.PORT || '3000'

app.get('/users', (req, res) => {
    res
        .status(200)
        .send([
            {
                name: 'Pedro Ramirez',
                login: 'pedro'
            }
        ])
})

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port)