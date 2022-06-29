const userRoutes = (app, fs) => {
    const transactionsDataPath = './db/transactions.json'
    const usersDataPath = './db/users.json'

    // READ
    app.get('/transactions', (req, res) => {
        fs.readFile(transactionsDataPath, 'utf-8', (err, data) => {
            if (err) {
                throw err
            }
            res.send(JSON.parse(data));
        })
    })

    app.get('/users', (req, res) => {
        fs.readFile(usersDataPath, 'utf-8', (err, data) => {
            if (err) {
                throw err
            }
            res.send(JSON.parse(data));
        })
    })
}

module.exports = userRoutes;