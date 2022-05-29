const userRoutes = (app, fs) => {
    const dataPath = './db/transactions.json'

    // READ
    app.get('/transactions', (req, res) => {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) {
                throw err
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = userRoutes;