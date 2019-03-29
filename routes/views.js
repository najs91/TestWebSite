function routes(app) {
    app.get('/GermanAutos', index);
}

function index(req, res){
    res.status(200).render('../views/index', {title: 'German Autos'});
}

module.exports = routes;