module.exports = function(app) {

    app.get('/', function(req, res) {
        res.json({
            message: 'App running'
        });
    });

    //other routes..
}