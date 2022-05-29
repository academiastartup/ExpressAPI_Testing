const transactionsRoutes = require('./transactions');

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('welcome to our test API')
    })

    transactionsRoutes(app,fs);

};

module.exports = appRouter;